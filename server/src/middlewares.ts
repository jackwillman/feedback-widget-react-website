import { 
	Request, 
	Response, 
	RequestHandler, 
	NextFunction
} from 'express';

import config from './config';
import { ErrorCoded, httpError, passError } from './helpers';
import { Secret, ExpirationStatus, JwtAdapter, Session } from './adapters/jwt';

export const catchErrors = function catchErrorsInControllerMethods(
    controllerMethod : (req : Request, res : Response) => Promise<void>
) {
	const tryCatchFunction : RequestHandler = async function (req, res, next) {
		try {
			await controllerMethod(req, res);
		} catch (error) {
			next(error);
		}
	};

	return tryCatchFunction;
};

export const catchMiddlewareErrors = function catchErrorsInMiddlewareMethods(
    middleware : (req : Request, res : Response, next : NextFunction) => void
) {
	const tryCatchFunction : RequestHandler = function (req, res, next) {
		try {
			middleware(req, res, next);
		} catch (error) {
			next(error);
		}
	};

	return tryCatchFunction;
};

export const handleNotFound : RequestHandler = function handleNotFoundError(req, res, next) {
	passError(404, 'Page not found.', next);
};

export const handleErrorLogging = function logErrorsMiddleware(
	error : ErrorCoded, 
	req : Request, 
	res : Response, 
	next : NextFunction
) {
	res.status(error.httpCode || 500).send({ error : error.message });
};

export const CheckJwtAuthorization = class {
	static jwtAdapter: JwtAdapter;
	constructor(
		jwtAdapter : JwtAdapter
	) {
		CheckJwtAuthorization.jwtAdapter = jwtAdapter;
	};

	static handleDecodeSession (
		req : Request,
		secretKey : Secret
	) {
		const requestHeader = config.token.headerName;
		const requestToken = req.header(config.token.headerName);	
		if (!requestToken) {
			throw httpError(401, `Required ${requestHeader} not found.`);
		}

		const decodeResult = this.jwtAdapter.decodeSession({
			secretKey, 
			sessionToken: requestToken
		});

		if (decodeResult.type === "integrity-error" || decodeResult.type === "invalid-token") {
			throw httpError(401, `Failed to decode or validate authorization token. Reason: ${decodeResult.type}.`);
		}

		const decodedSession = decodeResult.session;

		if (req.query.id !== decodedSession.userId) {
			throw httpError(403, 'You do not have permission to access this resource.');
		}

		return decodedSession;
	};

	static handleSessionExpiration(
		res : Response,
		partialSession : Session,
		secretKey : Secret
	) {
		const expiration : ExpirationStatus = this.jwtAdapter.checkExpirationStatus(partialSession);
		if (expiration === "expired") {
			throw httpError(401, `Authorization token has expired. Please create a new authorization token.`);
		}

		let session: Session;

		if (expiration === "grace") {
			const { token, expires, issued } = this.jwtAdapter.encodeSession({
				secretKey, 
				partialSession
			});
			
			const responseHeader = config.token.renewedHeaderName;
			res.setHeader(responseHeader, token);

			session = {
				...partialSession,
				expires,
				issued
			};
			return session;
		}

		session = partialSession;
		return session;
	};

	execute(
		req : Request, 
		res : Response, 
		next : NextFunction
	) {
		const secretKey = config.secrets.JWT_SECRET;
		if (!secretKey) {
			throw httpError(500, 'Missing Secret Key');
		}
		
		const decodedSession = CheckJwtAuthorization.handleDecodeSession(req, secretKey);

		const session = CheckJwtAuthorization.handleSessionExpiration(
			res,
			decodedSession,
			secretKey
		);
		
		res.locals = {
			...res.locals,
			session
		};
		
		next();
	};
};
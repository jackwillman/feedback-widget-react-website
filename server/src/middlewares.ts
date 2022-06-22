import { 
	Request, 
	Response, 
	RequestHandler, 
	ErrorRequestHandler 
} from 'express';


export const catchErrors = function catchErrorsMiddleware(
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

export const handleNotFound : RequestHandler = function handleNotFoundError(req, res, next) {
	const error : any = new Error('404, Page not found.');
	error.status = 404;
	next(error);
};


export const handleErrorLogging : ErrorRequestHandler = function logErrorsMiddleware(error, req, res, next) {
	res.status(error.status || 500).send(error.message);
};
import { 
    encode, 
    decode, 
    TAlgorithm 
} from "jwt-simple";

import { 
    addHttpCode, 
    httpError, 
    isError 
} from "../../helpers";
import config from "../../config";

import { 
    DecodeSessionData, 
    DecodeResult, 
    EncodeSessionData, 
    JsonWebTokenAdapter, 
    Session 
} from ".";

export const JwtSimpleJwtAdapter = class implements JsonWebTokenAdapter {

    private algorithm : TAlgorithm = "HS512";

    encodeSession(
        { 
            secretKey,
            partialSession
        } : EncodeSessionData
    ) {

        const issued = Date.now();
        const expires = issued + config.token.expirationTime;
        
        const session: Session = {
            ...partialSession,
            issued,
            expires
        };
        const token = encode(session, secretKey, this.algorithm);
    
        return {
            token,
            issued,
            expires
        };
    };

    decodeSession({
        secretKey,
        sessionToken
    } : DecodeSessionData) : DecodeResult {
        let result: Session;

        try {
            result = decode(sessionToken, secretKey, false, this.algorithm);
        } catch (_error) {
            if (!isError(_error)) {
                throw httpError(500, 'Error decoding session. Error is not an instance of the Error object. Error: ' + String(_error));
            }
            
            const error = addHttpCode(401, _error);

            if (error.message === "No token supplied" || error.message === "Not enough or too many segments") {
                return {
                    type : "invalid-token"
                };
            } else if (error.message === "Signature verification failed" || error.message === "Algorithm not supported") {
                return {
                    type : "integrity-error"
                };
            } else if (error.message.indexOf("Unexpected token") === 0) {
                return {
                    type : "invalid-token"
                };
            }

            throw error;
        }

        return {
            type : "valid",
            session : result
        };
    };

    checkExpirationStatus(session: Session) {
        const now = Date.now();
    
        if (session.expires > now) {
            return "active";
        }
    
        const renewalPeriod = session.expires + config.token.renewalPeriod;
    
        if (renewalPeriod > now) {
            return "grace";
        }
    
        return "expired";
    };
};
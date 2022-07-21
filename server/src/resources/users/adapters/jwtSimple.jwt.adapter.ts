import { encode, decode, TAlgorithm } from "jwt-simple";

import { isError } from "../../../helpers";
import { DecodeSessionData, EncodeSessionData, JwtAdapter, Session } from "./jwt.adapter";

export const JwtSimpleJwtAdapter = class implements JwtAdapter {

    private algorithm : TAlgorithm = "HS512";

    encodeSession(
        { 
            secretKey,
            partialSession
        } : EncodeSessionData
    ) {

        const issued = Date.now();
        const fifteenMinutesInMs = 15 * 60 * 1000;
        const expires = issued + fifteenMinutesInMs;
        
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

    decodeSession(
        {
            secretKey,
            sessionToken
        } : DecodeSessionData
    ) {
        let result: Session;

        try {
            result = decode(sessionToken, secretKey, false, this.algorithm);
        } catch (_error) {
            if (!isError(_error)) {
                throw _error;
            }
            const error : Error = _error

            if (error.message === "No token supplied" || error.message === "Not enough or too many segments") {
                return {
                    type: "invalid-token"
                };
            } else if (error.message === "Signature verification failed" || error.message === "Algorithm not supported") {
                return {
                    type: "integrity-error"
                };
            } else if (error.message.indexOf("Unexpected token") === 0) {
                return {
                    type: "invalid-token"
                };
            }

            throw error;
        }

        return {
            type: "valid",
            session: result
        };
    };
};
export type Secret = string;

export interface Session {
    userId : string;
    username : string;
    email : string;
    issued : number;
    expires : number;
};

export interface EncodeSessionData {
    secretKey: Secret;
    partialSession : Omit<Session, "issued" | "expires">;
};

export interface EncodeResult {
    token: string,
    issued: number,
    expires: number,
};

export interface DecodeSessionData {
    secretKey: Secret;
    sessionToken : string;
};

export type DecodeResult = {
    type : "valid";
    session : Session;
} | {
    type : "integrity-error";
} | {
    type : "invalid-token";
};

export type ExpirationStatus = string;

export interface JwtAdapter {
    encodeSession : (encodeSessionData : EncodeSessionData) => EncodeResult;
    decodeSession : (decodeSessionData : DecodeSessionData) => DecodeResult;
    checkExpirationStatus : (session : Session) => ExpirationStatus;
};

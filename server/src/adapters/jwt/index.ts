type UserId = string;
type Username = string;
type Email = string;
type Token = string;
type Issued = number;
type Expires = number;
type Algorithm = string;
export type Secret = string;

export interface Session {
    userId : UserId;
    username : Username;
    email : Email;
    issued : Issued;
    expires : Expires;
};

export interface EncodeSessionData {
    secretKey: Secret;
    partialSession : Omit<Session, "issued" | "expires">;
};

export interface EncodeResult {
    token: Token,
    issued: Issued,
    expires: Expires,
};

export interface DecodeSessionData {
    secretKey: Secret;
    sessionToken : Token;
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

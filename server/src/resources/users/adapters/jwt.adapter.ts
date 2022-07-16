type UserId = string;
type Username = string;
type Email = string;
type Secret = string;
type Token = string;
type Issued = number;
type Expires = number;

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

export interface DecodeResult {
    type: string;
    session?: Session;
}

export interface JwtAdapter {
    encodeSession : (encodeSessionData : EncodeSessionData) => EncodeResult;
    decodeSession : (decodeSessionData : DecodeSessionData) => DecodeResult;
};

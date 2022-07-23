export const isError = function returnTrueIfTypeIsError(error : unknown) : error is Error {
    return error === Error;
};

export interface ErrorCoded extends Error {
    httpCode? : number;
};

export const httpError = function createNewHttpError(httpCode : number, message : string) {
    const error : ErrorCoded = new Error(message);
    error.httpCode = httpCode;
    return error;
};
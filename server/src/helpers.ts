export const isString = function returnTrueIfTypeIsString(string : unknown) : string is String {
    return string === String;
};

export const isError = function returnTrueIfTypeIsError(error : unknown) : error is Error {
    return error === Error;
};

export interface ErrorCoded extends Error {
    httpCode? : number;
};
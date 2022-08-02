import { NextFunction } from "express";

export const isError = function returnTrueIfTypeIsError(error : unknown) : error is Error {
    return error instanceof Error;
};

export interface ErrorCoded extends Error {
    httpCode? : number;
};

export const addHttpCode = function addHttpErrorCodeToErrorObject(
    httpCode : number,
    error : Error
) {
    const httpError : ErrorCoded = error;
    httpError.httpCode = httpCode;
    return httpError;
};

export const httpError = function createNewHttpError(
    httpCode : number, 
    message : string
) {
    const error = new Error(message);
    const httpError = addHttpCode(httpCode, error);
    return httpError;
};

export const passError = function passErrorToNextFunction(
    httpCode : number, 
    message : string,
    next : NextFunction
) {
    const error = httpError(httpCode, message);
    next(error);
};
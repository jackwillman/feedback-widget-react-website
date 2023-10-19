import { httpError } from "../../helpers";

export const getSaltRoundsNumber = function checkIfSaltRoundsIsAValidNumberStringAndReturnNumber(
    saltRounds : any
) {
    if (!saltRounds || typeof saltRounds != 'string' ) {
        throw httpError(500, 'Number of rounds of Salt is invalid.');
    }
    if (!parseInt(saltRounds)) {
        throw httpError(500, 'Number of rounds of Salt is not a number.');
    }
    return parseInt(saltRounds);
};
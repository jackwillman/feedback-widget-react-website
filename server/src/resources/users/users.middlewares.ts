import { body } from 'express-validator';

export const sanitize = {
	username : body('username').
				optional().
				trim().
				blacklist('{}@').
				escape(),
	email : body('email').
				optional().
				trim().
				blacklist('{}').
				isEmail().
				normalizeEmail()
};
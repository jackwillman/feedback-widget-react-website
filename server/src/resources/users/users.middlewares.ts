import { body } from 'express-validator';

export const validate = {
	username : body('username').
				optional().
				trim().
				blacklist('@{}/;').
				escape().
				isLength({min:6, max:20}).
				withMessage('Not A Valid Username. Must have at least 6 characters, and a maximum of 20 characters.'),
	email : body('email').
				optional().
				trim().
				blacklist('{}/;').
				isEmail().
				normalizeEmail().
				withMessage('Not A Valid E-mail Adress. '),
	password : body('password').
				exists().
				notEmpty().
				isLength({min:6, max:20}).
				withMessage('Not A Valid Password. Must have at least 6 characters, and a maximum of 20 characters.'),


};
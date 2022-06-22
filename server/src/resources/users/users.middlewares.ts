import { body } from 'express-validator';

export const sanitize = {
	username : body('username').trim().notEmpty().blacklist('{}').escape(),
	email : body('email').trim().notEmpty().blacklist('{}').isEmail().normalizeEmail()
};
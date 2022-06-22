import { body } from 'express-validator';

export const sanitize = {
	type: body('type').trim().notEmpty().blacklist('{}').escape(),
	comment: body('comment').trim().notEmpty().blacklist('{}').escape(),
};
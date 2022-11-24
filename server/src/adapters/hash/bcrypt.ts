import bcrypt from 'bcryptjs';
import { CheckPasswordData, HashAdapter } from '.';

export const BcryptHashAdapter = class implements HashAdapter {
    async checkPassword({ 
        inputPassword, 
        savedPassword 
    }: CheckPasswordData) {
        const isPasswordValid = await bcrypt.compare(inputPassword, savedPassword);
        return isPasswordValid
    };
};
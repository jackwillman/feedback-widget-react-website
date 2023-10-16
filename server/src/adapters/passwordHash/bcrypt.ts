import bcrypt from 'bcryptjs';

import { 
    CheckPasswordData, 
    HashPasswordData,
    PasswordHashAdapter
} from '.';

export const BcryptHashAdapter = class implements PasswordHashAdapter {
    async checkPassword({ 
        inputPassword, 
        savedPassword 
    } : CheckPasswordData) {
        const isPasswordValid = await bcrypt.compare(inputPassword, savedPassword);
        return isPasswordValid
    };
    async hashPassword({
        password,
        saltRounds
    } : HashPasswordData) {
        const salt = await bcrypt.genSalt(saltRounds);
		const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword;
    }
};
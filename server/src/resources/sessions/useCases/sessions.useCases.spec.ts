import config from "../../../config";
import { LoginUseCase } from "./login";

const usersRepositorySpy = {
    getById : jest.fn(), 
    getByUsername : jest.fn(), 
    getByEmail : jest.fn(),
    getAll : jest.fn(),
    create : jest.fn(),
    update : jest.fn(),
    delete : jest.fn()
};

const jwtAdapterSpy = {
    encodeSession : jest.fn(),
    decodeSession : jest.fn(),
    checkExpirationStatus : jest.fn()
};

const hashAdapterSpy = {
    checkPassword : jest.fn()
};

const login = new LoginUseCase(
    usersRepositorySpy,
    jwtAdapterSpy,
    hashAdapterSpy
); 

const secretKey = config.secrets.JWT_SECRET;

describe('Get User', () => {
    it('should be able to get user with username', async () => {
        await expect(login.getUser(
            'joaozinho'
        )).resolves.not.toThrow();

        expect(usersRepositorySpy.getByUsername).toHaveBeenCalled();
    });

    it('should be able to get user with email', async () => {
        await expect(login.getUser(
            'jlrscaini@yahoo.com.br'
        )).resolves.not.toThrow();

        expect(usersRepositorySpy.getByEmail).toHaveBeenCalled();
    });

    it('should not be able to get user without username or email', async () => {
        await expect(login.getUser(
            ''
        )).rejects.toThrow();
    });
});

describe('Check Password', () => {
    it('should call hash adapter check password', async () => {
        await expect(login.checkPassword(
            {
                id : 'a87d40fd-19af-414b-a7bc-8baba8104fa9',
                email : 'jlrscaini@yahoo.com.br',
                username : 'joaozinho',
                password : 'joaozinho'
            },
            'joaozinho'
        ));

        expect(hashAdapterSpy.checkPassword).toHaveBeenCalled();
    });
});


describe('Create Session', () => {

    if (!secretKey) {
        return;
    }
    
    it('should be able to create session', async () => {
        await expect(login.createSession(
            {
                id : 'a87d40fd-19af-414b-a7bc-8baba8104fa9',
                email : 'jlrscaini@yahoo.com.br',
                username : 'joaozinho',
                password : 'joaozinho'
            },
            true,
            secretKey
        )).resolves.not.toThrow();
        
        expect(jwtAdapterSpy.encodeSession).toHaveBeenCalled();
    });

    it('should not be able to create session, wrong password', async () => {
        await expect(login.createSession(
            {
                id : 'a87d40fd-19af-414b-a7bc-8baba8104fa9',
                email : 'jlrscaini@yahoo.com.br',
                username : 'joaozinho',
                password : 'joaozinho'
            },
            false,
            secretKey
        )).rejects.toThrow();
    });
});

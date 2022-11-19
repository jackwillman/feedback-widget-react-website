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

const login = new LoginUseCase(
    usersRepositorySpy,
    jwtAdapterSpy
); 

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

describe('Create Session', () => {
    
    it('should be able to create session', async () => {
        await expect(login.createSession(
            {
                id : 'a87d40fd-19af-414b-a7bc-8baba8104fa9',
                email : 'jlrscaini@yahoo.com.br',
                username : 'joaozinho',
                password : 'joaozinho'
            },
            'joaozinho'
        )).resolves.not.toThrow();

        expect(jwtAdapterSpy.encodeSession).toHaveBeenCalled();
    });

    it('should not be able to create session, user does not exist', async () => {
        await expect(login.createSession(
            {
                id : '04e95aa3-dedf-41e9-8a33-154ef699999c',
                email : 'ine@xist.not',
                username : 'inexists',
                password : 'inexists'
            },
            'abc'
        )).rejects.toThrow();
    });

    it('should not be able to create session, empty user', async () => {
        await expect(login.createSession(
            {
                id : '',
                email : '',
                username : '',
                password : ''
            },
            'abc'
        )).rejects.toThrow();
    });

    it('should not be able to create session, wrong password', async () => {
        await expect(login.createSession(
            {
                id : 'a87d40fd-19af-414b-a7bc-8baba8104fa9',
                email : 'jlrscaini@yahoo.com.br',
                username : 'joaozinho',
                password : 'joaozinho'
            },
            'abc'
        )).rejects.toThrow();
    });

    it('should not be able to create session, missing password', async () => {
        await expect(login.createSession(
            {
                id : 'a87d40fd-19af-414b-a7bc-8baba8104fa9',
                email : 'jlrscaini@yahoo.com.br',
                username : 'joaozinho',
                password : 'joaozinho'
            },
            ''
        )).rejects.toThrow();
    });
});


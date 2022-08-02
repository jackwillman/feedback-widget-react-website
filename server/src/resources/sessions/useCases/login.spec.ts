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
            'fausto'
        )).resolves.not.toThrow();

        expect(usersRepositorySpy.getByUsername).toHaveBeenCalled();
    });

    it('should be able to get user with email', async () => {
        await expect(login.getUser(
            'fausto@silva.oloco'
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
    const exampleUser = {
        id : "04e95aa3-dedf-41e9-8a33-154ef628310b",
        email : "fausto@silva.oloco",
        username : "faustinho",
        password : "holanda"
    };

    it('should be able to create session', () => {
        expect(login.createSession(
            exampleUser,
            exampleUser.password
        )).not.toThrow();

        expect(jwtAdapterSpy.encodeSession).toHaveBeenCalled();
    });

    it('should not be able to create session, user does not exist', () => {
        expect(login.createSession(
            {
                id : '04e95aa3-dedf-41e9-8a33-154ef699999c',
                email : 'ine@xist.not',
                username : 'inexists',
                password : 'inexists'
            },
            'abc'
        )).toThrow();
    });

    it('should not be able to create session, empty user', () => {
        expect(login.createSession(
            {
                id : '',
                email : '',
                username : '',
                password : ''
            },
            'abc'
        )).toThrow();
    });

    it('should not be able to create session, wrong password', () => {
        expect(login.createSession(
            exampleUser,
            'abc'
        )).toThrow();
    });

    it('should not be able to create session, missing password', () => {
        expect(login.createSession(
            exampleUser,
            ''
        )).toThrow();
    });
});


import { resolveSoa } from "dns";
import { DeleteUserUseCase } from "./deleteUser";
import { GetAllUsersUseCase } from "./getAllUsers";
import { GetUserUseCase } from "./getUser";
import { SubmitUserUseCase } from "./submitUser";
import { UpdateUserUseCase } from "./updateUser";

const usersRepositorySpy = {
    getById : jest.fn(), 
    getByUsername : jest.fn(), 
    getByEmail : jest.fn(),
    getAll : jest.fn(),
    create : jest.fn(),
    update : jest.fn(),
    delete : jest.fn()
};


const getUser = new GetUserUseCase(usersRepositorySpy);
const getAllUsers = new GetAllUsersUseCase(usersRepositorySpy);
const submitUser = new SubmitUserUseCase(usersRepositorySpy);
const updateUser = new UpdateUserUseCase(usersRepositorySpy);
const deleteUser = new DeleteUserUseCase(usersRepositorySpy);

describe('Get User', () => {
    it('should be able to get user', async () => {
        await expect(getUser.execute({
            userId : 'a87d40fd-19af-414b-a7bc-8baba8104fa9'
        })).resolves.not.toThrow(); 
        
        expect(usersRepositorySpy.getById).toHaveBeenCalled();
    });

    it('should not be able to get user without user ID', async () => {
        await expect(getUser.execute({
            userId : ''
        })).rejects.toThrow(); 
    });

    it('should not be able to get user with a invalid user ID', async () => {
        await expect(getUser.execute({
            userId : 'invalid-id'
        })).rejects.toThrow(); 
    });
});

describe('Get All Users', () => {
    it('should be able to get all users', async () => {
        await expect(getAllUsers.execute()).resolves.not.toThrow(); 

        expect(usersRepositorySpy.getAll).toHaveBeenCalled();
    });
});

describe('Submit User', () => {
    it('should be able to create user', async () => {
        await expect(submitUser.execute({
            username : `user${Math.random() * 100000}`,
            email : `email${Math.random() * 100000}@email.com`,
            password : 'password'
        })).resolves.not.toThrow(); 

        expect(usersRepositorySpy.create).toHaveBeenCalled();
    });

    it('should be not able to create user without username', async () => {
        await expect(submitUser.execute({
            username : '',
            email : `email${Math.random() * 100000}@email.com`,
            password : 'password'
        })).rejects.toThrow(); 
    });

    it('should be not able to create user without email', async () => {
        await expect(submitUser.execute({
            username : `user${Math.random() * 100000}`,
            email : '',
            password : 'password'
        })).rejects.toThrow(); 
    });

    it('should be not able to create user without password', async () => {
        await expect(submitUser.execute({
            username : `user${Math.random() * 100000}`,
            email : `email${Math.random() * 100000}@email.com`,
            password : ''
        })).rejects.toThrow(); 
    });
});

describe('Update User', () => {
    it('should be able to update user', async () => {
        await expect(updateUser.execute({
            userId : '5e815d19-4000-4634-8320-b5cf443a646e',
            email : `newmail${Math.random()*1000}`
        })).resolves.not.toThrow();

        expect(usersRepositorySpy.update).toHaveBeenCalled();
    });

    it('should be able to update the password of a user', async () => {
        await expect(updateUser.execute({
            userId : '5e815d19-4000-4634-8320-b5cf443a646e',
            password : `password${Math.random()*100}`
        })).resolves.not.toThrow();

        expect(usersRepositorySpy.update).toHaveBeenCalled();
    });

    it('should not be able to update user without user ID', async () => {
        await expect(updateUser.execute({
            userId : '',
            email : `newmail${Math.random()*1000}`
        })).rejects.toThrow();
    });

    it('should not be able to update user without email or username or password', async () => {
        await expect(updateUser.execute({
            userId : '5e815d19-4000-4634-8320-b5cf443a646e'
        })).rejects.toThrow();
    });
});

describe('Delete User', () => {
    it('should be able to delete user', async () => {
        
    });
});
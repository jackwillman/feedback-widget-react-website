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
    });
});

describe('Get All Users', () => {
    it('should be able to get all users', async () => {
        await expect(getAllUsers.execute()).resolves.not.toThrow(); 
    });
});

describe('Submit User', () => {
    it('should be able to submit user', async () => {
        await expect(submitUser.execute({
            username : `user${Math.random() * 100000}`,
            email : `email${Math.random() * 100000}@email.com`,
            password : 'password'
        })).resolves.not.toThrow(); 
    });
});

describe('Update User', () => {
    it('should be able to update user', async () => {
        await expect(updateUser.execute({
            userId : '5e815d19-4000-4634-8320-b5cf443a646e',
            email : `newmail${Math.random()*1000}`
        })).resolves.not.toThrow();
    });
});

describe('Delete User', () => {
    it('should be able to delete user', async () => {
        
    });
})
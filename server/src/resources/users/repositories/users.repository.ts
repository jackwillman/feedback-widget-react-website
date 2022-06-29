type UserId = any;
type Username = string;
type Email = string;
type Password = string;

export interface UserIdData {
    userId : UserId
};

export interface UserInputData {
    username : Username;
    email : Email;
    password: Password;
};

export interface UserUpdateData {
    userId : UserId,
    username? : Username;
    email? : Email;
    password?: Password;
};

export interface UsersRepository {
    get : (userIdData : UserIdData) => Promise<any>;
    getAll : () => Promise<any>;
    create : (data : UserInputData) => Promise<void>;
    update : (userUpdateData : UserUpdateData) => Promise<void>;
    delete : (userId : UserIdData) => Promise<void>;
};
export type Id = string;
export type Username = string;
export type Email = string;
export type Password = string;

export interface User {
    id : Id;
    username : Username;
    email : Email;
    password: Password;
};

export type UserSelectedData = Omit<User, "id" | "password">;
export type UserSelectedDataList = Record<Id, UserSelectedData>;
export type UserInputData = Omit<User, "id">;

export interface UserUpdateData extends Partial<UserInputData> {
    id : Id,
};

export interface UsersRepository {
    getById : (id : Id) => Promise<User | null>;
    getByUsername : (username: Username) => Promise<User | null>;
    getByEmail : (email : Email) => Promise<User | null>;
    getAll : () => Promise<User[] | null>;
    create : (userInputData : UserInputData) => Promise<void>;
    update : (userUpdateData : UserUpdateData) => Promise<void>;
    delete : (id : Id) => Promise<void>;
};
export interface UserCreateData {
    username : string;
    email : string;
    password: string;
};

export interface UsersRepository {
    create : (data : UserCreateData) => Promise<void>;
};
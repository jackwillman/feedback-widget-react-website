export type IsPasswordValid = boolean;

export interface CheckPasswordData {
    inputPassword : string;
    savedPassword : string;
};

export interface HashPasswordData {
    password : string;
    saltRounds : number;
};

export interface HashAdapter {
    checkPassword : (data : CheckPasswordData) => Promise<IsPasswordValid>;
    hashPassword : (data : HashPasswordData) => Promise<string>;
};
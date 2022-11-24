export type IsPasswordValid = boolean;

export interface CheckPasswordData {
    inputPassword : string;
    savedPassword : string;
};

export interface HashAdapter {
    checkPassword : (data : CheckPasswordData) => Promise<IsPasswordValid>;
};
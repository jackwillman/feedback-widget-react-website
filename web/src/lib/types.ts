export type ExistingPage = 
    'Home' | 
    'About' | 
    'Dashboard' | 
    'Login' | 
    'Signup' | 
    'AccountCreated' | 
    'LogOut' |
    'AccountDeleted'
;
export type SetCookie = (name : string, value : any, options?: any) => void;
export type CookiesType = { [x: string] : any };
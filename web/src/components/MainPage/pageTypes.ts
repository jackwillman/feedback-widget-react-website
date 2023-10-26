export type ExistingPage = 
    'About'     
    | 'AccountCreated' 
    | 'AccountDeleted' 
    | 'Dashboard'
    | 'Home'        
    | 'Login'
    | 'LogOut'
    | 'Signup'
;
export type SetCookie = (name : string, value : any, options?: any) => void;
export type CookiesType = { [x: string] : any };
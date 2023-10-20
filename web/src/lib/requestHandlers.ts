import api from './api';
import config from './config';
import {
    ExistingPage,
    CookiesType,
    SetCookie
} from './types';

interface SignupHandlerProps {
    setIsSendingSignupInput : (isSendingSignupInput : boolean) => void;
    setSignupError : (signupError : string) => void;
    setCurrentPage: (currentPage: ExistingPage) => void
    username: string, 
    userEmail: string, 
    userPassword: string, 
};

interface HandleGetUserProps {
    setIsUserGotten : (isGettingUser : boolean) => void;
    setUpdateError : (userError : string) => void;
    setUserEmail : (userEmail : string) => void;
    setUsername : (username : string) => void;
    cookies : CookiesType;
};

interface UpdateUserHandlerProps {
    setIsSendingNewUserData : (isSendingNewUserData : boolean) => void;
    setUpdateSuccess : (updateSuccess : boolean) => void;
    setUpdateError : (updateError : string) => void;
    setNewUsername : (newUsername : string) => void;
    setNewUserEmail : (newUserEmail : string) => void;
    setNewUserPassword : (newUserPassword : string) => void;
    newUsername : string;
    username : string;
    userEmail : string;
    newUserEmail : string;
    userPassword : string;
    newUserPassword : string;
    cookies : CookiesType;
};

interface LoginHandlerProps {
    setIsSendingLoginInput : (isSendingLoginInput : boolean) => void;
    setLoginError : (loginError : string) => void;
    setIsLoggedIn : (isLoggedIn : boolean) => void;
    setCurrentPage : (currentPage : ExistingPage) => void;
    setCookie : SetCookie;
    userIdentifier : string;
    userPassword : string;
};

export const signupHandler = function logicToHandleUserSignup(
    {
        setIsSendingSignupInput,
        setSignupError, 
        username, 
        userEmail, 
        userPassword, 
        setCurrentPage
    } : SignupHandlerProps

) {
    setIsSendingSignupInput(true);
    setSignupError('');

    api.post(config.path.users, {
        username,
        email: userEmail,
        password: userPassword,
    }).then((response) => {
        setCurrentPage('AccountCreated');

    }).catch((error) => {

        if (error.response) {
            console.log(error.response.data);
            if (error.response.data.errors) {
                const errorArray = error.response.data.errors;
                let errorMessage = 'Error! ';
                let i = 0;
                while (i < errorArray.length) {
                    errorMessage += `${errorArray[i].msg} `;
                    i++;
                }
                setSignupError(errorMessage);

            }
            else {
                setSignupError(error.response.data.error);
            }
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log('Error: ', error.message);
            console.log(error);
        }

    }).finally(() => {
        setIsSendingSignupInput(false);
    });
}

export const handleGetUser = function getUserFromServer(
    {
        setIsUserGotten,
        setUpdateError,
        setUserEmail,
        setUsername,
        cookies
    } : HandleGetUserProps
) {
    const tokenHeader = config.sessionToken.headerName;
    const sessionToken = cookies[config.sessionToken.cookieName];
    const userId = cookies[config.user.id.cookieName];

    setIsUserGotten(false);
    setUpdateError('');
    setUserEmail('');
    setUsername('');

    api.get(config.path.user, { 
        params : {
            id : userId
        },
        headers : {
            [tokenHeader] : sessionToken
        }

    }).then((response) => {
        setUsername(response.data[config.user.username]);
        setUserEmail(response.data[config.user.email]);
        
    }).catch((error) => {
        if (error.response) {
            console.log(error.response.data);
            setUpdateError(error.response.data.error);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log('Error: ', error.message);
        }

    }).finally(() => {
        setIsUserGotten(true);
    });
};

export const updateUserHandler = function logicToUpdateUserOnServer(
    {
        setIsSendingNewUserData,
        setUpdateError,
        setUpdateSuccess,
        setNewUsername,
        setNewUserEmail,
        setNewUserPassword,
        username,
        newUsername,
        userEmail,
        newUserEmail,
        userPassword,
        newUserPassword,
        cookies
    } : UpdateUserHandlerProps
) {
    const tokenHeader = config.sessionToken.headerName;
    const sessionToken = cookies[config.sessionToken.cookieName];
    const userId = cookies[config.user.id.cookieName];

    setIsSendingNewUserData(true);
    setUpdateError('');
    setUpdateSuccess(false);

    if (!newUsername) {
        setNewUsername(username);
    }

    if (!newUserEmail) {
        setNewUserEmail(userEmail);
    }

    if (!newUserPassword) {
        setNewUserPassword(userPassword);
    }

    api.put(config.path.user, {
        username : newUsername,
        email : newUserEmail,
        password : newUserPassword
    }, { 
        params : {
            id : userId
        },
        headers : {
            [tokenHeader] : sessionToken
        }
    }).then((response) => {
        setUpdateSuccess(true);
    }).catch((error) => {
        if (error.response) {
            if (error.response.data.errors) {
                const errorArray = error.response.data.errors;
                let errorMessage = 'Error! '
                let i = 0;
                
                while (i < errorArray.length) {
                    errorMessage += `${errorArray[i].msg} `;
                    i++;
                }
                setUpdateError(errorMessage);
                
            }
            else {
                setUpdateError(error.response.data.error);
            }
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log('Error: ', error.message);
            console.log(error);
        }
    }).finally(() => {
        setIsSendingNewUserData(false);
    });
};

export const loginHandler = function logicToSubmitLoginInput(
    {
        setIsSendingLoginInput,
        setLoginError,
        setIsLoggedIn,
        setCurrentPage,
        setCookie,
        userIdentifier,
        userPassword
    } : LoginHandlerProps
) {
    setIsSendingLoginInput(true);
    setLoginError('');

    const userIdentifierType = userIdentifier.includes('@') ? 'email' : 'username';

    api.post(config.path.sessions, {
        [userIdentifierType] : userIdentifier,
        password : userPassword

    }).then((response) => {
        const tokenCookie = config.sessionToken.cookieName;
        const token = response.headers[config.sessionToken.headerName];
        const expirationDate = new Date(Date.now() + config.sessionToken.duration);
        setCookie(tokenCookie, token, {
            path : config.path.main,
            expires : expirationDate
        });

        const userIdCookie = config.user.id.cookieName;
        const userId = response.data[config.user.id.responseName]
        setCookie(userIdCookie, userId, {
            path : config.path.main,
            expires : expirationDate
        });
        setIsLoggedIn(true);
        setCurrentPage('Home');

    }).catch((error) => {
        if (error.response) {
            console.log(error.response.data);
            setLoginError(error.response.data.error);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log('Error: ', error.message);
        }

    }).finally(() => {
        setIsSendingLoginInput(false);
    });
};
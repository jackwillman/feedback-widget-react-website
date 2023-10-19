import api from '../../../../lib/api';
import config from '../../../../lib/config';
import { CookiesType } from '..';

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

const updateUserHandler = function logicToUpdateUserOnServer(
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

    console.log(
        `\n user ID: ${userId}\n`
        )

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

export default updateUserHandler;
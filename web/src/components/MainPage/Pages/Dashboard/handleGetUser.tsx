import api from '../../../../lib/api';
import config from '../../../../lib/config';

import { CookiesType } from '..';

interface HandleGetUserProps {
    setIsGettingUser : (isGettingUser : boolean) => void;
    setUserError : (userError : string) => void;
    setUserEmail : (userEmail : string) => void;
    setUsername : (username : string) => void;
    cookies : CookiesType;
};

const handleGetUser = function getUserFromServer(
    {
        setIsGettingUser,
        setUserError,
        setUserEmail,
        setUsername,
        cookies
    } : HandleGetUserProps
) {
    setIsGettingUser(true);
    setUserError('');
    setUserEmail('');
    setUsername('');

    const tokenHeader = config.sessionToken.headerName;
    
    const sessionToken = cookies[config.sessionToken.cookieName];
    const userId = cookies[config.user.id.cookieName];

    api.get(config.path.user, { 
        params : {
            id : userId
        },
        headers : {
            [tokenHeader] : sessionToken
        }

    }).then((response) => {
        setUsername(response.data[config.user.username]);
        setUserEmail(response.data[config.user.email])
        
    }).catch((error) => {
        if (error.response) {
            console.log(error.response.data);
            setUserError(error.response.data.error);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log('Error: ', error.message);
        }

    }).finally(() => {
        setIsGettingUser(false);
    });
};

export default handleGetUser;
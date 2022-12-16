import { useState } from 'react';

import api from '../../../../lib/api';
import config from '../../../../lib/config';

import { CookiesType } from '..';


import { 
    PageDiv, 
    TextDiv, 
    NormalText,
    BiggerText 
} from '../styled';

interface DashboardProps {
    cookies : CookiesType;
};

const Dashboard = function DashboardPageComponent(
    { cookies } : CookiesType
) {
    const [isGettingUser, setIsGettingUser] = useState(false);
    const [getUserError, setGetUserError] = useState('');

    const handleGetUser = function GetUserFromServer() {
        
        setIsGettingUser(true);
        setGetUserError('');

        const tokenHeader = config.sessionToken.headerName;
        const sessionToken = cookies(config.sessionToken.cookieName);
        const userId = cookies(config.user.id.cookieName);
        
        api.get(config.path.user, { 
            params : {
                id : userId
            },
            headers : {
                [tokenHeader] : sessionToken
            }
        })
            .then((response) => {
                console.log(response);             
            }) 

        /*

        api.post(config.path.sessions, {
            [userIdentifierType] : userIdentifier,
            password : userPassword

        }).then((response) => {
            const token = response.headers[config.sessionToken.headerName];
            const expirationDate = new Date(Date.now() + config.sessionToken.duration);
            setCookie(config.sessionToken.cookieName, token, {
                path : config.path.main,
                expires : expirationDate
            });
            setIsLoggedIn(true);
            setCurrentPage('Home');

        }).catch((error) => {
            if (error.response) {
                console.log(error.response.data);
                setErrorState(error.response.data.error);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error: ', error.message);
            }

        }).then(() => {
            setIsSendingLoginInput(false);
        });
        */
    };
    
    return (
        <PageDiv>
            <TextDiv>
                <BiggerText>
                    On the way
                </BiggerText>
                <NormalText>
                    Import here:
                </NormalText>
            </TextDiv>
        </PageDiv>
    );
};

export default Dashboard;
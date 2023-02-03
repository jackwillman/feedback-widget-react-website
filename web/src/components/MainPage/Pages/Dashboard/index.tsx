import React from 'react';

import { useState } from 'react';

import api from '../../../../lib/api';
import config from '../../../../lib/config';

import Loading from '../../../Misc/Loading';
import { CookiesType } from '..';

import { 
    PageDiv, 
    TextDiv, 
    BiggerText 
} from '../styled';
import { 
    DashboardDiv,
    DashboardText,
    DashboardRightText
 } from './styled';


interface DashboardProps {
    cookies : CookiesType;
};

const Dashboard = function DashboardPageComponent(
    { cookies } : CookiesType
) {
    const [isGettingUser, setIsGettingUser] = useState(false);
    const [getUserError, setGetUserError] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    const handleGetUser = function GetUserFromServer() {
        setIsGettingUser(true);
        setGetUserError('');
        setEmail('');
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
            setEmail(response.data[config.user.email])
            
        }).catch((error) => {
            if (error.response) {
                console.log(error.response.data);
                setGetUserError(error.response.data.error);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error: ', error.message);
            }

        }).finally(() => {
            setIsGettingUser(false);
        });
    };

    React.useEffect(() => handleGetUser());               
    
    return (
        <PageDiv>
            <TextDiv>
                <BiggerText>
                    Dashboard
                </BiggerText>
                <DashboardDiv>
                    {
                        isGettingUser
                            ?
                                <Loading />
                            :
                                username && email
                                    ?
                                        <>
                                            <DashboardText>
                                                Username: 
                                            </DashboardText>
                                            <DashboardRightText>
                                                { username }
                                            </DashboardRightText>
                                            <DashboardText>
                                                <br /> <br />
                                            </DashboardText>
                                            <DashboardText>
                                                E-mail: 
                                            </DashboardText>
                                            <DashboardRightText>
                                                { email }
                                            </DashboardRightText>
                                        </>
                                    :
                                        <DashboardText>
                                            Error: { getUserError }
                                        </DashboardText>
                    }
                </DashboardDiv>
            </TextDiv>
        </PageDiv>
    );
};

export default Dashboard;
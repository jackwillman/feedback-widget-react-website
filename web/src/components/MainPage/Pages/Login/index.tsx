import { useState, FormEvent } from 'react';

import api from '../../../../lib/api';
import config from '../../../../lib/config';

import { 
    SetCurrentPage,
    SetIsLoggedIn,
 } from '../..';
 import { SetCookie } from '..';

import LoginFormTextArea from './LoginFormTextArea';
import LoginSubmitButton from './LoginSubmitButton';

import { 
    PageDiv,
    TextDiv,
    BigText 
} from '../styled';
import {
    LoginForm,
    LoginText
} from './styled';

interface LoginProps {
    setCurrentPage : SetCurrentPage; 
    setIsLoggedIn : SetIsLoggedIn;
    setCookie : SetCookie;
};

const Login = function LoginPageComponent(
    { 
        setCurrentPage, 
        setIsLoggedIn,
        setCookie
    } : LoginProps
) {
    const [userIdentifier, setUserIdentifier] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [isSendingLoginInput, setIsSendingLoginInput] = useState(false);
    const [loginError, setLoginError] = useState('');

    const handleLogin = function submitLoginInput(
        event : FormEvent
    ) {
        event.preventDefault();
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

    return (
        <PageDiv>
            <TextDiv>
                <BigText>
                    Log In
                </BigText>
                <LoginForm onSubmit={ handleLogin }>
                    <LoginText>
                        Username or E-mail
                    </LoginText>
                    <LoginFormTextArea setInput={ setUserIdentifier }/>
                    <LoginText>
                        Password
                    </LoginText>
                    <LoginFormTextArea setInput={ setUserPassword }/>
                    <LoginSubmitButton 
                        isSendingLoginInput={ isSendingLoginInput }
                        userIdentifier={ userIdentifier }
                        userPassword={ userPassword }
                    />
                    { 
                        loginError
                            ? loginError
                            : <></>                      
                    }
                </LoginForm>
            </TextDiv>
        </PageDiv>
    );
};

export default Login;
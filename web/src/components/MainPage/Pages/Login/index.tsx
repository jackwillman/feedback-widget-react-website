import { useState, FormEvent } from 'react';
import { useCookies } from 'react-cookie';

import api from '../../../../lib/api';
import config from '../../../../config';

import { PageProps } from '../..';
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

interface LoginProps extends PageProps {
    setIsLoggedIn : (isLoggedIn : boolean) => void;
};

const Login = function LoginPageComponent(
    { 
        setCurrentPage, 
        setIsLoggedIn 
    } : LoginProps
) {
    const [userIdentifier, setUserIdentifier] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [isSendingLoginInput, setIsSendingLoginInput] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = function submitLoginInput(
        event : FormEvent
    ) {
        event.preventDefault();
        setIsSendingLoginInput(true);

        const userIdentifierType = userIdentifier.includes('@') ? 'email' : 'username';

        api.post(config.path.sessions, {
            [userIdentifierType] : userIdentifier,
            password : userPassword

        }).then((response) => {
            const token = response.headers[config.sessionToken.headerName];
            const [cookies, setCookie, removeCookie] = useCookies([config.sessionToken.cookieName]);
            const expirationDate = new Date(Date.now() + config.sessionToken.duration);
            setCookie(config.sessionToken.cookieName, token, {
                path : config.path.main,
                expires : expirationDate
            });

            setIsLoggedIn(true);

        }).catch((err) => {
            if (err.response) {
                console.log(err.response.data);
                setError(err.response.data.error);
            } else if (err.request) {
                console.log(err.request);
            } else {
                console.log('Error: ', err.message);
            }

        }).then(() => {
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
                    { error
                        ? error
                        : <></>                      
                    }
                </LoginForm>
            </TextDiv>
        </PageDiv>
    );
};

export default Login;
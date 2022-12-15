import { useState, FormEvent } from 'react';
import { useCookies } from 'react-cookie';


import api from '../../../../lib/api';
import config from '../../../../lib/config';

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
    const [errorState, setErrorState] = useState('');
    const [cookies, setCookie, removeCookie] = useCookies([config.sessionToken.cookieName]);

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
            const expirationDate = new Date(Date.now() + config.sessionToken.duration);
            setCookie(config.sessionToken.cookieName, token, {
                path : config.path.main,
                expires : expirationDate
            });
            setIsLoggedIn(true);

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
                    { errorState
                        ? errorState
                        : <></>                      
                    }
                </LoginForm>
            </TextDiv>
        </PageDiv>
    );
};

export default Login;
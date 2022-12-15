import { useState, FormEvent } from 'react';
import { useCookies } from 'react-cookie';

import api from '../../../../lib/api';
import config from '../../../../config';

import { setTokenCookie } from './setTokenCookie';

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
import { handleLoginError } from './handleLoginError';


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
            setTokenCookie({ response });
            setIsLoggedIn(true);

        }).catch((error) => {
            handleLoginError({
                error,
                setErrorState
            });

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
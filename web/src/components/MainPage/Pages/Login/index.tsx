import { useState, FormEvent } from 'react';
import { Cookies } from 'react-cookie';

import api from '../../../../lib/api';

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

        api.post('/sessions', {
            [userIdentifierType] : userIdentifier,
            password : userPassword

        }).then((response) => {
            const token = response.headers['x-access-token'];
            setIsLoggedIn(true);
            console.log('\n\n\n\nRESPONSE:\n\n',response);

        }).catch((err) => {
            if (err.response) {
                setError(err.response.data.error);
            } else if (err.request) {
                console.log(err.request);
            } else {
                console.log('\n\n\n\nERROR:\n\n', err.message);
            }
            console.log(err.config);

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

const RESPONSE_EXAMPLE_FROM_FRONTEND = {
    "data":"",
    "status":201,
    "statusText":"Created",
    "headers":{"content-length":"0"},
    "config": {
        "transitional":{
            "silentJSONParsing":true,
            "forcedJSONParsing":true,
            "clarifyTimeoutError":false
        },
        "transformRequest":[null],
        "transformResponse":[null],
        "timeout":0,
        "xsrfCookieName":"XSRF-TOKEN",
        "xsrfHeaderName":"X-XSRF-TOKEN",
        "maxContentLength":-1,
        "maxBodyLength":-1,
        "env":{
            "FormData":null
        },
        "headers":{
            "Accept":"application/json, text/plain, */*",
            "Content-Type":"application/json"
        },
        "baseURL":"http://localhost:3333",
        "method":"post",
        "url":"/sessions",
        "data":"{\"username\":\"joaozinho\",\"password\":\"joaozinho\"}"
    },
        "request":{}
};
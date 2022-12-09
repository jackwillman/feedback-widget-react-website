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
    const [isError, setIsError] = useState(false);

    const handleLogin = async function submitLoginInput(
        event : FormEvent
    ) {
        event.preventDefault();
        
        setIsSendingLoginInput(true);
        
        let response;
        if (userIdentifier.includes('@')) {
            response = await api.post('/sessions', {
                email : userIdentifier,
                password : userPassword
            });
        } else {
            response = await api.post('/sessions', {
                username : userIdentifier,
                password : userPassword
            });
        }

        console.log(JSON.stringify(response));
        
        if (response && response.status && response.status === 201) {
            const token = response.headers['x-access-token'];
            setIsLoggedIn(true);
            console.log(JSON.stringify(response))
        } else {
            setIsError(true);
        }

        setIsSendingLoginInput(false);
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
                    { isError
                        ? <LoginText>Erro</LoginText> 
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
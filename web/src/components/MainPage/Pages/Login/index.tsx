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


const Login = function LoginPageComponent({ setCurrentPage } : PageProps) {
    const [userIdentifier, setUserIdentifier] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [isSendingLoginInput, setIsSendingLoginInput] = useState(false);

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
        
        if (response.status && response.status === 201) {
            const token = response.headers['x-access-token'];
            console.log(token);
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
                </LoginForm>
            </TextDiv>
        </PageDiv>
    );
};

export default Login;
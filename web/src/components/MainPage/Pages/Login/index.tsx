import { useState } from 'react';

import { 
    ExistingPage,
    SetCookie 
} from '../../pageTypes';
import { loginHandler } from '../../../../lib/requestHandlers';
import FormTextArea from '../../../Misc/FormTextArea';
import LoginSubmitButton from './LoginSubmitButton';

import { 
    PageDiv,
    TextDiv,
    BigText,
    AccountForm,
    AccountFormText, 
    accountFormTextAreaClass
} from '../styled';

interface LoginProps {
    setCurrentPage : (currentPage : ExistingPage) => void;
    setIsLoggedIn : (isLoggedIn : boolean) => void;
    setUserPassword : (userPassword : string) => void;
    setCookie : SetCookie;
    userPassword : string;
};

const Login = function LoginPageComponent({ 
    setCurrentPage, 
    setIsLoggedIn,
    setUserPassword,
    setCookie,
    userPassword
} : LoginProps) {
    const [userIdentifier, setUserIdentifier] = useState('');
    const [isSendingLoginInput, setIsSendingLoginInput] = useState(false);
    const [loginError, setLoginError] = useState('');

    return ( 
        <PageDiv>
            <TextDiv>
                <BigText>
                    Log In
                </BigText>
                <AccountForm onSubmit={ (event) => {
                    event.preventDefault();
                    loginHandler({
                        setIsSendingLoginInput,
                        setLoginError,
                        setIsLoggedIn,
                        setCurrentPage,
                        setCookie,
                        userIdentifier,
                        userPassword
                    });
                } }>
                    <AccountFormText> Username or E-mail </AccountFormText>
                    <FormTextArea 
                        setInput={ setUserIdentifier }
                        textClass={ accountFormTextAreaClass }
                    />
                    <AccountFormText> Password </AccountFormText>
                    <FormTextArea 
                        setInput={ setUserPassword }
                        textClass={ accountFormTextAreaClass }
                    />
                    <LoginSubmitButton 
                        isSendingLoginInput={ isSendingLoginInput }
                        userIdentifier={ userIdentifier }
                        userPassword={ userPassword }
                    />
                    { loginError 
                        ? loginError
                        : <></>                 
                    }
                </AccountForm>
            </TextDiv>
        </PageDiv> 
    );
};

export default Login;
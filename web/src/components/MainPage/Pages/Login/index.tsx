import { 
    useState, 
    FormEvent 
} from 'react';

import { 
    ExistingPage,
    SetCookie 
} from '../../../../lib/types';
import { loginHandler } from '../../../../lib/requestHandlers';
import LoginFormTextArea from './LoginFormTextArea';
import LoginSubmitButton from './LoginSubmitButton';

import { 
    PageDiv,
    TextDiv,
    BigText,
    AccountForm,
    AccountFormText 
} from '../styled';

interface LoginProps {
    setCurrentPage : (currentPage : ExistingPage) => void;
    setIsLoggedIn : (isLoggedIn : boolean) => void;
    setUserPassword : (userPassword : string) => void;
    setCookie : SetCookie;
    userPassword : string;
};

const Login = function LoginPageComponent(
    { 
        setCurrentPage, 
        setIsLoggedIn,
        setUserPassword,
        setCookie,
        userPassword
    } : LoginProps
) {
    const [userIdentifier, setUserIdentifier] = useState('');
    const [isSendingLoginInput, setIsSendingLoginInput] = useState(false);
    const [loginError, setLoginError] = useState('');

    const handleLogin = function submitLoginInput(
        event : FormEvent
    ) {
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
    };

    return ( <PageDiv>
        <TextDiv>
            <BigText>
                Log In
            </BigText>
            <AccountForm onSubmit={ handleLogin }>
                <AccountFormText>
                    Username or E-mail
                </AccountFormText>
                <LoginFormTextArea setInput={ setUserIdentifier }/>
                <AccountFormText>
                    Password
                </AccountFormText>
                <LoginFormTextArea setInput={ setUserPassword }/>
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
    </PageDiv> );
};

export default Login;
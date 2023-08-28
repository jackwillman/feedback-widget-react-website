import { useState, FormEvent } from 'react';

import api from '../../../../lib/api';
import config from '../../../../lib/config';

import { SetCurrentPage } from '../..';

import SignupFormTextArea from './SignupFormTextArea';
import SignupSubmitButton from './SignupSubmitButton';

import { 
    PageDiv,
    TextDiv,
    BigText,
    AccountForm,
    AccountFormText
} from "../styled";

interface SignupProps {
    setCurrentPage : SetCurrentPage;
};

const Signup = function SignupPageComponent (
    { setCurrentPage } : SignupProps
) {
    const [username, setUsername] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [isSendingSignupInput, setIsSendingSignupInput] = useState(false);
    const [signupError, setSignupError] = useState('');

    const handleSignup = function (
        event : FormEvent
    ) {
        event.preventDefault();
        setIsSendingSignupInput(true);
        setSignupError('');

        api.post(config.path.users, {
            username,
            email : userEmail,
            password : userPassword,

        }).then((response) => {
            setCurrentPage('AccountCreated');

        }).catch((error) => {
            setSignupError(JSON.stringify(error));
            console.log(error);  
            if (error.message) {
                setSignupError(error.message);
            }

        }).finally(() => {
            setIsSendingSignupInput(false);
        });
    };

    return (
        <PageDiv>
            <TextDiv>
                <BigText>
                    Sign Up
                </BigText>
                <AccountForm onSubmit={ handleSignup }>
                    <AccountFormText>
                        Username
                    </AccountFormText>
                    <SignupFormTextArea setInput={ setUsername }/>
                    <AccountFormText>
                        Email
                    </AccountFormText>
                    <SignupFormTextArea setInput={ setUserEmail }/>
                    <AccountFormText>
                        Password
                    </AccountFormText>
                    <SignupFormTextArea setInput={ setUserPassword }/>
                    <SignupSubmitButton 
                        isSendingSignupInput={ isSendingSignupInput }
                        username={ username }
                        userEmail={ userEmail }
                        userPassword={ userPassword }
                    />
                    { 
                        signupError
                            ? signupError
                            : <></>                      
                    }
                </AccountForm>
            </TextDiv>
        </PageDiv>
    );
};

export default Signup;
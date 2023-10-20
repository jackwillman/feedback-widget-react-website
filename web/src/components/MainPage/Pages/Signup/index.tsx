import { useState, FormEvent } from 'react';

import { ExistingPage } from '../../../../lib/types';
import { signupHandler } from '../../../../lib/requestHandlers';
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
    setCurrentPage : (currentPage : ExistingPage) => void;
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
        signupHandler({
            setIsSendingSignupInput, 
            setSignupError, 
            username, 
            userEmail, 
            userPassword, 
            setCurrentPage
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
import { useState } from 'react';

import { ExistingPage } from '../../pageTypes';
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

const Signup = function SignupPageComponent ({ 
    setCurrentPage 
} : SignupProps) {
    const [username, setUsername] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [isSendingSignupInput, setIsSendingSignupInput] = useState(false);
    const [signupError, setSignupError] = useState('');

    return ( 
        <PageDiv>    
            <TextDiv>
                <BigText>
                    Sign Up
                </BigText>
                <AccountForm onSubmit={ (event) => {
                    event.preventDefault();
                    signupHandler({
                        setIsSendingSignupInput, 
                        setSignupError, 
                        username, 
                        userEmail, 
                        userPassword, 
                        setCurrentPage
                    });
                } }>
                    <AccountFormText> Username </AccountFormText>
                    <SignupFormTextArea setInput={ setUsername }/>
                    <AccountFormText> Email </AccountFormText>
                    <SignupFormTextArea setInput={ setUserEmail }/>
                    <AccountFormText> Password </AccountFormText>
                    <SignupFormTextArea setInput={ setUserPassword }/>
                    <SignupSubmitButton 
                        isSendingSignupInput={ isSendingSignupInput }
                        username={ username }
                        userEmail={ userEmail }
                        userPassword={ userPassword }
                    />
                    { signupError                    
                        ? signupError
                        : <></>                      
                    }
                </AccountForm>
            </TextDiv>        
        </PageDiv> 
    );
};

export default Signup;
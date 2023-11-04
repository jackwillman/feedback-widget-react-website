import { useState } from 'react';

import { ExistingPage } from '../../../../lib/types';
import { signupHandler } from '../../../../lib/requestHandlers';

import FormTextArea from '../../../Misc/FormTextArea';
import SignupSubmitButton from './SignupSubmitButton';

import { 
    PageDiv,
    TextDiv,
    BigText,
    AccountForm,
    AccountFormText,
    accountFormTextAreaClass
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
                    <FormTextArea 
                        setInput={ setUsername }
                        textClass= { accountFormTextAreaClass }
                    />
                    <AccountFormText> Email </AccountFormText>
                    <FormTextArea 
                        setInput={ setUserEmail }
                        textClass= { accountFormTextAreaClass }
                    />
                    <AccountFormText> Password </AccountFormText>
                    <FormTextArea 
                        setInput={ setUserPassword }
                        textClass= { accountFormTextAreaClass }
                    />
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
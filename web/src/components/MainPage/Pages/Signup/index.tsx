import { useState, FormEvent } from 'react';

import api from '../../../../lib/api';
import config from '../../../../lib/config';

import { 
    PageDiv,
    TextDiv,
    BigText,
    AccountForm,
    AccountFormText
} from "../styled";
import SignupFormTextArea from './SignupFormTextArea';
import SignupSubmitButton from './SignupSubmitButton';

const Signup = function SignupPageComponent () {
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
                    <SignupFormTextArea setInput={ setUserId }/>
                    <AccountFormText>
                        Email
                    </AccountFormText>
                    <SignupFormTextArea setInput={ setUserEmail }/>
                    <AccountFormText>
                        Password
                    </AccountFormText>
                    <SignupFormTextArea setInput={ setUserPassword }/>
                    <SignupSubmitButton 
                        isSendingSubmitInput={ isSendingSubmitInput }
                        userId={ userId }
                        userEmail={ userEmail }
                        userPassword={ userPassword }
                    />
                    { 
                        loginError
                            ? loginError
                            : <></>                      
                    }
                </AccountForm>
            </TextDiv>
        </PageDiv>
    );
};

export default Signup;
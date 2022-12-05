import { useState, FormEvent } from 'react';

import api from '../../../../lib/api';

import { PageProps } from '../..';
import FormTextArea from './FormTextArea';

import { 
    PageDiv,
    TextDiv,
    BigText,
    NormalText 
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
    
        if (userIdentifier.includes('@')) {
            await api.post('/sessions', {
                email : userIdentifier,
                password : userPassword
            });
        } else {
            await api.post('/sessions', {
                username : userIdentifier,
                password : userPassword
            });
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
                    <FormTextArea setInput={ setUserIdentifier }/>
                    <LoginText>
                        Password
                    </LoginText>
                    <FormTextArea setInput={ setUserPassword }/>
                    <p>FOOTER DIV</p>
                        <p>SUBMIT BUTTON COMPONENT</p>
                </LoginForm>
            </TextDiv>
        </PageDiv>
    );
    /* FAZER FORMULARIO DAQUI E OLOCAR NO LUGAR DE NORMAL TEXT
                <FeedbackForm onSubmit={ handleSubmitFeedback }>
                    <FormTextArea setComment={ setComment }/>

                    <FeedbackFormFooter>
                        <ScreenshotButton 
                            screenshot={ screenshot }
                            handleSetScreenshot={ setScreenshot }
                        />

                        <SubmitButton 
                            isSendingFeedback={ isSendingFeedback }
                            comment={ comment }
                        />
                    </FeedbackFormFooter>
                </FeedbackForm>
    */
};

export default Login;
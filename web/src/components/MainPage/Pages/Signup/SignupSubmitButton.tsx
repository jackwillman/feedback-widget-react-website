import Loading from '../../../Misc/Loading';

import { AccountFormSubmit } from '../styled';

interface SignupSubmitButtonProps {
    isSendingSignupInput : boolean;
    username : string;
    userEmail : string;
    userPassword : string;
};

const SignupSubmitButton = function ({ 
    isSendingSignupInput, 
    username, 
    userEmail,
    userPassword 
} : SignupSubmitButtonProps) {
    return ( 
        <AccountFormSubmit
            type="submit"
            disabled={ 
                username.length === 0 
                || userEmail.length === 0
                || userPassword.length === 0 
                || isSendingSignupInput 
            }
        >
            { isSendingSignupInput            
                ? <Loading />
                : 'Sign Up'
            }
        </AccountFormSubmit> 
    );
};

export default SignupSubmitButton;
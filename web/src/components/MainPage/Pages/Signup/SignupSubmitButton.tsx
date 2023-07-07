import Loading from '../../../Misc/Loading';

import { AccountFormSubmit } from '../styled';

interface SignupSubmitButtonProps {
    isSendingSignupInput : boolean;
    userId : string;
    userEmail : string;
    userPassword : string;
};

const SignupSubmitButton = function ({ 
        isSendingSignupInput, 
        userId, 
        userEmail,
        userPassword 
    } : SignupSubmitButtonProps
) {
    return (
        <AccountFormSubmit
            type="submit"
            disabled={ 
                userId.length === 0 
                || userEmail.length === 0
                || userPassword.length === 0 
                || isSendingSignupInput 
            }
        >
            {
                isSendingSignupInput
                    ? <Loading />
                    : 'Sign Up'
            }
        </AccountFormSubmit>
    );
};

export default SignupSubmitButton;
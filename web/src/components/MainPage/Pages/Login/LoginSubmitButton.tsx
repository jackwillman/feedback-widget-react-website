import Loading from '../../../Misc/Loading';

import { LoginFormSubmit } from './styled';

interface LoginSubmitButtonProps {
    isSendingLoginInput : boolean;
    userIdentifier : string;
    userPassword : string;
};

const LoginSubmitButton = function ({ 
        isSendingLoginInput, 
        userIdentifier, 
        userPassword 
    } : LoginSubmitButtonProps
) {
    return (
        <LoginFormSubmit
            type="submit"
            disabled={ 
                userIdentifier.length === 0 
                || userPassword.length === 0 
                || isSendingLoginInput 
            }
        >
            {
                isSendingLoginInput
                    ? Loading
                    : 'Log In'
            }
        </LoginFormSubmit>
    );
};

export default LoginSubmitButton;
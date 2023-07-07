import Loading from '../../../Misc/Loading';

import { AccountFormSubmit } from '../styled';

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
        <AccountFormSubmit
            type="submit"
            disabled={ 
                userIdentifier.length === 0 
                || userPassword.length === 0 
                || isSendingLoginInput 
            }
        >
            {
                isSendingLoginInput
                    ? <Loading />
                    : 'Log In'
            }
        </AccountFormSubmit>
    );
};

export default LoginSubmitButton;
import Loading from '../../../Misc/Loading';

import { DashboardUpdateFormSubmit } from './styled';

interface LoginSubmitButtonProps {
    isSendingNewUserData : boolean;
    newUsername : string;
    newEmail : string;
};

const DashboardUpdateButton = function ({ 
        isSendingNewUserData, 
        newUsername, 
        newEmail 
    } : LoginSubmitButtonProps
) {
    return (
        <DashboardUpdateFormSubmit
            type="submit"
            disabled={ (
                    newUsername.length === 0 
                    && newEmail.length === 0 
                ) || isSendingNewUserData 
            }
        >
            {
                isSendingNewUserData
                    ? <Loading />
                    : 'Update User Data'
            }
        </DashboardUpdateFormSubmit>
    );
};

export default DashboardUpdateButton;
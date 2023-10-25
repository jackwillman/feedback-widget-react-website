import Loading from '../../../Misc/Loading';

import { DashboardUpdateButtonClass } from './styled';

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
    return ( <DashboardUpdateButtonClass
        type="submit"
        disabled={ (
            newUsername.length === 0 
            && newEmail.length === 0 
        ) || isSendingNewUserData }
    >
        { isSendingNewUserData
            ? <Loading />
            : 'Update User Data'
        }
    </DashboardUpdateButtonClass> );
};

export default DashboardUpdateButton;
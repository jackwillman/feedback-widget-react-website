import Loading from '../../../Misc/Loading';

import { DashboardMainButtonClass } from './styled';

interface LoginSubmitButtonProps {
    isSendingNewUserData : boolean;
    newUsername : string;
    newEmail : string;
};

const DashboardUpdateButton = function ({ 
    isSendingNewUserData, 
    newUsername, 
    newEmail 
} : LoginSubmitButtonProps) {
    return ( 
        <DashboardMainButtonClass
            type="submit"
            disabled={ (
                newUsername.length === 0 
                && newEmail.length === 0 
            ) || isSendingNewUserData }
        >
            { isSendingNewUserData
                ? <Loading />
                : "Update User Data"
            }
        </DashboardMainButtonClass> 
    );
};

export default DashboardUpdateButton;
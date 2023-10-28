import Loading from '../../../../Misc/Loading';
import { UserDashboardButton } from './styled';

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
        <UserDashboardButton
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
        </UserDashboardButton> 
    );
};

export default DashboardUpdateButton;
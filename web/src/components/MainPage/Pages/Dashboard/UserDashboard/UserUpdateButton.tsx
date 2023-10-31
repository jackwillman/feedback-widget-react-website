import Loading from '../../../../Misc/Loading';
import { UserUpdateButtonStyle } from './styled';

interface LoginSubmitButtonProps {
    isSendingNewUserData : boolean;
    newUsername : string;
    newEmail : string;
};

const UserUpdateButton = function DashboardUserUpdateButtonComponent({ 
    isSendingNewUserData, 
    newUsername, 
    newEmail 
} : LoginSubmitButtonProps) {
    return ( 
        <UserUpdateButtonStyle
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
        </UserUpdateButtonStyle> 
    );
};

export default UserUpdateButton;
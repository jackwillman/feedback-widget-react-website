import { useState } from 'react';

import { updateUserHandler } from '../../../../../lib/requestHandlers';
import { CookiesType } from '../../../pageTypes';

import FormTextArea from '../../../../Misc/FormTextArea';
import UserUpdateButton from './UserUpdateButton';
import { 
    DashboardText,
    dashboardFormTextClass
} from '../styled';
import {
    UserUpdateFormBox,
    UserUpdateFormStyle, 
    UserUpdateFormItem
} from './styled';

interface DashboardFormProps {
    setUserError : (userError : string) => void;
    setIsUserUpdated : (updateSuccess : boolean) => void;
    username : string;
    userEmail : string;
    userPassword : string;
    cookies : CookiesType;
};
const UserUpdateForm = function DashboardUserUpdateFormComponent({
    setUserError,
    setIsUserUpdated,
    username,
    userEmail,
    userPassword,
    cookies
} : DashboardFormProps) {
    const [newUsername, setNewUsername] = useState('');
    const [newUserEmail, setNewUserEmail] = useState('');
    const [newUserPassword, setNewUserPassword] = useState('');
    const [isSendingNewUserData, setIsSendingNewUserData] = useState(false);

    return (                      
        <UserUpdateFormStyle onSubmit={ (event) => {
            event.preventDefault();

            updateUserHandler({
                setIsSendingNewUserData,
                setUserError,
                setIsUserUpdated,
                setNewUsername,
                setNewUserEmail,
                setNewUserPassword,
                newUsername,
                username,
                userEmail,
                newUserEmail,
                userPassword,
                newUserPassword,
                cookies
            });
        } }>
            <UserUpdateFormBox>
                <UserUpdateFormItem>
                    <DashboardText>Username:</DashboardText>
                    <FormTextArea 
                        setInput={ setNewUsername }
                        placeholder={ username }
                        textClass={ dashboardFormTextClass }
                    />
                </UserUpdateFormItem>

                <UserUpdateFormItem>
                    <DashboardText>E-mail:</DashboardText>
                    <FormTextArea 
                        setInput={ setNewUserEmail }
                        placeholder={ userEmail }
                        textClass={ dashboardFormTextClass }
                    />
                </UserUpdateFormItem>

                <UserUpdateFormItem>
                    <DashboardText>Password:</DashboardText>
                    <FormTextArea 
                        setInput={ setNewUserPassword }
                        placeholder={ "******" }
                        textClass={ dashboardFormTextClass }
                    />
                </UserUpdateFormItem>

            </UserUpdateFormBox>
            
            <UserUpdateButton
                isSendingNewUserData={ isSendingNewUserData }
                newUsername={ newUsername }
                newEmail={ newUserEmail }
            />
            
        </UserUpdateFormStyle>    
    );
};

export default UserUpdateForm;
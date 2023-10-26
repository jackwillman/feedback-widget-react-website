import { useState } from "react";

import { updateUserHandler } from '../../../../lib/requestHandlers';
import { CookiesType } from "../../pageTypes";

import FormTextArea from "../../../Misc/FormTextArea";
import DashboardUpdateButton from "./DashboardUpdateButton";
import { 
    DasboardItemDiv,
    DashboardFormClass, 
    DashboardItemRow,
    DashboardText,
    dashboardFormTextClass
} from "./styled";

interface DashboardFormProps {
    setUpdateError : (updateError : string) => void;
    setIsUserUpdated : (updateSuccess : boolean) => void;
    username : string;
    userEmail : string;
    userPassword : string;
    cookies : CookiesType;
};
const DashboardForm = function DashboardFormComponent({
    setUpdateError,
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
        <DashboardFormClass onSubmit={ (event) => {
            event.preventDefault();

            updateUserHandler({
                setIsSendingNewUserData,
                setUpdateError,
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
            <DasboardItemDiv>
                <DashboardItemRow>
                    <DashboardText>Username:</DashboardText>
                    <FormTextArea 
                        setInput={ setNewUsername }
                        placeholder={ username }
                        textClass={ dashboardFormTextClass }
                    />
                </DashboardItemRow>

                <DashboardItemRow>
                    <DashboardText>E-mail:</DashboardText>
                    <FormTextArea 
                        setInput={ setNewUserEmail }
                        placeholder={ userEmail }
                        textClass={ dashboardFormTextClass }
                    />
                </DashboardItemRow>

                <DashboardItemRow>
                    <DashboardText>Password:</DashboardText>
                    <FormTextArea 
                        setInput={ setNewUserPassword }
                        placeholder={ "******" }
                        textClass={ dashboardFormTextClass }
                    />
                </DashboardItemRow>

            </DasboardItemDiv>
            
            <DashboardUpdateButton
                isSendingNewUserData={ isSendingNewUserData }
                newUsername={ newUsername }
                newEmail={ newUserEmail }
            />
            
        </DashboardFormClass>    
    );
};

export default DashboardForm;
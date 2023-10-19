import { 
    useEffect,
    useState, 
    FormEvent 
} from 'react';

import { 
    CookiesType,
    SetUserPassword,
    UserPassword
 } from '..';

import Loading from '../../../Misc/Loading';

import DashboardFormTextArea from './DashboardFormTextArea';
import DashboardUpdateButton from './DashboardUpdateButton';
import handleGetUser from './handleGetUser';
import updateUserHandler from './updateUserHandler';

import { 
    PageDiv, 
    TextDiv, 
    BiggerText 
} from '../styled';
import { 
    DashboardForm,
    DashboardItemRow,
    DashboardErrorBox,
    dashboardTextBoxClass,
    DashboardText
 } from './styled';

interface DashboardProps {
    setUserPassword : SetUserPassword;
    userPassword : UserPassword;
    cookies : CookiesType;
};

const Dashboard = function DashboardPageComponent(
    { 
        setUserPassword,
        userPassword,
        cookies
     } : DashboardProps
) {
    const [isUserGotten, setIsUserGotten] = useState(false);
    const [updateError, setUpdateError] = useState('');
    const [updateSuccess, setUpdateSuccess] = useState(false);
    const [username, setUsername] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [isSendingNewUserData, setIsSendingNewUserData] = useState(false);
    const [newUsername, setNewUsername] = useState('');
    const [newUserEmail, setNewUserEmail] = useState('');
    const [newUserPassword, setNewUserPassword] = useState('');

    const handleUpdateUser = function updateUserOnServer(
        event : FormEvent
    ) {
        event.preventDefault();

        updateUserHandler({
            setIsSendingNewUserData,
            setUpdateError,
            setUpdateSuccess,
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
    };

    useEffect(() => {
        handleGetUser({
            setIsUserGotten,
            setUpdateError,
            setUserEmail,
            setUsername,
            cookies
        });    
    }, []);               
    
    return (
        <PageDiv>
            <TextDiv>
                <BiggerText>
                    Dashboard
                </BiggerText>
                {
                    !isUserGotten ?
                        <Loading />
                    :
                        username && userEmail ?
                            <DashboardForm onSubmit={ handleUpdateUser }>
                                <DashboardItemRow>
                                    <DashboardText>Username:</DashboardText>
                                    <textarea 
                                        className={dashboardTextBoxClass}
                                        placeholder={ username }
                                    />
                                    <DashboardFormTextArea 
                                        originalValue={ username }
                                        setInput={ setNewUsername }
                                    />
                                </DashboardItemRow>

                                <DashboardItemRow>
                                    <DashboardText>E-mail:</DashboardText>
                                    <DashboardFormTextArea 
                                        originalValue={ userEmail }
                                        setInput={ setNewUserEmail }
                                    />
                                </DashboardItemRow>

                                <DashboardItemRow>
                                    <DashboardText>Password:</DashboardText>
                                    <DashboardFormTextArea 
                                        originalValue={ userPassword }
                                        setInput={ setNewUserPassword }
                                    />
                                </DashboardItemRow>

                                <DashboardItemRow>
                                    <DashboardUpdateButton
                                        isSendingNewUserData={ isSendingNewUserData }
                                        newUsername={ newUsername }
                                        newEmail={ newUserEmail }
                                    />
                                </DashboardItemRow>
                            </DashboardForm>
                        :
                            <DashboardErrorBox>
                                <DashboardText>
                                    {
                                        updateError ?
                                            updateError
                                        :
                                            updateSuccess ?
                                                <>Your account has been updated!</>
                                            :
                                                <></>
                                    }
                                </DashboardText>
                            </DashboardErrorBox>      
                }
            </TextDiv>
        </PageDiv>
    );
};

export default Dashboard;
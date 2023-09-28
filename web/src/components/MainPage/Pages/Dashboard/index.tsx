import { 
    useEffect,
    useState, 
    FormEvent 
} from 'react';

import { CookiesType } from '..';

import Loading from '../../../Misc/Loading';
import DashboardFormTextArea from './DashboardFormTextArea';
import DashboardUpdateButton from './DashboardUpdateButton';
import handleGetUser from './handleGetUser';

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
    cookies : CookiesType;
};

const Dashboard = function DashboardPageComponent(
    { cookies } : DashboardProps
) {
    const [isGettingUser, setIsGettingUser] = useState(false);
    const [userError, setUserError] = useState('');
    const [username, setUsername] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [isSendingNewUserData, setIsSendingNewUserData] = useState(false);
    const [newUsername, setNewUsername] = useState('');
    const [newUserEmail, setNewUserEmail] = useState('');


    const handleUpdateUser = function updateUserOnServer(
        event : FormEvent
    ) {
        event.preventDefault();
        setIsSendingNewUserData(true);

        setIsSendingNewUserData(false);
    };

    useEffect(() => handleGetUser({
        setIsGettingUser,
        setUserError,
        setUserEmail,
        setUsername,
        cookies
    }));               
    
    return (
        <PageDiv>
            <TextDiv>
                <BiggerText>
                    Dashboard
                </BiggerText>
                {
                    isGettingUser ?
                        <Loading />
                    :
                        username && userEmail ?
                            <DashboardForm>
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
                                    <DashboardUpdateButton
                                        isSendingNewUserData={ isSendingNewUserData }
                                        newUsername={ newUsername }
                                        newEmail={ newUserEmail }
                                    />
                                </DashboardItemRow>
                            </DashboardForm>
                        :
                            <DashboardForm>
                                <DashboardItemRow>
                                    <DashboardText>Error:</DashboardText>
                                    <DashboardErrorBox>
                                        <DashboardText>{ userError }</DashboardText>
                                    </DashboardErrorBox>
                                </DashboardItemRow>
                            </DashboardForm>
                }
            </TextDiv>
        </PageDiv>
    );
};

export default Dashboard;
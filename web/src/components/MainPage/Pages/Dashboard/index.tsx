import { 
    useEffect,
    useState, 
    FormEvent 
} from 'react';

import { CookiesType } from "../../../../lib/types";
import { 
    handleGetUser,
    updateUserHandler
} from '../../../../lib/requestHandlers';

import Loading from '../../../Misc/Loading';
import DashboardFormTextArea from './DashboardFormTextArea';
import DashboardUpdateButton from './DashboardUpdateButton';

import { 
    PageDiv, 
    TextDiv, 
    BiggerText 
} from '../styled';
import { 
    DashboardDiv,
    DasboardItemDiv,
    DashboardForm,
    DashboardItemRow,
    DashboardResponseDiv,
    DashboardText
 } from './styled';
import DashboardDeleteButton from './DashboardDeleteButton';

interface DashboardProps {
    userPassword : string;
    cookies : CookiesType;
};

const Dashboard = function DashboardPageComponent(
    { 
        userPassword,
        cookies
     } : DashboardProps
) {
    const [isUserGotten, setIsUserGotten] = useState(false);
    const [isDeletingUser, SetIsDeletingUser] = useState(false);
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
    
    return ( <PageDiv>
        <TextDiv>
            <BiggerText>
                Dashboard
            </BiggerText>
            { !isUserGotten 
                ? <Loading />
                : <DashboardDiv>
                
                    <DashboardForm onSubmit={ handleUpdateUser }>
                        <DasboardItemDiv>
                            <DashboardItemRow>
                                <DashboardText>Username:</DashboardText>
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
                                    originalValue={ '******' }
                                    setInput={ setNewUserPassword }
                                />
                            </DashboardItemRow>

                            <DashboardDeleteButton 
                                isDeletingUser={ isDeletingUser }
                            />
                        </DasboardItemDiv>

                        
                        <DashboardUpdateButton
                            isSendingNewUserData={ isSendingNewUserData }
                            newUsername={ newUsername }
                            newEmail={ newUserEmail }
                        />
                        
                    </DashboardForm>

                    <DashboardResponseDiv>
                        <DashboardText>
                            { updateError
                                ? updateError 
                                : updateSuccess 
                                    ? <>Your account has been updated!</>
                                    : <></>
                            }
                        </DashboardText>
                    </DashboardResponseDiv>      
                </DashboardDiv>
            }
        </TextDiv>
    </PageDiv>);
};

export default Dashboard;
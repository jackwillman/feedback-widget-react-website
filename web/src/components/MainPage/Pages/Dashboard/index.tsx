import { 
    useEffect,
    useState, 
    FormEvent 
} from 'react';

import api from '../../../../lib/api';
import config from '../../../../lib/config';

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
    const [isUserGotten, setIsUserGotten] = useState(false);
    const [updateError, setUpdateError] = useState('');
    const [updateSuccess, setUpdateSuccess] = useState(false);
    const [username, setUsername] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [isSendingNewUserData, setIsSendingNewUserData] = useState(false);
    const [newUsername, setNewUsername] = useState('');
    const [newUserEmail, setNewUserEmail] = useState('');
    const [newUserPassword, setNewUserPassword] = useState('');

    const tokenHeader = config.sessionToken.headerName;
    const sessionToken = cookies[config.sessionToken.cookieName];
    const userId = cookies[config.user.id.cookieName];

    const handleUpdateUser = function updateUserOnServer(
        event : FormEvent
    ) {
        event.preventDefault();
        setIsSendingNewUserData(true);
        setUpdateError('');
        setUpdateSuccess(false);

        if (!newUsername) {
            setNewUserEmail(username);
        }

        if (!newUserEmail) {
            setNewUserEmail(userEmail);
        }

        if (!newUserPassword) {
            setNewUserPassword(userPassword);
        }

        api.put(config.path.user, {
            id : userId,
            username : newUsername,
            email : newUserEmail,
            password : newUserPassword
        }, { 
            headers : {
                [tokenHeader] : sessionToken
            }
        }).then((response) => {
            setUpdateSuccess(true);
        }).catch((error) => {
            if (error.response) {
                console.log(error.response.data);
                if (error.response.data.errors) {
                    const errorArray = error.response.data.errors;
                    let errorMessage = 'Error! '
                    let i = 0;
                    
                    while (i < errorArray.length) {
                        errorMessage += `${errorArray[i].msg} `
                        i++
                    }
                    setUpdateError(errorMessage);
                    
                }
                else {
                    setUpdateError(error.response.data.error);
                }
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error: ', error.message);
                console.log(error);
            }
        }).finally(() => {
            setIsSendingNewUserData(false);
        });
        
    };

    useEffect(() => {
        handleGetUser({
            setIsUserGotten,
            setUpdateError,
            setUserEmail,
            setUsername,
            tokenHeader,
            sessionToken,
            userId,
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
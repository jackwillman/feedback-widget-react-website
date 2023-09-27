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
    const [getUserError, setGetUserError] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [isSendingNewUserData, setIsSendingNewUserData] = useState(false);
    const [newUsername, setNewUsername] = useState('');
    const [newEmail, setNewEmail] = useState('');

    const handleGetUser = function getUserFromServer() {
        setIsGettingUser(true);
        setGetUserError('');
        setEmail('');
        setUsername('');

        const tokenHeader = config.sessionToken.headerName;
        
        const sessionToken = cookies[config.sessionToken.cookieName];
        const userId = cookies[config.user.id.cookieName];

        api.get(config.path.user, { 
            params : {
                id : userId
            },
            headers : {
                [tokenHeader] : sessionToken
            }

        }).then((response) => {
            setUsername(response.data[config.user.username]);
            setEmail(response.data[config.user.email])
            
        }).catch((error) => {
            if (error.response) {
                console.log(error.response.data);
                setGetUserError(error.response.data.error);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error: ', error.message);
            }

        }).finally(() => {
            setIsGettingUser(false);
        });
    };

    const handleUpdateUser = function updateUserOnServer(
        event : FormEvent
    ) {
        event.preventDefault();
        setIsSendingNewUserData(true);

        setIsSendingNewUserData(false);
    };

    useEffect(() => handleGetUser());               
    
    return (
        <PageDiv>
            <TextDiv>
                <BiggerText>
                    Dashboard
                </BiggerText>
                    {
                        isGettingUser
                            ?
                                <Loading />
                            :
                                username && email
                                    ?
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
                                                    originalValue={ email }
                                                    setInput={ setNewEmail }
                                                />
                                            </DashboardItemRow>
                                            <DashboardItemRow>
                                                <DashboardUpdateButton
                                                    isSendingNewUserData={ isSendingNewUserData }
                                                    newUsername={ newUsername }
                                                    newEmail={ newEmail }
                                                />
                                            </DashboardItemRow>
                                        </DashboardForm>
                                    :
                                        <DashboardForm>
                                            <DashboardItemRow>
                                                <DashboardText>Error:</DashboardText>
                                                <DashboardErrorBox>
                                                    <DashboardText>{ getUserError }</DashboardText>
                                                </DashboardErrorBox>
                                            </DashboardItemRow>
                                        </DashboardForm>
                    }
            </TextDiv>
        </PageDiv>
    );
};

export default Dashboard;
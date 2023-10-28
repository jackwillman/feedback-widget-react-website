import { 
    useEffect,
    useState,  
} from 'react';

import { handleGetUser } from '../../../../lib/requestHandlers';
import { 
    CookiesType, 
    ExistingPage 
} from "../../pageTypes";

import Loading from '../../../Misc/Loading';
import FeedbackDashboard from './FeedbackDashboard';
import UserDashboard from './UserDashboard';

import { 
    PageDiv, 
    TextDiv, 
    BiggerText 
} from '../styled';
import { DashboardDiv } from './styled';

interface DashboardProps {
    setIsLoggedIn : (isLoggedIn : boolean) => void;
    setCurrentPage : (currentPage : ExistingPage) => void;     
    userPassword : string;
    cookies : CookiesType;
};

const Dashboard = function DashboardPageComponent({
    setIsLoggedIn,
    setCurrentPage,
    userPassword,
    cookies
} : DashboardProps) {
    const [isUserGotten, setIsUserGotten] = useState(false);
    const [userError, setUserError] = useState('');
    const [username, setUsername] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [isUserUpdated, setIsUserUpdated] = useState(false);

    useEffect(() => {
        handleGetUser({
            setIsUserGotten,
            setUserError,
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
                { !isUserGotten 
                    ? <Loading />
                    : (
                        <DashboardDiv>
                            <UserDashboard 
                                setIsLoggedIn={ setIsLoggedIn }
                                setCurrentPage={ setCurrentPage }
                                setUserError={ setUserError }
                                userError={ userError }
                                username={ username }
                                userEmail={ userEmail }
                                userPassword={ userPassword }
                                cookies={ cookies }
                            />
                            <FeedbackDashboard />
                        </DashboardDiv>
                    )
                }
            </TextDiv>
        </PageDiv>
    );
};

export default Dashboard;
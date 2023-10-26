import { 
    useEffect,
    useState,  
} from 'react';

import { 
    CookiesType, 
    ExistingPage 
} from "../../pageTypes";
import { handleGetUser } from '../../../../lib/requestHandlers';

import Loading from '../../../Misc/Loading';
import DashboardForm from './DashboardForm';

import { 
    PageDiv, 
    TextDiv, 
    BiggerText 
} from '../styled';
import { DashboardDiv, DashboardResponseDiv, DashboardText } from './styled';
import DashboardDeleteButton from './DashboardDeleteButton';


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
    const [username, setUsername] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [updateError, setUpdateError] = useState('');
    const [isUserUpdated, setIsUserUpdated] = useState(false);

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
                { !isUserGotten 
                    ? <Loading />
                    : (
                        <DashboardDiv>
                            <DashboardForm
                                setIsUserUpdated={ setIsUserUpdated }
                                setUpdateError={ setUpdateError }
                                username={ username }
                                userEmail={ userEmail }
                                userPassword={ userPassword }
                                cookies={ cookies }
                            />
                            <DashboardDeleteButton 
                                setIsLoggedIn={ setIsLoggedIn }
                                setCurrentPage={ setCurrentPage }       
                                cookies={ cookies }
                            />
                            <DashboardResponseDiv>
                                <DashboardText>
                                    { updateError
                                        ? updateError 
                                        : isUserUpdated 
                                            ? <>Your account has been updated!</>
                                            : <></>
                                    }
                                </DashboardText>
                            </DashboardResponseDiv>  
                        </DashboardDiv>
                    )
                }
            </TextDiv>
        </PageDiv>
    );
};

export default Dashboard;
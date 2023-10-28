import { useState } from 'react';

import { 
    CookiesType, 
    ExistingPage 
} from '../../../pageTypes';
import DashboardDeleteButton from './DashboardDeleteButton';

import DashboardForm from './DashboardForm';

import { DashboardText } from '../styled';

import { 
    UserDashboardDiv,
    UserDashboardResponse 
} from './styled';

interface UserDashboardProps {
    setIsLoggedIn : (isLoggedIn : boolean) => void;
    setCurrentPage : (currentPage : ExistingPage) => void;  
    setUserError : (userError : string) => void;
    userError : string;   
    username : string;
    userEmail : string;
    userPassword : string;
    cookies : CookiesType;
};

const UserDashboard = function UserDashboardComponent({
    setIsLoggedIn,
    setCurrentPage,
    setUserError,
    userError,    
    username,
    userEmail,
    userPassword,
    cookies
} : UserDashboardProps) {
    const [isUserUpdated, setIsUserUpdated] = useState(false);  
    
    return ( 
        <UserDashboardDiv>
            <DashboardForm
                setIsUserUpdated={ setIsUserUpdated }
                setUserError={ setUserError }
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
            <UserDashboardResponse>
                <DashboardText>
                    { userError
                        ? userError 
                        : isUserUpdated 
                            ? <>Your account has been updated!</>
                            : <></>
                    }
                </DashboardText>
            </UserDashboardResponse>  
        </UserDashboardDiv>                    
    );
};

export default UserDashboard;
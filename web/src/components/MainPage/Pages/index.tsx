import { useState } from 'react';

import { 
    ExistingPage,
    SetCookie,
    CookiesType
} from '../pageTypes';
import Home from './Home';
import About from './About';
import Dashboard from './Dashboard';
import Login from './Login';
import Signup from './Signup';
import AccountCreated from './AccountCreated';
import LogOut from './LogOut';
import AccountDeleted from './AccountDeleted';

interface CurrentPageProps {
    setCurrentPage : (currentPage : ExistingPage) => void;
    setIsLoggedIn : (isLoggedIn : boolean) => void;
    setCookie : SetCookie;
    cookies : CookiesType;
    currentPage : ExistingPage;
};

const CurrentPage = function GetCurrentPageBySwitchCase({
    setCurrentPage,
    setIsLoggedIn,
    setCookie,
    cookies,
    currentPage
} : CurrentPageProps) {
    const [userPassword, setUserPassword] = useState('');
    
    switch (currentPage) {
        case 'About':
            return <About />;
        case 'AccountCreated':
            return <AccountCreated />;
        case 'AccountDeleted':
            return <AccountDeleted/>;
        case 'Dashboard':
            return (
                <Dashboard
                    setIsLoggedIn={ setIsLoggedIn }
                    setCurrentPage={ setCurrentPage }      
                    cookies={ cookies }
                    userPassword={ userPassword }
                />
            );
        case 'Home':
            return <Home />;
        case 'Login':
            return (
                <Login
                    setCurrentPage={ setCurrentPage }
                    setIsLoggedIn={ setIsLoggedIn }
                    setUserPassword={ setUserPassword }
                    setCookie={ setCookie }
                    userPassword={ userPassword }
                />
            );
        case 'LogOut':
            return <LogOut setIsLoggedIn={ setIsLoggedIn }/>;
        case 'Signup':
            return <Signup setCurrentPage={ setCurrentPage }/>;

        default:
            return <Home/>;
    }
};

export default CurrentPage;
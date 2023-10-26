import { useState } from 'react';

import { 
    ExistingPage,
    SetCookie,
    CookiesType
} from '../../../lib/types';
import Home from './Home';
import About from './About';
import Dashboard from './Dashboard';
import Login from './Login';
import Signup from './Signup';
import AccountCreated from './AccountCreated';
import LogOut from './LogOut';

interface CurrentPageProps {
    setCurrentPage : (currentPage : ExistingPage) => void;
    setIsLoggedIn : (isLoggedIn : boolean) => void;
    setCookie : SetCookie;
    cookies : CookiesType;
    currentPage : ExistingPage;
};

const CurrentPage = function GetCurrentPageBySwitchCase(
    {
        setCurrentPage,
        setIsLoggedIn,
        setCookie,
        cookies,
        currentPage
    } : CurrentPageProps
) {
    const [userPassword, setUserPassword] = useState('');
    
    switch (currentPage) {
        case 'Home':
            return (
                <Home />
            );
        case 'About':
            return (
                <About />
            );
        case 'Dashboard':
            return (
                <Dashboard
                    setIsLoggedIn={ setIsLoggedIn }
                    setCurrentPage={ setCurrentPage }      
                    cookies={ cookies }
                    userPassword={ userPassword }
                />
            );
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
        case 'Signup':
            return (
                <Signup 
                    setCurrentPage={ setCurrentPage }
                />
            );
        case 'AccountCreated':
            return (
                <AccountCreated />
            );
        case 'LogOut':
            return (
                <LogOut
                    setIsLoggedIn={ setIsLoggedIn }
                />
            );
        default:
            return (
                <Home/>
            );
    }
};

export default CurrentPage;
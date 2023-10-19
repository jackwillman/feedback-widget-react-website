import { useState } from 'react';
import { useCookies } from 'react-cookie';

import config from '../../../lib/config';

import { 
    ExistingPage,
    SetCurrentPage,
    SetIsLoggedIn
} from '..';
import Home from './Home';
import About from './About';
import Dashboard from './Dashboard';
import Login from './Login';
import Signup from './Signup';
import AccountCreated from './AccountCreated';
import LoggedOut from './LoggedOut';

export type UserPassword = string;
export type SetUserPassword = (password : UserPassword) => void;
export type SetCookie = (name : string, value : any, options?: any) => void;
export type CookiesType = { [x: string] : any };

interface CurrentPageProps {
    currentPage : ExistingPage;
    setCurrentPage : SetCurrentPage;
    setIsLoggedIn : SetIsLoggedIn;
};

const CurrentPage = function SwitchCaseToGetCurrentPage(
    {
        currentPage,
        setCurrentPage,
        setIsLoggedIn
    } : CurrentPageProps
) {
    const [cookies, setCookie, removeCookie] = useCookies([config.sessionToken.cookieName, config.user.id.cookieName]);
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
                    setUserPassword={ setUserPassword }
                    userPassword={ userPassword }
                    cookies={ cookies }
                />
            );
        case 'Login':
            return (
                <Login
                    setCurrentPage={ setCurrentPage }
                    setIsLoggedIn={ setIsLoggedIn }
                    setCookie={ setCookie }
                    setUserPassword={ setUserPassword }
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
        case 'LoggedOut':
            return (
                <LoggedOut />
            );
        default:
            return (
                <Home/>
            );
    }
};

export default CurrentPage;
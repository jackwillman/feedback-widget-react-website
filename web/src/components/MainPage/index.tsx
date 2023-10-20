import { useState } from 'react';
import { useCookies } from 'react-cookie';

import config from '../../lib/config';

import PageHeader from './PageHeader';
import CurrentPage from './Pages';

import { MainDiv } from './styled';

export type ExistingPage = 'Home' | 'About' | 'Dashboard' | 'Login' | 'Signup' | 'AccountCreated' | 'LoggedOut';
export type SetCurrentPage = (page : ExistingPage) => void;
export type IsLoggedIn = boolean;
export type SetIsLoggedIn = (isLoggedIn : boolean) => void;

const MainPage = function MainPageComponent() {
    const [cookies, setCookie, removeCookie] = useCookies([config.sessionToken.cookieName, config.user.id.cookieName]);
    const [currentPage, setCurrentPage] = useState<ExistingPage>('Home');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <MainDiv>
            <PageHeader 
                setCurrentPage={ setCurrentPage }                
                setIsLoggedIn={ setIsLoggedIn }
                isLoggedIn={ isLoggedIn }
            />
            <CurrentPage 
                setCookie={ setCookie }
                setIsLoggedIn={ setIsLoggedIn }
                setCurrentPage={ setCurrentPage }
                currentPage={ currentPage }
                cookies={ cookies }
            />
        </MainDiv>
    );
};

export default MainPage;
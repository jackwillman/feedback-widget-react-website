import { useState } from 'react';

import PageHeader from './PageHeader';
import CurrentPage from './Pages';
import { 
    ExistingPage,
    CookiesType,
    SetCookie
} from '../../lib/types';

import { MainDiv } from './styled';

interface MainPageProps {
    setCookie : SetCookie;
    setIsLoggedIn : (isLoggedIn : boolean) => void;
    cookies : CookiesType;
    isLoggedIn : boolean;
};
const MainPage = function MainPageComponent({
    setCookie,
    setIsLoggedIn,
    cookies,
    isLoggedIn
} : MainPageProps) {
    const [currentPage, setCurrentPage] = useState<ExistingPage>('Home');

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
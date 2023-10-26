import { ExistingPage } from '../pageTypes';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

import { 
    HeaderDiv, 
    CompanyButton 
} from './styled';

interface PageHeaderProps {
    setCurrentPage : ( currentPage : ExistingPage ) => void;
    setIsLoggedIn : ( isLoggedIn : boolean) => void;
    isLoggedIn : boolean;
};

const PageHeader = function PageHeaderComponent({ 
    setCurrentPage,
    setIsLoggedIn,
    isLoggedIn
} : PageHeaderProps) {
    return ( 
        <HeaderDiv>        
            <CompanyButton onClick={() => setCurrentPage('Home')}>
                Real<a className='text-brand-500'>Site</a>
            </CompanyButton>

            <DesktopMenu 
                setCurrentPage={ setCurrentPage }
                isLoggedIn={ isLoggedIn }
            />

            <MobileMenu 
                setCurrentPage={ setCurrentPage }
                isLoggedIn={ isLoggedIn }
            />        
        </HeaderDiv> 
    );
};

export default PageHeader;

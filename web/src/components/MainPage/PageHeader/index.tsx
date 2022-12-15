import { 
    SetCurrentPage,
    SetIsLoggedIn,
    IsLoggedIn
 } from '..';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

import { HeaderDiv, CompanyButton } from './styled';

interface PageHeaderProps {
    setCurrentPage : SetCurrentPage,
    setIsLoggedIn : SetIsLoggedIn,
    isLoggedIn : IsLoggedIn
};

const PageHeader = function PageHeaderComponent(
    { 
        setCurrentPage,
        setIsLoggedIn,
        isLoggedIn
    } : PageHeaderProps
) {
    return (
        <HeaderDiv>
            <CompanyButton onClick={() => setCurrentPage('Home')}>
                Better<a className='text-brand-500'>Site</a>
            </CompanyButton>

            <DesktopMenu setCurrentPage={ setCurrentPage }/>

            <MobileMenu setCurrentPage={ setCurrentPage }/>
        </HeaderDiv>
    );
};

export default PageHeader;

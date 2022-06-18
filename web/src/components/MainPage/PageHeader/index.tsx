import { PageProps } from '..';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

import { HeaderDiv, CompanyButton } from './styled';

const PageHeader = function PageHeaderComponent({ setCurrentPage } : PageProps) {
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

import { PageProps } from '..';

import {
    HeaderDiv,
    CompanyButton,
    BrandColor,
    MenuButtonsDiv,
    MenuButton
} from './styled';

const PageHeader = function PageHeaderComponent({ setCurrentPage } : PageProps) {
    return (
        <HeaderDiv>
            <CompanyButton onClick={() => setCurrentPage('Home')}>
                Better
                <BrandColor>
                    Site
                </BrandColor>
            </CompanyButton>

            <MenuButtonsDiv>
                <MenuButton onClick={() => setCurrentPage('About')}>
                    About
                </MenuButton>
                <MenuButton onClick={() => setCurrentPage('Dashboard')}>
                    Dashboard
                </MenuButton>
            </MenuButtonsDiv>

        </HeaderDiv>
    );
};

export default PageHeader;

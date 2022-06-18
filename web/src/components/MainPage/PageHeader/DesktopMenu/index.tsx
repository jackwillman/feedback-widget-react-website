import { PageProps } from '../..';

import { MenuButtonsDiv, MenuButton } from './styled';

const DesktopMenu = function DesktopMenuComponent({ setCurrentPage } : PageProps) {
    return (
        <MenuButtonsDiv>
            <MenuButton onClick={() => setCurrentPage('About')}>
                About
            </MenuButton>
            <MenuButton onClick={() => setCurrentPage('Dashboard')}>
                Dashboard
            </MenuButton>
        </MenuButtonsDiv>
    );
};

export default DesktopMenu;
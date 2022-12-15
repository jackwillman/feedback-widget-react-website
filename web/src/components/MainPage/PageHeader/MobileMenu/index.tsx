import { PageHeaderProps } from '..';
import MobileMenuList from './MobileMenuList';

import {
    MenuListPopover,
    MenuListButton,
    MenuListIcon,
    MenuListPanel
} from './styled';

const MobileMenu = function MobileMenuComponent(
    { 
        setCurrentPage,
        setIsLoggedIn,
        isLoggedIn
    } : PageHeaderProps
) {
    return (
        <MenuListPopover>
            <MenuListButton>
                <MenuListIcon weight='bold'/>
            </MenuListButton>

            <MenuListPanel>
                <MobileMenuList
                    setCurrentPage={ setCurrentPage }
                    setIsLoggedIn={ setIsLoggedIn }
                    isLoggedIn={ isLoggedIn }
                />
            </MenuListPanel >
        </MenuListPopover>
    );
};

export default MobileMenu;
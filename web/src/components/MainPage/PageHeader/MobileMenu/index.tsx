import { ExistingPage } from '../..';
import MobileMenuList from './MobileMenuList';

import {
    MenuListPopover,
    MenuListButton,
    MenuListIcon,
    MenuListPanel
} from './styled';

interface MobileMenuProps {
    setCurrentPage : ( currentPage : ExistingPage ) => void;
    setIsLoggedIn : ( isLoggedIn : boolean) => void;
    isLoggedIn : boolean;
};

const MobileMenu = function MobileMenuComponent(
    { 
        setCurrentPage,
        setIsLoggedIn,
        isLoggedIn
    } : MobileMenuProps
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
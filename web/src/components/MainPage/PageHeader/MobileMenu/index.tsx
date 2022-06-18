import { PageProps } from '../..';
import MobileMenuList from './MobileMenuList';

import {
    MenuListPopover,
    MenuListButton,
    MenuListIcon,
    MenuListPanel
} from './styled';

const MobileMenu = function MobileMenuComponent({ setCurrentPage } : PageProps) {
    return (
        <MenuListPopover>

            <MenuListButton>
                <MenuListIcon weight='bold'/>
            </MenuListButton>

            <MenuListPanel>
                <MobileMenuList setCurrentPage={ setCurrentPage }/>
            </MenuListPanel >

        </MenuListPopover>
    );
};

export default MobileMenu;
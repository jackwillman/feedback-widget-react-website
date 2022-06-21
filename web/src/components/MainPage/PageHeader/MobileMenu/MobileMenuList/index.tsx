import { PageProps } from '../../..';

import { 
    MenuList, 
    MenuItem1, 
    MenuItem2,
    MenuItem3,
    MenuItemText 
} from './styled';

const MobileMenuList = function MobileMenuListComponent(
    { setCurrentPage } : PageProps
) {
    return (
        <MenuList>
            <MenuItem1 onClick={() => setCurrentPage('Home')}>
                <MenuItemText>Home</MenuItemText>
            </MenuItem1>
            <MenuItem2 onClick={() => setCurrentPage('About')}>
                <MenuItemText>About</MenuItemText>
            </MenuItem2>
            <MenuItem3 onClick={() => setCurrentPage('Dashboard')}>
                <MenuItemText>Dashboard</MenuItemText>
            </MenuItem3>
        </MenuList>
    );
};

export default MobileMenuList;
import { PageProps } from '../../..';

import { MenuList, MenuItem1, MenuItem2 } from './styled';

const MobileMenuList = function MobileMenuListComponent(
    { setCurrentPage } : PageProps
) {
    return (
        <MenuList>
            <MenuItem1 onClick={() => setCurrentPage('About')}>
                About
            </MenuItem1>
            <MenuItem2 onClick={() => setCurrentPage('Dashboard')}>
                Dashboard
            </MenuItem2>
        </MenuList>
    );
};

export default MobileMenuList;
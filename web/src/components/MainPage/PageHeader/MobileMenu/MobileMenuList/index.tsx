import { PageHeaderProps } from '../..';

import { 
    MenuList, 
    MenuItem1, 
    MenuItem2,
    MenuItem3,
    MenuItem4,
    MenuItemText 
} from './styled';

const MobileMenuList = function MobileMenuListComponent(
    { 
        setCurrentPage,
        setIsLoggedIn,
        isLoggedIn
    } : PageHeaderProps
) {
    return (
        <>
            {
                isLoggedIn
                ?
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
                        <MenuItem4 onClick={() => {
                            setIsLoggedIn(false);
                            setCurrentPage('Home');
                        }}>
                            <MenuItemText>Log Out</MenuItemText>
                        </MenuItem4>
                    </MenuList>
                :
                    <MenuList>
                        <MenuItem1 onClick={() => setCurrentPage('Home')}>
                            <MenuItemText>Home</MenuItemText>
                        </MenuItem1>
                        <MenuItem2 onClick={() => setCurrentPage('About')}>
                            <MenuItemText>About</MenuItemText>
                        </MenuItem2>
                        <MenuItem3 onClick={() => setCurrentPage('Login')}>
                            <MenuItemText>Log In</MenuItemText>
                        </MenuItem3>
                        <MenuItem4 onClick={() => setCurrentPage('Signup')}>
                            <MenuItemText>Sign Up</MenuItemText>
                        </MenuItem4>
                    </MenuList>
            }
        </>
    );
};

export default MobileMenuList;
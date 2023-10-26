import { ExistingPage } from '../../../pageTypes';
import { 
    MenuList, 
    MenuItem1, 
    MenuItem2,
    MenuItem3,
    MenuItem4,
    MenuItemText 
} from './styled';

interface MobileMenuListProps {
    setCurrentPage : ( currentPage : ExistingPage ) => void;
    isLoggedIn : boolean;
};

const MobileMenuList = function MobileMenuListComponent(
    { 
        setCurrentPage,
        isLoggedIn
    } : MobileMenuListProps
) {
    return ( 
        <>        
            { isLoggedIn            
                ? (
                    <MenuList>
                        <MenuItem1 onClick={ () => setCurrentPage('Home') }>
                            <MenuItemText>Home</MenuItemText>
                        </MenuItem1>
                        <MenuItem2 onClick={ () => setCurrentPage('About') }>
                            <MenuItemText>About</MenuItemText>
                        </MenuItem2>
                        <MenuItem3 onClick={ () => setCurrentPage('Dashboard') }>
                            <MenuItemText>Dashboard</MenuItemText>
                        </MenuItem3>
                        <MenuItem4 onClick={ () => { setCurrentPage('LogOut') } }>
                            <MenuItemText>Log Out</MenuItemText>
                        </MenuItem4>
                    </MenuList>
                )
                
                : (
                    <MenuList>                
                        <MenuItem1 onClick={ () => setCurrentPage('Home') }>
                            <MenuItemText>Home</MenuItemText>
                        </MenuItem1>
                        <MenuItem2 onClick={() => setCurrentPage('About')}>
                            <MenuItemText>About</MenuItemText>
                        </MenuItem2>
                        <MenuItem3 onClick={() => setCurrentPage('Login')}>
                            <MenuItemText>Log In</MenuItemText>
                        </MenuItem3>
                        <MenuItem4 onClick={ () => setCurrentPage('Signup') }>
                            <MenuItemText>Sign Up</MenuItemText>
                        </MenuItem4>
                    </MenuList>
                )
            }        
        </> 
    );
};

export default MobileMenuList;
import { ExistingPage } from '../../../../lib/types';

import { 
    MenuButtonsDiv, 
    MenuButton 
} from './styled';

interface DesktopMenuProps {
    setCurrentPage : ( currentPage : ExistingPage ) => void;
    setIsLoggedIn : ( isLoggedIn : boolean) => void;
    isLoggedIn : boolean;
};

const DesktopMenu = function DesktopMenuComponent(
    { 
        setCurrentPage,
        setIsLoggedIn,
        isLoggedIn
    } : DesktopMenuProps
) {
    return ( <>
        { isLoggedIn
            ? <MenuButtonsDiv>  
                <MenuButton onClick={() => setCurrentPage('About')}>
                    About
                </MenuButton>
                <MenuButton onClick={() => setCurrentPage('Dashboard')}>
                    Dashboard
                </MenuButton>
                <MenuButton onClick={() => setCurrentPage('LogOut')}>
                    Log Out
                </MenuButton>
            </MenuButtonsDiv>

            : <MenuButtonsDiv>                
                <MenuButton onClick={() => setCurrentPage('About')}>
                    About
                </MenuButton>
                <MenuButton onClick={() => setCurrentPage('Login')}>
                    Log In
                </MenuButton>
                <MenuButton onClick={() => setCurrentPage('Signup')}>
                    Sign Up
                </MenuButton>
            </MenuButtonsDiv>
        }        
    </> );
};

export default DesktopMenu;
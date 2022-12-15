import { PageHeaderProps } from '..';

import { MenuButtonsDiv, MenuButton } from './styled';

const DesktopMenu = function DesktopMenuComponent(
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
                    <MenuButtonsDiv>
                        <MenuButton onClick={() => setCurrentPage('About')}>
                            About
                        </MenuButton>
                        <MenuButton onClick={() => setCurrentPage('Dashboard')}>
                            Dashboard
                        </MenuButton>
                        <MenuButton onClick={() => {
                            setIsLoggedIn(false);
                            setCurrentPage('Home');
                        }}>
                            Log Out
                        </MenuButton>
                    </MenuButtonsDiv>
                :
                    <MenuButtonsDiv>
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
        </>
    );
};

export default DesktopMenu;
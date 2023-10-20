import { useEffect } from 'react';

import { 
    PageDiv,
    BigText, 
    TextDiv
} from '../styled';

interface LogOutProps {
    setIsLoggedIn : (isLoggedIn : boolean) => void;
};
const LogOut = function LogOutPageComponent(
    { setIsLoggedIn } : LogOutProps
) {
    useEffect(() => setIsLoggedIn(false), []);
    
    return (
        <PageDiv>
            <TextDiv>
                <BigText>
                    Logged out.
                </BigText>
            </TextDiv>
        </PageDiv>
    );
};

export default LogOut;

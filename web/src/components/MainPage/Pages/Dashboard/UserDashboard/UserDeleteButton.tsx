import { useState } from 'react';

import { deleteUserHandler } from '../../../../../lib/requestHandlers';
import {
    ExistingPage,
    CookiesType
} from '../../../pageTypes';

import Loading from '../../../../Misc/Loading';

import { 
    UserDeleteButtonStyle,
    UserDeletePopup,
    UserDeletePopupPanel,
    UserDeletePopupText,
    UserDeletePopupButton
 } from './styled';

interface LoginDeleteButtonProps {
    setIsLoggedIn : (isLoggedIn : boolean) => void;
    setCurrentPage : (currentPage : ExistingPage) => void;       
    cookies : CookiesType;
};

const UserDeleteButton = function DashboardUserDeleteButtonComponent ({ 
    setIsLoggedIn,
    setCurrentPage,        
    cookies
} : LoginDeleteButtonProps) {
    const [deleteError, setDeleteError] = useState('');
    const [isDeletingUser, setIsDeletingUser] = useState(false);

    return ( 
        <UserDeletePopup
            trigger={ (
                <UserDeleteButtonStyle
                    disabled={ isDeletingUser }
                >
                    { isDeletingUser
                        ? <Loading />
                        : "Delete User"
                    }
                </UserDeleteButtonStyle> 
            ) }
        >
            <UserDeletePopupPanel>
                <UserDeletePopupText>
                    Are you sure you want to delete your User Account?
                </UserDeletePopupText>
                <UserDeletePopupButton
                    onClick={ () => deleteUserHandler({
                        setDeleteError,
                        setIsDeletingUser,
                        setIsLoggedIn,
                        setCurrentPage,        
                        cookies
                    }) }
                >
                    Delete my account
                </UserDeletePopupButton>
            </UserDeletePopupPanel>
        </UserDeletePopup>
    );
};

export default UserDeleteButton;
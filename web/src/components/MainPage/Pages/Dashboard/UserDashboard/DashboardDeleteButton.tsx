import Loading from '../../../../Misc/Loading';

import { deleteUserHandler } from '../../../../../lib/requestHandlers';
import {
    ExistingPage,
    CookiesType
} from '../../../pageTypes';

import { 
    DashboardDeleteButtonClass,
    DashboardDeletePopup,
    DashboardDeleteConfirmationPopup,
    DashboardDeleteConfirmationText,
    DashboardDeleteConfirmationButton
 } from '../styled';
import { useState } from 'react';

interface LoginDeleteButtonProps {
    setIsLoggedIn : (isLoggedIn : boolean) => void;
    setCurrentPage : (currentPage : ExistingPage) => void;       
    cookies : CookiesType;
};

const DashboardDeleteButton = function ({ 
    setIsLoggedIn,
    setCurrentPage,        
    cookies
} : LoginDeleteButtonProps) {
    const [deleteError, setDeleteError] = useState('');
    const [isDeletingUser, setIsDeletingUser] = useState(false);

    return ( 
        <DashboardDeletePopup
            trigger={ (
                <DashboardDeleteButtonClass
                    disabled={ isDeletingUser }
                >
                    { isDeletingUser
                        ? <Loading />
                        : "Delete User"
                    }
                </DashboardDeleteButtonClass> 
            ) }
        >
            <DashboardDeleteConfirmationPopup>
                <DashboardDeleteConfirmationText>
                    Are you sure you want to delete your User Account?
                </DashboardDeleteConfirmationText>
                <DashboardDeleteConfirmationButton
                    onClick={ () => deleteUserHandler({
                        setDeleteError,
                        setIsDeletingUser,
                        setIsLoggedIn,
                        setCurrentPage,        
                        cookies
                    }) }
                >
                    Delete my account
                </DashboardDeleteConfirmationButton>
            </DashboardDeleteConfirmationPopup>
        </DashboardDeletePopup>
    );
};

export default DashboardDeleteButton;
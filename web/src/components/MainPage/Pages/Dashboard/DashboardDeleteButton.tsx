import Loading from '../../../Misc/Loading';

import { 
    DashboardDeleteButtonClass,
    DashboardDeletePopup,
    DashboardDeleteConfirmationPopup,
    DashboardDeleteConfirmationText,
    DashboardDeleteConfirmationButton
 } from './styled';

interface LoginDeleteButtonProps {
    isDeletingUser : boolean;
};

const DashboardDeleteButton = function ({ 
        isDeletingUser, 
    } : LoginDeleteButtonProps
) {
    return ( <DashboardDeletePopup
        trigger={ 
            <DashboardDeleteButtonClass
                disabled={ isDeletingUser }
            >
                { isDeletingUser
                    ? <Loading />
                    : 'Delete User'
                }
            </DashboardDeleteButtonClass> 
        }
    >
        <DashboardDeleteConfirmationPopup>
            <DashboardDeleteConfirmationText>
                Are you sure you want to delete your User Account?
            </DashboardDeleteConfirmationText>
            <DashboardDeleteConfirmationButton>
                Delete my account
            </DashboardDeleteConfirmationButton>
        </DashboardDeleteConfirmationPopup>
    </DashboardDeletePopup>);
};

export default DashboardDeleteButton;
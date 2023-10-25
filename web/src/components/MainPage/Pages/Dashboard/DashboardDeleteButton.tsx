import Loading from '../../../Misc/Loading';

import { 
    DashboardDeleteButtonClass,
    DashboardDeletePopup,
    DashboardDeleteConfirmationPopup
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
            Are you sure?
        </DashboardDeleteConfirmationPopup>
    </DashboardDeletePopup>);
};

export default DashboardDeleteButton;
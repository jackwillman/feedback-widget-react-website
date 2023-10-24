import Loading from '../../../Misc/Loading';

import { DashboardDeleteButtonClass } from './styled';

interface LoginDeleteButtonProps {
    isDeletingUser : boolean;
};

const DashboardDeleteButton = function ({ 
        isDeletingUser, 
    } : LoginDeleteButtonProps
) {
    return ( <DashboardDeleteButtonClass
        type="submit"
        disabled={ isDeletingUser }
    >
        { isDeletingUser
            ? <Loading />
            : 'Delete User'
        }
    </DashboardDeleteButtonClass> );
};

export default DashboardDeleteButton;
import { 
    PageDiv,
    BigText
} from '../styled';
import {     
    AccountDeletedTextDiv
} from './styled';

const AccountDeleted = function AccountDeletedPageComponent() {
    return ( <PageDiv>
        <AccountDeletedTextDiv>
            <BigText>
                Account Deleted.
            </BigText>
        </AccountDeletedTextDiv>
    </PageDiv> );
};

export default AccountDeleted;

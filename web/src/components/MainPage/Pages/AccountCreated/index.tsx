import { 
    PageDiv,
    BigText,
    NormalText 
} from '../styled';
import {     
    AccountCreatedTextDiv,
    AccountCreatedNormalTextDiv
} from './styled';

const AccountCreated = function AccountCreatedPageComponent() {
    return (
        <PageDiv>
            <AccountCreatedTextDiv>
                <BigText>
                    Account Created!
                </BigText>
                
                <AccountCreatedNormalTextDiv>
                    <NormalText> 
                    <p>
                        You can now Log in to your account.
                    </p>

                    </NormalText>
                </AccountCreatedNormalTextDiv>
            </AccountCreatedTextDiv>
        </PageDiv>
    );
};

export default AccountCreated;

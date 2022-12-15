import api from '../../../../lib/api';
import config from '../../../../lib/config';

import { CookiesType } from '..';


import { 
    PageDiv, 
    TextDiv, 
    NormalText,
    BiggerText 
} from '../styled';

interface DashboardProps {
    cookies : CookiesType;
};

const Dashboard = function DashboardPageComponent(
    { cookies } : CookiesType
) {
    return (
        <PageDiv>
            <TextDiv>
                <BiggerText>
                    On the way
                </BiggerText>
                <NormalText>
                    Import here: { cookies[config.sessionToken.cookieName] }
                </NormalText>
            </TextDiv>
        </PageDiv>
    );
};

export default Dashboard;
import api from '../../../../lib/api';

import { 
    PageDiv, 
    TextDiv, 
    NormalText,
    BiggerText 
} from '../styled';

const Dashboard = function DashboardPageComponent() {
    return (
        <PageDiv>
            <TextDiv>
                <BiggerText>
                    On the way
                </BiggerText>
                <NormalText>
                    Import here
                </NormalText>
            </TextDiv>
        </PageDiv>
    );
};

export default Dashboard;
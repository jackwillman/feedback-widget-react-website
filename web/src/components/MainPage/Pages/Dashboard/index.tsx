import api from '../../../../lib/api';

import { PageProps } from "../..";

import { 
    PageDiv, 
    TextDiv, 
    NormalText,
    BiggerText 
} from '../styled';

const Dashboard = function DashboardPageComponent({ setCurrentPage } : PageProps) {
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
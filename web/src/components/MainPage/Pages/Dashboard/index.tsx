import { PageProps } from "../..";

import { PageDiv, TextDiv, BiggerText } from '../styled';

const Dashboard = function DashboardComponent({ setCurrentPage } : PageProps) {
    return (
        <PageDiv>
            <TextDiv>
                <BiggerText>
                    Coming soon.
                </BiggerText>
            </TextDiv>
        </PageDiv>
    );
};

export default Dashboard;
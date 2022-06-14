import { PageProps } from "../..";
import { PageDiv } from '../styled';

const Dashboard = function DashboardComponent({ setCurrentPage } : PageProps) {
    return (
        <PageDiv>
            <p>Dashboard</p>
        </PageDiv>
    );
};

export default Dashboard;
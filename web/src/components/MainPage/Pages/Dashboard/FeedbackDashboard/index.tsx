import FeedbackDashboardPanel from './FeedbackDashboardPanel';

import { 
    FeedbackDashboardPopover,
    FeedbackDashboardButton,
    FeedbackDashboardButtonText
 } from './styled';

const FeedbackDashboard = function FeedbackDashboardComponent() {
    return (
        <FeedbackDashboardPopover>
            <FeedbackDashboardButton>
                <FeedbackDashboardButtonText>My Feedbacks</FeedbackDashboardButtonText>
            </FeedbackDashboardButton>
                
            <FeedbackDashboardPanel />
        </FeedbackDashboardPopover>
    );
};

export default FeedbackDashboard;
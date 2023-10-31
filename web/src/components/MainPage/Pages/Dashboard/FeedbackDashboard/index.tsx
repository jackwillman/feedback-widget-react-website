import FeedbackDashboardPanel from './FeedbackDashboardPanel';

import { 
    FeedbackDashboardPopover,
    FeedbackDashboardButton
 } from './styled';

const FeedbackDashboard = function FeedbackDashboardComponent() {
    return (
        <FeedbackDashboardPopover>
            <FeedbackDashboardButton>Feedbacks history</FeedbackDashboardButton>
                
            <FeedbackDashboardPanel />
        </FeedbackDashboardPopover>
    );
};

export default FeedbackDashboard;
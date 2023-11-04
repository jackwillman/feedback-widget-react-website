
import { FeedbackData } from "../../../../../lib/types";
import { 
    FeedbackDashboardPanelStyle
} from "./styled";

interface FeedbackDashboardPanelProps {
    feedbackList : FeedbackData[] | null; 
};

const FeedbackDashboardPanel = function FeedbackDashboardPanelComponent({
    feedbackList
} : FeedbackDashboardPanelProps) {

    return (
        <FeedbackDashboardPanelStyle>

        </FeedbackDashboardPanelStyle>
    )
};

export default FeedbackDashboardPanel;
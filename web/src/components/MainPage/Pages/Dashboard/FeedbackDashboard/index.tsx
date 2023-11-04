import { useState } from 'react';

import { 
    CookiesType, 
    FeedbackData 
} from '../../../../../lib/types';
import { handleGetFeedback } from '../../../../../lib/requestHandlers';
import FeedbackDashboardPanel from './FeedbackDashboardPanel';

import { 
    FeedbackDashboardPopover,
    FeedbackDashboardButton,
    FeedbackDashboardButtonText
 } from './styled';

 interface FeedbackDashboardProps {
    cookies : CookiesType;
};
const FeedbackDashboard = function FeedbackDashboardComponent({
    cookies
} : FeedbackDashboardProps) {
    const [isFeedbackGotten, setIsFeedbackGotten] = useState(false);
    const [getFeedbackError, setGetFeedbackError] = useState('');
    const [feedbackList, setFeedbackList] = useState<FeedbackData[] | null>(null); 
    
    return (
        <FeedbackDashboardPopover>
            <FeedbackDashboardButton
                onClick={ () => handleGetFeedback({
                    setFeedbackList,
                    setIsFeedbackGotten,
                    setGetFeedbackError,
                    cookies
                }) }
            >
                <FeedbackDashboardButtonText>My Feedbacks</FeedbackDashboardButtonText>
            </FeedbackDashboardButton>
                
            <FeedbackDashboardPanel feedbackList={ feedbackList } />
        </FeedbackDashboardPopover>
    );
};

export default FeedbackDashboard;
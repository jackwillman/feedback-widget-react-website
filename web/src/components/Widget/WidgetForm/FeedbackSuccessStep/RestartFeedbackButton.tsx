import { FeedbackSuccessStepProps } from '.';
import { RestartFeedbackButtonStyle } from './styled';

const RestartFeedbackButton = function RestartFeedbackButtonComponent({
    onFeedbackRestartRequested
} : FeedbackSuccessStepProps) {
    return (
        <RestartFeedbackButtonStyle 
            type="button"
            onClick={ onFeedbackRestartRequested }
        >
            I want to send another feedback.
        </RestartFeedbackButtonStyle>
    );
};

export default RestartFeedbackButton;
import { FeedbackSuccessStepProps } from '.';
import { RestartFeedbackButtonStyle } from './styled';

const RestartFeedbackButton = function RestartFeedbackButtonComponent(
    {
        onFeedbackRestartRequested
    } : FeedbackSuccessStepProps
) {
    return (
        <RestartFeedbackButtonStyle 
            type="button"
            onClick={ onFeedbackRestartRequested }
        >
            Quero enviar outro!
        </RestartFeedbackButtonStyle>
    );
};

export default RestartFeedbackButton;
import { FeedbackSuccessStepProps } from '.';
import styled from './styled';

const RestartFeedbackButton = function RestartFeedbackButtonComponent(
    {
        onFeedbackRestartRequested
    } : FeedbackSuccessStepProps
) {
    return (
        <styled.RestartFeedbackButton 
            type="button"
            onClick={ onFeedbackRestartRequested }
        >
            Quero enviar outro!
        </styled.RestartFeedbackButton>
    );
};

export default RestartFeedbackButton;
import { FeedbackSuccessStepProps } from '.';

const RestartFeedbackButton = function RestartFeedbackButtonComponent(
    {
        onFeedbackRestartRequested
    } : FeedbackSuccessStepProps
) {
    return (
        <button 
            type="button"
            className="feedback-success-restart-button"
            onClick={ onFeedbackRestartRequested }
        >
            Quero enviar outro!
        </button>
    );
};

export default RestartFeedbackButton;
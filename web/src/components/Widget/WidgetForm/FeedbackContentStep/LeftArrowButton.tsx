import { FeedbackArrowLeftButton, FeedbackArrowLeftIcon } from "./styled";

interface FeedbackContentStepProps {
    onFeedbackRestartRequested : () => void;
};

const LeftArrowButton = function LeftArrowButtonComponent(
    { onFeedbackRestartRequested } : FeedbackContentStepProps
) {
    return (
        <FeedbackArrowLeftButton 
            type="button" 
            onClick={ onFeedbackRestartRequested }
        >
            <FeedbackArrowLeftIcon weight="bold" />                
        </FeedbackArrowLeftButton>
    );
};

export default LeftArrowButton;
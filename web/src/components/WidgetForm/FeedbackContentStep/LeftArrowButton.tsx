import { ArrowLeft } from "phosphor-react";

interface FeedbackContentStepProps {
    onFeedbackRestartRequested : () => void;
};

const LeftArrowButton = function LeftArrowButtonComponent(
    { onFeedbackRestartRequested } : FeedbackContentStepProps
) {
    return (
        <button 
            type="button" 
            className="feedback-arrow-left-button"
            onClick={ onFeedbackRestartRequested }
        >
            <ArrowLeft weight="bold" className="feedback-arrow-left-icon"/>                
        </button>
    );
};

export default LeftArrowButton;
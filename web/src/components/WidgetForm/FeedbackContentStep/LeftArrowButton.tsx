import styled from "./styled";


interface FeedbackContentStepProps {
    onFeedbackRestartRequested : () => void;
};

const LeftArrowButton = function LeftArrowButtonComponent(
    { onFeedbackRestartRequested } : FeedbackContentStepProps
) {
    return (
        <styled.FeedbackArrowLeftButton 
            type="button" 
            onClick={ onFeedbackRestartRequested }
        >
            <styled.FeedbackArrowLeftIcon weight="bold" />                
        </styled.FeedbackArrowLeftButton>
    );
};

export default LeftArrowButton;
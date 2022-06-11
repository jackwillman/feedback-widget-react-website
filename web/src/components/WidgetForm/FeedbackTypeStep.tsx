import { FeedbackType, feedbackTypes } from ".";
import CloseButton from "../Misc/CloseButton";

interface FeedbackTypeStepProps {
    handleSetFeedbackType : (type : FeedbackType) => void;
};

const FeedbackTypeStep = function FeedbackTypeStep({ 
    handleSetFeedbackType 
} : FeedbackTypeStepProps
) {
    return ( <>
        <header>
            <span className="widget-form-header">Deixe seu feedback</span>
            <CloseButton />
        </header>

        <div className="widget-form-body">
            { Object.entries(feedbackTypes).map(([key, value]) => {
                return (
                    <button
                        key={ key }
                        className="widget-feedback-button"
                        onClick={ () => handleSetFeedbackType(key as FeedbackType) }
                        type="button"
                    >
                        <img src={ value.image.source } alt={ value.image.alt } />
                        <span>{ value.title }</span>
                    </button>
                );
            }) }
        </div>
    </> );
};

export default FeedbackTypeStep;
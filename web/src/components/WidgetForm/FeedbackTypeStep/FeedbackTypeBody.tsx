import { FeedbackType, feedbackTypes } from "../feedbackType";
import { FeedbackTypeStepProps } from ".";

const FeedbackTypeBody = function FeedbackTypeBodyComponent({ 
    handleSetFeedbackType 
} : FeedbackTypeStepProps
) {
    return (
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
    );
};

export default FeedbackTypeBody;
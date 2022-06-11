import { FeedbackType, feedbackTypes } from "../feedbackType";

interface FeedbackContentHeaderProps {
    feedbackType : FeedbackType;
};

const FeedbackContentHeader = function FeedbackContentHeaderComponent(
    { feedbackType } : FeedbackContentHeaderProps
) {
    const feedbackTypeInfo = feedbackTypes[feedbackType];

    return (
        <span className="feedback-form-header">
            <img src={ feedbackTypeInfo.image.source } alt={ feedbackTypeInfo.image.alt } className="feedback-form-image"/>
            { feedbackTypeInfo.title }
        </span>
    );
};

export default FeedbackContentHeader;
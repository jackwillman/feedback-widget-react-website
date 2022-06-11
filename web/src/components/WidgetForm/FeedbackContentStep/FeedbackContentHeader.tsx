import { FeedbackType, feedbackTypes } from "../feedbackType";

import styled from './styled';

interface FeedbackContentHeaderProps {
    feedbackType : FeedbackType;
};

const FeedbackContentHeader = function FeedbackContentHeaderComponent(
    { feedbackType } : FeedbackContentHeaderProps
) {
    const feedbackTypeInfo = feedbackTypes[feedbackType];

    return (
        <styled.FeedbackFormHeader>
            <styled.FeedbackFormImage src={ feedbackTypeInfo.image.source } alt={ feedbackTypeInfo.image.alt } />
            { feedbackTypeInfo.title }
        </styled.FeedbackFormHeader>
    );
};

export default FeedbackContentHeader;
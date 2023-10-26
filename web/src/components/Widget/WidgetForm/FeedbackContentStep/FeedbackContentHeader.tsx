import { 
    FeedbackType, 
    feedbackTypes 
} from "../feedbackType";
import { 
    FeedbackFormHeader, 
    FeedbackFormImage
} from './styled';

interface FeedbackContentHeaderProps {
    feedbackType : FeedbackType;
};

const FeedbackContentHeader = function FeedbackContentHeaderComponent(
    { feedbackType } : FeedbackContentHeaderProps
) {
    const feedbackTypeInfo = feedbackTypes[feedbackType];

    return (
        <FeedbackFormHeader>
            <FeedbackFormImage 
                src={ feedbackTypeInfo.image.source } 
                alt={ feedbackTypeInfo.image.alt } 
            />
            { feedbackTypeInfo.title }
        </FeedbackFormHeader>
    );
};

export default FeedbackContentHeader;
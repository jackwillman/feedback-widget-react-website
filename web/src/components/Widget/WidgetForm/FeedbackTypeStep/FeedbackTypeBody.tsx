import { FeedbackType, feedbackTypes } from "../feedbackType";
import { FeedbackTypeStepProps } from ".";

import { FeedbackTypeBodyDiv, FeedbackTypeButton } from './styled';

const FeedbackTypeBody = function FeedbackTypeBodyComponent({ 
    handleSetFeedbackType 
} : FeedbackTypeStepProps
) {
    return (
        <FeedbackTypeBodyDiv>
            { Object.entries(feedbackTypes).map(([key, value]) => {
                return (
                    <FeedbackTypeButton
                        key={ key }
                        onClick={ () => handleSetFeedbackType(key as FeedbackType) }
                        type="button"
                    >
                        <img src={ value.image.source } alt={ value.image.alt } />
                        <span>{ value.title }</span>
                    </FeedbackTypeButton>
                );
            }) }
        </FeedbackTypeBodyDiv>
    );
};

export default FeedbackTypeBody;
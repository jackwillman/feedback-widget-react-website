import { FeedbackType, feedbackTypes } from "../feedbackType";
import { FeedbackTypeStepProps } from ".";

import styled from './styled';

const FeedbackTypeBody = function FeedbackTypeBodyComponent({ 
    handleSetFeedbackType 
} : FeedbackTypeStepProps
) {
    return (
        <styled.FeedbackTypeBody>
            { Object.entries(feedbackTypes).map(([key, value]) => {
                return (
                    <styled.FeedbackTypeButton
                        key={ key }
                        onClick={ () => handleSetFeedbackType(key as FeedbackType) }
                        type="button"
                    >
                        <img src={ value.image.source } alt={ value.image.alt } />
                        <span>{ value.title }</span>
                    </styled.FeedbackTypeButton>
                );
            }) }
        </styled.FeedbackTypeBody>
    );
};

export default FeedbackTypeBody;
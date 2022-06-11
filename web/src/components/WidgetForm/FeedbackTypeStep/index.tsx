import { FeedbackType } from "..";
import FeedbackTypeHeader from "./FeedbackTypeHeader";
import FeedbackTypeBody from "./FeedbackTypeBody";

export interface FeedbackTypeStepProps {
    handleSetFeedbackType : (type : FeedbackType) => void;
};

const FeedbackTypeStep = function FeedbackTypeStep({ 
    handleSetFeedbackType 
} : FeedbackTypeStepProps
) {
    return ( 
        <>
            <FeedbackTypeHeader />
            <FeedbackTypeBody 
                handleSetFeedbackType={ handleSetFeedbackType }
            />
        </> 
    );
};

export default FeedbackTypeStep;
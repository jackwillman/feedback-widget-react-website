import CloseButton from "../../Misc/CloseButton";

import successIcon from "../../../images/success.svg";
import RestartFeedbackButton from "./RestartFeedbackButton";

export interface FeedbackSuccessStepProps {
    onFeedbackRestartRequested : () => void;
};

const FeedbackSuccessStep = function FeedbackSuccessStep(
    {
        onFeedbackRestartRequested
    } : FeedbackSuccessStepProps
) {
    return ( <>
        <header>
            <CloseButton />
        </header>

        <div className="feedback-success">
            <img src={ successIcon } />

            <span className="feedback-success-message">
                Agradecemos o feedback!
            </span>

            <RestartFeedbackButton 
                onFeedbackRestartRequested={ onFeedbackRestartRequested }
            />
        </div>
    </> );
};

export default FeedbackSuccessStep;
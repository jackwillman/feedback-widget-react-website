import CloseButton from "../../../Misc/CloseButton";
import RestartFeedbackButton from "./RestartFeedbackButton";

import successIcon from "../../../../images/success.svg";

import { FeedbackSuccess, FeedbackSuccessMessage } from './styled';

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

        <FeedbackSuccess>
            <img src={ successIcon } />

            <FeedbackSuccessMessage>
                Agradecemos o feedback!
            </FeedbackSuccessMessage>

            <RestartFeedbackButton 
                onFeedbackRestartRequested={ onFeedbackRestartRequested }
            />
        </FeedbackSuccess>
    </> );
};

export default FeedbackSuccessStep;
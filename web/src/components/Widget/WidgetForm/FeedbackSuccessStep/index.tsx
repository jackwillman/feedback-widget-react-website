import CloseButton from "../../Misc/CloseButton";
import RestartFeedbackButton from "./RestartFeedbackButton";

import successIcon from "../../../../images/success.svg";

import styled from './styled';

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

        <styled.FeedbackSuccess>
            <img src={ successIcon } />

            <styled.FeedbackSuccessMessage>
                Agradecemos o feedback!
            </styled.FeedbackSuccessMessage>

            <RestartFeedbackButton 
                onFeedbackRestartRequested={ onFeedbackRestartRequested }
            />
        </styled.FeedbackSuccess>
    </> );
};

export default FeedbackSuccessStep;
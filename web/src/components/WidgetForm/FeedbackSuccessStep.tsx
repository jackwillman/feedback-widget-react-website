import CloseButton from "@components/Misc/CloseButton";

import successIcon from "@images/success.svg";

interface FeedbackSuccessStepProps {
    onFeedbackRestartRequested : () => void;
};

const FeedbackSuccessStep = function FeedbackSuccessStep({
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

            <button 
                type="button"
                className="feedback-success-restart-button"
                onClick={ onFeedbackRestartRequested }
            >
                Quero enviar outro!
            </button>
        </div>
    </> );
};

export default FeedbackSuccessStep;
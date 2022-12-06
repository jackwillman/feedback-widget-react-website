import Loading from "../../../Misc/Loading";

import { FeedbackFormSubmit } from './styled';

interface SubmitButtonProps {
    isSendingFeedback : boolean;
    comment : string;
};

const SubmitButton = function FeedbackFormSubmitButtonComponent(
    { isSendingFeedback, comment } : SubmitButtonProps
) {
    return (
        <FeedbackFormSubmit 
            type="submit" 
            disabled={ comment.length === 0 || isSendingFeedback }
        >
            { 
                isSendingFeedback
                    ? <Loading />
                    : 'Enviar Feedback' 
            }
        </FeedbackFormSubmit>
    );
};

export default SubmitButton;
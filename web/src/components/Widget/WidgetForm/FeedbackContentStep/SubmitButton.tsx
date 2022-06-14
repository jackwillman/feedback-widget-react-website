import Loading from "../../Misc/Loading";

import styled from './styled';

interface SubmitButtonProps {
    isSendingFeedback : boolean
    comment : string
};

const SubmitButton = function SubmitButtonComponent(
    { isSendingFeedback, comment } : SubmitButtonProps
) {
    return (
        <styled.FeedbackFormSubmit 
            type="submit" 
            disabled={ comment.length === 0 || isSendingFeedback }
        >
            { 
                isSendingFeedback
                    ? <Loading />
                    : 'Enviar Feedback' 
            }
        </styled.FeedbackFormSubmit>
    );
};

export default SubmitButton;
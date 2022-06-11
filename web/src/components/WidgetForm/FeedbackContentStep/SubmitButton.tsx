import Loading from "../../Misc/Loading";

interface SubmitButtonProps {
    isSendingFeedback : boolean
    comment : string
};

const SubmitButton = function SubmitButtonComponent(
    { isSendingFeedback, comment } : SubmitButtonProps
) {
    return (
        <button 
            type="submit" 
            className="feedback-form-submit"
            disabled={ comment.length === 0 || isSendingFeedback }
        >
            { 
                isSendingFeedback
                    ? <Loading />
                    : 'Enviar Feedback' 
            }
        </button>
    );
};

export default SubmitButton;
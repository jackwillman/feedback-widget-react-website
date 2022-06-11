interface FormTextAreaProps {
    setComment : (comment : string) => void
};

const FormTextArea = function FormTextAreaComponent(
    { setComment } : FormTextAreaProps
) {
    return (
        <textarea
            className="feedback-form-text 
                scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent"
            placeholder="Conte com detalhes o que está acontecendo..."
            onChange={ event => setComment(event.target.value) }
        />
    );
};

export default FormTextArea;
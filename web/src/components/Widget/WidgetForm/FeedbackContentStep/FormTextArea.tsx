import { formTextAreaClass } from './styled';

interface FormTextAreaProps {
    setComment : (comment : string) => void;
};

const FormTextArea = function FormTextAreaComponent(
    { setComment } : FormTextAreaProps
) {
    return (
        <textarea
            className={formTextAreaClass}
            placeholder="Conte com detalhes o que está acontecendo..."
            onChange={ event => setComment(event.target.value) }
        />
    );
};

export default FormTextArea;
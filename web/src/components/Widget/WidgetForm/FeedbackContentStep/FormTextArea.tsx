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
            placeholder="Tell us what is happening in detail..."
            onChange={ event => setComment(event.target.value) }
        />
    );
};

export default FormTextArea;
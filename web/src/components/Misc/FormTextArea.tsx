interface FormTextAreaProps {
    setInput : (comment : string) => void;
    placeholder? : string;
    textClass : string
};

const FormTextArea = function FormTextAreaComponent({ 
    setInput,
    placeholder,
    textClass
} : FormTextAreaProps) {
    return (
        <textarea
            className={ textClass }
            placeholder={ placeholder }
            onChange={ event => setInput(event.target.value) }
        />
    );
};

export default FormTextArea;
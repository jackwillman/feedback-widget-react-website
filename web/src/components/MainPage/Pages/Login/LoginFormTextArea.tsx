import { loginTextAreaClass } from './styled';

interface FormTextAreaProps {
    setInput : (input : string) => void;
};

const LoginFormTextArea = function LoginFormTextAreaComponent(
    { setInput } : FormTextAreaProps
) {
    return (
        <textarea
            className={ loginTextAreaClass }
            onChange={ event => setInput(event.target.value) }
        />
    );
};

export default LoginFormTextArea;
import { accountFormTextAreaClass } from '../styled';

interface FormTextAreaProps {
    setInput : (input : string) => void;
};

const LoginFormTextArea = function LoginFormTextAreaComponent(
    { setInput } : FormTextAreaProps
) {
    return ( <textarea
        className={ accountFormTextAreaClass }
        onChange={ event => setInput(event.target.value) }
    /> );
};

export default LoginFormTextArea;
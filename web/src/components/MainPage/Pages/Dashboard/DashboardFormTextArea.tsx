import { dashboardFormTextClass } from './styled';

interface FormTextAreaProps {
    originalValue : string;
    setInput : (input : string) => void;
};

const DashboardFormTextArea = function DashboardFormTextAreaComponent(
    { originalValue, setInput } : FormTextAreaProps
) {
    return ( <textarea
        className={ dashboardFormTextClass }
        placeholder={ originalValue }
        onChange={ event => setInput(event.target.value) }
    />);
};

export default DashboardFormTextArea;
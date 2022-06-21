import CloseButton from "../../Misc/CloseButton";

import { FeedbackTypeHeaderSpan } from './styled';

const FeedbackTypeHeader = function FeedbackTypeHeaderComponent() {
    return (
    <header>
        <FeedbackTypeHeaderSpan>Deixe seu feedback</FeedbackTypeHeaderSpan>
        <CloseButton />
    </header>
    );
};

export default FeedbackTypeHeader;
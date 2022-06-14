import CloseButton from "../../Misc/CloseButton";

import styled from './styled';

const FeedbackTypeHeader = function FeedbackTypeHeaderComponent() {
    return (
    <header>
        <styled.FeedbackTypeHeader>Deixe seu feedback</styled.FeedbackTypeHeader>
        <CloseButton />
    </header>
    );
};

export default FeedbackTypeHeader;
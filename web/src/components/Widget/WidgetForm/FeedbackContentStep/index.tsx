import { FormEvent, useState } from "react";

import api from "../../../../lib/api";

import { FeedbackType } from "../feedbackType";
import CloseButton from "../../Misc/CloseButton";
import ScreenshotButton from "../../Misc/ScreenshotButton";
import LeftArrowButton from "./LeftArrowButton";
import FeedbackContentHeader from "./FeedbackContentHeader";
import FormTextArea from "./FormTextArea";
import SubmitButton from "./SubmitButton";

import styled from './styled';

interface FeedbackContentStepProps {
    feedbackType : FeedbackType;
    onFeedbackRestartRequested : () => void;
    onFeedbackSent : () => void;
};

const FeedbackContentStep = function FeedbackContentStep( {
    feedbackType, 
    onFeedbackRestartRequested,
    onFeedbackSent
} : FeedbackContentStepProps
) {
    const [screenshot, setScreenshot] = useState<string | null>(null);
    const [comment, setComment] = useState('');
    const [isSendingFeedback, setIsSendingFeedback] = useState(false);

    const handleSubmitFeedback = async function logsFeedbackTextAndScreenshot(
        event : FormEvent
    ) {
        event.preventDefault();
        
        setIsSendingFeedback(true);
    
        await api.post('/feedbacks', {
            type : feedbackType,
            comment,
            screenshot
        });

        setIsSendingFeedback(false);
        onFeedbackSent();
    };

    return ( <>
        <header>
            <LeftArrowButton 
                onFeedbackRestartRequested={ onFeedbackRestartRequested } 
            />
            <FeedbackContentHeader feedbackType={ feedbackType } />
            <CloseButton />
        </header>

        <styled.FeedbackForm onSubmit={ handleSubmitFeedback }>
            <FormTextArea setComment={ setComment }/>

            <styled.FeedbackFormFooter>
                <ScreenshotButton 
                    screenshot={ screenshot }
                    handleSetScreenshot={ setScreenshot }
                />

                <SubmitButton 
                    isSendingFeedback={ isSendingFeedback }
                    comment={ comment }
                />
            </styled.FeedbackFormFooter>
        </styled.FeedbackForm>
    </> );
};

export default FeedbackContentStep;
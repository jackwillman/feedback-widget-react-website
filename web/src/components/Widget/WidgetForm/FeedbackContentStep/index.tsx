import { useState } from 'react';

import { submitFeedbackHandler } from '../../../../lib/requestHandlers'
import { CookiesType } from '../../../../lib/types';

import { FeedbackType } from "../feedbackType";
import CloseButton from "../../../Misc/CloseButton";
import ScreenshotButton from "../../../Misc/ScreenshotButton";
import FormTextArea from "../../../Misc/FormTextArea";
import LeftArrowButton from "./LeftArrowButton";
import FeedbackContentHeader from "./FeedbackContentHeader";
import SubmitButton from "./SubmitButton";

import { 
    FeedbackForm, 
    FeedbackFormFooter, 
    formTextAreaClass
} from './styled';

interface FeedbackContentStepProps {
    onFeedbackRestartRequested : () => void;
    onFeedbackSent : () => void;
    feedbackType : FeedbackType;
    cookies : CookiesType;
    isLoggedIn : boolean;
};

const FeedbackContentStep = function FeedbackContentStep( {
    feedbackType, 
    onFeedbackRestartRequested,
    onFeedbackSent,
    cookies,
    isLoggedIn
} : FeedbackContentStepProps) {
    const [screenshot, setScreenshot] = useState<string | null>(null);
    const [comment, setComment] = useState('');
    const [isSendingFeedback, setIsSendingFeedback] = useState(false);

    return ( 
        <>
            <header>
                <LeftArrowButton 
                    onFeedbackRestartRequested={ onFeedbackRestartRequested } 
                />
                <FeedbackContentHeader feedbackType={ feedbackType } />
                <CloseButton />
            </header>

            <FeedbackForm onSubmit={ (event) => {
                event.preventDefault();
                submitFeedbackHandler({
                    setIsSendingFeedback,
                    onFeedbackSent,
                    type : feedbackType,
                    comment,
                    screenshot,
                    cookies,
                    isLoggedIn
                });
            } }>
                <FormTextArea 
                    setInput={ setComment }
                    placeholder="Tell us what is happening in detail..."
                    textClass={ formTextAreaClass }
                />

                <FeedbackFormFooter>
                    <ScreenshotButton 
                        screenshot={ screenshot }
                        handleSetScreenshot={ setScreenshot }
                    />

                    <SubmitButton 
                        isSendingFeedback={ isSendingFeedback }
                        comment={ comment }
                    />
                </FeedbackFormFooter>
            </FeedbackForm>
        </> 
    );
};

export default FeedbackContentStep;
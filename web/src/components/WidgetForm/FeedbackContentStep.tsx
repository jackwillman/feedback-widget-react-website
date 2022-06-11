import { FormEvent, useState } from "react";
import { ArrowLeft } from "phosphor-react";

import api from "../../lib/api";

import { FeedbackType, feedbackTypes } from ".";
import CloseButton from "../Misc/CloseButton";
import ScreenshotButton from "../Misc/ScreenshotButton";
import Loading from "../Misc/Loading";


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

    const feedbackTypeInfo = feedbackTypes[feedbackType];

    return ( <>
        <header>
            <button 
                type="button" 
                className="feedback-arrow-left-button"
                onClick={ onFeedbackRestartRequested }
            >
                <ArrowLeft weight="bold" className="feedback-arrow-left-icon"/>                
            </button>

            <span className="feedback-form-header">
                <img src={ feedbackTypeInfo.image.source } alt={ feedbackTypeInfo.image.alt } className="feedback-form-image"/>
                { feedbackTypeInfo.title }
            </span>
            <CloseButton />
        </header>

        <form 
            className="feedback-form"
            onSubmit={ handleSubmitFeedback } 
        >
            <textarea
                className="feedback-form-text 
                    scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent"
                placeholder="Conte com detalhes o que está acontecendo..."
                onChange={ event => setComment(event.target.value) }
            />

            <footer className="feedback-form-footer">
                <ScreenshotButton 
                    screenshot ={ screenshot }
                    handleSetScreenshot={ setScreenshot }
                />

                <button 
                    type="submit" 
                    className="feedback-form-submit"
                    disabled={ comment.length === 0 || isSendingFeedback }
                >
                    { 
                        isSendingFeedback
                            ? <Loading />
                            : 'Enviar Feedback' 
                    }
                </button>
            </footer>
        </form>
    </> );
};

export default FeedbackContentStep;
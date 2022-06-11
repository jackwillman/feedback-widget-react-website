import { useState } from 'react';

import { FeedbackType } from './feedbackType';
import FeedbackTypeStep from './FeedbackTypeStep';
import FeedbackContentStep from './FeedbackContentStep';
import FeedbackSuccessStep from './FeedbackSuccessStep';

const WidgetForm = function WidgetFormComponent() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    const [isFeedbackSent, setIsFeedbackSent] = useState(false);

    const handleRestartFeedback = function restartFeedback() {
        setIsFeedbackSent(false);
        setFeedbackType(null);
    };

    return (
        <div className="widget-form">
    
            { isFeedbackSent ? (
                <FeedbackSuccessStep 
                    onFeedbackRestartRequested={ handleRestartFeedback }
                />
            ) : !feedbackType ? (
                <FeedbackTypeStep handleSetFeedbackType={ setFeedbackType } />
            ) : (
                <FeedbackContentStep 
                    feedbackType={ feedbackType } 
                    onFeedbackRestartRequested={ handleRestartFeedback }
                    onFeedbackSent={ () => setIsFeedbackSent(true) }
                />
            ) }
            
            <footer className="widget-form-footer">
                Feito com ♥ pela <a className="widget-form-footer-link" href="https://pudim.com.br">Pudim</a>
            </footer>

        </div>
    );
};

export default WidgetForm;
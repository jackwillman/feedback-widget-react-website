import { useState } from 'react';

import { FeedbackType } from './feedbackType';
import FeedbackTypeStep from './FeedbackTypeStep';
import FeedbackContentStep from './FeedbackContentStep';
import FeedbackSuccessStep from './FeedbackSuccessStep';

import styled from './styled';

const WidgetForm = function WidgetFormComponent() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    const [isFeedbackSent, setIsFeedbackSent] = useState(false);

    const handleRestartFeedback = function restartFeedback() {
        setIsFeedbackSent(false);
        setFeedbackType(null);
    };

    return (
        <styled.WidgetForm>
            { isFeedbackSent 
                ? ( 
                    <FeedbackSuccessStep 
                        onFeedbackRestartRequested={ handleRestartFeedback }
                    />
                ) : !feedbackType 
                    ? ( 
                        <FeedbackTypeStep 
                            handleSetFeedbackType={ setFeedbackType } 
                        />
                    ) : (
                    <FeedbackContentStep 
                        feedbackType={ feedbackType } 
                        onFeedbackRestartRequested={ handleRestartFeedback }
                        onFeedbackSent={ () => setIsFeedbackSent(true) }
                    /> )
             }
            
            <styled.WidgetFormFooter>
                Feito com ♥ pela <styled.WidgetFormFooterLink href="https://pudim.com.br">Pudim</styled.WidgetFormFooterLink>
            </styled.WidgetFormFooter>

        </styled.WidgetForm>
    );
};

export default WidgetForm;
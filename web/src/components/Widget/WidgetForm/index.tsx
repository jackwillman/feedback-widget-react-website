import { useState } from 'react';

import { FeedbackType } from './feedbackType';
import FeedbackTypeStep from './FeedbackTypeStep';
import FeedbackContentStep from './FeedbackContentStep';
import FeedbackSuccessStep from './FeedbackSuccessStep';

import {
    WidgetFormDiv,
    WidgetFormFooter,
    WidgetFormFooterLink
} from './styled';

const WidgetForm = function WidgetFormComponent() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    const [isFeedbackSent, setIsFeedbackSent] = useState(false);

    const handleRestartFeedback = function restartFeedback() {
        setIsFeedbackSent(false);
        setFeedbackType(null);
    };

    return (
        <WidgetFormDiv>
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
            
            <WidgetFormFooter>
                Feito com ♥ pela <WidgetFormFooterLink href="https://pudim.com.br">Pudim</WidgetFormFooterLink>
            </WidgetFormFooter>

        </WidgetFormDiv>
    );
};

export default WidgetForm;
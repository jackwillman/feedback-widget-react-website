import { useState } from 'react';

import FeedbackTypeStep from './FeedbackTypeStep';
import FeedbackContentStep from './FeedbackContentStep';
import FeedbackSuccessStep from './FeedbackSuccessStep';

import bugImageUrl from '../../images/bug.svg';
import ideaImageUrl from '../../images/idea.svg';
import thoughtImageUrl from '../../images/thought.svg';


export const feedbackTypes = {
    BUG : {
        title : 'Problema',
        image : {
            source : bugImageUrl,
            alt : 'Imagem de um inseto'
        }
    },
    IDEA : {
        title : 'Ideia',
        image : {
            source : ideaImageUrl,
            alt : 'Imagem de uma lâmpada'
        }
    },
    OTHER : {
        title : 'Outro',
        image : {
            source : thoughtImageUrl,
            alt : 'Imagem de um balão de pensamento'
        }
    }
};

export type FeedbackType = keyof typeof feedbackTypes;

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
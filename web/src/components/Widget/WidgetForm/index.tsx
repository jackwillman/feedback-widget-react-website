import { useState } from 'react';

import { CookiesType } from '../../../lib/types';
import { FeedbackType } from './feedbackType';
import FeedbackTypeStep from './FeedbackTypeStep';
import FeedbackContentStep from './FeedbackContentStep';
import FeedbackSuccessStep from './FeedbackSuccessStep';

import {
    WidgetFormDiv,
    WidgetFormFooter,
    WidgetFormFooterLink
} from './styled';


interface WidgetFormProps {
    cookies : CookiesType;
    isLoggedIn : boolean;
};

const WidgetForm = function WidgetFormComponent({
    cookies,
    isLoggedIn
} : WidgetFormProps) {

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
                ) 
                
                : !feedbackType 
                    ? ( 
                        <FeedbackTypeStep 
                            handleSetFeedbackType={ setFeedbackType } 
                        />
                    ) 
                    
                    : (
                        <FeedbackContentStep 
                            onFeedbackRestartRequested={ handleRestartFeedback }
                            onFeedbackSent={ () => setIsFeedbackSent(true) }
                            feedbackType={ feedbackType } 
                            cookies={ cookies }
                            isLoggedIn={ isLoggedIn }
                        /> 
                    )
             }
            
            <WidgetFormFooter>
                Made by <WidgetFormFooterLink href="https://github.com/jackwillman">João Luís Rheingantz Scaini</WidgetFormFooterLink>
            </WidgetFormFooter>

        </WidgetFormDiv>
    );
};

export default WidgetForm;
import bugImageUrl from '../../../images/bug.svg';
import ideaImageUrl from '../../../images/idea.svg';
import thoughtImageUrl from '../../../images/thought.svg';

export const feedbackTypes = {
    BUG : {
        title : 'Problem',
        image : {
            source : bugImageUrl,
            alt : 'Image of a bug'
        }
    },
    IDEA : {
        title : 'Idea',
        image : {
            source : ideaImageUrl,
            alt : 'Image of a lamp'
        }
    },
    OTHER : {
        title : 'Other',
        image : {
            source : thoughtImageUrl,
            alt : 'Image of a thought bubble'
        }
    }
};

export type FeedbackType = keyof typeof feedbackTypes;
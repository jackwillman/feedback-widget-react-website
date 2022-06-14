import bugImageUrl from '../../../images/bug.svg';
import ideaImageUrl from '../../../images/idea.svg';
import thoughtImageUrl from '../../../images/thought.svg';

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
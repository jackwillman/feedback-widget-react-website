import React from 'react';
import { 
    View,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';

import Copyright from '../Copyright';
import styles from './styles';
const { styleSheet } = styles;

import successImg from '../../assets/success.png';

interface SuccessProps {
    onRestartFeedback : () => void;
};
const Success = function SuccessComponent(
    { onRestartFeedback } : SuccessProps
) {
    return (
        <View style={ styleSheet.container }>
            <Image 
                source={ successImg }
                style={ styleSheet.image }
            />

            <Text style={ styleSheet.title }>
                Agradecemos o feedback!
            </Text>

            <TouchableOpacity 
                style={ styleSheet.button }
                onPress={ onRestartFeedback }
            >
                <Text style={ styleSheet.buttonTitle }>
                    Quero enviar outro.
                </Text>
            </TouchableOpacity>
            
            <Copyright />
        </View>
    );
};

export default Success;
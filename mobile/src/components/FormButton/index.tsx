import React from 'react';
import { 
    Text, 
    TouchableOpacity, 
    TouchableOpacityProps, 
    ActivityIndicator 
} from 'react-native';

import styles from './styles';
const { styleSheet, activityIndicator } = styles;

interface FormButtonProps extends TouchableOpacityProps {
    isLoading : boolean;
};

const FormButton = function FormButtonComponent(
    {
        isLoading,
        ...rest
    } : FormButtonProps
) {
    return (
        <TouchableOpacity 
            style={ styleSheet.container }
            { ...rest }
        >
            {
                isLoading 
                    ? <ActivityIndicator 
                        color={ activityIndicator.color }
                    />
                    : <Text style={ styleSheet.title }>
                        Enviar Feedback
                    </Text>
            }
        </TouchableOpacity>
    );
};

export default FormButton;
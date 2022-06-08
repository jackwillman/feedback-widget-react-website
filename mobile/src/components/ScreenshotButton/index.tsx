import { Trash, Camera } from 'phosphor-react-native';
import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import styles from './styles';
const { styleSheet, trashStyle, cameraStyle } = styles;

interface ScreenshotButtonProps {
    screenshot : string | null;
    onTakeShot : () => void;
    onRemoveShot: () => void;
};

const ScreenshotButton = function ScreenshotButtonComponent(
    { 
        screenshot,
        onTakeShot,
        onRemoveShot
    } : ScreenshotButtonProps
) {
    return (
        <TouchableOpacity 
            style={styleSheet.container}
            onPress={ screenshot ? onRemoveShot : onTakeShot }
        >
            {
                screenshot 
                    ? <View>
                        <Image 
                            style={ styleSheet.image }
                            source={ { uri : screenshot } }
                        />
                        <Trash 
                            weight="fill"
                            size={ trashStyle.size }
                            color={ trashStyle.color}
                            style={ styleSheet.removeIcon}
                        /> 
                    </View>
                    : <Camera 
                        weight="bold"
                        size={ cameraStyle.size }
                        color={ cameraStyle.color}
                    />
            }
        </TouchableOpacity>
    );
};

export default ScreenshotButton;
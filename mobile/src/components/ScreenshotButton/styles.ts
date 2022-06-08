import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

const trashStyle = {
    size : 22,
    color : theme.colors.text_secondary
};

const cameraStyle = {
    size : 24,
    color : theme.colors.text_primary
};

const styleSheet = StyleSheet.create({
    container: {
        width : 40,
        height : 40,
        borderRadius : 4,
        backgroundColor : theme.colors.surface_secondary,
        justifyContent : 'center',
        alignItems : 'center',
        marginRight : 8,
        position : 'relative'
    },
    removeIcon : {
        position : 'absolute',
        bottom : 0,
        right : 0
    },
    image : {
        width : 40,
        height : 40
    }
});

const styles = {
    styleSheet,
    trashStyle,
    cameraStyle
}

export default styles
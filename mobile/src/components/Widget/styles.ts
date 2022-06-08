import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { theme } from '../../theme';

const iconStyle = {
    size : 24,
    color : theme.colors.text_on_brand_color
};

const bottomSheetStyle = {
    snapPoints : [1, 280]
};

const styleSheet = StyleSheet.create({
    button : {
        width : 48,
        height : 48,
        borderRadius : 24,
        backgroundColor : theme.colors.brand,
        justifyContent : 'center',
        alignItems : 'center',
        position : 'absolute',
        right : 16,
        bottom : getBottomSpace() + 16
    },
    modal : {
        backgroundColor : theme.colors.surface_primary,
        paddingBottom : getBottomSpace() + 16
    },
    indicator : {
        backgroundColor : theme.colors.text_primary,
        width : 56
    }
});

const styles = {
    iconStyle,
    bottomSheetStyle,
    styleSheet
};

export default styles;
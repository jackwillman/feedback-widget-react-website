import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Copyright = function CopyrightComponent() {
    return (
        <View>
            <Text style={styles.text}>
                Feito com ♥ pela Rocketseat
            </Text>
        </View>
    );
};

export default Copyright;
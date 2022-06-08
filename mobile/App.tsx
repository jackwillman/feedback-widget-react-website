import 'react-native-gesture-handler';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { 
    useFonts, 
    Inter_400Regular, 
    Inter_500Medium 
} from '@expo-google-fonts/inter';

import Widget from './src/components/Widget';
import styles from './src/styles';

const App = function () {
    const [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_500Medium
    });
    
    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <View style={styles.container}>
            
            <StatusBar 
                style="light" 
                backgroundColor='transparent'
                translucent
            />

            <Widget />

        </View>
    );
};

export default App;
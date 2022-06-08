import React, { useState } from 'react';
import { ArrowLeft } from 'phosphor-react-native';
import { captureScreen } from 'react-native-view-shot';
import * as FileSystem from 'expo-file-system';
import { 
    View,
    TextInput,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';

import { FeedbackType } from '../Widget';
import ScreenshotButton from '../ScreenshotButton';
import FormButton from '../FormButton';
import feedbackTypes from '../../utils/feedbackTypes';
import api from '../../libs/api';
import styles from './styles';
const { styleSheet, arrowLeftStyle, inputStyle } = styles;

interface FormProps {
    feedbackType : FeedbackType;
    onFeedbackCanceled : () => void;
    onFeedbackSent: () => void;
};

const Form = function FormComponent(
    { 
        feedbackType,
        onFeedbackCanceled,
        onFeedbackSent
    } : FormProps
) {
    const [screenshot, setScreenshot] = useState<string | null>(null);
    const [isSendingFeedback, setIsSendingFeedback] = useState(false);
    const [comment, setComment] = useState<string>('');

    const feedbackTypeInfo = feedbackTypes[feedbackType];

    const handleScreenshot = function takeScreenshot() {
        captureScreen({
            format : 'jpg',
            quality : 0.8
        })
            .then(uri => setScreenshot(uri))
            .catch(err => console.log(err));
    };

    const handleScreenshotRemove = function removeScreenshot() {
        setScreenshot(null);
    };

    const handleSendFeedback = async function sendFeedbackToBackEnd() {
        if (isSendingFeedback) {
            return;
        }

        setIsSendingFeedback(true);
        const screenshotBase64 = screenshot && await FileSystem.readAsStringAsync(screenshot, { encoding : 'base64' });

        try {
            await api.post('/feedbacks', {
                type : feedbackType,
                screenshot : `data:image/png;base64, ${screenshotBase64}`,
                comment
            });

            onFeedbackSent();
            setIsSendingFeedback(false);
        } catch(err) {
            console.log(err);
            setIsSendingFeedback(false);
        }
    };

    return (
        <View style={ styleSheet.container }>
            <View style={ styleSheet.header }>
                <TouchableOpacity onPress={ onFeedbackCanceled }>
                    <ArrowLeft 
                        weight="bold"
                        size={ arrowLeftStyle.size }
                        color={ arrowLeftStyle.color }
                    />
                </TouchableOpacity>

                <View style={ styleSheet.titleContainer }>
                    <Image 
                        source={ feedbackTypeInfo.image }
                        style={ styleSheet.image }
                    />
                    <Text style={styleSheet.titleText}>
                        { feedbackTypeInfo.title }
                    </Text>
                </View>
            </View>

            <TextInput
                multiline
                style={ styleSheet.input }
                placeholder={ inputStyle.placeholder }
                placeholderTextColor={ inputStyle.placeholderTextColor }
                autoCorrect={ false }
                onChangeText={ setComment }
            />

            <View style={ styleSheet.footer }>
                <ScreenshotButton 
                    onTakeShot={ handleScreenshot }
                    onRemoveShot={ handleScreenshotRemove }
                    screenshot={ screenshot }
                />
                <FormButton 
                    onPress={ handleSendFeedback }
                    isLoading={ isSendingFeedback } 
                />
            </View>
        </View>
    );
};

export default Form;
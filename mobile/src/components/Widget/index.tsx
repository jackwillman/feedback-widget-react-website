import React, { useRef, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { ChatTeardropDots } from 'phosphor-react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import Options from '../Options';
import Form from '../Form';
import Success from '../Success';
import feedbackTypes from '../../utils/feedbackTypes';
import styles from './styles';
const { styleSheet, iconStyle, bottomSheetStyle } = styles;

export type FeedbackType = keyof typeof feedbackTypes;

const Widget = function WidgetComponent() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    const [feedbackSent, setFeedbackSent] = useState(false);

    const bottomSheetRef = useRef<BottomSheet>(null);

    const handleOpen = function onPressOpenBottomSheet() {
        bottomSheetRef.current?.expand();
    };

    const handleRestartFeedback = function setFeedbackTypeToNull() {
        setFeedbackType(null);
        setFeedbackSent(false);
    };

    const handleFeedbackSent = function setFeedbackSentToTrue() {
        setFeedbackSent(true);
    };

    return (
        <>
            <TouchableOpacity
                onPress={ handleOpen }
                style={ styleSheet.button }
            >
                <ChatTeardropDots
                    weight="bold"
                    size={ iconStyle.size }
                    color={ iconStyle.color }
                />
            </TouchableOpacity>

            <BottomSheet
                ref={ bottomSheetRef }
                snapPoints={ bottomSheetStyle.snapPoints }
                backgroundStyle={ styleSheet.modal }
                handleIndicatorStyle={ styleSheet.indicator }
            >
                {
                    feedbackSent
                        ? <Success 
                            onRestartFeedback={ handleRestartFeedback }
                        />
                        : feedbackType
                            ? <Form 
                                feedbackType={ feedbackType }
                                onFeedbackCanceled={ handleRestartFeedback }
                                onFeedbackSent={ handleFeedbackSent }
                            />
                            : <Options 
                                onFeedbackTypeChanged={ setFeedbackType }
                            />
                }
            </BottomSheet>
        </>
    );
};

const GestureHandlerWidget = gestureHandlerRootHOC(Widget)

export default GestureHandlerWidget;
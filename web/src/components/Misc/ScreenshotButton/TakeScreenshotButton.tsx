import { useState } from "react";

import handleTakeScreenshot from './handleTakeScreenshot';
import Loading from "../Loading";

import styled from './styled';

interface TakeScreenshotButtonProps {
    handleSetScreenshot : (screenshot : string | null) => void;
};

const TakeScreenshotButton = function (
    { handleSetScreenshot } : TakeScreenshotButtonProps
) {
    const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

    return (
        <styled.ScreenshotButton 
            type="button"
            onClick={ () => handleTakeScreenshot(handleSetScreenshot, setIsTakingScreenshot) }
        >
            { !isTakingScreenshot ? (
                <styled.ScreenshotIcon />
            ) : (
                <Loading />
            ) }
        </styled.ScreenshotButton>
    );
};

export default TakeScreenshotButton;
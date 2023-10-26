import { useState } from "react";

import handleTakeScreenshot from './handleTakeScreenshot';
import Loading from "../Loading";
import { 
    ScreenshotButton,
    ScreenshotIcon
 } from './styled';

interface TakeScreenshotButtonProps {
    handleSetScreenshot : (screenshot : string | null) => void;
};

const TakeScreenshotButton = function ({ 
    handleSetScreenshot 
} : TakeScreenshotButtonProps) {
    const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

    return (
        <ScreenshotButton 
            type="button"
            onClick={ () => handleTakeScreenshot(
                handleSetScreenshot, 
                setIsTakingScreenshot
            )}
        >
            { !isTakingScreenshot 
                ? <ScreenshotIcon />
                : <Loading /> 
            }
        </ScreenshotButton>
    );
};

export default TakeScreenshotButton;
import { useState } from "react";
import { Camera } from "phosphor-react";

import handleTakeScreenshot from './handleTakeScreenshot';
import Loading from "../Loading";

interface TakeScreenshotButtonProps {
    handleSetScreenshot : (screenshot : string | null) => void;
};

const TakeScreenshotButton = function (
    { handleSetScreenshot } : TakeScreenshotButtonProps
) {
    const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

    return (
        <button 
            type="button"
            className="feedback-form-snapshot-button"
            onClick={ () => handleTakeScreenshot(handleSetScreenshot, setIsTakingScreenshot) }
        >
            { !isTakingScreenshot ? (
                <Camera className="feedback-form-snapshot-icon"/>
            ) : (
                <Loading />
            ) }
        </button>
    );
};

export default TakeScreenshotButton;
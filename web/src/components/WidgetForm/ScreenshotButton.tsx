import { useState } from "react";
import { Camera, Trash } from "phosphor-react";
import html2canvas from "html2canvas";

import Loading from "../Loading";


const handleTakeScreenshot = async function HandlesTakingScreenshotOfTheCurrentScreen(
    handleSetScreenshot : (screenshot : string | null) => void,
    setIsTakingScreenshot : (isTakingScreenshot : boolean) => void
) {
    setIsTakingScreenshot(true);

    const canvas = await html2canvas(document.querySelector('html')!);
    const base64image = canvas.toDataURL('image/png');

    handleSetScreenshot(base64image);
    setIsTakingScreenshot(false);
};

interface ScreenshotButtonProps {
    screenshot : string | null;
    handleSetScreenshot : (screenshot : string | null) => void;
};

const ScreenshotButton = function ScreenshotButtonComponent({ 
    screenshot,
    handleSetScreenshot 
} : ScreenshotButtonProps
) {
    const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

    const deleteScreenshotButton = (
        <button
            type="button"
            className="feedback-form-snapshot-picture"
            onClick={ () => handleSetScreenshot(null) }
            style={ { 
                backgroundImage : `url(${screenshot})`,

                // posição do widget, só pq n tem bulhufas no site
                backgroundPosition : 'right bottom',
                backgroundSize : 180
            } }
        >
            <Trash weight="fill" />
        </button>
    );

    const screenshotButton = (
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

    if (screenshot) {
        return deleteScreenshotButton;
    }

    return screenshotButton;
};

export default ScreenshotButton;
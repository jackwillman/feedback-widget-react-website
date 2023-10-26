import DeleteScreenshotButton from "./DeleteScreenshotButton";
import TakeScreenshotButton from "./TakeScreenshotButton";

interface ScreenshotButtonProps {
    screenshot : string | null;
    handleSetScreenshot : (screenshot : string | null) => void;
};

const ScreenshotButton = function ScreenshotButtonComponent( { 
    screenshot,
    handleSetScreenshot 
} : ScreenshotButtonProps) {
    if (screenshot) {
        return ( 
            <DeleteScreenshotButton 
                handleSetScreenshot={ handleSetScreenshot }
                screenshot={ screenshot }
            /> 
        );
    }

    return ( 
        <TakeScreenshotButton 
            handleSetScreenshot={ handleSetScreenshot }
        /> 
    );
};

export default ScreenshotButton;
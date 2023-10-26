import { Trash } from "phosphor-react";
import { ScreenshotPicture } from "./styled";

interface DeleteScreenshotButtonProps {
    screenshot : string | null;
    handleSetScreenshot : (screenshot : string | null) => void;
};

const deleteScreenshotButton = function deleteScreenshotButtonComponent({ 
    screenshot,
    handleSetScreenshot 
} : DeleteScreenshotButtonProps) {
    return (
        <ScreenshotPicture
            type="button"
            onClick={ () => handleSetScreenshot(null) }
            style={ { 
                backgroundImage : `url(${screenshot})`,
                backgroundPosition : 'right bottom',
                backgroundSize : 80
            } }
        >
            <Trash weight="fill" />
        </ScreenshotPicture>
    );
};


export default deleteScreenshotButton;
import { Trash } from "phosphor-react";

import { ScreenshotButtonProps } from ".";

const deleteScreenshotButton = function(
    { 
        screenshot,
        handleSetScreenshot 
    } : ScreenshotButtonProps
) {
    return (
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
};


export default deleteScreenshotButton;
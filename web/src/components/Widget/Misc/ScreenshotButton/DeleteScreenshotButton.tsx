import { Trash } from "phosphor-react";

import { ScreenshotButtonProps } from ".";
import styled from "./styled";

const deleteScreenshotButton = function(
    { 
        screenshot,
        handleSetScreenshot 
    } : ScreenshotButtonProps
) {
    return (
        <styled.ScreenshotPicture
            type="button"
            onClick={ () => handleSetScreenshot(null) }
            style={ { 
                backgroundImage : `url(${screenshot})`,

                // posição do widget, só pq n tem bulhufas no site
                backgroundPosition : 'right bottom',
                backgroundSize : 80
            } }
        >
            <Trash weight="fill" />
        </styled.ScreenshotPicture>
    );
};


export default deleteScreenshotButton;
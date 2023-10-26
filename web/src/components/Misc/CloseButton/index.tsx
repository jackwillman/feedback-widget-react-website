import {
    CloseButtonClass,
    CloseButtonIcon
} from "./styled";

const CloseButton = function CloseButtonComponent() {
    return ( 
        <CloseButtonClass>
            <CloseButtonIcon weight="bold"/>        
        </CloseButtonClass> 
    );
};

export default CloseButton;
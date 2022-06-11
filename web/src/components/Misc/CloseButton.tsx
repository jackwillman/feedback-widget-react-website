import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

const CloseButton = function CloseButtonComponent() {
    return (
        <Popover.Button className="widget-close-button" title="Fechar formulário de feedback">
            <X className="widget-close-button-icon" weight="bold"/>
        </Popover.Button>
    );
};

export default CloseButton;
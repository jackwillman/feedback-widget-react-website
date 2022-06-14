import tw from "tailwind-styled-components"
import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

const CloseButton = tw(Popover.Button)`
    top-5 
    right-5 
    absolute 
    text-zinc-400 
    hover:text-zinc-100
`;

const CloseButtonIcon = tw(X)`
    w-4 
    h-4
`;

export default {
    CloseButton,
    CloseButtonIcon
};
import { Popover } from "@headlessui/react";
import tw from "tailwind-styled-components";

export const FeedbackDashboardPopover = tw(Popover)`
    relative
    static
    place-self-end
`;

export const FeedbackDashboardButton = tw(Popover.Button)`
    min-w-[170px] 
    w-full
    h-10
    rounded
    border-transparent 
    flex-1 
    flex 
    justify-center 
    items-center 

    font-bold
    text-base
    transition-colors

    bg-zinc-800 

    hover:bg-brand-300 

    xl:text-lg

    focus:outline-none 

    disabled:opacity-50 
    disabled:hover:bg-brand-500
`;

export const FeedbackDashboardPanelStyle = tw(Popover.Panel)`
    
`;
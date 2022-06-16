import tw from "tailwind-styled-components"
import { Popover } from '@headlessui/react';
import { ChatTeardropDots } from 'phosphor-react';

export const WidgetPopover = tw(Popover)`
    absolute 
    flex 
    flex-col 
    items-end
    bottom-4 
    right-4 
    md:bottom-8 
    md:right-8
`;

export const WidgetButton = tw(Popover.Button)`
    bg-brand-500 
    text-white 
    rounded-full 
    px-3 
    h-12 
    flex 
    items-center
    group
`;

export const WidgetIcon = tw(ChatTeardropDots)`
    w-6 
    h-6
`;

export const WidgetSpan = tw.span`
    max-w-0 
    overflow-hidden 
    transition-all 
    duration-500 
    ease-linear
    group-hover:max-w-xs
`;
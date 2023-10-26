import tw from "tailwind-styled-components"
import { Camera } from "phosphor-react";

export const ScreenshotButton = tw.button`
    p-2 
    rounded 
    border-transparent
    bg-zinc-800 
    hover:bg-zinc-700 
    transition-colors
    focus:outline-none 
    focus:ring-2 
    focus:ring-offset-2 
    focus:ring-offset-zinc-900 
    focus:ring-brand-500
`;

export const ScreenshotIcon = tw(Camera)`
    w-6 
    h-6 
    text-zinc-100
`;
export const ScreenshotPicture = tw.button`
    p-1 
    w-10 
    h-10 
    rounded 
    border-transparent 
    flex 
    justify-end 
    items-end
    text-zinc-400 
    hover:text-zinc-100 
    transition-colors
`;
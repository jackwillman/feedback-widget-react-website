import tw from "tailwind-styled-components";
import Popup from "reactjs-popup";

import { Text } from '../styled';

export const DashboardDiv = tw.div`
    absolute
`;

export const DashboardForm = tw.form`
    relative 
    mt-[47px]
    w-[480px]
`;

export const DasboardItemDiv = tw.div`
    relative 
    bg-zinc-900 
    rounded
    shadow-lg
    h-[280px]
`;

export const DashboardItemRow = tw.div`
    relative
    flex
    w-full
    px-6
    py-8
`;

export const DashboardResponseDiv = tw.div`
    relative
`;

export const DashboardText = tw(Text)`
    absolute
    font-normal
    text-base
    mt-[6px]
    xl:text-lg
    leading-[22px]
    xl:leading-[32px]
`;

export const DashboardMainButtonClass = tw.button`
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

    text-zinc-800
    bg-brand-500 
    
    hover:bg-brand-300 

    xl:text-lg

    focus:outline-none 

    disabled:opacity-50 
    disabled:hover:bg-brand-500
`;

export const DashboardDeleteButtonClass = tw.button`
    relative
    ml-[50px]
    mt-8
    min-w-[170px] 
    w-[380px]
    h-10
    rounded
    border-2 
    border-transparent 
    flex-1 
    flex 
    justify-center 
    items-center 

    font-bold
    text-base
    transition-colors

    bg-zinc-800
    
    xl:text-lg

    hover:border-brand-500 
    focus:border-brand-500 
    focus:outline-none
`;

export const DashboardDeletePopup = tw(Popup)`
`;

export const DashboardDeleteConfirmationPopup = tw.div`
    relative
    bg-zinc-800  
    rounded
    shadow-lg
    mt-1
    w-[480px]
    h-[90px]
`;

export const DashboardDeleteConfirmationText = tw(Text)`
    relative
    pt-6
    ml-6
`;

export const DashboardDeleteConfirmationButton = tw(DashboardMainButtonClass)`
    mt-8
`;

export const dashboardFormTextClass = `
    absolute
    h-[3rem]
    w-[300px]
    ml-[115px]
    text-base
    rounded
    text-zinc-100
    border-zinc-600
    bg-transparent
    focus:border-brand-500
    focus:ring-brand-500
    focus:ring-1
    focus:outline-none
    scrollbar-thin  
    scrollbar-thumb-zinc-700 
    scrollbar-track-transparent
`;
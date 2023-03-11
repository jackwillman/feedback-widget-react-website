import tw from "tailwind-styled-components/dist/tailwind";

import { Text } from '../styled';

export const DashboardDiv = tw.div`
    relative 
    bg-zinc-900 
    rounded-2xl 
    shadow-lg

    mt-[47px]
    w-[500px]
    h-[180px]
`;

export const DashboardItemRow = tw.div`
    relative
    flex
    w-full
    px-6
    py-8
`;

export const DashboardErrorBox = tw.div`
    absolute
    pl-[150px]
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

export const dashboardTextBoxClass = `
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
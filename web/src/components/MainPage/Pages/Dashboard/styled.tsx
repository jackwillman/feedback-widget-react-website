import tw from "tailwind-styled-components/dist/tailwind";

import { Text } from '../styled';

export const DashboardDiv = tw.div`
`;

export const DashboardText = tw(Text)`
    font-normal
    text-base
    xl:text-lg
    leading-[22px]
    xl:leading-[32px]
`;

export const DashboardRightText = tw(DashboardText)`
    self-end
`;

// DESCOBRIR O PQ QUE TA COMO TÁ, INVESTIGAR OS OUTROS DIVS

/*
    bg-zinc-900 
    mt-8
    p-4 
    relative 
    rounded-2xl 
    mb-4 
    flex 
    flex-col 
    items-center 
    shadow-lg
    w-[calc(100vw-2rem)] 
    md:w-auto
*/
import tw from "tailwind-styled-components";

export const MenuList = tw.div`
    relative 
    
    flex

    w-[calc(75vw)]
    h-[172px]

    rounded-2xl 

    bg-zinc-900
`;

const MenuItem = tw.button`
    absolute 

    w-[calc(65vw)]
    h-[50px]

    ml-[calc(5vw)]

    rounded-2xl 

    bg-zinc-800
    hover:bg-zinc-400
    text-zinc-100
`;

export const MenuItem1 = tw(MenuItem)`
    mt-6
`;

export const MenuItem2 = tw(MenuItem)`
    mt-24
`;
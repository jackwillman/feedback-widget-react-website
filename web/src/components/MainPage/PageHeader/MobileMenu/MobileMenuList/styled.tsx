import { Popover } from "@headlessui/react";
import tw from "tailwind-styled-components";

export const MenuList = tw.div`
    absolute 

    w-screen
    h-screen    

    rounded-2xl 

    bg-brand-dark
`;

const MenuItem = tw(Popover.Button)`
    absolute 

    h-[50px]
    w-full

    bg-zinc-900
    hover:bg-zinc-800
    text-zinc-100
`;

export const MenuItemText = tw.a`
    font-semibold
    text-lg
`;

export const MenuItem1 = tw(MenuItem)`
`;

export const MenuItem2 = tw(MenuItem)`
    mt-[50px]
`;

export const MenuItem3 = tw(MenuItem)`
    mt-[100px]
`;

export const MenuItem4 = tw(MenuItem)`
    mt-[150px]
`;
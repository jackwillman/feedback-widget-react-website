import tw from "tailwind-styled-components/dist/tailwind";

export const HeaderDiv = tw.div`
    absolute
    w-[calc(100vw)]
`;

export const CompanyButton = tw.button`
    absolute 
    left-[43px]
    top-[37px]

    font-sans
    not-italic
    font-bold 
    text-3xl
    xl:text-4xl

    
    tracking-[0.045em]

    text-zinc-100
`;

export const MenuButtonsDiv = tw.div`
    absolute
    top-[50px]
    right-[calc(5vw)]
    md:right-[calc(3vw)]
    space-x-[45px]
`;

export const MenuButton = tw.button`
    font-sans
    not-italic
    font-normal
    text-base
    xl:text-lg
    tracking-[0.045em]

    text-zinc-100
    hover:text-zinc-400
`;
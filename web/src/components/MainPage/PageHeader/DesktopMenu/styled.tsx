import tw from "tailwind-styled-components";

export const MenuButtonsDiv = tw.div`
    absolute
    sm:visible
    invisible
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
    2xl:text-lg
    tracking-[0.045em]

    text-zinc-100
    hover:text-zinc-400
`;
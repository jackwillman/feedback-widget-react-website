import tw from "tailwind-styled-components";

export const HeaderDiv = tw.div`
    absolute
    w-[calc(100vw)]
    h-[100px]

    bg-zinc-900
`;

export const CompanyButton = tw.button`
    absolute 
    top-[37px]

    sm:left-[43px]
    left-[calc(50vw-(5.1rem))]

    font-sans
    not-italic
    font-bold 
    text-3xl
    2xl:text-4xl

    
    tracking-[0.045em]

    text-zinc-100
`;
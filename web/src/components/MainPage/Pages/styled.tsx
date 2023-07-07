import tw from "tailwind-styled-components";

export const PageDiv = tw.div`
    relative
    w-full
    h-full
    grid
`;

export const TextDiv = tw.div`
    absolute
    mt-[47px]
    ml-[calc(11vw)]
`;

export const Text = tw.p`
    font-sans
    not-italic
    tracking-[0.045em]
    text-zinc-100
`;

const MajorText = tw(Text)`
    font-bold
`;

export const BiggerText = tw(MajorText)`
    text-4xl
    2xl:text-5xl
    leading-[49px]
    xl:leading-[64px]
`;

export const BigText = tw(MajorText)`
    text-2xl
    2xl:text-3xl
    leading-[33px]
    2xl:leading-[46px]
`;

export const NormalText = tw(Text)`
    font-normal
    text-base
    xl:text-lg
    leading-[22px]
    xl:leading-[32px]
    py-6
`;

export const AccountForm = tw.form`
    min-w-[200px] 
    w-[calc(15vw)]
    py-6
`;

export const AccountFormText = tw(Text)`
    font-normal
    text-base
    xl:text-lg
    leading-[22px]
    xl:leading-[32px]
`;


export const AccountFormSubmit = tw.button`
    font-bold
    text-base
    xl:text-lg
    text-zinc-800
    bg-brand-500 
    hover:bg-brand-300 
    transition-colors
    min-w-[170px] 
    w-full
    h-10
    my-3
    rounded 
    border-transparent 
    flex-1 
    flex 
    justify-center 
    items-center 
    focus:outline-none 
    focus:ring-2 
    focus:ring-offset-2 
    focus:ring-offset-zinc-900 
    focus:ring-brand-500
    disabled:opacity-50 
    disabled:hover:bg-brand-500
`;

export const accountFormTextAreaClass = `
    w-full 
    h-10 
    text-sm 
    rounded 
    resize-none 
    placeholder-zinc-400 
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
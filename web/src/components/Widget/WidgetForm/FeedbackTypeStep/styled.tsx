import tw from "tailwind-styled-components";

export const FeedbackTypeHeaderSpan = tw.span`
    text-xl 
    leading-6
`;
export const FeedbackTypeBodyDiv = tw.div`
    flex 
    py-8 
    gap-2 
    w-full
`;
export const FeedbackTypeButton = tw.button`
    rounded-lg 
    py-5 
    w-24 
    flex-1 
    flex 
    flex-col 
    items-center 
    gap-2 
    border-2 
    border-transparent 
    bg-zinc-800 
    hover:border-brand-500 
    focus:border-brand-500 
    focus:outline-none
`;
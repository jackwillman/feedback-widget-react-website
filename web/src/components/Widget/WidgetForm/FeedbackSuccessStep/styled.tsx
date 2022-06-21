import tw from "tailwind-styled-components"

export const FeedbackSuccess = tw.div`
    flex
    flex-col 
    items-center 
    py-10 w-[304px]
`;

export const FeedbackSuccessMessage = tw.span`
    text-xl 
    mt-2
`;

export const RestartFeedbackButtonStyle = tw.button`
    py-2 
    px-6 
    mt-6 
    rounded 
    border-transparent 
    text-sm 
    leading-6 
    bg-zinc-800 
    hover:bg-zinc-700 
    transition-colors
    focus:outline-none 
    focus:ring-2 
    focus:ring-offset-2 
    focus:ring-offset-zinc-900 
    focus:ring-brand-500;
`;
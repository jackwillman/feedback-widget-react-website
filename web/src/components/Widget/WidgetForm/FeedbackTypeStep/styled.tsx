import tw from "tailwind-styled-components";

const FeedbackTypeHeader = tw.span`
    text-xl 
    leading-6
`;
const FeedbackTypeBody = tw.div`
    flex 
    py-8 
    gap-2 
    w-full
`;
const FeedbackTypeButton = tw.button`
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

export default {
    FeedbackTypeHeader,
    FeedbackTypeBody,
    FeedbackTypeButton
};
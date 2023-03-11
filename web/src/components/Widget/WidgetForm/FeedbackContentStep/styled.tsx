import tw from "tailwind-styled-components";
import { ArrowLeft } from "phosphor-react";


export const FeedbackForm = tw.form`
    my-4 
    w-full
`;

export const FeedbackFormFooter = tw.footer`
    flex 
    gap-2 
    mt-2
`;

export const FeedbackFormHeader = tw.span`
    text-xl 
    leading-6 
    flex 
    items-center 
    gap-2
`;

export const FeedbackFormImage = tw.img`
    w-6
    h-6
`;

export const FeedbackArrowLeftButton = tw.button`
    top-5 
    left-5 
    absolute 
    text-zinc-400 
    hover:text-zinc-100
`;

export const FeedbackArrowLeftIcon = tw(ArrowLeft)`
    w-4 
    h-4
`;

export const FeedbackFormSubmit = tw.button`
    p-2 
    rounded 
    border-transparent 
    flex-1 
    flex 
    justify-center 
    items-center 
    text-sm
    font-bold
    text-zinc-800
    bg-brand-500 
    hover:bg-brand-300 
    transition-colors
    focus:outline-none 
    focus:ring-2 
    focus:ring-offset-2 
    focus:ring-offset-zinc-900 
    focus:ring-brand-500
    disabled:opacity-50 
    disabled:hover:bg-brand-500
`;

export const formTextAreaClass = `
    min-w-[304px]
    w-full min-h-[112px]
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

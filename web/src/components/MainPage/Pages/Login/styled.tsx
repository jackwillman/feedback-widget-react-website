import tw from "tailwind-styled-components";

import { Text } from '../styled';

export const LoginForm = tw.form`
    min-w-[200px] 
    w-[calc(15vw)]
    py-6
`;

export const LoginText = tw(Text)`
    font-normal
    text-base
    xl:text-lg
    leading-[22px]
    xl:leading-[32px]
`;


export const LoginFormSubmit = tw.button`
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

export const loginTextAreaClass = `
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
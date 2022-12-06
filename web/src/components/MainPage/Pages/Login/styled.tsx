import tw from "tailwind-styled-components";

import { Text } from '../styled';

export const LoginForm = tw.form`
    min-w-[200px] w-[calc(15vw)]
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
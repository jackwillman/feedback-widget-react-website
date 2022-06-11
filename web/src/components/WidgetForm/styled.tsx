import tw from "tailwind-styled-components"

const WidgetForm = tw.div`
    bg-zinc-900 
    p-4 
    relative 
    rounded-2xl 
    mb-4 
    flex 
    flex-col 
    items-center 
    shadow-lg
    w-[calc(100vw-2rem)] 
    md:w-auto
`;

const WidgetFormFooter = tw.footer`
    text-xs 
    text-neutral-400
`;

const WidgetFormFooterLink = tw.a`
    underline 
    underline-offset-2
`;

export default {
    WidgetForm,
    WidgetFormFooter,
    WidgetFormFooterLink
};
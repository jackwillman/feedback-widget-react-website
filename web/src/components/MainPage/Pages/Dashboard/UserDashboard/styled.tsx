import tw from "tailwind-styled-components";
import Popup from "reactjs-popup";

import { Text } from "../../styled";

export const UserDashboardDiv = tw.div`
    relative
`;

export const UserUpdateFormStyle = tw.form`
    relative 
    mt-[47px]
    w-[480px]
`;

export const UserUpdateFormBox = tw.div`
    relative 
    bg-zinc-900 
    rounded
    shadow-lg
    h-[230px]
`;

export const UserUpdateFormItem = tw.div`
    relative
    flex
    w-full
    px-6
    py-8
`;

export const UserDashboardResponse = tw.div`
    relative
`;

const UserDashboardButton = tw.button`
    min-w-[170px] 
    w-full
    h-10
    rounded
    border-transparent 
    flex-1 
    flex 
    justify-center 
    items-center 

    font-bold
    text-base
    transition-colors

    text-zinc-800
    bg-brand-500 

    hover:bg-brand-300 

    xl:text-lg

    focus:outline-none 

    disabled:opacity-50 
    disabled:hover:bg-brand-500
`;

export const UserUpdateButtonStyle = tw(UserDashboardButton)`
`;

export const UserDeletePopup = tw(Popup)`
`;

export const UserDeleteButtonStyle = tw.button`
    relative
    mt-2
    min-w-[170px] 
    min-w-[170px] 
    w-full
    h-10
    rounded
    border-2 
    border-transparent 
    flex-1 
    flex 
    justify-center 
    items-center 

    font-bold
    text-base
    transition-colors

    bg-zinc-800
    
    xl:text-lg

    hover:border-brand-500 
    focus:border-brand-500 
    focus:outline-none
`;

export const UserDeletePopupPanel = tw.div`
    relative
    bg-zinc-800  
    rounded
    shadow-lg
    mt-1
    w-[480px]
    h-[90px]
`;

export const UserDeletePopupText = tw(Text)`
    relative
    pt-6
    ml-6
`;

export const UserDeletePopupButton = tw(UserDashboardButton)`
    mt-8
`;

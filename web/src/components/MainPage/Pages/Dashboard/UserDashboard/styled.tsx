import tw from "tailwind-styled-components";
import Popup from "reactjs-popup";

import { Text } from "../../styled";
import { DashboardButton } from "../styled";

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

export const UserUpdateButtonStyle = tw(DashboardButton)`
    text-zinc-800
    bg-brand-500 
    focus:outline-none 
    hover:bg-brand-300 
    focus:bg-brand-300 
    disabled:opacity-50 
    disabled:hover:bg-brand-500
`;

export const UserDeletePopup = tw(Popup)`
`;

export const UserDeleteButtonStyle = tw(DashboardButton)`
    relative
    mt-2
    bg-zinc-800
    border-2
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

export const UserDeletePopupButton = tw(DashboardButton)`
    mt-8
    text-zinc-800
    bg-brand-500 
    focus:outline-none 
    hover:bg-brand-300 
    disabled:opacity-50 
    disabled:hover:bg-brand-500
`;

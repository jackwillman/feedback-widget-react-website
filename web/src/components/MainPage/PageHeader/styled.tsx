import tw from "tailwind-styled-components/dist/tailwind";

const RightButtonsDiv = tw.div`
    absolute 

    w-screen 
    z-10 
    mt-3 
    transform 
    px-2 

    max-w-md 
    sm:px-0 
    lg:ml-0 
    lg:right-0


    flex justify-between items-center border-gray-100 py-6 md:justify-start md:space-x-10
`;

const RightButton = tw.button`
    text-base
    font-medium 
    text-zinc-100
    hover:text-zinc-400
`;

export default {
    RightButtonsDiv,
    RightButton: RightButton
};
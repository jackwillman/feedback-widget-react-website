import tw from "tailwind-styled-components"
import { CircleNotch } from "phosphor-react";

const Loading = tw.div`
    w-6
    h-6
    flex
    items-center
    justify-center
    overflow-hidden
`;

const LoadingIcon = tw(CircleNotch)`
    w-4
    h-4
    animate-spin
`;

export default {
    Loading,
    LoadingIcon
};
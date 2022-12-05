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
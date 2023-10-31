import tw from "tailwind-styled-components";

import { TextDiv } from "../styled";

export const HomeImageDiv = tw.div`
    static

    place-self-end

    xl:mb-[200px]

    xl:mt-auto
    lg:mt-[200px]
    md:mt-[300px]
    sm:mt-[320px]
    mt-[400px]
`;

export const HomeTextDiv = tw(TextDiv)`
    absolute
    xl:mr-auto
    sm:mr-[calc(15vw)]
    mr-[calc(11vw)]
`;

export const HomeNormalTextDiv = tw.div`
    mr-auto
    xl:mr-[calc(50vw)]
    lg:mr-[calc(30vw)]
    md:mr-[calc(20vw)]
    sm:mr-[calc(10vw)]
`;
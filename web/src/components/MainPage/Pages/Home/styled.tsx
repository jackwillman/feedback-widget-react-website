import tw from "tailwind-styled-components";

import { PageDiv, TextDiv } from "../styled";

export const HomePageDiv = tw(PageDiv)`
    flex
`;

export const HomeImageDiv = tw.div`
    relative
    mt-auto
`;

export const HomeTextDiv = tw(TextDiv)`
    relative
`;

export const HomeNormalTextDiv = tw.div`
    mr-auto
    xl:mr-[calc(10vw)]
`;
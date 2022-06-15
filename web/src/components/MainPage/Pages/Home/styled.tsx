import tw from "tailwind-styled-components/dist/tailwind";

const HomeText = tw.p`
    font-sans
    not-italic
    tracking-[0.045em]
    text-zinc-100
`;

const MajorHomeText = tw(HomeText)`
    font-bold
`;

export const BiggerHomeText = tw(MajorHomeText)`
    text-4xl
    xl:text-5xl
    leading-[49px]
    xl:leading-[64px]
`;

export const BigHomeText = tw(MajorHomeText)`
    text-2xl
    xl:text-3xl
    leading-[33px]
    xl:leading-[46px]
`;

export const NormalTextDiv = tw.div`
    md:right-[calc(60vw)]
`;

export const NormalHomeText = tw(HomeText)`
    font-normal
    text-base
    xl:text-lg
    leading-[22px]
    xl:leading-[32px]
    py-6
`;

export const HomeDiv = tw.div`
    grid
`;

export const HomeImageDiv = tw.div`
    absolute
    top-[199px]
    place-self-end
`;
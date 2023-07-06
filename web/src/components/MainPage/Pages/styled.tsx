import tw from "tailwind-styled-components";

export const PageDiv = tw.div`
    relative
    w-full
    h-full
    grid
`;

export const TextDiv = tw.div`
    absolute
    mt-[47px]
    ml-[calc(11vw)]
`;

export const Text = tw.p`
    font-sans
    not-italic
    tracking-[0.045em]
    text-zinc-100
`;

const MajorText = tw(Text)`
    font-bold
`;

export const BiggerText = tw(MajorText)`
    text-4xl
    2xl:text-5xl
    leading-[49px]
    xl:leading-[64px]
`;

export const BigText = tw(MajorText)`
    text-2xl
    2xl:text-3xl
    leading-[33px]
    2xl:leading-[46px]
`;

export const NormalText = tw(Text)`
    font-normal
    text-base
    xl:text-lg
    leading-[22px]
    xl:leading-[32px]
    py-6
`;
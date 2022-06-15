import tw from "tailwind-styled-components/dist/tailwind";

export const TextDiv = tw.div`
    absolute
    xl:mr-auto
    mr-[calc(15vw)]
    mt-[47px]
    ml-[175px]
`;

export const HomeImageDiv = tw.div`
    static

    lg:place-self-end

    ml-0
    lg:ml-auto
    sm:ml-[calc(10vw)]

    mt-[400px]
    xl:mt-auto
    lg:mt-[200px]
    md:mt-[300px]
    sm:mt-[320px]
`;

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
    2xl:text-5xl
    leading-[49px]
    xl:leading-[64px]
`;

export const BigHomeText = tw(MajorHomeText)`
    text-2xl
    2xl:text-3xl
    leading-[33px]
    2xl:leading-[46px]
`;

export const NormalTextDiv = tw.div`
    mr-auto
    xl:mr-[calc(50vw)]
    lg:mr-[calc(30vw)]
    md:mr-[calc(20vw)]
    sm:mr-[calc(10vw)]
`;

export const NormalHomeText = tw(HomeText)`
    font-normal
    text-base
    xl:text-lg
    leading-[22px]
    xl:leading-[32px]
    py-6
`;
import tw from "tailwind-styled-components";


export const Titles = tw.section`
    grid
    sm:flex-col

    lg:grid-cols-2
    lg:justify-between
    lg:gap-20
    lg:items-center
    lg:mx-10
    lg:mt-10
`;

export const Roles = tw.article`
    flex
    flex-col
    justify-between
    items-center

    md:mb-8
`;

export const Header2 = tw.h2`
  text-3xl
  spacing
`;

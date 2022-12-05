import tw from "tailwind-styled-components";

export const AboutSection = tw.section`
  flex
  sm:flex-col
  sm:justify-center
  sm:items-center

  lg:flex-row
  lg:justify-around
`;

export const AboutDescription = tw.article`
  sm:text-sm
  md:mt-10
  md:mb-10
  md:w-1/2
  md:text-xl
  lg:w-1/2
  lg:text-xl

  self-center
`
export const ProfilePic = tw.img`
  rounded-lg
  sm:w-1/3
  md:w-1/4
  mt-5

  lg:w-1/4
  lg:rounded
`;

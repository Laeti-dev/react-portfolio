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
  lg:w-1/2
  lg:m-auto
  lg:text-3xl
  lg:leading-relaxed
  self-center
`
export const ProfilePic = tw.img`
  rounded-lg
  sm:w-1/3

  md:w-1/4
  mt-10
  m-auto

  lg:w-1/4
  lg:rounded
`;

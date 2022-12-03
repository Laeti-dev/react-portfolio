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
  lg:w-1/2 self-center
`
export const ProfilePic = tw.img`
  rounded-lg
  sm:w-1/3
  md:w-1/2
  mt-10





  lg:w-1/3
  lg:rounded
`;

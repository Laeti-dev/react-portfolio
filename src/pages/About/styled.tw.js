import tw from "tailwind-styled-components";

export const AboutSection = tw.section`
  flex
  md:relative

  sm:flex-col
  justify-center
  gap-8
  w-4/5
`;

export const ProfilePic = tw.img`
  sm:absolute
  sm: rounded-full
  sm:self-end
  sm:w-20
  sm:top-28

  md:rounded
  md:relative
  md:w-1/2
  bottom-5

  lg:w-1/3
  lg: md:inline-flex
  lg:rounded
`;

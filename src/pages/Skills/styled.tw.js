import tw from "tailwind-styled-components";

export const Skills = tw.div`
  grid
  mx-auto

  sm:grid-cols-4
  sm:gap-5
  sm:mt-20

  md:grid-cols-4
  md:mt-15
  md:gap-8

  lg:mt-24
  lg:grid-cols-7

`;

export const SkillsLogo = tw.img`
sm:w-12
sm:h-12

md:w-28
md:h-28
`;

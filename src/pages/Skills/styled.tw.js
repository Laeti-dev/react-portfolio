import tw from "tailwind-styled-components";

export const Skills = tw.article`
  grid
  mx-auto

  sm:grid-cols-4
  sm:gap-5

  md:grid-cols-4
  md:mt-15
  md:gap-10

  lg:mt-24
  lg:grid-cols-7
  lg:gap-16
`;

export const SkillsLogo = tw.img`
sm:w-12
sm:h-12

md:w-32
md:h-32
`;

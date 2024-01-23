import tw from "tailwind-styled-components";

export const Skills = tw.ul`
  mx-auto
  grid

  sm:mt-20
  sm:grid-cols-4
  sm:gap-5

  md:mt-15
  md:grid-cols-4
  md:gap-8

  lg:mt-24
  lg:grid-cols-7
  lg:gap-12

`;

export const SkillsLogo = tw.img`
sm:w-12
sm:h-12

md:w-28
md:h-28
`;

export const TabMenu = tw.menu`
md:mx-4
md:my-0
md:p-0
md:flex
md:gap-2

list-none
`

export const TabButtonSt = tw.button`
md:px-2
md:py-0
md:flex
md:gap-2

border-none
rounded-md
text-nav-bar-color
bg-transparent
hover:text-active-color

cursor-pointer
transition-all
ease-out
duration-75

`

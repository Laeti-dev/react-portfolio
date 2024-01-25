import tw from "tailwind-styled-components";

export const Skills = tw.section`
  grid
  mx-auto

  sm:grid-cols-4
  sm:gap-5
  sm:mt-16

  md:grid-cols-4
  md:mt-8
  md:gap-8

  lg:mt-24
  lg:grid-cols-5

`;

export const SkillsLogo = tw.img`
sm:w-12
sm:h-12

md:w-28
md:h-28
`;
export const TabMenu = tw.menu`
flex
gap-6
mt-4

md:mx-4
md:my-0
md:p-0


list-none
`

export const TabButtonSt = tw.button`
border-none
rounded-md
bg-transparent
text-nav-bar-color
active:text-active-color
cursor-pointer
transition-all
ease-out
duration-75

md:px-2
md:py-0
md:flex
md:gap-6

`

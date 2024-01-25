import tw from "tailwind-styled-components";

export const Skills = tw.ul`
  mx-auto
  grid

  sm:mt-12
  sm:grid-cols-3
  sm:gap-8

  md:mt-15
  md:grid-cols-5
  md:gap-7

  lg:mt-24

`

export const SkillsLogo = tw.img`
sm:max-w-12
sm:h-12

md:w-16
md:h-16

lg:w-20
lg:h-20
`;

export const TabMenu = tw.menu`
flex
gap-2
list-none
mx-4
my-0
p-0

md:mx-4
md:my-0
md:p-0
`

export const TabButtonSt = tw.button`
border-none
rounded-md
text-nav-bar-color
bg-transparent
hover:text-active-color

cursor-pointer
transition-all
ease-out
duration-75

md:px-2
md:py-0




`

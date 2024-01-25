import tw from "tailwind-styled-components";

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

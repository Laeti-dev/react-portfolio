// import styled from "styled-components"
import tw from "tailwind-styled-components";

export const Nav = tw.nav`
  w-full
  z-10

  sm:h-10
  md:h-16
  lg:gap-6

  grid
  grid-cols-7
  justify-around
  justify-items-center
  items-center

  bg-nav-bar-color
  text-background-color
  fixed
  font-Inconsolata
`;


export const NavLogo = tw.div`
    flex-none
    justify-self-start
    ml-3

    sm:col-span-2
    sm:justify-self-center
    sm:ml-0

  hover:text-active-color
    font-Madi
    sm:text-lg
    md:text-3xl

`;

export const NavMenu = tw.div`
  col-span-3

  sm:space-x-3
  md:space-x-6

  `

export const NavSocial = tw.div`
  justify-self-center
  mr-3

  sm:col-span-2
  sm:mr-0
  sm:space-x-3

  md:space-x-7

`

export const NavLink = tw.a`

`;

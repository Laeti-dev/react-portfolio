// import styled from "styled-components"
import tw from "tailwind-styled-components";

export const Nav = tw.nav`
  w-full
  grid
  grid-cols-7
  gap-4
  justify-around
  justify-items-center
  items-center
  bg-nav-bar-color
  h-16
  text-background-color
  fixed
  font-Inconsolata"
`;


export const NavLogo = tw.div`
    flex-none
    justify-self-start
    ml-3
// phones
    sm:col-span-2
    sm:justify-self-center

`;

export const NavMenu = tw.div`
  space-x-6
  col-span-3`;

export const NavSocial = tw.div`
  space-x-4
  justify-self-center
  mr-3

  sm:col-span-2
`;

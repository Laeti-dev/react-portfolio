// import styled from "styled-components"
import tw from "tailwind-styled-components";

export const Nav = tw.nav`
  w-full
  sm:h-10
  lg:h-20

  grid
  grid-cols-7
  gap-4
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

`;

export const NavMenu = tw.div`
  space-x-20
  col-span-3
  `;

export const NavSocial = tw.div`
  space-x-20
  justify-end
  mr-3

  sm:col-span-2
`;

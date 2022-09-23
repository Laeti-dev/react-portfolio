import styled from "styled-components"


export const Nav = styled.nav.attrs({
  className: "w-full grid grid-cols-5 gap-4 justify-around justify-items-center items-center bg-nav-bar h-10 text-background-color static font-Inconsolata"
})``;


export const NavLogo = styled.div.attrs({
    className: "flex-none justify-self-start ml-3"
})``;

export const NavMenu = styled.div.attrs({
  className: "space-x-4 col-span-3"
})``;

export const NavSocial = styled.div.attrs({
  className: "space-x-4 justify-self-end mr-3"
})``;

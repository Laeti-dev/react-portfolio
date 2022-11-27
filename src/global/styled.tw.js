import tw from "tailwind-styled-components";

export const GlobalStyle = tw.article`
  h-screen
  m-auto
  px-4

  flex
  flex-col
  items-center
  justify-center

  bg-background-color
  text-nav-bar-color
  font-Inconsolata
  rounded-lg
`;

export const Header1 = tw.h1`
  sm:text-3xl
  md:text-5xl
`;

export const Underline = tw.div`
  bg-nav-bar-color
  w-20
  h-1
  rounded-1
  mx-auto
  mt-1
  mb-12
`;

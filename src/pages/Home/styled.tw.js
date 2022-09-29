import styled from "styled-components"

export const HomeContainer = styled.article.attrs({
  className: "container pt-12 flex flex-col items-center m-auto px-4 bg-background-color text-nav-bar-color font-Inconsolata rounded-lg"
})``;

export const Header1 = styled.h1.attrs({
  className: "text-5xl"
})``;

export const Header2 = styled.h2.attrs({
  className: "text-3xl spacing"
})``;

export const Header3 = styled.h3.attrs({
  className: "text-2xl mt-2 mb-8"
})``;

export const Devicons = styled.section.attrs({
  className: "w-full text-center mt-8"
})``;

export const DeviconsList = styled.i.attrs({
  className: "w-2/4 m-auto text-5xl grid grid-cols-5 justify-center items-center content-center"
})``;

export const ListParent = styled.div.attrs({
  className: "relative"
})``;

export const HoverInfo = styled.p.attrs({
  className: "text-base absolute top-2 left-1 bg-background-color h-8 w-full"
})``;

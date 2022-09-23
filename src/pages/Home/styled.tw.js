import styled from "styled-components"

export const HomeContainer = styled.article.attrs({
  className: "container h-70 py-8 flex flex-col items-center m-auto px-4 bg-background-color text-nav-bar-color font-Inconsolata rounded-lg"
})``;

export const Header1 = styled.h1.attrs({
  className: "text-5xl"
})``;

export const Header2 = styled.h2.attrs({
  className: "text-3xl spacing"
})``;

export const Header3 = styled.h3.attrs({
  className: "text-2xl text-center mt-2 mb-8"
})``;

export const Devicons = styled.section.attrs({
  className: "w-full m-auto"
})``;

export const DeviconsList = styled.i.attrs({
  className: "text-4xl grid grid-cols-4 gap-2 justify-center items-center content-center"
})``;

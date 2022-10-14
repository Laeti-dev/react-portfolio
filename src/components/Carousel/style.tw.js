import styled from "styled-components";


export const CarouselContainer = styled.section.attrs({
  className: " w-3/5 flex flex-column"
})``;

export const CarouselWrapper = styled.article.attrs({
className: "flex w-full relative"
})``;

export const CarouselContentWrapper = styled.div.attrs({
  className: "overflow-hidden w-full height-full"
})``;

export const CarouselContent = styled.div.attrs({
  className: "flex shrink-0 grow transition-all duration-200 ease-linear"
})``;

export const ArrowButtons = styled.button.attrs({
  className: "relative z-1 top-1/2 -translate-y-1/2"
})``;

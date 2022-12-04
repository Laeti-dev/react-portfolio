import styled from "styled-components";


export const CarouselContainer = styled.section.attrs({
  className: " w-4/5 flex flex-column"
})``;

export const CarouselWrapper = styled.div.attrs({
className: "flex w-max relative"
})``;

export const CarouselContentWrapper = styled.div.attrs({
  className: "overflow-hidden w-full height-full"
})``;

export const CarouselContent = styled.ul.attrs({
  className: "flex transition-all duration-250 ease-linear scrollbar-hide"
})``;

export const ArrowButtons = styled.button.attrs({
  className: "relative z-10 top-1/2 -translate-y-1/2"
})``;

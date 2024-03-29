
import tw from "tailwind-styled-components";

export const CarouselContainer = tw.section`
  flex
  mt-12
  sm:w-screen
  lg:w-4/5
  lg:mt-16
  lg:-ml-5
`;

export const CarouselWrapper = tw.div`
  flex
  w-screen
  relative
`;

export const CarouselContentWrapper = tw.div`
  overflow-hidden
  w-full
  h-full
`;

export const CarouselContent = tw.ul`
  flex
  transition-all
  duration-250
  ease-linear
  scrollbar-hide
  mb-8
`;

export const ArrowButtons = tw.button`
  relative
  z-10
  top-1/2
  -translate-y-1/2
`;

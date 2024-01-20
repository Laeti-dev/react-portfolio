import tw from "tailwind-styled-components";


export const Titles = tw.section`
    grid
    sm:flex-col

    lg:grid-cols-3
    lg:justify-between
    lg:gap-8
    lg:items-center
    lg:mx-10
    lg:mt-10
`;

export const Roles = tw.article`
    flex
    flex-col
    justify-between
    items-center

    md:mb-8
`;

export const Header2 = tw.h2`
  text-3xl
  spacing
`;



// export const Devicons = styled.section.attrs({
//   className: "w-full text-center mt-8"
// })``;

// export const DeviconsList = styled.i.attrs({
//   className: "w-2/4 m-auto text-5xl grid grid-cols-5 justify-center items-center content-center"
// })``;

// export const ListParent = styled.div.attrs({
//   className: "relative"
// })``;

// export const HoverInfo = styled.p.attrs({
//   className: "text-base absolute top-2 left-1 bg-background-color h-8 w-full"
// })``;

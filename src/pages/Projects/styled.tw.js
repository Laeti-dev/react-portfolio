import tw from "tailwind-styled-components";

export const ProjectsList = tw.li`
  flex
  justify-around
  items-center
  min-w-full
  sm:flex-col
  sm:w-fit
  md:mt-10
  lg:flex-row
`;

export const ProjectMedia = tw.div`
  self-center
  md:h-3/4
  md:mb-6
`;

export const ProjectDescription = tw.div`
  flex
  flex-col
  justify-center
  sm:w-3/4
  md:text-xl
  lg:w-1/2
  lg:leading-relaxed
  `;

export const DescriptionText = tw.div`
  text-justify
`;

export const DescriptionTools = tw.div`
  flex
`;

export const DescriptionLinks = tw.div`
  mt-4
`;

import tw from "tailwind-styled-components";

export const ProjectsList = tw.li`
  flex
  items-center
  min-w-full

  sm:flex-col
  sd:justify-center
  lg:flex-row
  lg:justify-around

  sm:w-fit

  lg:mt-1
  lg:w-1/4
`;

export const ProjectMedia = tw.div`
  self-center
  md:mb-6
  lg:-ml-10
`;

export const ProjectDescription = tw.div`
  flex
  flex-col
  justify-center
  sm:w-3/4
  md:text-xl
  lg:w-1/2
  lg:leading-relaxed
  lg:max-w-1/2
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

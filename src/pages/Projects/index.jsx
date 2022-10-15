import { GlobalStyle, Header1, Underline } from "../../global/styled.tw";
import { Carousel } from "../../components/Carousel/carousel";
// import Items from "./Items"
import { ProjectContainer, ProjectDescription, ProjectMedia } from "./styled.tw"
// import { CarouselContainer, CarouselWrapper, CarouselContentWrapper, CarouselContent, ArrowButtons } from "../../components/Carousel/style.tw";
import ProjectData from "./ProjectData";

export default function Projects() {
  return(
    <GlobalStyle>
      <Header1>Projects</Header1>
      <Underline></Underline>
      <Carousel>
      {ProjectData.map((project, index) => {
      return(
              <ProjectContainer key={`${index}-${project.title}`}>
                  <ProjectMedia>
                      <video>
                          <source src={project.mediaMp4} />
                          <source src={project.mediaWebm} />
                      </video>

                  </ProjectMedia>
                  <ProjectDescription>
                      <p>{project.descriptionText}</p>
                  </ProjectDescription>
              </ProjectContainer>
    )})}

        {/* <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
        <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
        <img src="https://via.placeholder.com/1600x300" alt="placeholder" /> */}
      </Carousel>
    </GlobalStyle>
  );
}

import { GlobalStyle, Header1, Underline } from "../../global/styled.tw";
import { Carousel } from "../../components/Carousel/carousel";
// import { Slides } from "./Slides"
import ProjectData from "./ProjectData";
import { ProjectContainer, ProjectDescription, ProjectMedia } from "./styled.tw"
import { useState } from "react";

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  return(
    <GlobalStyle>
      <Header1>Projects</Header1>
      <Underline></Underline>
      <Carousel currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}>
        {ProjectData.map((project, index) => {
          return(
              <ProjectContainer key={`${index}-${project.title}`} style={{transform: `translateX(-${currentIndex * 100}%)`}} >
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

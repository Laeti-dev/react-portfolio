import { GlobalStyle, Header1, Underline } from "../../global/styled.tw";
import { Carousel } from "../../components/Carousel/carousel";
// import { Slides } from "./Slides"
import ProjectData from "./ProjectData";
import { ProjectContainer, ProjectDescription, ProjectMedia } from "./styled.tw"

export default function Projects() {
  return(
    <GlobalStyle>
      <Header1>Projects</Header1>
      <Underline></Underline>
      <Carousel>
        {/* {ProjectData.map((project, index) => {
          return(
              <ProjectContainer key={`${index}-${project.title}`} >
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
        )})} */}

          <li><img src="https://via.placeholder.com/1600x300" alt="placeholder" /></li>
          <li><img src="https://via.placeholder.com/1600x300" alt="placeholder" /></li>
          <li><img src="https://via.placeholder.com/1600x300" alt="placeholder" /></li>


                {/* <div style={{padding: 8}}>
                    <img src="https://via.placeholder.com/1600x300" alt="placeholder" style={{width: '100%'}} />
                </div>
                <div style={{padding: 8}}>
                    <img src="https://via.placeholder.com/1600x300" alt="placeholder" style={{width: '100%'}} />
                </div>
                <div style={{padding: 8}}>
                    <img src="https://via.placeholder.com/1600x300" alt="placeholder" style={{width: '100%'}} />
                </div> */}

      </Carousel>
    </GlobalStyle>
  );
}

import ProjectData from "./ProjectData";
import { ProjectContainer, ProjectMedia, ProjectDescription } from "./styled.tw"

export function Slides() {
  return(
    ProjectData.map((project, index) => {
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
    )})
  )
}

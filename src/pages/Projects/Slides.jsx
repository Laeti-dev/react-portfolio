import { ProjectData } from "./ProjectData"

export default function Slides() {
  return(
    {ProjectData.map((project, index) => {
            <ProjectContainer key={`${index}-${project.title}`}>
                <video src={project.media} />
                <ProjectDescription>
                  <p>{project.descriptionText}</p>
                </ProjectDescription>
            </ProjectContainer>
            })
    }
  )
}

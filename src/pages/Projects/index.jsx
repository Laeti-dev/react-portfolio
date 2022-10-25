import { GlobalStyle, Header1, Underline } from "../../global/styled.tw";
import { Carousel } from "../../components/Carousel/carousel";
// import { Slides } from "./Slides"
import ProjectData from "./ProjectData";
import { ProjectDescription, ProjectMedia } from "./styled.tw"

export default function Projects() {
  return(
    <GlobalStyle>
        <Header1>Projects</Header1>
        <Underline></Underline>
        <Carousel>
            {ProjectData.map((project, index) => {
                return(
                    <li className="flex justify-around items-center min-w-full" key={`${index}-${project.title}`}>
                      <ProjectMedia>
                        {project.mediaJpeg == null ?
                          <video style={{width: `${project.width}`}}>
                              <source src={project.mediaMp4} />
                              <source src={project.mediaWebm} />
                          </video>
                        : <img src={project.mediaJpeg} alt={project.title} className="max-w-xs"/>
                        }
                    </ProjectMedia>
                    <ProjectDescription>
                        <h2>{project.title}</h2>
                        <p className="text-justify">{project.descriptionText}</p>
                        <div className="flex">

                        </div>
                    </ProjectDescription>
                    </li>
            )})}
        </Carousel>
    </GlobalStyle>
  );
}

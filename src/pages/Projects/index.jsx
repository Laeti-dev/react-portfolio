import { GlobalStyle, Header1, Underline } from "../../global/styled.tw";
import { Carousel } from "../../components/Carousel/carousel";
import ProjectData from "./ProjectData";
import { DescriptionText, ProjectDescription, ProjectMedia, DescriptionLinks } from "./styled.tw"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

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
                        <DescriptionText className="text-justify">{project.descriptionText}</DescriptionText>
                        <DescriptionLinks className="flex">
                            <a href={project.repo}>
                                <FontAwesomeIcon icon="fa-brands fa-square-github" size="3x mx-1" className="hover:text-active-color" />
                            </a>
                            {project.youtube != null &&
                            <a href={project.youtube}>
                                <FontAwesomeIcon icon="fa-brands fa-youtube-square" size="3x mx-1" className="hover:text-active-color" />
                            </a>
                          }
                        </DescriptionLinks>
                    </ProjectDescription>
                    </li>
            )})}
        </Carousel>
    </GlobalStyle>
  );
}

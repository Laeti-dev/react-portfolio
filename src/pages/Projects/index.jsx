import { GlobalStyle, Header1, Underline } from "../../global/styled.tw";
import { Carousel } from "../../components/Carousel/carousel";
import ProjectData from "./ProjectData";
import { ProjectsList, DescriptionText,DescriptionTools, ProjectDescription, ProjectMedia, DescriptionLinks } from "./styled.tw"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export default function Projects() {
  return(
    <GlobalStyle>
        <Header1>Projects</Header1>
        <Underline></Underline>
        <Carousel>
            {ProjectData.map((project, index) => {
                return(
                    <ProjectsList key={`${index}-${project.title}`}>
                      <ProjectMedia>
                        {project.mediaJpeg == null ?
                          // <video loop autoplay style={{width:`${project.width}`}}>
                          //     <source src={project.mediaMp4} />
                          //     <source src={project.mediaWebm} />
                          // </video>
                          <img src={project.mediaGif} alt={project.title} style={{width:`${project.width}`}} className="-z-1"/>
                        : <img src={project.mediaJpeg} alt={project.title} className="max-w-xs -z-1"/>
                        }
                      </ProjectMedia>
                      <ProjectDescription>
                          <h2 className="font-extrabold sm:text-xl md:text-3xl lg:text-3xl mb-4">{project.title}</h2>
                          <DescriptionText>{project.frText}</DescriptionText>
                          <DescriptionTools></DescriptionTools>
                          <DescriptionLinks>
                              <a href={project.repo} target="_blank" rel="noreferrer">
                                  <FontAwesomeIcon icon="fa-brands fa-square-github" size="3x mx-1" className="hover:text-active-color" />
                              </a>
                              {project.youtube != null &&
                              <a href={project.youtube} target="_blank" rel="noreferrer">
                                  <FontAwesomeIcon icon="fa-brands fa-youtube-square" size="3x mx-1" className="hover:text-active-color" />
                              </a>
                            }{project.link != null &&
                              <a href={project.link} target='_blank' rel='noreferrer'>
                                <FontAwesomeIcon icon="fa-light fa-globe" size='3x mx-1' className="hover:text-active-color" />
                              </a>
                            }
                          </DescriptionLinks>
                      </ProjectDescription>
                    </ProjectsList>
            )})}
        </Carousel>
    </GlobalStyle>
  );
}

import { ProjectsList, ProjectMedia, ProjectDescription, DescriptionText, DescriptionFooter, ProjectTools, ProjectLinks } from "./styled.tw"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function ProjectItem({ project }) {
  return (
    <ProjectsList>
      <ProjectMedia>
        {project.mediaJpeg == null ? (
          <img
            src={`${project.mediaGif}`}
            alt={project.title}
            style={{ width: `${project.width}` }}
            className="-z-1"
          />
        ) : (
          <img
            src={`${project.mediaJpeg}`}
            alt={project.title}
            className="max-w-xs -z-1"
          />
        )}
      </ProjectMedia>
      <ProjectDescription>
        <h2 className="font-extrabold sm:text-xl md:text-3xl lg:text-3xl mb-4">
          {project.title}
        </h2>
        <DescriptionText>{project.frText}</DescriptionText>
        <DescriptionFooter>
          <ProjectTools>
            {project.tools.map((link, i) => {
              return <img key={i} src={link} alt="stack" className="w-12" />
            })}
          </ProjectTools>
          <ProjectLinks>
            <a href={project.repo} target="_blank" rel="noreferrer">
              <FontAwesomeIcon
                icon="fa-brands fa-square-github"
                size="3x"
                className="hover:text-active-color mx-1"
              />
            </a>
            {project.youtube != null && (
              <a href={project.youtube} target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon="fa-brands fa-youtube-square"
                  size="3x"
                  className="hover:text-active-color mx-1"
                />
              </a>
            )}
            {project.link != null && (
              <a href={project.link} target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon="fa-light fa-globe"
                  size="2x"
                  className="hover:text-active-color mx-1"
                />
              </a>
            )}
          </ProjectLinks>
        </DescriptionFooter>
      </ProjectDescription>
    </ProjectsList>
  )}

import { GlobalStyle, Header1, Underline } from "../../global/styled.tw";
import { Carousel } from "../../components/Carousel/carousel";
import ProjectItem  from "../../components/ProjectItem/ProjectItem";
import Datas from "../../utils/lists/datas.json";


export default function ProjectsCopy() {
  const fullstack = Datas.projects.fullstack
  return(
    <GlobalStyle>
        <Header1 id="Project">Projets</Header1>
        <Underline></Underline>
        <Carousel>
            {fullstack.map((project, index) => (
              <ProjectItem key={`${index}-${project.frTitle}`} project={project} />
            ))}
        </Carousel>
    </GlobalStyle>
  );
}

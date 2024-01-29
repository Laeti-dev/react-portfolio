import { useState } from "react";
import { GlobalStyle, Header1, Underline } from "../../global/styled.tw";
import TabButton from "../../components/TabButton/TabButton";
import { TabMenu } from "../../components/TabButton/styled.tw";
import { Carousel } from "../../components/Carousel/carousel";
import ProjectItem  from "../../components/ProjectItem/ProjectItem";
import Datas from "../../utils/lists/datas.json";


export default function ProjectsCopy() {
  const fullstack = Datas.projects.fullstack
  const [selectedField, setSelectedField] = useState("data")
  const projects = Datas.projects

  function handleSelect(selectedTab) {
    setSelectedField(selectedTab)
  };

  return (
    <GlobalStyle>
      <Header1 id="Project">Projets</Header1>
      <Underline></Underline>
      <TabMenu>
        <TabButton
          isSelected={selectedField === "data"}
          onSelect={() => handleSelect("data")}
        >
          Data Science
        </TabButton>
        <TabButton
          isSelected={selectedField === "fullstack"}
          onSelect={() => handleSelect("fullstack")}
        >
          Fullstack
        </TabButton>
      </TabMenu>
      <Carousel>
        {projects[selectedField].map((project, index) => {
        return (
          <ProjectItem key={`${index}-${project.frTitle}`} project={project} />
      )})}
      </Carousel>
    </GlobalStyle>
  )
}

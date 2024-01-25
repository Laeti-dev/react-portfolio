import { useState } from "react";
import TabButton from "./TabButton.jsx";
import Datas from "../../utils/lists/datas.json";
import { GlobalStyle, Header1, Underline } from "../../global/styled.tw";
import { Skills, SkillsLogo, TabMenu } from "./styled.tw"


export default function SkillsIcones() {
  const [selectedField, setSelectedField] = useState("data");
  const skills = Datas.skills;

  function handleSelect(selectedTab) {
    setSelectedField(selectedTab);
  };

  const tabContent = (
    <div>
      <Skills>
        {skills[selectedField].map((tech) => {
          return (
            <SkillsLogo
            key={tech.id}
            src={tech.link}
            alt={tech.stack}
            />
          )
        })}
      </Skills>
    </div>
  );


  return (
    <GlobalStyle>
      <Header1 id="Skill">Compétences</Header1>
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
        <TabButton
          isSelected={selectedField === "system"}
          onSelect={() => handleSelect("system")}
        >
          Système
        </TabButton>
      </TabMenu>
      {tabContent}
    </GlobalStyle>
  )

}

import { useState } from "react";
import Datas from "../../utils/lists/datas.json";
import { GlobalStyle, Header1, Underline } from "../../global/styled.tw";
import { Skills, SkillsLogo } from "./styled.tw.js"
import TabButton from "../../components/TabButton/TabButton.jsx"
import { TabMenu } from "../../components/TabButton/styled.tw.js";

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

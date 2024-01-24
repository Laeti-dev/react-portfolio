import { useState } from "react";
import TabButton from "./TabButton.jsx";
import Datas from "../../utils/lists/datas.json"
import { GlobalStyle, Header1, Underline } from "../../global/styled.tw";
import { Skills, SkillsLogo, TabMenu } from "./styled.tw"


export default function SkillsIcones() {
  const [selectedField, setSelectedField] = useState("Data Science");
  const skills = Datas.skills

  function handleSelect(selectedTab) {
    setSelectedField(selectedTab);
  };

  let tabContent = (
    <div>
      <Skills>
        {skills["Data Science"].map((skill) => (
          <SkillsLogo
            src={skill.link}
            key={`${skill.id}`}
            alt={`${skill.stack} logo`}
          ></SkillsLogo>
        ))}
      </Skills>
    </div>
  )

  if (selectedField) {
    tabContent = (
      <div>
        <Skills>
          {skills[selectedField].map((skill) => (
            <li>
              <SkillsLogo
                src={skill.link}
                key={`${skill.id}`}
                alt={`${skill.stack}`}
              />
            </li>
          ))}
        </Skills>
      </div>
    )
  }
  return (
    <GlobalStyle>
      <Header1 id="Skill">Compétences</Header1>
      <Underline></Underline>
      <TabMenu>
        <TabButton
          isSelected={selectedField === "Data Science"}
          onSelect={() => handleSelect("Data Science")}
        >
          Data Science
        </TabButton>
        <TabButton
          isSelected={selectedField === "Fullstack"}
          onSelect={() => handleSelect("Fullstack")}
        >
          Fullstack
        </TabButton>
        <TabButton
          isSelected={selectedField === "Système"}
          onSelect={() => handleSelect("Système")}
        >
          Système
        </TabButton>
      </TabMenu>
      {tabContent}
    </GlobalStyle>
  )

}

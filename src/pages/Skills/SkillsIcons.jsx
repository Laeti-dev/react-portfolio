import { useState } from "react";
import TabButton from "./TabButton.jsx";
import { TECH_ICONS } from "./devIcons.js"
import { GlobalStyle, Header1, Underline } from "../../global/styled.tw";
import { Skills, SkillsLogo, TabMenu } from "./styled.tw"


export default function SkillsIcones() {
  const [selectedField, setSelectedField] = useState("Data Science");

  function handleSelect(selectedTab) {
    setSelectedField(selectedTab);
  };

  let tabContent = (
    <div>
      <h3>"Data Science"</h3>
      <Skills>
        {TECH_ICONS["Data Science"].tech.map((logoLink, index) => (
          <SkillsLogo
            src={logoLink}
            key={`${index}${logoLink}`}
            alt={`${TECH_ICONS["Data Science"].title} logo`}
          ></SkillsLogo>
        ))}
      </Skills>
    </div>
  )

  if (selectedField) {
    tabContent = (
      <div>
        <h3>{TECH_ICONS[selectedField].title}</h3>
        <Skills>
          {TECH_ICONS[selectedField].tech.map((logoLink, index) => (
            <li>
              <SkillsLogo
                src={logoLink}
                key={`${index}${logoLink}`}
                alt={`${TECH_ICONS[selectedField].title} logo`}
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

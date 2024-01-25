import { Skills, SkillsLogo } from "./styled.tw"

export default function TechLogos({title, tech}) {
  return (
    <li>
      <h3>{title}</h3>
      <Skills>
        {
          tech.map((logoLink, index) =>
            <SkillsLogo src={logoLink} key={`${index}${logoLink}`} alt={`${title} logo`}></SkillsLogo>
        )}
      </Skills>
    </li>
  )
};

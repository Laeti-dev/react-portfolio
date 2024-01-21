import TechLogos from "./TechLogos.jsx";
import { TECH_ICONS } from "./devIcons.js"
import { GlobalStyle, Header1, Underline } from "../../global/styled.tw";


export default function SkillsIcones() {

  return(
    <GlobalStyle>
      <Header1 id="Skill">Compétences</Header1>
      <Underline></Underline>
      <ul>
        {TECH_ICONS.map((field) =>
        <TechLogos key={field.title} {...field} />
        )}
      </ul>

    </GlobalStyle>
  )

}

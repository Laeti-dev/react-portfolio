import LeWagon from "../../utils/img/lewagon.png"
import { HomeContainer,
        Header1,
        Header2,
        Header3,
        Devicons,
        DeviconsList,
        ListParent,
        HoverInfo
} from "./styled.tw"
import { useState } from "react"

export default function Home() {
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <HomeContainer>
        <Header1>Laetitia Ikusawa</Header1>
        <Header2>Développeuse Fullstack</Header2>
        <p className="mt-1">Certifiée par Le Wagon Tokyo</p>
        <img src={LeWagon} alt="lewagon" className="w-28 h-28 rounded-2xl spacing" />
            <Devicons>
              <Header3>Mes techs :</Header3>
              <DeviconsList>
                  {[
                      ["devicon-html5-plain-wordmark", "html"],
                      ["devicon-css3-plain-wordmark", "css"],
                      ["devicon-sass-original", "sass"],
                      ["devicon-javascript-plain", "javascript"],
                      ["devicon-tailwindcss-plain", "tailwind"],
                      ["devicon-bootstrap-plain-wordmark", "bootstrap"],
                      ["devicon-rails-plain-wordmark", "rails"],
                      ["devicon-github-original-wordmark", "github"],
                      ["devicon-react-original-wordmark", "react"],
                      ["devicon-git-plain-wordmark", "git"],
                      ["devicon-heroku-line-wordmark", "heroku"],
                      ["devicon-postgresql-plain-wordmark", "Postgresql"],
                      ["devicon-vscode-plain-wordmark", "vscode"],
                      ["devicon-rspec-original-wordmark", "rspec"],
                      ["devicon-jest-plain", "jest"]
                  ].map(([devClass, text]) => (
                      <ListParent
                          onMouseOver={handleMouseOver}
                          onMouseOut={handleMouseOut}
                      >
                          <i className={devClass + " m-auto"}></i>
                          {isHovering && <HoverInfo>{text}</HoverInfo>}
                      </ListParent>
                ))}
              </DeviconsList>
            </Devicons>
    </HomeContainer>
  );

}

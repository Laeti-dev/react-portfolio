// import { useState } from 'react';

import { GlobalStyle, Header1 } from "../../global/styled.tw";

export default function Skill() {
  // const [isHovering, setIsHovering] = useState(false)

  // const handleMouseOver = () => {
  //   setIsHovering(true);
  // };
  // const handleMouseOut = () => {
  //   setIsHovering(false);
  // };

  return(
    <GlobalStyle>
      <Header1>Skills</Header1>
    </GlobalStyle>
  )

}

{/* <Devicons>
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
            </Devicons> */}

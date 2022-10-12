import { GlobalStyle, Header1, Underline } from "../../global/styled.tw";
import Bash from '../../utils/img/devLogos/icons8-bash.svg'
import Html from '../../utils/img/devLogos/icons8-html-5-144.svg'
import Css from '../../utils/img/devLogos/icons8-css3-144.svg'
import Javascript from '../../utils/img/devLogos/icons8-javascript-144.svg'
import Ruby from '../../utils/img/devLogos/icons8-ruby-programming-language-144.svg'
import Python from '../../utils/img/devLogos/icons8-python-144.svg'
import Bootstrap from '../../utils/img/devLogos/icons8-bootstrap-144.svg'
import Tailwind from '../../utils/img/devLogos/icons8-tailwindcss-144.svg'
import Github from '../../utils/img/devLogos/icons8-github.svg'
import Mysql from '../../utils/img/devLogos/icons8-my-sql.svg'
import Postgresql from '../../utils/img/devLogos/icons8-postgresql.svg'
import Heroku from '../../utils/img/devLogos/icons8-heroku.svg'
import Gcloud from '../../utils/img/devLogos/icons8-google-cloud.svg'
import React from '../../utils/img/devLogos/icons8-react.svg'
import Rails from '../../utils/img/devLogos/icons8-ruby-on-rails.svg'
import Redux from '../../utils/img/devLogos/icons8-redux.svg'


export default function Skill() {
  const logos = [ Html, Css, Javascript, Ruby, Python, Bootstrap, Tailwind, Rails, React, Redux, Github,
                Bash, Mysql, Postgresql, Heroku, Gcloud]
  return(
    <GlobalStyle>
      <Header1>Skills</Header1>
      <Underline></Underline>
      <article className="flex flex-column flex-wrap">
        {logos.map((logo, index) =>
        <img src={logo} key={`${index}${logo}`} alt={logos[index]} /> )}

      </article>
    </GlobalStyle>
  )

}

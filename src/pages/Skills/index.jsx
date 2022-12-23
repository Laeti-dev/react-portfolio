import { GlobalStyle, Header1, Underline } from "../../global/styled.tw";
import { Skills, SkillsLogo } from "./styled.tw";
// import Bash from '../../utils/img/devLogos/icons8-bash.svg'
// import Html from '../../utils/img/devLogos/icons8-html-5-144.svg'
// import Css from '../../utils/img/devLogos/icons8-css3-144.svg'
// import Javascript from '../../utils/img/devLogos/icons8-javascript-144.svg'
// import Ruby from '../../utils/img/devLogos/icons8-ruby-programming-language-144.svg'
// import Python from '../../utils/img/devLogos/icons8-python-144.svg'
// import Bootstrap from '../../utils/img/devLogos/icons8-bootstrap-144.svg'
// import Tailwind from '../../utils/img/devLogos/icons8-tailwindcss-144.svg'
// import Github from '../../utils/img/devLogos/icons8-github.svg'
// import Mysql from '../../utils/img/devLogos/icons8-my-sql.svg'
// import Postgresql from '../../utils/img/devLogos/icons8-postgresql.svg'
// import Heroku from '../../utils/img/devLogos/icons8-heroku.svg'
// import Gcloud from '../../utils/img/devLogos/icons8-google-cloud.svg'
// import React from '../../utils/img/devLogos/icons8-react.svg'
// import Rails from '../../utils/img/devLogos/icons8-ruby-on-rails.svg'
// import Redux from '../../utils/img/devLogos/icons8-redux.svg'


export default function Skill() {
  // const logos = [ Html, Css, Javascript, Ruby, Python, Bootstrap, Tailwind, Rails, React, Redux, Github,
  //               Bash, Mysql, Postgresql, Heroku, Gcloud]
  const devLinks = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anaconda/anaconda-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg"
  ]
  return(
    <GlobalStyle>
      <Header1 id="Skill">Skills</Header1>
      <Underline></Underline>
      <Skills>
        {devLinks.map((link, index) =>
        <SkillsLogo src={link} key={`${index}${link}`} alt={devLinks[index]}/> )}
      </Skills>

    </GlobalStyle>
  )

}

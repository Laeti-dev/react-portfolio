import { GlobalStyle, Header1, Underline } from "../../global/styled.tw"
import Profile from "../../utils/img/profile.png"
import { AboutSection, AboutDescription, ProfilePic } from "./styled.tw"

export default function About() {
  return (
    <GlobalStyle>
      <Header1 id="About">À propos</Header1>
      <Underline></Underline>
      <AboutSection>
        <AboutDescription>
          <p className="text-justify">
            Certifiée développeuse <strong>Fullstack</strong> par
            <strong> Le Wagon Tokyo</strong>, ma soif d'apprendre m'a dirigée
            vers l'apprentissage de <strong>Python</strong> et de son
            application en science des données.
          </p>
          <p className="text-justify">
            Voilà maintenant un an que je suis au poste de
            <strong> data analyst</strong> et, durant cette expérience, j'ai
            participé à<strong> l'élaboration de rapports décisionnels</strong>,
            <strong> initié des modèles statistiques</strong> à des fin de
            monitoring et procédé à des <strong>traitements ETL</strong> dans le
            but de migrer des données dans une solution cloud.
          </p>
          <br />
          <p>
            Je poursuis cette passionnante aventure en me formant en
            intelligence artifcielle avec <strong>OpenClassrooms</strong> :
            Natural Language Processing (<strong>NLP</strong>), computer vision...
          </p>

          {/* <p className="w-1/2 self-center text-justify">
                Hi ! I'm Laeti, freelancer
                graduated from LeWagon Tokyo in March 2022
                who speaks french, english and japanese,
                as well as Ruby, JavaScript and Python.
                Feel free to contact me if you have a project, I would be more than happy to contribuate.

                Recently, I am working on Python oriented data,
                because datas and AI are working for innovation and its positive impact
                on our society, so I want to be part of it.
            </p> */}
        </AboutDescription>
        <ProfilePic src={Profile} alt="Laeti-dev profile" />
      </AboutSection>
    </GlobalStyle>
  )
}

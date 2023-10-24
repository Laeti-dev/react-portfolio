import { GlobalStyle, Header1, Underline } from "../../global/styled.tw"
import Profile from "../../utils/img/profile.png"
import { AboutSection, AboutDescription, ProfilePic } from "./styled.tw"

export default function About() {
  return (
    <GlobalStyle>
      <Header1 id="About">About</Header1>
      <Underline></Underline>
      <AboutSection>
        <AboutDescription>
          <p> Hello !</p>
          <br />
          <p className="text-justify">
            Certifiée développeuse <strong>Fullstack</strong> par
            <strong> Le Wagon Tokyo</strong>, ma curiosité m'a menée dans
            l'apprentissage de <strong>Python</strong>.
          </p>
          <p className="text-justify">
            <strong>
              Statistiques, transformation de données, visualisation, business
              intelligence et Machine Learning
            </strong>{" "}
            sont des thèmes sur lequels j'ai centré mes lectures et qui m'ont
            dirigés vers <strong>Matrice</strong> l'école, dans la perspective
            d'une certification RNCP de niveau 6 (Bac+3/4) en février 2024.
          </p>
          <br />

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

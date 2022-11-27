import { GlobalStyle, Header1, Underline } from "../../global/styled.tw"
import Profile from "../../utils/img/profile.png"
import { AboutSection, ProfilePic } from "./styled.tw"


export default function About(){
  return(
    <GlobalStyle>
      <Header1>About</Header1>
      <Underline></Underline>
      <AboutSection>
        <article className="lg:w-1/2 self-center">
            <p> Hello ! </p>
            <br/>
            <p className="text-justify">
              Certifiée développeuse <strong>Fullstack</strong> par
              <strong> Le Wagon Tokyo</strong>,
              ma curiosité m'a menée dans l'apprentissage de <strong>Python</strong>.
            </p>
            <p className="text-justify">
              <strong>Statistiques, nettoyage de données, visualisation, business intelligence
              et Machine Learning</strong> sont des thèmes sur lequels j'ai centré mes lectures
              et qui m'ont dirigés vers <strong>Matrice</strong> l'école, pour devenir Data Analyst.
            </p>
            <br/>
            <p className="text-justify">
              Dans cette optique, je recherche activement un poste de <strong>
              data analyst en alterance</strong> pour février 2023 en Ile-de-France !
              <strong>Trois semaines en entreprise, une semaine de formation</strong> qui
              sera finalisée par une soutenance pour une certification RNCP de cette formation
              de niveau 6 (Bac+3/4)
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

        </article>
        <ProfilePic src={Profile} alt="Laeti-dev profile"/>
      </AboutSection>
    </GlobalStyle>
  )
}

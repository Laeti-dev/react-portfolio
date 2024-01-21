import LeWagon from "../../utils/img/lewagon.png"
import Matrice from "../../utils/img/Stickers_MatriceTousA.gif"
import OC from "../../utils/img/OC.jpg"
import { Titles, Roles, Header2 } from "./styled.tw"
import { GlobalStyle, Header1 } from "../../global/styled.tw";

export default function Home() {
  return (
    <GlobalStyle id="Home">
      <Header1>Laetitia Ikusawa</Header1>
      <Titles>
        <Roles>
          <Header2>Développeuse Fullstack</Header2>
          <p className="mt-1">Certifiée par Le Wagon Tokyo</p>
          <p>2022</p>
          <img
            src={LeWagon}
            alt="Logo lewagon"
            className="w-28 h-28 rounded-2xl spacing"
          />
        </Roles>
        <Roles>
          <Header2>Data Analyst</Header2>
          <p className="mt-1">Matrice l'école</p>
          <p>2024</p>
          <img
            src={Matrice}
            alt="Logo Matrice l'ecole"
            className="w-28 h-28 rounded-2xl md:spacing"
          />
        </Roles>
        <Roles>
          <Header2>Expert Data Scientist</Header2>
          <p className="mt-1">En formation avec OpenClassrooms</p>
          <p>En cours</p>
          <img
            src={OC}
            alt="Logo OpenClassrooms"
            className="w-50 h-28 rounded-2xl md:spacing"
          />
        </Roles>
      </Titles>
    </GlobalStyle>
  )

}

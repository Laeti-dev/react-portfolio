import LeWagon from "../../utils/img/lewagon.png"
import Matrice from "../../utils/img/Stickers_MatriceTousA.gif"
import { Titles, Roles, Header2 } from "./styled.tw"
import { GlobalStyle, Header1 } from "../../global/styled.tw";

export default function Home() {
  return (
    <GlobalStyle>
        <Header1>Laetitia Ikusawa</Header1>
        <Titles>
          <Roles>
              <Header2>Développeuse Fullstack</Header2>
              <p className="mt-1">Certifiée par Le Wagon Tokyo</p>
              <img src={LeWagon} alt="lewagon" className="w-28 h-28 rounded-2xl spacing" />
          </Roles>
          <Roles>
              <Header2>Data Analyst</Header2>
              <p className="mt-1">En formation chez Matrice</p>
              <img src={Matrice} alt="Matrice l'ecole" className="w-28 h-28 rounded-2xl md:spacing"/>
          </Roles>
        </Titles>
    </GlobalStyle>
  );

}

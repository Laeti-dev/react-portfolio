import LeWagon from "../../utils/img/lewagon.png"
import { Header2 } from "./styled.tw"
import { GlobalStyle, Header1 } from "../../global/styled.tw";

export default function Home() {
  return (
    <GlobalStyle>
        <Header1>Laetitia Ikusawa</Header1>
        <Header2>Développeuse Fullstack</Header2>
        <p className="mt-1">Certifiée par Le Wagon Tokyo</p>
        <img src={LeWagon} alt="lewagon" className="w-28 h-28 rounded-2xl spacing" />
    </GlobalStyle>
  );

}

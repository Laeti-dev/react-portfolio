import LeWagon from "../../utils/img/lewagon.png"
import { HomeContainer,
        Header1,
        Header2,
} from "./styled.tw"
import React, { useRef, forwardRef } from "react";

export default function Home() {

  return (
    <HomeContainer ref={home}>
        <Header1>Laetitia Ikusawa</Header1>
        <Header2>Développeuse Fullstack</Header2>
        <p className="mt-1">Certifiée par Le Wagon Tokyo</p>
        <img src={LeWagon} alt="lewagon" className="w-28 h-28 rounded-2xl spacing" />
    </HomeContainer>
  );

}

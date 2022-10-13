import { GlobalStyle, Header1, Underline } from "../../global/styled.tw";
import { Carousel } from "../../components/Carousel/carousel";

export default function Projects() {
  return(
    <GlobalStyle>
      <Header1>Projects</Header1>
      <Underline></Underline>
      <Carousel>
        <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
        <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
        <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
      </Carousel>
    </GlobalStyle>
  );
}

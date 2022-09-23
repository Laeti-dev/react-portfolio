import LeWagon from "../../utils/img/lewagon.png"
import { HomeContainer,
        Header1,
        Header2,
        Header3,
        Devicons,
        DeviconsList
} from "./styled.tw";

export default function Home() {
  return (
    <HomeContainer>
        <Header1>Laetitia Ikusawa</Header1>
        <Header2>Développeuse Fullstack</Header2>
        <p className="mt-1">Certifiée par Le Wagon Tokyo</p>
        <img src={LeWagon} alt="lewagon" className="w-28 h-28 rounded-2xl spacing" />
            <Devicons>
              <Header3>Mes techs :</Header3>
              <DeviconsList>
                <i className="devicon-html5-plain-wordmark m-auto"></i>
                <i className="devicon-css3-plain-wordmark m-auto"></i>
                <i className="devicon-sass-original m-auto"></i>
                <i className="devicon-javascript-plain m-auto"></i>
                <i className="devicon-tailwindcss-plain colored m-auto"></i>
                <i className="devicon-bootstrap-plain-wordmark m-auto"></i>
                <i className="devicon-rails-plain-wordmark m-auto"></i>
                <i className="devicon-github-original-wordmark m-auto"></i>
                <i className="devicon-react-original-wordmark m-auto"></i>
                <i className="devicon-git-plain-wordmark m-auto"></i>
                <i className="devicon-github-original-wordmark m-auto"></i>
                <i className="devicon-heroku-line-wordmark m-auto"></i>
                <i className="devicon-postgresql-plain-wordmark m-auto"></i>
                <i className="devicon-vscode-plain-wordmark m-auto"></i>
                <i className="devicon-rspec-original-wordmark m-auto"></i>
                <i className="devicon-jest-plain m-auto"></i>
              </DeviconsList>
            </Devicons>
    </HomeContainer>
  );

}

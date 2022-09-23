import LeWagon from "../../utils/img/lewagon.png"

export default function Home() {
  return (
    <div className="container m-auto px-4 bg-background-color">
      <div className="text-center">
        <h1>Laetitia Ikusawa</h1>
        <h2>Full-stack developper</h2>
        <p>Graduated from Le Wagon Tokyo</p>
        <img src={LeWagon} alt="lewagon" className="w-28 h-28 rounded-2xl" />
            <div class="devicons">
              <h3>My stacks :</h3>
              <div>
                <i class="devicon-html5-plain-wordmark"></i>
                <i class="devicon-css3-plain-wordmark"></i>
                <i class="devicon-sass-original"></i>
                <i class="devicon-javascript-plain"></i>
                <i class="devicon-tailwindcss-plain colored"></i>
                <i class="devicon-bootstrap-plain-wordmark"></i>
                <i class="devicon-rails-plain-wordmark"></i>
                <i class="devicon-github-original-wordmark"></i>
                <i class="devicon-react-original-wordmark"></i>
                <i class="devicon-git-plain-wordmark"></i>
                <i class="devicon-github-original-wordmark"></i>
                <i class="devicon-heroku-line-wordmark"></i>
                <i class="devicon-postgresql-plain-wordmark"></i>
                <i class="devicon-vscode-plain-wordmark"></i>
                <i class="devicon-rspec-original-wordmark"></i>
                <i class="devicon-jest-plain"></i>
              </div>
            </div>
      </div>
    </div>
  );

}

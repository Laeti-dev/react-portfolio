import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Header() {
  return(
    <nav id="navbar" className="grid grid-cols-3 content-center bg-nav-bar h-10">
        <div className="flex-none ">
          <Link to="/">Laeti-dev</Link>
        </div>

        <div >
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
        </div>

        <div >
            <FontAwesomeIcon icon="fa-brands fa-linkedin" size="2x" className="mx-3"/>
            <FontAwesomeIcon icon="fa-brands fa-square-github" size="2x" />
        </div>
    </nav>
  );
}

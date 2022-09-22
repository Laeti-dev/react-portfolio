import { Link } from "react-router-dom";

export default function Header() {
  return(
    <nav id="navbar" className="flex flex-row">
        <div >
          <Link to="/">Laeti-dev</Link>
        </div>

        <div >
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
        </div>

        <div >
            {/* <ul>
                <li><a href="https://github.com/Laeti-dev" target="_blank"><i class="fa-brands fa-github"></i></a></li>
                <li><a href="https://www.linkedin.com/in/laetitiataddei/" target="_blank"><i class="fa-brands fa-linkedin"></i></a></li>
            </ul> */}
        </div>
    </nav>
  );
}

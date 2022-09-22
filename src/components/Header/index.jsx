import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Header() {
  return(
    <nav id="navbar"
      className="w-full
      grid grid-cols-5 gap-4
      justify-around
      justify-items-center
      items-center
      bg-nav-bar h-10 text-background-color
      static"
      >
        <div className="flex-none justify-self-start ml-3">
          <Link to="/">Laeti-dev</Link>
        </div>

        <div className="space-x-4 col-span-3">
            {[
              ["About", "/about"],
              ["Projects", "/projects"],
              ["Contact", "/contact"],
            ].map(([title, url]) => (
                <Link to={url} className="hover:text-active-color">{title}</Link>
            ))}
        </div>

        <div className="space-x-4 justify-self-end mr-3">
            <a href="https://www.linkedin.com/in/laetitia-ikusawa/">
                <FontAwesomeIcon icon="fa-brands fa-linkedin" size="2x" />
            </a>
            <a href="https://github.com/Laeti-dev">
                <FontAwesomeIcon icon="fa-brands fa-square-github" size="2x" />
            </a>
        </div>
    </nav>
  );
}

import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  Nav,
  NavLogo,
  NavMenu,
  NavSocial
} from "./styled.tw.js"

export default function Header() {
  return(
    <Nav >
        <NavLogo>
          <Link to="/" className="hover:text-active-color font-Madi text-3xl">Laeti-dev</Link>
        </NavLogo>

        <NavMenu>
            {[
              ["About", "/about"],
              ["Skills", "/skills"],
              ["Projects", "/projects"],
              ["Contact", "/contact"],
            ].map(([title, url]) => (
                <Link to={url} className="hover:text-active-color">{title}</Link>
            ))}
        </NavMenu>

        <NavSocial>
            <a href="https://www.linkedin.com/in/laetitia-ikusawa/">
                <FontAwesomeIcon icon="fa-brands fa-linkedin" size="2x" className="hover:text-active-color" />
            </a>
            <a href="https://github.com/Laeti-dev">
                <FontAwesomeIcon icon="fa-brands fa-square-github" size="2x" className="hover:text-active-color" />
            </a>
        </NavSocial>
    </Nav>
  );
}

import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  Nav,
  NavLogo,
  NavMenu,
  NavSocial
} from "./styled.tw.js"
import { useRef } from "react"

export default function Header() {
  const about = useRef()
  const skills = useRef()
  const projects = useRef()
  const contact = useRef()

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth"
    })
  }
  return(
    <Nav >
        <NavLogo>
          <Link to="/" className="hover:text-active-color font-Madi text-4xl">Laeti-dev</Link>
        </NavLogo>

        <NavMenu>
            {[
              ["About", "/about"],
              ["Skills", "/skills"],
              ["Projects", "/projects"],
              ["Contact", "/contact"],
            ].map(([title, url]) => (
                <Link onClick={() => scrollToSection(`${title.toLowerCase()}`)} to={url} className="hover:text-active-color">{title}</Link>
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

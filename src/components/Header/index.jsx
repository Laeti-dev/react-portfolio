import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ScrollIntoView from "react-scroll-into-view";
import {
  Nav,
  NavLogo,
  NavMenu,
  NavSocial
} from "./styled.tw.js"

export default function Header() {
  return(
    <Nav>
        <NavLogo>
          <NavLink to="/">
            Laeti-dev
          </NavLink>
        </NavLogo>

          <ScrollIntoView selector="#{title}" className="space-x-6 col-span-3">
        <NavMenu>
            {[
              ["À propos", "/about"],
              ["Compétences", "/skills"],
              ["Projets", "/projects"],
              // ["Contact", "/contact"],
            ].map(([title, url]) => (
                <NavLink to={url}
                          // className="hover:text-active-color sm:text-sm md:text-2xl lg-xl"
                          className={({ isActive }) => (
                        isActive ? `text-active-color sm:text-sm md:text-2xl lg-xl` : `text-background-color hover:text-active-color sm:text-sm md:text-2xl lg-xl`
                    )}
                >
                    {title}
                </NavLink>
            ))}
        </NavMenu>
            </ScrollIntoView>

        <NavSocial>
            <a href="https://www.linkedin.com/in/laetitia-ikusawa/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon="fa-brands fa-linkedin" size="2x" className="hover:text-active-color sm:text-lg md:text-4xl" />
            </a>
            <a href="https://github.com/Laeti-dev" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon="fa-brands fa-square-github" size="2x" className="hover:text-active-color sm:text-lg md:text-4xl" />
            </a>
        </NavSocial>
    </Nav>
  );
}

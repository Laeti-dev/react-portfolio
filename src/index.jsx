import {render} from 'react-dom';
import {BrowserRouter,
        Routes,
        Route
    } from "react-router-dom";
import "./utils/Styles/main.css";
import "./utils/fontawesome";
import Home from "./pages/Home";
import About from "./pages/About";
import SkillsIcones from './pages/Skills/SkillsIcons';
// import Contact from "./pages/Contact";
import ProjectsContainer from './pages/Projects/ProjectsContainer';
import Header from "./components/Header";
import Footer from "./components/Footer";


const rootElement = document.getElementById('root');
  render(
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="skills" element={<SkillsIcones />} />
            <Route path='projects' element={<ProjectsContainer />} />
        </Routes>
        <Footer />
    </BrowserRouter>,
    rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

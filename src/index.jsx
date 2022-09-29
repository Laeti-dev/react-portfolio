import {render} from 'react-dom';
import {BrowserRouter,
        Routes,
        Route,
    } from "react-router-dom";
import "./utils/Styles/main.css";
import "./utils/fontawesome";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from './pages/Skills';
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Header from "./components/Header";
import Footer from "./components/Footer";

const rootElement = document.getElementById('root');
  render(
    <BrowserRouter className="absolute">
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="skills" element={<Skills />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />

    </BrowserRouter>,
    rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

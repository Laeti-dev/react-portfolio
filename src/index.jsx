import {render} from 'react-dom';
import {BrowserRouter,
        Routes,
        Route,
    } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from './pages/Contact';
import Projets from './pages/Projets';
import Header from "./components/Header";
import Footer from './components/Footer';

const rootElement = document.getElementById('root');
  render(
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="./pages/About" element={<About />} />
            <Route path="./pages/Projets" element={<Projets />} />
            <Route path="./pages/Contact" element={<Contact />} />
        </Routes>
        <Footer />

    </BrowserRouter>,
    rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

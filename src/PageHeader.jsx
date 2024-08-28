import siteLogo from './assets/header/logo.png'
import './PageHeader.css'

import Navbar from "./components/Navbar";

import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import { AnimatePresence } from 'framer-motion';

import Home from "./pages";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import About from "./pages/about";

import Resume from "./pages/resume";

import OnonokiPage from "./pages/ononoki";

import Break from "./components/Break"

import OvYctf from './components/overlays/OvYctf';
import OvDc from './components/overlays/OvDc';

function PageHeader() {
  return (
    <>
      {/* <img src={siteLogo} class="centerHeader"></img> */}

      <Router>
          <InsideRouter/>
      </Router>
    </>
  )
}

function InsideRouter() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <Break h="25px"/>
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/projects/*" element={<Projects />}>
            </Route>
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/ononoki" element={<OnonokiPage />} />
            <Route path="/resume" element={<Resume/>} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default PageHeader

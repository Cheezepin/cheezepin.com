// import siteLogo from './assets/header/logo.png'
import './PageHeader.css'

import Navbar from "./components/Navbar";
import NavbarTAGD from "./components/NavbarTAGD";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,

} from "react-router-dom";

import { AnimatePresence } from 'framer-motion';

import Home from "./pages";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import About from "./pages/about";

import Resume from "./pages/resume";
import Portfolio from "./pages/portfolio";

import OnonokiPage from "./pages/ononoki";

import OPAS from "./pages/opas";

import TAGDPR from "./pages/tagdpr";
import TAGDOP from "./pages/tagdop";
import TAGDEC from "./pages/tagdec";

import TAGDReel from "./pages/TAGDReel"
import TAGDReelF25 from "./pages/TAGDReelF25"

import Break from "./components/Break"
import ErrorPage from './pages/404';

import Recipes from './pages/recipes'

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

  let location2 = location;
  if(location2.hash) { //backwards compat with some shitty links lol
    location2.pathname = location2.hash;
    location2.pathname = location2.pathname.replace("#",'');
    location2.hash = '';
  }

  return (
    <>
      <Navbar />
      {/* <NavbarTAGD /> */}
      <Break h="25px"/>
      <AnimatePresence mode="wait">
        <Routes key={location2.pathname} location={location2}>
            <Route path="/" element={<Home />} />
            <Route path="/projects/*" element={<Projects />}>
            </Route>
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/ononoki" element={<OnonokiPage />} />
            <Route path="/resume" element={<Resume/>} />
            <Route path="/portfolio" element={<Portfolio/>} />
            {/* <Route path="/opas" element={<OPAS/>} />
            <Route path="/tagdpr" element={<TAGDPR/>} />
            <Route path="/tagdop" element={<TAGDOP/>} />
            <Route path="/tagdec" element={<TAGDEC/>} /> */}
            <Route path="/recipes" element={<Recipes/>} />
            <Route path="/tagdreel" element={<TAGDReel/>} />
            <Route path="/tagdreels25" element={<TAGDReel/>} />
            <Route path="/tagdreelf25" element={<TAGDReelF25/>} />
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default PageHeader

import { Fragment } from "react";
import Hero from "./components/Hero";
import "./App.css";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/Contact";
import Copyrights from "./components/Copyrights";
const App = () => {
  return (
    <Fragment>
      {/* <NavBar /> */}
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Copyrights />
    </Fragment>
  );
};

export default App;

import { Fragment, useEffect, useState } from "react";
import Hero from "./components/Hero";
import "./App.css";
import NavBar from "./components/NavBar";
import RiseLoader from "react-spinners/HashLoader";

import About from "./components/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/Contact";
import Copyrights from "./components/Copyrights";
const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const content = isLoading ? (
    <div className="loader">
      <RiseLoader size={50} color={"#ff00ff"} className="spinner" />
    </div>
  ) : (
    <Fragment>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Copyrights />
    </Fragment>
  );
  return content;
};

export default App;

import { Fragment, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
const NavBar = () => {
  const [sticky, setSticky] = useState(false);
  const navRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const stickyNav = () => {
    if (window.scrollY >= 700) {
      setSticky(true);
      document.querySelector("body").classList.add("sticky");
    } else {
      setSticky(false);
      document.querySelector("body").classList.remove("sticky");
    }
  };

  window.addEventListener("scroll", stickyNav);

  return (
    <Fragment>
      <header className=" header ">
        <a className="logo" href="#home">
          A E
        </a>

        <nav ref={navRef}>
          <ul>
            <li>
              <a href="#about" onClick={showNavBar}>
                <span>01.</span> About
              </a>
            </li>
            <li>
              <a href="#about" onClick={showNavBar}>
                <span>02.</span> Skills
              </a>
            </li>
            <li>
              <a onClick={showNavBar} href="#projects">
                <span>03.</span> Projects
              </a>
            </li>
            <li>
              <a onClick={showNavBar} href="#contact">
                <span>04.</span> Contact
              </a>
            </li>
            <button className="nav-btn nav-close-btn" onClick={showNavBar}>
              <FaTimes />
            </button>
          </ul>
        </nav>
        <button className="nav-btn" onClick={showNavBar}>
          <FaBars />
        </button>
      </header>
    </Fragment>
  );
};

export default NavBar;

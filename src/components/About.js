import { Fragment } from "react";
import profileImg from "../assets/img/me.jpg";
import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiRedux,
  SiAmazonaws,
} from "react-icons/si";
import { DiNodejs } from "react-icons/di";
const About = () => {
  return (
    <Fragment>
      <section id="about" className="section-about">
        <div className="about container  grid">
          <div className="about-text-box">
            <div className="heading">
              <h3 className=" heading-primary  ">About Me</h3>
              <div className="line"></div>
            </div>
            <p className="about-description  ">
              Hello! I'm Abdallah, a software developer. I build things that
              live on the internet. I am a self-taught web developer who enjoys
              creating amazing websites.
            </p>
            <p className="about-description">
              In the summer of 2022, I joined as an intern in{" "}
              <span>
                <a href="https://www.linkedin.com/company/%D9%83%D8%A7%D9%84%D8%A8%D9%86%D9%8A%D8%A7%D9%86-%D8%A7%D9%84%D9%85%D8%B1%D8%B5%D9%88%D8%B5/">
                  Kalbonyan-Almarsos{" "}
                </a>
              </span>
              which gave me a <span>MERN</span> stack roadmap to become a
              full-stack developer.
            </p>
            <p className="about-description">
              Here are a few technologies I’ve been working with recently:
            </p>
            <div className="skill-icon-box">
              <SiHtml5 className="skill-icon" size={30} />
              <SiCss3 className="skill-icon" size={30} />
              <SiJavascript className="skill-icon" size={30} />
              <SiReact className="skill-icon" size={30} />
              <SiRedux className="skill-icon" size={30} />
              <DiNodejs className="skill-icon node" size={40} />
              <SiAmazonaws className="skill-icon" size={30} />
            </div>
          </div>
          <div className="about-text-image">
            <img src={profileImg} alt="cartoon space man" />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default About;

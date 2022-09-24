import { Fragment, useEffect, useRef, useState } from "react";
import headerImg from "../assets/img/header-img.svg";
import NavBar from "./NavBar";

const Hero = () => {
  return (
    <Fragment>
      <section className="section-hero">
        <NavBar />
        <div className="hero container grid">
          <div className="hero-text-box">
            <h4>Hi, my name is</h4>
            <h1>
              Abdallah Elnashar. <br />
              <span>I build things for the web.</span>
            </h1>
            <p>
              I’m a software developer specializing in building (and
              occasionally designing) exceptional digital websites.
            </p>

            <a href="#about" class="btn">
              Learn more
            </a>
            <div className="social-links">
              <a target="blank" href="https://github.com/abdallah-elnashar">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-brand-github"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentcolor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg>
              </a>
              <a
                target="blank"
                href="https://www.linkedin.com/in/abdallah-elnashar-154a79190"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-brand-linkedin"
                  width="56"
                  height="56"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentcolor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                  <line x1="8" y1="11" x2="8" y2="16" />
                  <line x1="8" y1="8" x2="8" y2="8.01" />
                  <line x1="12" y1="16" x2="12" y2="11" />
                  <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                </svg>
              </a>
              <a target="blank" href="#d">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-brand-facebook"
                  width="56"
                  height="56"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentcolor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                </svg>
              </a>
            </div>
          </div>
          <div className="hero-img-box">
            <img src={headerImg} alt="cartoon space man" />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Hero;

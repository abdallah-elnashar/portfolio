import { Fragment, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectItem from "./ProjectItem";
import FilterButton from "./filterButtons";

// IMPORTING PROJECTS IMAGES
import profileImg from "../../assets/img/me.jpg";
import forkify from "../../assets/projects-images/forkify.png";
import mapty1 from "../../assets/projects-images/mapty1.png";
import bankistApp from "../../assets/projects-images/bankistApp.png";
import bankistweb from "../../assets/projects-images/bankistweb.png";
// html
import omnifood from "../../assets/projects-images/omnifood.png";
//nodejs
import chat from "../../assets/projects-images/chat.png";
import weather from "../../assets/projects-images/weather.png";
//react
import expense from "../../assets/projects-images/expense.png";
import food from "../../assets/projects-images/food.png";
import movies from "../../assets/projects-images/movies.png";
import redux from "../../assets/projects-images/redux.png";
import auth from "../../assets/projects-images/auth.png";
import quote from "../../assets/projects-images/quote.png";
import meet from "../../assets/projects-images/meet.png";
import kasper from "../../assets/projects-images/kasper.png";

const projectsData = [
  {
    title: "Forkify",
    id: ["all", "javascript"],
    img: forkify,
    sourceCode: "https://github.com/abdallah-elnashar/forkify-project",
    liveLink: "https://forkify-abdallahelnashar.netlify.app/",
    tag: "Javascript",
    description:
      "A recipes website allows you to search over 1,000,000 recipe.",
  },
  {
    title: "Mapty",
    id: ["all", "javascript"],
    img: mapty1,
    sourceCode:
      "https://github.com/abdallah-elnashar/Kalbonyan-Elmarsos/tree/main/02-Udemy/-02-Js-Jonas/Projects/Mapty",
    liveLink: "https://abdallah-mapty-app.netlify.app/",
    tag: "Javascript",
    description: "A simple web application allows you to track your workouts",
  },
  {
    title: "Bankist",
    id: ["all", "javascript"],
    img: bankistApp,
    sourceCode:
      "https://github.com/abdallah-elnashar/Kalbonyan-Elmarsos/tree/main/02-Udemy/-02-Js-Jonas/Projects/Bankist/starter",
    liveLink: "https://abdallah-bankist.netlify.app/",
    tag: "Javascript",
    description:
      "A simulation for a bank with some interested functionality fake login 'js' '1111'",
  },
  {
    title: "Bankist Website",
    id: ["all", "javascript"],
    img: bankistweb,
    sourceCode:
      "https://github.com/abdallah-elnashar/Kalbonyan-Elmarsos/tree/main/02-Udemy/-02-Js-Jonas/Projects/Bankist-Site",
    liveLink: "https://abdallah-bankist-site.netlify.app/",
    tag: "Javascript",
    description: " A restaurant website land page has an awesome design",
  },
  {
    title: "Omnifood",
    id: ["all", "css"],
    img: omnifood,
    sourceCode:
      "https://github.com/abdallah-elnashar/Kalbonyan-Elmarsos/tree/main/02-Udemy/-01-HTML-CSS-Jonas/Projects/Omnifood/07-Omnifood-Desktop",
    liveLink: "https://omnifood-abdallah.netlify.app",
    tag: "HTML&CSS",
    description: "A restaurant website land page has an awesome design",
  },
  {
    title: "Kasper",
    id: ["all", "css"],
    img: kasper,
    sourceCode: "https://github.com/abdallah-elnashar/Kasper-html-css",
    liveLink: "https://kasper-abdallah.netlify.app/",
    tag: "HTML&CSS",
    description: "A website land page has an awesome design",
  },

  {
    title: "Weather App",
    id: ["all", "node"],
    img: weather,
    sourceCode:
      "https://github.com/abdallah-elnashar/Kalbonyan-Elmarsos/tree/main/02-Udemy/-04-Nodejs-Andrew/Projects/Weather-App",
    liveLink: "https://abdallah-weather-app.herokuapp.com/",
    tag: "NodeJs",
    description:
      "A weather app allows you to get the weather in your current location",
  },
  {
    title: "Chat App",
    id: ["all", "node"],
    img: chat,
    sourceCode:
      "https://github.com/abdallah-elnashar/Kalbonyan-Elmarsos/tree/main/02-Udemy/-04-Nodejs-Andrew/Projects/Chat-App",
    liveLink: "https://abdallah-chat-app.herokuapp.com/",
    tag: "NodeJs",
    description:
      "A Chat app allows you to chat with your friends in chat rooms",
  },
  {
    title: "Expense Tracker",
    id: ["all", "react"],
    img: expense,
    sourceCode:
      "https://github.com/abdallah-elnashar/Kalbonyan-Elmarsos/tree/main/02-Udemy/-03-Reactjs-Maximilian/Projects/Expenses-app/S05-project",
    liveLink: "https://expense-tracker-abdallah.netlify.app/",
    tag: "ReactJs",
    description: "An expense tracker app allows you to track your money",
  },
  {
    title: "Food Order App",
    id: ["all", "react"],
    img: food,
    sourceCode:
      "https://github.com/abdallah-elnashar/Kalbonyan-Elmarsos/tree/main/02-Udemy/-03-Reactjs-Maximilian/Projects/order-food-app/S17-project",
    liveLink: "https://food-order-app2-abd.netlify.app/ ",
    tag: "ReactJs",
    description: "An food order app with firebase as backend to ger the meals",
  },
  {
    title: "Movies app",
    id: ["all", "react"],
    img: movies,
    sourceCode:
      "https://github.com/abdallah-elnashar/Kalbonyan-Elmarsos/tree/main/02-Udemy/-03-Reactjs-Maximilian/Projects/movies-app",
    liveLink: "https://movies-app-abdallah.netlify.app/ ",
    tag: "ReactJs",
    description: "a movies api to get any movie or add your own with firebase ",
  },
  {
    title: "Authentication Page",
    id: ["all", "react"],
    img: auth,
    sourceCode:
      "https://github.com/abdallah-elnashar/Kalbonyan-Elmarsos/tree/main/02-Udemy/-03-Reactjs-Maximilian/Projects/Authentication-page",
    liveLink: "https://auth-app-abdallah.netlify.app/auth ",
    tag: "ReactJs",
    description: "an authentication page with react router and firebase",
  },
  {
    title: "Shopping Cart",
    id: ["all", "react"],
    img: redux,
    sourceCode:
      "https://github.com/abdallah-elnashar/Kalbonyan-Elmarsos/tree/main/02-Udemy/-03-Reactjs-Maximilian/Projects/redux-cart",
    liveLink: "https://cart-redux-app.netlify.app/ ",
    tag: "ReactJs",
    description: "Shopping cart with Redux and firebase as a backend",
  },
  {
    title: "Quotes App",
    id: ["all", "react"],
    img: quote,
    sourceCode:
      "https://github.com/abdallah-elnashar/Kalbonyan-Elmarsos/tree/main/02-Udemy/-03-Reactjs-Maximilian/Projects/quotes-app",
    liveLink: " https://quotes-abdallah.netlify.app/quotes",
    tag: "ReactJs",
    description: "taking a quote and add yours with firebase as a backend",
  },
  {
    title: "Meetups App",
    id: ["all", "react"],
    img: meet,
    sourceCode:
      "https://github.com/abdallah-elnashar/Kalbonyan-Elmarsos/tree/main/02-Udemy/-03-Reactjs-Maximilian/Projects/Section-29",
    liveLink: " https://meetupss-app-abd.netlify.app/",
    tag: "ReactJs",
    description: "meetups app to make a meeting and search for it",
  },
];

const Projects = () => {
  const [allProjects, setAllProjects] = useState([]);
  const [filteredProjects, setFilteredPrjects] = useState([]);
  const [id, setId] = useState("all");

  useEffect(() => {
    setAllProjects(projectsData);
    setFilteredPrjects(projectsData);
  }, []);

  return (
    <Fragment>
      <section id="projects" className="section-projects">
        <div className="projects container">
          <div className="project-heading">
            <div className="heading">
              <div className="line line--2"></div>
              <h3 className="heading-primary">My Projects</h3>
              <div className=" line line--2"></div>
            </div>
          </div>
          <div className="project-filter--btn">
            <FilterButton
              id={id}
              setFilteredPrjects={setFilteredPrjects}
              allProjects={allProjects}
              setId={setId}
            />
          </div>
        </div>
        <motion.div layout className="gallery">
          <AnimatePresence>
            {filteredProjects.map((projectItem, index) => (
              <ProjectItem
                key={index}
                title={projectItem.title}
                description={projectItem.description}
                image={projectItem.img}
                tag={projectItem.tag}
                sourceCode={projectItem.sourceCode}
                liveLink={projectItem.liveLink}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </Fragment>
  );
};

export default Projects;

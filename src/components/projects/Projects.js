import { Fragment, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectItem from "./ProjectItem";
import FilterButton from "./filterButtons";

const projectsData = [
  {
    title: "Omnifood",
    id: ["all"],
    img: "",
    sourceCode: "",
    liveLink: "",
    tag: "Javascript",
    description:
      "a good website a good websitea good websitea good websitea good website",
  },
  {
    title: "Omnifood",
    id: ["all", "css"],
    img: "",
    sourceCode: "",
    liveLink: "",
    tag: "Javascript",
    description: "a good website",
  },
  {
    title: "Omnifood",
    id: ["all"],
    img: "",
    sourceCode: "",
    liveLink: "",
    tag: "Javascript",
    description: "a good website",
  },
  {
    title: "Omnifood",
    id: ["all"],
    img: "",
    sourceCode: "",
    liveLink: "",
    tag: "Javascript",
    description: "a good website",
  },
  {
    title: "Omnifood",
    id: ["all", "css"],
    img: "",
    sourceCode: "",
    liveLink: "",
    tag: "Javascript",
    description: "a good website",
  },
  {
    title: "Omnifood",
    id: ["all", "javascript"],
    img: "",
    sourceCode: "",
    liveLink: "",
    tag: "Javascript",
    description: "a good website",
  },
  {
    title: "Omnifood",
    id: ["all", "css"],
    img: "",
    sourceCode: "",
    liveLink: "",
    tag: "Javascript",
    description: "a good website",
  },
  {
    title: "Omnifood",
    id: ["all", "css"],
    img: "",
    sourceCode: "",
    liveLink: "",
    tag: "Javascript",
    description: "a good website",
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

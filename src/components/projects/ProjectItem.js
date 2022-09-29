import profileImg from "../../assets/img/me.jpg";
import { motion } from "framer-motion";
import { AiFillEye, AiOutlineGithub } from "react-icons/ai";
const ProjectItem = (props) => {
  return (
    <motion.div
      layout
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 100 }}
      exit={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.5 }}
      className="project-card"
    >
      <div className="project-img-box">
        <img src={props.image} alt="lk" className="project-img" />
      </div>
      <div className="project-text-box">
        <span>{props.tag}</span>
        <p className="title">{props.title}</p>
        <p className="description">{props.description}</p>
      </div>
      <div className="project-btn">
        <a href={`${props.liveLink}`} target="blank">
          <AiFillEye size={40} />
        </a>
        <a href={`${props.sourceCode}`} target="blank">
          <AiOutlineGithub size={40} />
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectItem;

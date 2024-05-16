import PropTypes from "prop-types";
import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCardButton from "./ProjectCardButton";
import ProjectCardImage from "./ProjectCardImage";

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="w-full hover:cursor-pointer rounded overflow-hidden relative"
      style={{ height: "500px" }}
      whileHover={{ scale: 1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div
        className="h-[400px] overflow-hidden rounded-lg relative"
        style={{
          backgroundImage:
            "linear-gradient(to top, #bdc2e8 0%, #bdc2e8 1%, #e6dee9 100%)",
        }}
      >
        <ProjectCardImage imageUrl={project.image} />
        <ProjectCardButton hoveredState={isHovered} />
      </div>
      <div className="px-6 py-4">
        <p className="font-Nunito text-xl mb-2 text-matteBlack dark:text-matteWhite">
          {project.title}
        </p>
        {isHovered && (
          <motion.p
            key="description"
            className="font-Nunito text-lg mb-2 text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {project.description}
          </motion.p>
        )}
      </div>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectCard;

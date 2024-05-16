import PropTypes from "prop-types";
import { MdArrowForward } from "react-icons/md";
import { motion } from "framer-motion";

const ProjectCardButton = ({ hoveredState }) => {
  return (
    hoveredState && (
      <motion.button
        className="absolute top-4 right-4 bg-matteWhite text-matteBlack rounded-full p-2"
        whileHover={{ scale: 1.2 }}
      >
        <MdArrowForward className="text-matteBlack text-2xl" />
      </motion.button>
    )
  );
};

ProjectCardButton.propTypes = {
  hoveredState: PropTypes.bool.isRequired,
};


export default ProjectCardButton;

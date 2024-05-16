import PropTypes from "prop-types";
import { motion } from "framer-motion";
const ProjectCardImage = ({ imageUrl }) => {
  return (
    <motion.img
      src={imageUrl}
      alt={"project image"}
      className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain w-2/3 h-2/3 transition-all duration-300 ease-in-out hover:scale-110"
    />
  );
};

ProjectCardImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default ProjectCardImage;

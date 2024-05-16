import { useState } from "react";
import { motion } from "framer-motion";
import { MdArrowForward } from "react-icons/md";


const ProjectCard = ({ title, description, imageSrc }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="w-full rounded overflow-hidden shadow-lg"
      whileHover={{ scale: 1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div
        className="relative"
        style={{
          height: "300px", // Adjust the height of the image container
          overflow: "hidden",
          borderRadius: "0.5rem", // Apply border radius here
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Image with hover effect */}
        <motion.img
          src={imageSrc}
          alt={title}
          className="object-contain"
          style={{
            width: "50%", // Adjust the size of the image
            height: "50%", // Adjust the size of the image
            scale: isHovered ? 1.05 : 1, // Scale the image on hover
            transition: "transform 0.2s ease-in-out", // Add smooth transition
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[] to-black"></div>

        {/* Button */}
        {isHovered && (
          <motion.button
            className="absolute top-4 right-4 bg-white text-gray-800 rounded-full p-2"
            whileHover={{ scale: 1.1 }}
          >
            <MdArrowForward />
          </motion.button>
        )}
      </div>

      {/* Title and Description */}
      <div className="px-6 py-4">
        <motion.p
          className="font-bold text-xl mb-2 text-matteBlack dark:text-matteWhite"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }} // Smooth transition
        >
          {isHovered ? description : title}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

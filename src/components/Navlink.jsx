import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import '../styles/styles.css'

const Navlink = ({ linkName, linkPath }) => {
  return (
    <Link
      className="font-OpenSans font-normal text-matteBlack dark:text-matteWhite transition-colors duration-300 text-lg underline__animation"
      to={`/${linkPath}`}
    >
      {linkName}
    </Link>
  );
};

Navlink.propTypes = {
  linkName: PropTypes.string.isRequired,
  linkPath: PropTypes.string.isRequired,
};

export default Navlink;

import PropTypes from "prop-types";

const NavAnchor = ({ linkName, linkPath }) => {
  return <a className="font-OpenSans font-normal text-matteBlack dark:text-matteWhite transition-colors duration-300 text-lg" href={`#${linkPath}`}>{linkName}</a>;
};

NavAnchor.propTypes = {
  linkName: PropTypes.string.isRequired,
  linkPath: PropTypes.string.isRequired,
};

export default NavAnchor;

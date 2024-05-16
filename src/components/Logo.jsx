import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to={"/"}
      className="font-BricolageGrotesque font-light text-matteBlack dark:text-matteWhite transition-colors duration-700 text-5xl"
    >
      FK
    </Link>
  );
};

export default Logo;

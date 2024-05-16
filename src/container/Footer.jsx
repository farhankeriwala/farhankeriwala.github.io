import { Link } from "react-router-dom";
import { getCurrentYear } from "../utilities/getCurrentYear";
import constants from "../constants";
const Footer = () => {
  return (
    <footer>
      <div className="w-full h-[2px] rounded-full bg-gray-300" />
      <span className="flex flex-col md:flex-row gap-1 items-center justify-between my-2 p-2">
        <p className="font-Lato text-matteBlack dark:text-white transition-colors duration-300 text-md">
          © {getCurrentYear()} Farhan Keriwala
        </p>
        <nav className="flex items-center gap-4">
          {constants.navlinks.map((item) => (
            <Link
              key={`navlink-${item.linkName.toLocaleLowerCase()}`}
              to={`/${item.linkPath}`}
              className="text-matteBlack dark:text-matteWhite transition-colors duration-300 text-md"
            >
              {item.linkName}
            </Link>
          ))}
        </nav>
      </span>
    </footer>
  );
};

export default Footer;

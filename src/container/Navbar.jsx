import Navlink from "../components/Navlink";
import HireMeButton from '../components/HireMeButton'
import constants from '../constants'
const Navbar = () => {
  
  return (
    <nav className="my-2 flex flex-col items-center text-center md:text-left md:flex-row gap-3 md:gap-8">
      {constants.navlinks.map((item) => (
        <Navlink
          key={`navlink-${item.linkName.toLocaleLowerCase()}`}
          linkName={item.linkName}
          linkPath={item.linkPath}
        />
      ))}
      <HireMeButton />
    </nav>
  );
};

export default Navbar;

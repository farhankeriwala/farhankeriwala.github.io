import { useState } from "react";
import Logo from "../components/Logo";
import Navbar from "./Navbar";
import { MdClose, MdMenu } from "react-icons/md";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setMenuOpen((prevMenuState) => !prevMenuState);
  };
  return (
    <div>
      <header className="hidden md:flex flex-col md:flex-row items-center justify-between">
        <Logo />
        <Navbar />
      </header>
      <header className="flex md:hidden flex-col md:flex-row items-center justify-between">
        <span className="w-full flex items-center justify-between">
          <Logo />
          <button onClick={() => handleMenuToggle()}>
            {menuOpen ? (
              <MdClose className="text-3xl text-matteBlack dark:text-matteWhite transition-colors duration-300" />
            ) : (
              <MdMenu className="text-3xl text-matteBlack dark:text-matteWhite transition-colors duration-300" />
            )}
          </button>
        </span>
        {menuOpen && <Navbar />}
      </header>
    </div>
  );
};

export default Header;

import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import { useDarkMode } from "../context/DarkModeContext";

const DarkModeToggler = () => {
  const { darkMode, handleDarkModeToggle } = useDarkMode();

  return (
    <button
      onClick={() => handleDarkModeToggle()}
      className="fixed bottom-0 right-0 mb-8 mr-8 bg-matteBlack dark:bg-matteWhite hover:scale-105 transition-all duration-300 text-white font-bold py-2 px-4 rounded-full"
    >
      {darkMode ? (
        <BiSolidSun className="text-matteWhite dark:text-matteBlack text-xl" />
      ) : (
        <BiSolidMoon className="text-matteWhite dark:text-matteBlack text-xl" />
      )}
    </button>
  );
};

export default DarkModeToggler;

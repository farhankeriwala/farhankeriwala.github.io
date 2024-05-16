import { useState, useContext, createContext } from "react";
import PropTypes from "prop-types";

// Create a new context for dark mode
const DarkModeContext = createContext();

// Custom hook to hold the dark mode context
export const useDarkMode = () => useContext(DarkModeContext);

// Dark mode provider component to provide dark mode state and toggle function to children
export const DarkModeProvider = ({ children }) => {
  // State to manage dark mode
  const [darkMode, setDarkMode] = useState(true);

  // Function to toggle dark mode
  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };

  // Providing dark mode state and toggle function to children via context
  return (
    <DarkModeContext.Provider value={{ darkMode, handleDarkModeToggle }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Type-checking for the children prop
DarkModeProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

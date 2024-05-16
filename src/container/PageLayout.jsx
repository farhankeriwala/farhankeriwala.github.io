import PropTypes from "prop-types";
import Header from "./Header";
import DarkModeToggler from "../components/DarkModeToggler";
import { DarkModeProvider } from "../context/DarkModeContext";
import Footer from "./Footer";

const PageLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen py-4 px-6 md:px-20 xl:px-52 bg-matteWhite dark:bg-matteBlack transition-colors duration-700">
      <Header />
      <main className="w-full h-full flex-grow flex items-center justify-center my-12">
        <DarkModeProvider>
          <>
            {children}
            <DarkModeToggler />
          </>
        </DarkModeProvider>
      </main>
      <Footer />
    </div>
  );
};

PageLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PageLayout;

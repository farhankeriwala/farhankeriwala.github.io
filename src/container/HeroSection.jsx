import { MdMailOutline } from "react-icons/md";

const HeroSection = () => {
  return (
    <div className="w-full h-[80vh] grid grid-cols-1 md:grid-cols-2 gap-12 place-content-center">
      <div className="w-full flex flex-col gap-8">
        <p className="font-Nunito font-normal text-matteBlack dark:text-matteWhite text-2xl md:text-3xl lg:text-5xl transition-colors duration-300">
          From curiosity to code, crafting elegant digital solutions.
        </p>
        <p className="font-Nunito font-semibold text-matteBlack dark:text-matteWhite text-6xl md:text-7xl transition-colors duration-300">
          MSc Computer Science
        </p>
      </div>
      <div className=" flex items-end justify-end">
        <a
          href="mailto:hello@farhankeriwala.com"
          className="flex items-center gap-1 font-Nunito font-normal text-gray-400 hover:text-matteBlack dark:hover:text-matteWhite transition-colors duration-300 text-md md:text-lg lg:text-xl"
        >
          <MdMailOutline /> hello@farhankeriwala.com
        </a>
      </div>
    </div>
  );
};

export default HeroSection;

import PageLayout from "../container/PageLayout";
import { MdMailOutline } from "react-icons/md";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";

const ContactPage = () => {
  return (
    <PageLayout>
      <main className="w-full">
        <span className="flex flex-col items-center md:items-start text-center gap-4 justify-center my-20">
          <h1 className="my-8 font-UbuntuSans font-medium text-left text-matteBlack dark:text-matteWhite text-6xl lg:text-7xl xl:text-8xl">
            Contact Me
          </h1>
          <p className="font-Nunito font-normal text-matteBlack dark:text-matteWhite md:text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            Take the first step in creating your digital footprint 👣
          </p>
        </span>
        <span className="w-full text-center md:text-left">
          <a
            href="mailto:hello@farhankeriwala.com"
            className="flex items-center justify-center md:justify-start gap-1 font-Nunito font-normal text-gray-400 hover:text-matteBlack dark:text-matteWhite dark:hover:text-gray-500 transition-colors duration-300 ease-in-out text-2xl md:text-3xl lg:text-4xl"
          >
            <MdMailOutline /> hello@farhankeriwala.com
          </a>
        </span>
        <span className="my-12 flex items-center justify-center md:justify-start gap-12">
          <button onClick={() => window.open("https://www.facebook.com/")}>
            <AiFillFacebook className="text-5xl sm:text-6xl md:text-7xl text-matteBlack dark:text-matteWhite hover:scale-110 transition-all duration-300 " />
          </button>
          <button
            onClick={() =>
              window.open("https://www.instagram.com/farhan.keriwala")
            }
          >
            <AiFillInstagram className="text-5xl sm:text-6xl md:text-7xl text-matteBlack dark:text-matteWhite hover:scale-110 transition-all duration-300 " />
          </button>
          <button
            onClick={() =>
              window.open("https://www.linkedin.com/in/farhankeriwala/")
            }
          >
            <AiFillLinkedin className="text-5xl sm:text-6xl md:text-7xl text-matteBlack dark:text-matteWhite hover:scale-110 transition-all duration-300 " />
          </button>
          <button
            onClick={() => window.open("https://github.com/farhankeriwala")}
          >
            <AiFillGithub className="text-5xl sm:text-6xl md:text-7xl text-matteBlack dark:text-matteWhite hover:scale-110 transition-all duration-300 " />
          </button>
        </span>
      </main>
    </PageLayout>
  );
};

export default ContactPage;

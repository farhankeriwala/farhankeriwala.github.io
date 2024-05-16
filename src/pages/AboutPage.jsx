import Technologies from "../components/Technologies";
import Services from "../components/Services";
import PageLayout from "../container/PageLayout";

const AboutPage = () => {
  return (
    <PageLayout>
      <div>
        <span className="flex flex-col items-start text-center gap-8 justify-center my-20">
          <h1 className="font-UbuntuSans font-medium text-left text-matteBlack dark:text-matteWhite text-6xl lg:text-7xl xl:text-8xl">
            About
          </h1>
          <p className="font-Nunito font-normal text-matteBlack dark:text-matteWhite text-left text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            Hi, I&apos;m Farhan, an upcoming Software Developer currently
            studying MSc Computer Science at Queen Mary University of London. I
            will be going on to specialise in Web Development, and Advanced
            Object-Oriented Programming to enhance the knowledge I have gained
            in the first 2 years of my degree.
          </p>
          <p className="font-Nunito font-normal text-matteBlack dark:text-matteWhite text-left text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            I will also be exploring the intricacies of Machine/Deep Learning
            and Neural Networks alongside working to develop my very own
            compiler all while learning security engineering.
          </p>
        </span>
        <div className="my-12 w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-start justify-items-start">
          <h3 className="my-8 font-UbuntuSans font-medium text-left text-matteBlack dark:text-matteWhite text-4xl lg:text-5xl xl:text-6xl">
            Technolgies I work with
          </h3>
         <Technologies />
        </div>
        <div className="w-full">
          <span className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-start justify-items-start md:justify-items-center">
            <h3 className="my-8 font-UbuntuSans font-medium text-left text-matteBlack dark:text-matteWhite text-4xl lg:text-5xl xl:text-6xl">
              Services & Solutions Offered
            </h3>
            <Services />
          </span>
        </div>
      </div>
    </PageLayout>
  );
};

export default AboutPage;

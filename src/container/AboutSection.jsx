import React from "react";

const AboutSection = () => {
  return (
    <div className="my-20">
      <main className="flex flex-col gap-4">
        <p className="font-Nunito font-normal text-matteBlack dark:text-matteWhite text-center  md:text-left text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          Hi, I'm Farhan, an upcoming Software Developer currently studying MSc
          Computer Science at Queen Mary University of London. I will be going
          on to specialise in Web Development, and Advanced Object-Oriented
          Programming to enhance the knowledge I have gained in the first 2
          years of my degree.
        </p>
        <p className="font-Nunito font-normal text-matteBlack dark:text-matteWhite text-center  md:text-left text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          I will also be exploring the intricacies of Machine/Deep Learning and
          Neural Networks alongside working to develop my very own compiler all
          while learning security engineering.
        </p>
      </main>
    </div>
  );
};

export default AboutSection;

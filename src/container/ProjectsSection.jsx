import ProjectCard from "../components/ProjectCard";
import image from "../assets/siteshield-mac.png";
import image2 from "../assets/qmulFeedbackIssuesSystem-mac.png";
import portfolioImage from "../assets/portfolio.png";
import portfolioImage2 from "../assets/portfolio-mac.png";

const ProjectsSection = () => {
  const project = {
    title: "SiteShield | Weather",
    image: image,
    description: "Specialised weather application for contractors.",
  };
  const project2 = {
    title: "QMUL Feedback & Issues Hub",
    image: image2,
    description: "Specialised ticketing application for QMUL.",
  };
  const project3 = {
    title: "Portfolio",
    image: portfolioImage,
    description: "Modern portfolio website.",
  };
  const project4 = {
    title: "Agency Website",
    image: portfolioImage2,
    description: "Full stack website for FGK Digital.",
  };
  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-2 place-content-center place-items-center gap-12">
        <ProjectCard project={project3} />
        <ProjectCard project={project4} />
        <ProjectCard project={project2} />
        <ProjectCard project={project} />
      </div>
      <p className="font-Nunito font-normal text-gray-500 text-center  md:text-left text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
          Click on a project to learn more, or the arrow to visit the site
        </p>
    </main>
  );
};

export default ProjectsSection;

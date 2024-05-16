import PageLayout from "../container/PageLayout";
import ProjectsSection from "../container/ProjectsSection";
const WorkPage = () => {
  return (
    <PageLayout>
      <div className="my-12">
        <span className="flex flex-col items-start gap-4 h-[40vh] md:h-[50vh] justify-center">
          <h1 className="font-UbuntuSans font-medium text-matteBlack dark:text-matteWhite text-left text-6xl lg:text-7xl xl:text-8xl">
            Work
          </h1>
          <p className="font-Nunito font-normal text-matteBlack dark:text-matteWhite text-left text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            My work is driven by the vision of creating digital solutions that
            leave a lasting impact.
          </p>
        </span>
        <ProjectsSection />
      </div>
    </PageLayout>
  );
};

export default WorkPage;

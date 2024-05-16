import PageLayout from './container/PageLayout'
import HeroSection from "./container/HeroSection";
import ProjectsSection from './container/ProjectsSection';
import AboutSection from './container/AboutSection';
const App = () => {
  return <div>
    <PageLayout>
      <main className="w-full min-h-[1000px]">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
      </main>
    </PageLayout>
  </div>;
};

export default App;

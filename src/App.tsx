import { Layout } from "./components/Layout";
import { AboutMeSection } from "./components/sections/AboutMeSection";
import { ExperienceSection } from "./components/sections/ExperienceSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { GetInTouchSection } from "./components/sections/GetInTouchSection";
import { GreetingSection } from "./components/sections/GreetingSection";
// import { GallerySection } from "./components/sections/GallerySection";

function App() {
  return (
    <Layout>
      <GreetingSection />
      <ProjectsSection />
      {/* <GallerySection /> */}
      <ExperienceSection />
      <AboutMeSection />
      <GetInTouchSection />
    </Layout>
  );
}

export default App;

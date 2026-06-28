import { Layout } from "./components/Layout";
import { ContactSection } from "./components/sections/ContactSection";
import { FeaturedProjectsSection } from "./components/sections/FeaturedProjectsSection";
import { GreetingSection } from "./components/sections/GreetingSection";
import { InterestedSection } from "./components/sections/InterestedSection";
import { OtherProjectsSection } from "./components/sections/OtherProjectsSection";
import { SkillSection } from "./components/sections/SkillSection";

function App() {
  return (
    <Layout>
      <GreetingSection />
      <InterestedSection />
      <SkillSection />
      <FeaturedProjectsSection />
      <OtherProjectsSection />
      <ContactSection />
    </Layout>
  );
}

export default App;

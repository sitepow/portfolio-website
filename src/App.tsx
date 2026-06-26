import { Layout } from "./components/Layout";
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
      <OtherProjectsSection />
    </Layout>
  );
}

export default App;

import About from "../about";
import Contact from "../contact";
import Projects from "../projects";
import Services from "../services";

export default function Home() {
  return (
    <>
      <About />
      <Services type="component" />
      <Projects slice={3} />
      <Contact />
    </>
  );
}

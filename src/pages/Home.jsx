import { Stack } from "@mui/material";
import About from "./About";
import Projects from "./Projects";
import Experience from "./Experience";
import Blog from "./Blog";
import Contact from "./Contact";

const Home = () => {
  return (
    <Stack gap={10}>
      <About />
      <Projects />
      <Experience />
      <Blog />
      <Contact />
    </Stack>
  );
};

export default Home;

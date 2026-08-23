import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import DSA from "./sections/DSA";
import Education from "./sections/Education";
import GitHub from "./sections/GitHub";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

import ProjectDetails from "./pages/ProjectDetails";
function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <DSA />
        <Education />
        <GitHub />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/project/:slug"
          element={<ProjectDetails />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

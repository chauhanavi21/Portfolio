import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Process from "./components/Process";
import Why from "./components/Why";
import Impact from "./components/Impact";
import Experience from "./components/Experience";
import Trust from "./components/Trust";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Work />
        <Skills />
        <Process />
        <Why />
        <Impact />
        <Experience />
        <Trust />
        <Faq />
      </main>
      <Footer />
    </>
  );
}

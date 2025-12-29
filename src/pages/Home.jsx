import { motion } from "framer-motion";
import Hero from "../sections/Hero";
import About from "../sections/About";

const pageVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -40 },
};

const Home = () => {
  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
      className="min-h-[calc(100vh-4rem)]"
    >
      <Hero />

      <About />
    </motion.main>
  );
};

export default Home;

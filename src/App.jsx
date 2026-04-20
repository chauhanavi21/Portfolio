import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import ScrollToTopOnRoute from "./components/ScrollToTopOnRoute";
import BackToTop from "./components/BackToTop";

import Home from "./pages/Home";

const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));

const RouteFallback = () => (
  <div className="flex min-h-[60vh] items-center justify-center" aria-busy="true">
    <div
      className="h-8 w-8 animate-spin rounded-full border-2 border-transparent"
      style={{
        borderTopColor: "#60a5fa",
        borderRightColor: "#3b82f6",
      }}
    />
  </div>
);

const App = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#030712" }}>
      <ScrollProgress />
      <ScrollToTopOnRoute />
      <Navbar />
      <div className="flex-1">
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;

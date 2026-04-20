import React, { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi";

/** Floating back-to-top button, appears after scrolling 400px. */
const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`group fixed bottom-5 right-4 z-40 flex h-11 w-11 items-center justify-center rounded-full text-white shadow-xl transition-all duration-300 sm:bottom-6 sm:right-6 sm:h-12 sm:w-12 touch-manipulation ${
        show ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-4"
      }`}
      style={{
        background: "linear-gradient(135deg, #2563eb, #60a5fa)",
        boxShadow: "0 10px 30px rgba(37,99,235,0.45), 0 0 0 1px rgba(148,163,184,0.15)",
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
      }}
    >
      <HiArrowUp className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
    </button>
  );
};

export default BackToTop;

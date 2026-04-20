import React, { useEffect, useRef } from "react";

/** A thin top-of-page scroll progress indicator (blue gradient). */
const ScrollProgress = () => {
  const barRef = useRef(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const height = el.scrollHeight - el.clientHeight;
      const pct = height > 0 ? Math.min(100, Math.max(0, (scrolled / height) * 100)) : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${pct / 100})`;
      raf = 0;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px]"
      style={{ background: "transparent" }}
    >
      <div
        ref={barRef}
        className="h-full origin-left"
        style={{
          transform: "scaleX(0)",
          background:
            "linear-gradient(90deg, #2563eb 0%, #60a5fa 60%, #e2e8f0 100%)",
          boxShadow: "0 0 10px rgba(59,130,246,0.55)",
          transition: "transform 80ms linear",
        }}
      />
    </div>
  );
};

export default ScrollProgress;

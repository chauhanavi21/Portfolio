import { useEffect, useRef } from "react";

/** Flowing white "smoke" ribbons on black — drawn live on a canvas, like the reference hero. */
export default function Silk() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let raf = 0;
    const LINES = 34;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (t) => {
      ctx.clearRect(0, 0, w, h);
      ctx.lineCap = "round";
      for (let k = 0; k < LINES; k++) {
        const f = k / LINES;
        ctx.beginPath();
        for (let x = -20; x <= w + 20; x += 14) {
          const y =
            h * 0.62 +
            Math.sin(x * 0.0042 + t * 0.00028 + k * 0.17) * h * 0.2 +
            Math.sin(x * 0.0091 - t * 0.00021 + k * 0.09) * h * 0.075 +
            Math.cos(x * 0.0019 + t * 0.00012) * h * 0.12 +
            (k - LINES / 2) * 5.5;
          if (x === -20) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `rgba(255,255,255,${0.05 + Math.sin(f * Math.PI) * 0.17})`;
        ctx.lineWidth = 1 + Math.sin(f * Math.PI) * 1.6;
        ctx.stroke();
      }
    };

    const loop = (t) => {
      draw(t);
      raf = requestAnimationFrame(loop);
    };

    const onVis = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden && !reduce) raf = requestAnimationFrame(loop);
    };

    resize();
    if (reduce) draw(40000);
    else raf = requestAnimationFrame(loop);
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVis);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <canvas ref={ref} className="h-full w-full blur-[1.5px]" />
      <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_55%,transparent,rgba(0,0,0,0.75))]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}

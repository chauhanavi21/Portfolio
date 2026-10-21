import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Silk from "./Silk";
import { Art, Button, CountUp, Eyebrow } from "./ui";
import { highlights, profile } from "../data";

/** Auto-cycling pair of metric cards with a progress rail — mirrors the reference's image strip. */
function Strip() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % highlights.length), 3600);
    return () => clearInterval(id);
  }, []);
  const pair = [highlights[i], highlights[(i + 1) % highlights.length]];

  return (
    <div className="w-full max-w-[420px]">
      <div className="flex gap-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {pair.map((h, idx) => (
            <motion.div
              key={h.label}
              layout
              initial={{ opacity: 0, x: 40, scale: 0.94 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -40, scale: 0.94 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={`${idx === 0 ? "notch-both" : "notch-tr"} w-1/2`}
            >
              <Art palette={h.palette} className="h-[150px] sm:h-[160px]">
                <div className="flex h-full flex-col justify-end p-4">
                  <p className="display text-3xl text-white">
                    <CountUp value={h.value} prefix={h.prefix} suffix={h.suffix} decimals={h.decimals} />
                  </p>
                  <p className="text-[12px] leading-tight text-white/80">{h.label}</p>
                </div>
              </Art>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="mt-3 flex items-center gap-3 text-sm tabular-nums">
        <span>0.{i + 1}</span>
        <div className="relative h-px flex-1 bg-white/25">
          <motion.div
            className="absolute inset-y-0 left-0 h-[2px] -translate-y-1/2 bg-white"
            style={{ top: "50%" }}
            animate={{ width: `${((i + 1) / highlights.length) * 100}%` }}
            transition={{ duration: 0.7 }}
          />
        </div>
        <span>0.{highlights.length}</span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-black px-6 pt-32 pb-12 sm:pb-16">
      <Silk />

      <div className="relative mx-auto flex w-full max-w-[1120px] flex-1 flex-col justify-between gap-16">
        <div className="mt-6 sm:mt-14">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Eyebrow className="normal-case">{profile.tagline}</Eyebrow>
          </motion.div>
          <h1 aria-label="Avi Chauhan" className="display mt-3 text-[clamp(2.7rem,13.2vw,13.5rem)] leading-[0.88] whitespace-nowrap">
            {["Avi", "Chauhan"].map((w, wi) => (
              <span key={w} className="mr-[0.22em] inline-block overflow-hidden pb-[0.08em] align-top last:mr-0">
                <motion.span
                  className="inline-block"
                  initial={{ y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.15 + wi * 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                  {w}
                </motion.span>
              </span>
            ))}
          </h1>
        </div>

        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8 }} className="max-w-[360px]">
            <p className="text-lg leading-snug font-medium text-white/90">{profile.intro}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="#work" variant="outline">Explore Work</Button>
              <Button href={profile.resume} variant="light" download>Resume</Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.8 }} className="w-full lg:w-auto">
            <Strip />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

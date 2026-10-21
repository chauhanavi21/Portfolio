import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Gauge, Layers, Target, Zap } from "lucide-react";
import Frame from "./Frame";
import { Button, Eyebrow, WordReveal } from "./ui";
import { process } from "../data";

const icons = { zap: Zap, target: Target, layers: Layers, gauge: Gauge };

function Step({ s, i, progress }) {
  const mid = (process.length - 1) / 2;
  const rotate = useTransform(progress, [0, 1], [(i - mid) * 7 * (i % 2 ? 1 : -1), 0]);
  const x = useTransform(progress, [0, 1], [(mid - i) * 70, 0]);
  const y = useTransform(progress, [0, 1], [i % 2 ? 40 : 10, 0]);
  const dark = i % 2 === 1;
  const Icon = icons[s.icon];

  return (
    <motion.div
      style={{ rotate, x, y }}
      className={`${dark ? "notch-tr bg-black text-white" : "notch-tr bg-white text-black"} flex min-h-[280px] flex-col justify-between p-5`}
    >
      <span className="grid h-11 w-11 place-items-center rounded-lg border border-red/70 bg-red/10 text-red">
        <Icon size={20} strokeWidth={1.6} />
      </span>
      <div>
        <p className="text-xl tracking-tight">
          {String(i + 1).padStart(2, "0")} — {s.title}
        </p>
        <p className={`mt-3 text-[15px] leading-snug ${dark ? "text-white/75" : "text-black/65"}`}>{s.text}</p>
      </div>
    </motion.div>
  );
}

export default function Process() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 95%", "start 35%"] });

  return (
    <Frame id="process" className="overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute right-0 -bottom-8 left-0 select-none" aria-hidden="true">
        <p className="display text-center text-[28vw] leading-none font-medium tracking-[-0.04em] text-white/70">AVI</p>
      </div>

      <div className="relative">
        <Eyebrow>Process</Eyebrow>
        <div className="mt-3 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <WordReveal
            text="Engineering systems that scale, perform, and stand up in production."
            className="display max-w-3xl text-[clamp(2rem,4.6vw,3.6rem)] leading-[1.05] tracking-[-0.04em]"
          />
          <Button href="#contact" variant="dark">Contact Me</Button>
        </div>

        <div ref={ref} className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((s, i) => (
            <Step key={s.title} s={s} i={i} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </Frame>
  );
}

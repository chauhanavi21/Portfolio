import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Minus, Plus } from "lucide-react";
import Frame from "./Frame";
import { Art, Button, Eyebrow, Reveal } from "./ui";
import { skills } from "../data";

function Row({ s, i, open, onToggle }) {
  const num = String(i + 1).padStart(2, "0");
  return (
    <Reveal delay={i * 0.05}>
      <div className="overflow-hidden rounded-[22px] bg-panel">
        <button
          onClick={onToggle}
          aria-expanded={open}
          className="flex w-full items-start gap-4 p-5 text-left sm:gap-10 sm:p-7 md:grid md:grid-cols-[28%_1fr_auto]"
        >
          <span className={`display text-5xl leading-none transition-colors duration-500 sm:text-7xl md:text-[5.5rem] ${open ? "text-white/25" : "text-white/15"}`}>
            {num}.
          </span>
          <span className="min-w-0 flex-1">
            <span className="display block text-2xl tracking-[-0.03em] sm:text-4xl">{s.title}</span>
            <span className="mt-3 flex flex-wrap gap-2">
              {s.tags.map((t) => (
                <span key={t} className="rounded-full border border-white/25 px-3 py-1 text-[13px]">
                  {t}
                </span>
              ))}
            </span>
          </span>
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/60">
            {open ? <Minus size={16} /> : <Plus size={16} />}
          </span>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="grid gap-6 px-5 pb-6 sm:px-7 sm:pb-8 md:grid-cols-[28%_1fr]">
                <div className="hidden md:block" />
                <div className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
                  <Art palette={s.palette} className="notch-tl h-44 rounded-2xl sm:h-full sm:min-h-[200px]" />
                  <div className="flex flex-col justify-between gap-5">
                    <p className="text-lg leading-snug font-medium text-white/60">{s.blurb}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {s.items.map((it) => (
                        <span key={it} className="rounded-lg bg-white/8 px-2.5 py-1 text-[13px] text-white/85">
                          {it}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  );
}

export default function Skills() {
  const [open, setOpen] = useState(0);
  return (
    <Frame id="skills" dark className="py-24 sm:py-32">
      <Reveal className="mx-auto max-w-3xl pb-14 text-center">
        <Eyebrow className="justify-center">Skills</Eyebrow>
        <h2 className="display mt-3 text-[clamp(2.2rem,5.5vw,4.2rem)] leading-[1.05]">
          Crafted with purpose.
          <br />
          Built for last.
        </h2>
      </Reveal>
      <div className="space-y-3">
        {skills.map((s, i) => (
          <Row key={s.title} s={s} i={i} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
        ))}
      </div>
      <Reveal className="mt-10 flex justify-center">
        <Button href="#contact" variant="light">Start Project</Button>
      </Reveal>
    </Frame>
  );
}

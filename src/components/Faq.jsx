import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Minus, Plus } from "lucide-react";
import Frame from "./Frame";
import { Art, Eyebrow, Reveal } from "./ui";
import { faqs, highlights } from "../data";

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <Frame id="faq" dark className="py-24 sm:py-32">
      <Reveal className="mx-auto max-w-3xl pb-14 text-center">
        <Eyebrow className="justify-center">FAQ</Eyebrow>
        <h2 className="display mt-3 text-[clamp(2.2rem,5.5vw,4.2rem)] leading-[1.05]">
          Frequently asked
          <br />
          questions
        </h2>
      </Reveal>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.05}>
                <div className="overflow-hidden rounded-2xl bg-panel">
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left text-lg font-medium"
                  >
                    {f.q}
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white/10">
                      {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden px-5 text-white/60"
                      >
                        <span className="block pb-5 leading-relaxed">{f.a}</span>
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="hidden lg:block">
          <Art palette={highlights[1].palette} className="notch-tl h-full min-h-[360px] rounded-2xl">
            <div className="flex h-full items-end p-8">
              <p className="display max-w-xs text-4xl text-white">Ask me anything about the work.</p>
            </div>
          </Art>
        </Reveal>
      </div>
    </Frame>
  );
}

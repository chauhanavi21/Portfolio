import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Frame from "./Frame";
import { Art, Eyebrow, Reveal } from "./ui";
import { projects } from "../data";

function Card({ p, i, total, progress }) {
  const target = 1 - (total - 1 - i) * 0.045;
  const scale = useTransform(progress, [i / total, 1], [1, target]);
  const num = String(i + 1).padStart(2, "0");

  return (
    <div className="sticky flex items-start justify-center" style={{ top: `${88 + i * 22}px` }}>
      <motion.article style={{ scale, transformOrigin: "top center" }} className="w-full">
        <Art palette={p.palette} className="h-[min(72vh,520px)] min-h-[420px] rounded-[22px]">
          <div className="flex h-full flex-col justify-between p-6 sm:p-8">
            <div className="flex items-start justify-between">
              <span className="display text-5xl text-white/55 sm:text-6xl">{num}</span>
              <span className="rounded-full border border-white/35 bg-black/20 px-3 py-1 text-sm text-white backdrop-blur">{p.year}</span>
            </div>
            <div className="max-w-[640px] text-white sm:ml-[18%]">
              <h3 className="display text-3xl leading-tight sm:text-5xl">{p.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-white/85 sm:text-base">{p.desc}</p>
              <div className="mt-5 flex flex-wrap items-center gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-full border border-white/35 bg-black/25 px-3 py-1 text-[13px] backdrop-blur">
                    {t}
                  </span>
                ))}
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="ml-1 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-[13px] font-semibold text-black transition hover:scale-105"
                  >
                    {p.linkLabel} <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </Art>
      </motion.article>
    </div>
  );
}

export default function Work() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <Frame id="work" className="pt-8 pb-24 sm:pb-32">
      <Reveal className="mx-auto max-w-3xl pt-16 pb-14 text-center">
        <Eyebrow className="justify-center">Work</Eyebrow>
        <h2 className="display mt-3 text-[clamp(2.2rem,5.5vw,4.2rem)] leading-[1.05] tracking-[-0.04em]">
          Build, Launch, and
          <br />
          Scale with Confidence
        </h2>
      </Reveal>

      <div ref={ref} className="space-y-6 pb-4">
        {projects.map((p, i) => (
          <Card key={p.title} p={p} i={i} total={projects.length} progress={scrollYProgress} />
        ))}
      </div>
    </Frame>
  );
}

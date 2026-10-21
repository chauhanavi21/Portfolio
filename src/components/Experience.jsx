import Frame from "./Frame";
import { Art, Eyebrow, Reveal } from "./ui";
import { experience } from "../data";

export default function Experience() {
  return (
    <Frame id="experience" className="py-24 sm:py-32">
      <Reveal className="pb-14">
        <Eyebrow>Experience</Eyebrow>
        <h2 className="display mt-3 text-[clamp(2.2rem,5.5vw,4.2rem)] leading-[1.05] tracking-[-0.04em]">
          Where I've worked
        </h2>
      </Reveal>

      <div className="space-y-5">
        {experience.map((e, i) => (
          <Reveal key={e.company} delay={0.05}>
            <article className="notch-tr grid overflow-hidden bg-white lg:grid-cols-[34%_1fr]">
              <Art palette={e.palette} className="min-h-[220px] lg:min-h-full">
                <div className="flex h-full flex-col justify-between p-6 text-white">
                  <span className="display text-5xl text-white/55">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="text-sm text-white/80">{e.period}</p>
                    <p className="text-sm text-white/60">{e.mode}</p>
                  </div>
                </div>
              </Art>
              <div className="p-6 sm:p-9">
                <h3 className="display text-3xl tracking-[-0.03em] sm:text-4xl">{e.company}</h3>
                <p className="mt-1 text-lg text-black/60">{e.role}</p>
                <ul className="mt-5 space-y-3 text-[15px] leading-relaxed text-black/75">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="mt-[0.5em] text-[10px] text-red">✦</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {e.tags.map((t) => (
                    <span key={t} className="rounded-full border border-black/20 px-3 py-1 text-[13px]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Frame>
  );
}

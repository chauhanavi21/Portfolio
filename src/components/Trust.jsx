import { Award, GraduationCap } from "lucide-react";
import Frame from "./Frame";
import { Art, CountUp, Eyebrow, Marquee, Reveal, WordReveal } from "./ui";
import { certifications, education, highlights } from "../data";

export default function Trust() {
  return (
    <Frame id="education" className="py-24 sm:py-32">
      <div className="text-center">
        <Eyebrow className="justify-center">Education &amp; Certifications</Eyebrow>
        <WordReveal
          text="Proven by degrees, certifications, and real results."
          className="display mx-auto mt-3 max-w-3xl text-[clamp(2rem,4.6vw,3.6rem)] leading-[1.05] tracking-[-0.04em]"
        />
      </div>

      <div className="mt-14 grid gap-4 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-4">
          {education.map((e, i) => (
            <Reveal key={e.school} delay={i * 0.08}>
              <div className="notch-tr bg-white p-6 sm:p-7">
                <span className="grid h-11 w-11 place-items-center rounded-lg border border-red/70 bg-red/10 text-red">
                  <GraduationCap size={20} strokeWidth={1.6} />
                </span>
                <h3 className="display mt-5 text-2xl tracking-[-0.03em]">{e.school}</h3>
                <p className="mt-1 text-black/65">{e.degree}</p>
                <div className="mt-4 flex flex-wrap items-center gap-2 text-[13px]">
                  <span className="rounded-full bg-black px-3 py-1 text-white">GPA {e.gpa}</span>
                  <span className="rounded-full border border-black/20 px-3 py-1">{e.period}</span>
                  <span className="text-black/55">{e.place}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {highlights.map((h, i) => (
            <Reveal key={h.label} delay={i * 0.08}>
              <Art palette={h.palette} className={`${i % 2 ? "notch-tr" : "notch-both"} h-full min-h-[190px]`}>
                <div className="flex h-full flex-col justify-between p-5 text-white">
                  <p className="flex justify-between text-sm">
                    <span className="font-medium">{h.label}</span>
                    <span className="text-white/70">{String(i + 1).padStart(2, "0")}/04</span>
                  </p>
                  <div>
                    <CountUp value={h.value} prefix={h.prefix} suffix={h.suffix} decimals={h.decimals} className="display text-5xl" />
                    <p className="mt-1 text-[13px] leading-snug text-white/80">{h.note}</p>
                  </div>
                </div>
              </Art>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal className="mt-10">
        <div className="notch-tr bg-black py-5 text-white">
          <Marquee>
            {[...certifications, ...certifications].map((c, i) => (
              <span key={i} className="mx-8 inline-flex items-center gap-3 text-lg whitespace-nowrap sm:text-xl">
                <Award size={20} className="text-red" /> {c}
              </span>
            ))}
          </Marquee>
        </div>
      </Reveal>
    </Frame>
  );
}

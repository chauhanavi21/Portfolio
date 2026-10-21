import Frame from "./Frame";
import { Art, Button, CountUp, Eyebrow, Reveal, WordReveal } from "./ui";
import { highlights, profile } from "../data";

export default function About() {
  return (
    <Frame id="about" className="py-24 sm:py-32">
      <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
        <Eyebrow>About me</Eyebrow>
        <div>
          <WordReveal
            text={profile.about}
            className="display text-[clamp(1.7rem,3.6vw,2.9rem)] leading-[1.12] tracking-[-0.035em] font-semibold"
          />
          <Reveal delay={0.1} className="mt-8">
            <Button href="#contact" variant="dark">Let's Talk</Button>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            <Reveal>
              <div className="notch-tr h-full bg-white p-6">
                <p className="text-[22px] tracking-widest text-red">★★★★★</p>
                <p className="mt-5 text-[17px] leading-snug text-black/80">
                  "Built a production RAG pipeline over 5,000+ documents that cut manual lookup time by over 60% for a 20+ engineer team."
                </p>
                <p className="mt-6 font-semibold">Silent Infotech</p>
                <p className="text-sm text-black/55">Software Engineer · 2022–2024</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <Art palette={highlights[0].palette} className="notch-both h-full min-h-[240px]">
                <div className="flex h-full flex-col justify-between p-6 text-white">
                  <p className="flex items-baseline gap-3">
                    <CountUp value={4} suffix="+" className="display text-6xl" />
                    <span className="text-white/80">Years building</span>
                  </p>
                  <div>
                    <p className="font-semibold">MS · SUNY Albany</p>
                    <p className="text-sm text-white/70">AWS Certified ×2 · IBM Consulting</p>
                  </div>
                </div>
              </Art>
            </Reveal>
          </div>
        </div>
      </div>
    </Frame>
  );
}

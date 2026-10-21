import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Globe } from "lucide-react";
import Frame from "./Frame";
import { Art, Button, CountUp, Eyebrow, Marquee, Reveal, WordReveal } from "./ui";
import { highlights, skills } from "../data";

const toolsA = ["Python", "TypeScript", "FastAPI", "Node.js", "React", "Next.js", "PostgreSQL", "Redis"];
const toolsB = ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Grafana", "LangChain"];

function ToolRow({ items, reverse }) {
  return (
    <Marquee reverse={reverse} className="[mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
      {items.map((t) => (
        <span key={t} className="mr-2 rounded-lg border border-black/10 bg-paper px-3 py-1.5 text-sm whitespace-nowrap">
          {t}
        </span>
      ))}
    </Marquee>
  );
}

/** Dark metric card that cycles through the headline numbers, "01/04" style. */
function MetricCard() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % highlights.length), 3800);
    return () => clearInterval(id);
  }, []);
  const h = highlights[i];
  return (
    <div className="notch-tr relative min-h-[300px] bg-black text-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={h.label}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Art palette={h.palette} className="h-full">
            <div className="flex h-full flex-col justify-between p-5">
              <div>
                <div className="flex justify-between text-sm font-medium">
                  <span>{h.label}</span>
                  <span className="tabular-nums">0{i + 1}/0{highlights.length}</span>
                </div>
                <div className="mt-2 h-px bg-white/40" />
              </div>
              <div>
                <CountUp key={h.label} value={h.value} prefix={h.prefix} suffix={h.suffix} decimals={h.decimals} className="display text-6xl" />
                <p className="mt-1 text-sm text-white/80">{h.note}</p>
              </div>
            </div>
          </Art>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function Why() {
  return (
    <Frame id="why" className="py-24 sm:py-32">
      <div className="text-center">
        <Eyebrow className="justify-center">Why work with me</Eyebrow>
        <WordReveal
          text="A dependable engineer for ambitious teams."
          className="display mx-auto mt-3 max-w-3xl text-[clamp(2.2rem,5.5vw,4.2rem)] leading-[1.05] tracking-[-0.04em]"
        />
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[0.8fr_1fr]">
        <Reveal>
          <Art palette={skills[2].palette} className="h-full min-h-[320px] rounded-[22px]">
            <div className="flex h-full flex-col justify-end p-7 text-white">
              <p className="display text-3xl leading-tight sm:text-4xl">From prototype to production.</p>
              <p className="mt-2 text-white/80">RAG pipelines, GitOps platforms and cloud migrations, shipped and measured.</p>
            </div>
          </Art>
        </Reveal>

        <div className="flex min-w-0 flex-col gap-6">
          <Reveal delay={0.05}>
            <p className="display text-[clamp(1.3rem,2.4vw,1.9rem)] leading-snug tracking-[-0.03em] font-medium">
              I combine AI, cloud and full-stack experience to build systems that launch faster, scale confidently and
              hold up in production.
            </p>
            <div className="mt-6 flex items-center gap-3 border-t border-black/10 pt-5 text-sm text-black/65">
              <Globe size={22} strokeWidth={1.4} className="text-black" />
              <p>
                On-site &amp; remote experience
                <br />
                Based in Baton Rouge, LA
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Reveal delay={0.1} className="min-w-0">
              <div className="notch-tr flex h-full min-h-[300px] flex-col overflow-hidden bg-white p-5">
                <p className="display text-xl leading-tight">Tools I ship with</p>
                <p className="mt-1 text-sm text-black/55">Pragmatic stack, chosen per problem.</p>
                <div className="mt-5 space-y-2">
                  <ToolRow items={toolsA} />
                  <ToolRow items={toolsB} reverse />
                </div>
                <Button href="#contact" variant="dark" className="mt-auto self-stretch justify-between">
                  Start Project
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <MetricCard />
            </Reveal>
          </div>
        </div>
      </div>
    </Frame>
  );
}

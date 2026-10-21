import Frame from "./Frame";
import { Art, Eyebrow, Marquee, Reveal } from "./ui";

// Real resume bullets, shaped like the reference's testimonial cards.
const cards = [
  { kind: "photo", palette: ["#9aa3ad", "#2b3138", "#0d0f12"], who: "IBM Consulting", role: "Associate Application Developer", text: "Re-architected core components onto Azure-native services for a scalable, cloud-first deployment.", date: "2026" },
  { kind: "text", who: "Silent Infotech", role: "Software Engineer", text: "Production RAG over 5,000+ documents cut manual lookup time by over 60% for a 20+ engineer team.", date: "2022–24" },
  { kind: "photo", palette: ["#e08a3c", "#7a2f10", "#150a05"], who: "Silent Infotech", role: "Software Engineer", text: "ONNX export + INT8 quantization reduced inference latency by 38% without losing accuracy.", date: "2022–24" },
  { kind: "text", who: "Opus Technologies", role: "Software Engineering Intern", text: "Lifted medical-image classifier accuracy from 71% to 92% with augmentation and class-weighting.", date: "2021–22" },
  { kind: "photo", palette: ["#6f8790", "#c49a55", "#0b1013"], who: "Enterprise AI Copilot", role: "Personal project", text: "Traced 100% of LLM calls with Langfuse and reached a 0.86 faithfulness score with Ragas.", date: "2025" },
  { kind: "text", who: "Collaborative Whiteboard", role: "Personal project", text: "Sub-100ms sync for 10+ collaborators with offline-first edits that merge conflict-free.", date: "2025" },
];

function Card({ c }) {
  const photo = c.kind === "photo";
  const body = (
    <div className="flex h-full flex-col justify-between p-5">
      <div>
        <p className={`font-semibold ${photo ? "text-white" : "text-black"}`}>{c.who}</p>
        <p className={`text-xs ${photo ? "text-white/70" : "text-black/55"}`}>{c.role}</p>
        <p className={`display mt-5 text-xl leading-snug tracking-[-0.025em] ${photo ? "text-white" : "text-black"}`}>{c.text}</p>
      </div>
      <div className={`mt-6 flex items-center justify-between text-sm ${photo ? "text-white/85" : "text-black/70"}`}>
        <span className="tracking-widest text-red">★★★★★</span>
        <span>{c.date}</span>
      </div>
    </div>
  );
  return (
    <article className="mr-4 h-[340px] w-[300px] shrink-0 overflow-hidden rounded-[18px] sm:w-[340px]">
      {photo ? <Art palette={c.palette} className="h-full">{body}</Art> : <div className="h-full bg-white">{body}</div>}
    </article>
  );
}

export default function Impact() {
  return (
    <Frame id="impact" className="py-24 sm:py-32">
      <Reveal>
        <Eyebrow>Impact</Eyebrow>
        <h2 className="display mt-3 max-w-xl text-[clamp(2.2rem,5.5vw,4.2rem)] leading-[1.05] tracking-[-0.04em]">
          Results from
          <br />
          real work.
        </h2>
      </Reveal>
      <div className="relative mt-12 -mx-6 sm:mx-0">
        <Marquee className="[mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)] hover:[&>div]:[animation-play-state:paused]">
          {cards.map((c, i) => (
            <Card key={i} c={c} />
          ))}
        </Marquee>
      </div>
    </Frame>
  );
}

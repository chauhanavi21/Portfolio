import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useScroll, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export function Eyebrow({ children, className = "" }) {
  return (
    <p className={`flex items-center gap-2 self-start text-sm font-medium tracking-wide uppercase ${className}`}>
      <span className="text-red">✦</span>
      {children}
    </p>
  );
}

const circle = "grid h-8 w-8 shrink-0 place-items-center rounded-full transition-transform duration-300 group-hover:rotate-45";

/** Pill button: "outline" (with dot), "light" (white + arrow circle) or "dark" (black + arrow circle). */
export function Button({ href, variant = "light", children, className = "", ...rest }) {
  const base =
    "group inline-flex items-center gap-3 rounded-full text-[15px] font-medium whitespace-nowrap transition-transform duration-300 hover:scale-[1.03] active:scale-95";
  const styles = {
    outline: "border border-white/30 bg-black/30 px-5 py-3 text-white backdrop-blur",
    light: "bg-white py-1.5 pr-1.5 pl-5 text-black",
    dark: "bg-black py-1.5 pr-1.5 pl-5 text-white",
  };
  const external = href?.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`${base} ${styles[variant]} ${className}`}
      {...rest}
    >
      {children}
      {variant === "outline" ? (
        <span className="h-1.5 w-1.5 rounded-full bg-white" />
      ) : (
        <span className={`${circle} ${variant === "light" ? "bg-black text-white" : "bg-white text-black"}`}>
          <ArrowUpRight size={16} />
        </span>
      )}
    </a>
  );
}

function Word({ word, progress, range }) {
  const opacity = useTransform(progress, range, [0.16, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.25em] inline-block">
      {word}
    </motion.span>
  );
}

/** Heading whose words fill in one by one as it scrolls into view. */
export function WordReveal({ text, className = "" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 88%", "start 42%"] });
  const words = text.split(" ");
  return (
    <h2 ref={ref} className={className} aria-label={text}>
      {words.map((w, i) => (
        <Word key={i} word={w} progress={scrollYProgress} range={[i / words.length, Math.min(1, (i + 1.5) / words.length)]} />
      ))}
    </h2>
  );
}

export function Reveal({ children, delay = 0, y = 32, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Generated "photo" stand-in: layered gradients, drifting blurred light and horizontal
 * motion streaks, tinted by a 3-colour palette. Replaces the reference site's stock imagery.
 */
export function Art({ palette, className = "", children, streaks = true }) {
  const [a, b, c] = palette;
  return (
    <div
      className={`relative isolate overflow-hidden ${className}`}
      style={{ background: `radial-gradient(120% 95% at 72% 18%, ${a} 0%, ${b} 52%, ${c} 100%)` }}
    >
      <motion.div
        aria-hidden="true"
        className="absolute -top-1/4 -left-1/4 h-3/4 w-3/4 rounded-full opacity-60 blur-3xl"
        style={{ background: a }}
        animate={{ x: ["0%", "35%", "0%"], y: ["0%", "20%", "0%"] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute -right-1/4 -bottom-1/3 h-3/4 w-3/4 rounded-full opacity-50 blur-3xl"
        style={{ background: b }}
        animate={{ x: ["0%", "-30%", "0%"], y: ["0%", "-25%", "0%"] }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
      />
      {streaks && (
        <motion.div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-[200%] opacity-30 mix-blend-screen"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent 0 14px, rgba(255,255,255,0.55) 14px 15px, transparent 15px 41px, rgba(255,255,255,0.25) 41px 42px, transparent 42px 77px)",
            maskImage: "linear-gradient(90deg, transparent, #000 25%, #000 75%, transparent)",
          }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        />
      )}
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}

export function CountUp({ value, prefix = "", suffix = "", decimals = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-40px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, value, { duration: 1.6, ease: "easeOut", onUpdate: setN });
    return () => c.stop();
  }, [inView, value]);
  return (
    <span ref={ref} className={className}>
      {prefix}
      {n.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
      {suffix}
    </span>
  );
}

export function Marquee({ children, reverse = false, className = "" }) {
  return (
    <div className={`flex overflow-hidden ${className}`} aria-hidden="true">
      <div className={`flex w-max shrink-0 items-center ${reverse ? "animate-marquee-rev" : "animate-marquee"}`}>
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center">{children}</div>
      </div>
    </div>
  );
}

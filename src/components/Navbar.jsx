import { useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { Menu, X } from "lucide-react";
import { nav, profile } from "../data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <motion.div style={{ scaleX: progress }} className="fixed inset-x-0 top-0 h-[2px] origin-left bg-red" />
      <div className="mx-auto flex max-w-[1120px] items-center justify-between rounded-full border border-white/10 bg-black/70 py-2 pr-2 pl-5 text-white shadow-[0_8px_40px_-8px_rgba(0,0,0,0.6)] backdrop-blur-xl">
        <a href="#top" className="display text-xl">
          Avi
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="rounded-full px-4 py-2 text-[15px] text-white/75 transition hover:bg-white/10 hover:text-white">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${profile.email}`}
            className="hidden rounded-full border border-white/30 px-4 py-2 text-[15px] font-medium transition hover:bg-white hover:text-black sm:inline-flex sm:items-center sm:gap-2"
          >
            Start Project <span className="h-1.5 w-1.5 rounded-full bg-current" />
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full bg-white/10 md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mx-auto mt-2 grid max-w-[1120px] gap-1 rounded-3xl border border-white/10 bg-black/90 p-2 text-white backdrop-blur-xl md:hidden"
          >
            {[...nav, { id: "top", label: "Home" }].reverse().map((n) => (
              <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-lg hover:bg-white/10">
                {n.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

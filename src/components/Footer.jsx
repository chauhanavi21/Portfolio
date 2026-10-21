import { Download, Mail, MapPin, Phone } from "lucide-react";
import Frame from "./Frame";
import { Art, Button, Eyebrow, Marquee, Reveal } from "./ui";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { highlights, nav, profile } from "../data";

function Band() {
  return (
    <Marquee className="border-y border-black/10 bg-paper py-6" reverse>
      {Array.from({ length: 4 }).map((_, i) => (
        <span key={i} className="display mx-4 flex items-center gap-8 text-6xl whitespace-nowrap sm:text-8xl">
          <span>Avi</span>
          <span className="text-black/30">Chauhan</span>
        </span>
      ))}
    </Marquee>
  );
}

export default function Footer() {
  const contacts = [
    { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/-/g, "")}` },
    { icon: LinkedinIcon, label: "LinkedIn", href: profile.linkedin },
    { icon: GithubIcon, label: "GitHub", href: profile.github },
  ];

  return (
    <>
      <section id="contact" className="bg-paper pt-24 sm:pt-32 text-black">
        <div className="mx-auto max-w-[1120px] px-6 pb-20">
          <Reveal className="text-center">
            <Eyebrow className="justify-center">Contact</Eyebrow>
            <h2 className="display mt-3 text-[clamp(2.4rem,7vw,5.6rem)] leading-[1] tracking-[-0.045em]">
              Let's build something
              <br />
              great together.
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href={`mailto:${profile.email}`} variant="dark">Say hello</Button>
              <a href={profile.resume} download className="group inline-flex items-center gap-2 rounded-full border border-black/25 px-5 py-3 text-[15px] font-medium transition hover:bg-black hover:text-white">
                <Download size={16} /> Download resume
              </a>
            </div>
          </Reveal>
        </div>
        <Band />
      </section>

      <footer className="bg-white text-black">
        <div className="mx-auto max-w-[1120px] px-6 pt-14">
          <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
            <div>
              <Art palette={highlights[2].palette} className="notch-tr h-44 max-w-[320px] rounded-2xl">
                <div className="flex h-full items-end p-4 text-white">
                  <p className="display text-2xl">Open to new roles.</p>
                </div>
              </Art>
              <p className="mt-4 flex items-center gap-3 text-sm">
                <span className="flex items-center gap-2"><span className="text-red">✦</span>Let's build together</span>
              </p>
              <a href={`mailto:${profile.email}`} className="mt-1 block text-lg underline-offset-4 hover:underline">
                {profile.email}
              </a>
            </div>

            <div>
              <p className="text-sm text-black/55">Navigation</p>
              <ul className="mt-4 space-y-2 text-lg">
                {[{ id: "top", label: "Home" }, ...nav].map((n) => (
                  <li key={n.id}>
                    <a href={`#${n.id}`} className="transition hover:text-red">{n.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm text-black/55">Connect</p>
              <ul className="mt-4 space-y-2 text-lg">
                {contacts.map(({ icon: Icon, label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 font-semibold transition hover:text-red"
                    >
                      <Icon size={16} /> <span className="break-all">{label}</span>
                    </a>
                  </li>
                ))}
                <li className="flex items-center gap-2 pt-1 text-sm text-black/55"><MapPin size={14} /> {profile.location}</li>
              </ul>
            </div>
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-between gap-3 border-t border-black/10 py-5 text-sm text-black/55">
            <p>©{new Date().getFullYear()} {profile.name}. All rights reserved.</p>
            <p>Built with React, Vite &amp; Tailwind</p>
          </div>
        </div>

        <p className="display overflow-hidden px-6 pb-2 text-center text-[13.2vw] leading-[0.9] tracking-[-0.055em] whitespace-nowrap select-none" aria-hidden="true">
          Avi Chauhan
        </p>
      </footer>
    </>
  );
}

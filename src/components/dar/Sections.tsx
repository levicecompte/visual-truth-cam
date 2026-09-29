import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Play } from "lucide-react";
import jardinImg from "@/assets/jardin.jpg";
import restaurantImg from "@/assets/restaurant.jpg";
import rooftopImg from "@/assets/rooftop.jpg";
import { useLang } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function Manifeste() {
  const { t } = useLang();
  return (
    <section className="chaux grain relative px-6 py-32 lg:py-44">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="eyebrow">{t.manifeste.eyebrow}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-8 font-serif text-[clamp(2rem,4.6vw,3.6rem)] leading-[1.08] text-offwhite italic">
            {t.manifeste.title}
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="rule-copper mx-auto my-10 w-40" />
        </Reveal>
        <Reveal delay={0.2}>
          <p className="font-sans text-[0.95rem] leading-[2] text-pierre/70">
            {t.manifeste.body}
          </p>
        </Reveal>
        <Reveal delay={0.28}>
          <p className="eyebrow mt-12">{t.manifeste.signature}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function Jardin() {
  const { t } = useLang();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={ref} id="jardin" className="relative bg-noir px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto grid max-w-[1500px] items-center gap-14 lg:grid-cols-2 lg:gap-24">
        <div className="grain relative h-[62vh] overflow-hidden lg:h-[86vh]">
          <motion.img
            src={jardinImg}
            alt="Le jardin secret de 1 200 m²"
            loading="lazy"
            width={1280}
            height={1600}
            style={{ y }}
            className="absolute inset-0 h-[118%] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-noir/70 to-transparent" />
        </div>

        <div className="lg:pr-10">
          <Reveal>
            <p className="eyebrow">{t.jardin.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-6 font-serif text-[clamp(2.2rem,4.4vw,3.8rem)] leading-[1.05] text-offwhite">
              {t.jardin.title}
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-8 max-w-lg font-sans text-sm leading-[2] text-pierre/70">
              {t.jardin.body}
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <span className="mt-8 inline-block border border-zellige/70 bg-zellige/15 px-4 py-2 font-sans text-[0.62rem] tracking-[0.22em] text-pierre/80 uppercase">
              {t.jardin.badge}
            </span>
          </Reveal>

          <div className="mt-14 grid grid-cols-3 gap-6 border-t border-border pt-10">
            {t.jardin.stats.map((s, i) => (
              <Reveal key={s.l} delay={0.08 * i}>
                <p className="font-serif text-[clamp(1.8rem,3vw,2.8rem)] text-copper">{s.n}</p>
                <p className="mt-2 font-sans text-[0.66rem] leading-relaxed tracking-[0.12em] text-muted-foreground uppercase">
                  {s.l}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Table() {
  const { t } = useLang();
  const [active, setActive] = useState(1);

  return (
    <section id="table" className="chaux grain relative overflow-hidden py-24 lg:py-32">
      <div className="light-rays pointer-events-none absolute inset-x-0 top-0 h-80" />

      <div className="relative mx-auto max-w-[1500px] px-6 lg:px-12">
        <div className="max-w-3xl">
          <Reveal>
            <p className="eyebrow">{t.table.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-6 font-serif text-[clamp(3rem,9vw,7rem)] leading-none tracking-[0.06em] text-offwhite">
              {t.table.title}
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-8 font-sans text-sm leading-[2] text-pierre/70">{t.table.body}</p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="grain relative mt-14 h-[52vh] overflow-hidden lg:h-[74vh]">
            <img
              src={restaurantImg}
              alt="La salle du restaurant NOUR"
              loading="lazy"
              width={1600}
              height={1008}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-noir via-transparent to-noir/40" />
            <button className="glass-copper absolute bottom-6 left-6 flex items-center gap-3 px-5 py-3 font-sans text-[0.64rem] tracking-[0.24em] text-cuivre uppercase">
              <Play className="h-3.5 w-3.5" />
              {t.table.cta}
            </button>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <p className="font-serif text-2xl leading-[1.5] text-pierre/85 italic">
              {t.table.chef}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {t.table.badges.map((b) => (
                <span
                  key={b}
                  className="border border-cuivre/40 px-3 py-1.5 font-sans text-[0.6rem] tracking-[0.18em] text-cuivre uppercase"
                >
                  {b}
                </span>
              ))}
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="eyebrow">{t.table.menusTitle}</p>
            </Reveal>
            <div className="mt-6 border-t border-border">
              {t.table.menus.map((m, i) => (
                <Reveal key={m.n} delay={0.06 * i}>
                  <button
                    onClick={() => setActive(i)}
                    className="group w-full border-b border-border py-7 text-left"
                  >
                    <div className="flex items-baseline gap-6">
                      <span
                        className={`font-serif text-5xl transition-colors duration-500 ${
                          active === i ? "text-copper" : "text-pierre/25"
                        }`}
                      >
                        {m.n}
                      </span>
                      <span className="font-sans text-[0.68rem] tracking-[0.26em] text-pierre/70 uppercase">
                        {m.t}
                      </span>
                      <span className="ml-auto font-serif text-lg text-cuivre">{m.p}</span>
                    </div>
                    <motion.p
                      initial={false}
                      animate={{
                        height: active === i ? "auto" : 0,
                        opacity: active === i ? 1 : 0,
                      }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden font-sans text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-4 block">{m.d}</span>
                    </motion.p>
                  </button>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Rooftop() {
  const { t } = useLang();
  const ref = useRef<HTMLElement>(null);
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);

  return (
    <section
      ref={ref}
      id="rooftop"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setMouse({
          x: ((e.clientX - r.left) / r.width) * 100,
          y: ((e.clientY - r.top) / r.height) * 100,
        });
      }}
      className="grain relative h-[110svh] overflow-hidden"
    >
      <motion.img
        src={rooftopImg}
        alt="La piscine miroir sur les toits, vue sur l'Atlas"
        loading="lazy"
        width={1920}
        height={1088}
        style={{ scale }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-noir/75 via-noir/25 to-noir" />
      <div
        className="pointer-events-none absolute inset-0 transition-[background] duration-300"
        style={{
          background: `radial-gradient(520px circle at ${mouse.x}% ${mouse.y}%, oklch(0.63 0.071 48 / 0.22), transparent 65%)`,
        }}
      />

      <div className="relative mx-auto flex h-full max-w-[1500px] flex-col justify-center px-6 lg:px-12">
        <Reveal>
          <p className="eyebrow">{t.rooftop.eyebrow}</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-6 max-w-2xl font-serif text-[clamp(2.4rem,6vw,5rem)] leading-[1.02] text-offwhite">
            {t.rooftop.title}
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-8 max-w-md font-sans text-sm leading-[2] text-pierre/75">
            {t.rooftop.body}
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <ul className="mt-10 flex flex-wrap gap-x-10 gap-y-3">
            {t.rooftop.points.map((p) => (
              <li
                key={p}
                className="font-sans text-[0.64rem] tracking-[0.2em] text-pierre/70 uppercase"
              >
                <span className="mr-3 text-cuivre">—</span>
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

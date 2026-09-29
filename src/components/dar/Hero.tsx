import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import heroImg from "@/assets/hero-jardin.jpg";
import { useLang } from "@/lib/i18n";
import { Magnetic } from "./Magnetic";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { t, lang } = useLang();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.06, 1.22]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const letters = t.hero.title.split("");

  return (
    <section
      ref={ref}
      id="hero"
      className="grain relative flex h-[100svh] items-end overflow-hidden"
    >
      <motion.img
        src={heroImg}
        alt="Le jardin secret de Dar Elia au crépuscule"
        width={1920}
        height={1088}
        style={{ y: imgY, scale: imgScale }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/45 to-noir/70" />
      <div className="light-rays absolute inset-0" />

      <motion.div
        style={{ y: textY, opacity: fade }}
        className="relative mx-auto w-full max-w-[1500px] px-6 pb-24 lg:px-12 lg:pb-28"
      >
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8, duration: 1 }}
        >
          {t.hero.since}
        </motion.p>

        <h1 className="mt-6 max-w-5xl font-serif text-[clamp(2.7rem,7.4vw,6.6rem)] leading-[0.98] text-offwhite">
          <span className="sr-only">{t.hero.title}</span>
          <span aria-hidden className="inline-block">
            {letters.map((c, i) => (
              <motion.span
                key={`${lang}-${i}`}
                className="inline-block"
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 2.75 + i * 0.026,
                  duration: 0.85,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {c === " " ? "\u00A0" : c}
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5, duration: 1 }}
          className="mt-8 max-w-xl font-sans text-sm leading-relaxed text-pierre/75"
        >
          {t.hero.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.7, duration: 1 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Magnetic>
            <a
              href="#reserver"
              className="btn-liquid inline-block border border-cuivre bg-cuivre/10 px-9 py-4 font-sans text-[0.68rem] tracking-[0.28em] text-cuivre uppercase transition-colors duration-500 hover:text-noir"
            >
              {t.hero.cta1}
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#jardin"
              className="group inline-flex items-center gap-3 font-sans text-[0.68rem] tracking-[0.28em] text-pierre/80 uppercase"
            >
              {t.hero.cta2}
              <span className="h-px w-10 bg-cuivre transition-all duration-500 group-hover:w-16" />
            </a>
          </Magnetic>
        </motion.div>
      </motion.div>

      <motion.div
        style={{ opacity: fade }}
        className="absolute right-6 bottom-8 hidden flex-col items-center gap-3 lg:right-12 lg:flex"
      >
        <span className="font-sans text-[0.6rem] tracking-[0.3em] text-pierre/50 uppercase [writing-mode:vertical-rl]">
          {t.hero.scroll}
        </span>
        <motion.span
          className="w-px bg-cuivre"
          animate={{ height: [12, 42, 12] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}

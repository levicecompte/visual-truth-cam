import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { MapPin, Phone, Mail } from "lucide-react";
import suite1 from "@/assets/suite-1.jpg";
import suite2 from "@/assets/suite-2.jpg";
import suite3 from "@/assets/suite-3.jpg";
import spaImg from "@/assets/spa.jpg";
import artisan1 from "@/assets/artisan-1.jpg";
import artisan2 from "@/assets/artisan-2.jpg";
import artisan3 from "@/assets/artisan-3.jpg";
import experienceImg from "@/assets/experience.jpg";
import { useLang } from "@/lib/i18n";
import { Reveal } from "./Reveal";

const suiteImages = [suite1, suite2, suite3, suite1, suite2, suite3];

function SuiteCard({
  image,
  name,
  view,
  price,
  size,
  amenities,
  labels,
}: {
  image: string;
  name: string;
  view: string;
  price: string;
  size: string;
  amenities: readonly string[];
  labels: { view: string; from: string; night: string };
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useSpring(useMotionValue(0), { stiffness: 220, damping: 20 });
  const ry = useSpring(useMotionValue(0), { stiffness: 220, damping: 20 });
  const rotateX = useTransform(rx, (v) => `${v}deg`);
  const rotateY = useTransform(ry, (v) => `${v}deg`);

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        rx.set(-((e.clientY - (r.top + r.height / 2)) / r.height) * 9);
        ry.set(((e.clientX - (r.left + r.width / 2)) / r.width) * 9);
      }}
      onMouseLeave={() => {
        rx.set(0);
        ry.set(0);
      }}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className="group relative"
    >
      <div className="grain relative aspect-[4/5] overflow-hidden">
        <img
          src={image}
          alt={name}
          loading="lazy"
          width={1200}
          height={1504}
          className="h-full w-full object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cuivre/0 to-cuivre/0 opacity-0 transition-opacity duration-700 group-hover:via-cuivre/10 group-hover:to-cuivre/25 group-hover:opacity-100" />

        <div className="absolute inset-x-0 bottom-0 p-6">
          <p className="eyebrow">
            {labels.view} {view}
          </p>
          <h3 className="mt-2 font-serif text-3xl text-offwhite">{name}</h3>
          <div className="mt-3 flex items-baseline gap-4">
            <span className="font-sans text-[0.62rem] tracking-[0.2em] text-pierre/60 uppercase">
              {size}
            </span>
            <span className="font-serif text-lg text-cuivre">{price}</span>
            <span className="font-sans text-[0.58rem] tracking-[0.18em] text-pierre/45 uppercase">
              {labels.night}
            </span>
          </div>

          <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:grid-rows-[1fr]">
            <ul className="overflow-hidden">
              <li className="rule-copper mt-5 mb-4" />
              {amenities.map((a) => (
                <li
                  key={a}
                  className="font-sans text-[0.68rem] leading-7 tracking-[0.1em] text-pierre/70"
                >
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Suites() {
  const { t } = useLang();
  return (
    <section id="suites" className="bg-noir px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1500px]">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow">{t.suites.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-6 font-serif text-[clamp(2.2rem,4.6vw,4rem)] leading-[1.05] text-offwhite">
              {t.suites.title}
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 font-sans text-sm leading-[2] text-pierre/70">{t.suites.body}</p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {t.suites.items.map((s, i) => (
            <Reveal key={s.name} delay={0.05 * i}>
              <SuiteCard
                image={suiteImages[i % suiteImages.length]}
                name={s.name}
                view={s.view}
                price={s.price}
                size={s.size}
                amenities={s.amenities}
                labels={{ view: t.suites.view, from: t.suites.from, night: t.suites.night }}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Spa() {
  const { t } = useLang();
  return (
    <section id="spa" className="grain relative overflow-hidden">
      <img
        src={spaImg}
        alt="Le hammam en marbre vert"
        loading="lazy"
        width={1600}
        height={1008}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-noir/72" />
      <div className="relative mx-auto max-w-[1500px] px-6 py-28 lg:px-12 lg:py-40">
        <div className="max-w-xl">
          <Reveal>
            <p className="eyebrow">{t.spa.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-6 font-serif text-[clamp(2.2rem,5vw,4.2rem)] leading-[1.03] text-offwhite">
              {t.spa.title}
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-8 font-sans text-sm leading-[2] text-pierre/75">{t.spa.body}</p>
          </Reveal>
          <div className="mt-12 grid gap-px border border-border sm:grid-cols-2">
            {t.spa.items.map((i) => (
              <div
                key={i}
                className="bg-noir/45 px-5 py-6 font-sans text-[0.66rem] tracking-[0.18em] text-pierre/75 uppercase"
              >
                {i}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Ateliers() {
  const { t } = useLang();
  const images = [artisan1, artisan2, artisan3];
  return (
    <section id="ateliers" className="chaux grain py-24 lg:py-32">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow">{t.ateliers.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-6 font-serif text-[clamp(2.2rem,4.6vw,4rem)] leading-[1.05] text-offwhite">
              {t.ateliers.title}
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 font-sans text-sm leading-[2] text-pierre/70">{t.ateliers.body}</p>
          </Reveal>
        </div>
      </div>

      <div className="no-scrollbar mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4 lg:px-12">
        {t.ateliers.items.map((a, i) => (
          <article
            key={a.t}
            className="group w-[78vw] shrink-0 snap-start sm:w-[46vw] lg:w-[34vw]"
          >
            <div className="grain relative aspect-[4/5] overflow-hidden">
              <img
                src={images[i]}
                alt={a.t}
                loading="lazy"
                width={1008}
                height={1264}
                className="h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir/80 to-transparent" />
            </div>
            <h3 className="mt-6 font-serif text-2xl text-offwhite">{a.t}</h3>
            <p className="mt-3 max-w-sm font-sans text-sm leading-relaxed text-pierre/65">{a.d}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Experiences() {
  const { t } = useLang();
  return (
    <section id="experiences" className="grain relative overflow-hidden">
      <img
        src={experienceImg}
        alt="Dîner sous les étoiles dans le jardin"
        loading="lazy"
        width={1600}
        height={1008}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-noir/78" />
      <div className="relative mx-auto max-w-[1500px] px-6 py-28 lg:px-12 lg:py-40">
        <Reveal>
          <p className="eyebrow">{t.experiences.eyebrow}</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-6 max-w-2xl font-serif text-[clamp(2.2rem,5vw,4.2rem)] leading-[1.03] text-offwhite">
            {t.experiences.title}
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px border-t border-border">
          {t.experiences.items.map((e, i) => (
            <Reveal key={e.t} delay={0.06 * i}>
              <div className="group grid gap-4 border-b border-border py-10 md:grid-cols-[auto_1fr_1.2fr] md:items-baseline md:gap-12">
                <span className="font-serif text-lg text-cuivre">0{i + 1}</span>
                <h3 className="font-serif text-3xl text-offwhite transition-transform duration-500 group-hover:translate-x-2">
                  {e.t}
                </h3>
                <p className="font-sans text-sm leading-[1.9] text-pierre/65">{e.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const { t } = useLang();
  const [sent, setSent] = useState(false);

  return (
    <footer className="chaux grain px-6 pt-24 pb-12 lg:px-12">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="font-serif text-3xl tracking-[0.4em] text-copper">DAR ELIA</p>
            <p className="eyebrow mt-4">Marrakech — Palace</p>
            <div className="rule-copper my-8 max-w-xs" />
            <ul className="space-y-3 font-sans text-sm text-pierre/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cuivre" />
                {t.footer.address}
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-cuivre" />
                <a href={`tel:${t.footer.phone.replace(/\s/g, "")}`}>{t.footer.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-cuivre" />
                <a href={`mailto:${t.footer.email}`}>{t.footer.email}</a>
              </li>
            </ul>
            <a
              href="https://maps.google.com/?q=Palmeraie+Marrakech"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block font-sans text-[0.62rem] tracking-[0.24em] text-cuivre uppercase underline-offset-8 hover:underline"
            >
              Google Maps
            </a>
          </div>

          <div>
            <p className="eyebrow">{t.footer.newsletter}</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="mt-6"
            >
              {sent ? (
                <p className="font-serif text-xl text-cuivre">{t.footer.subscribed}</p>
              ) : (
                <>
                  <input
                    type="email"
                    required
                    placeholder={t.footer.placeholder}
                    className="w-full border-b border-border bg-transparent pb-3 font-sans text-sm text-pierre placeholder:text-pierre/35 outline-none focus:border-cuivre"
                  />
                  <button
                    type="submit"
                    className="btn-liquid mt-5 border border-cuivre/60 px-7 py-3 font-sans text-[0.64rem] tracking-[0.26em] text-cuivre uppercase transition-colors duration-500 hover:text-noir"
                  >
                    {t.footer.subscribe}
                  </button>
                </>
              )}
            </form>
            <p className="mt-5 font-sans text-[0.68rem] text-muted-foreground">
              {t.footer.newsletterNote}
            </p>
          </div>

          <ul className="space-y-4 font-sans text-[0.68rem] leading-relaxed tracking-[0.1em] text-pierre/55">
            {t.footer.rules.map((r) => (
              <li key={r} className="border-l border-cuivre/40 pl-4">
                {r}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 font-sans text-[0.62rem] tracking-[0.18em] text-pierre/40 uppercase sm:flex-row">
          <span>© 2026 Dar Elia — {t.footer.rights}</span>
          <span>Médina, Marrakech, Maroc</span>
        </div>
      </div>
    </footer>
  );
}

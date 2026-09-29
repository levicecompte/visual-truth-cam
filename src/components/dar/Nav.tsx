import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { Magnetic } from "./Magnetic";

export function Nav() {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { id: "jardin", label: t.nav.jardin },
    { id: "table", label: t.nav.table },
    { id: "rooftop", label: t.nav.rooftop },
    { id: "suites", label: t.nav.suites },
    { id: "spa", label: t.nav.spa },
    { id: "ateliers", label: t.nav.ateliers },
    { id: "experiences", label: t.nav.experiences },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.7, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-[90] transition-all duration-700 ${
          scrolled
            ? "glass-copper border-b border-cuivre/25 py-3"
            : "border-b border-transparent py-6"
        }`}
      >
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 lg:px-12">
          <a
            href="#hero"
            className={`font-serif tracking-[0.42em] transition-colors duration-500 ${
              scrolled ? "text-copper text-base" : "text-pierre text-lg"
            }`}
          >
            DAR ELIA
          </a>

          <nav className="hidden items-center gap-8 xl:flex">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className="group relative font-sans text-[0.72rem] tracking-[0.2em] text-pierre/70 uppercase transition-colors hover:text-pierre"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-cuivre transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1 font-sans text-[0.68rem] tracking-[0.18em]">
              {(["fr", "en"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-1.5 py-1 uppercase transition-colors ${
                    lang === l ? "text-cuivre" : "text-pierre/40 hover:text-pierre/80"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            <Magnetic className="hidden sm:inline-block">
              <a
                href="#reserver"
                className="btn-liquid border border-cuivre/60 px-6 py-2.5 font-sans text-[0.68rem] tracking-[0.26em] text-cuivre uppercase transition-colors duration-500 hover:text-noir"
              >
                {t.nav.book}
              </a>
            </Magnetic>

            <button
              onClick={() => setOpen(true)}
              className="text-pierre xl:hidden"
              aria-label="Menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="chaux grain fixed inset-0 z-[110] flex flex-col justify-center px-8"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-7 right-7 text-pierre"
              aria-label="Fermer"
            >
              <X className="h-6 w-6" />
            </button>
            <nav className="flex flex-col gap-5">
              {links.map((l, i) => (
                <motion.a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i }}
                  className="font-serif text-4xl text-pierre"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

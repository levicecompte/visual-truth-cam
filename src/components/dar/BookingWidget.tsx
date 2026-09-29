import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, ChevronDown, X } from "lucide-react";
import { useLang } from "@/lib/i18n";

export function BookingWidget() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  return (
    <div className="fixed right-4 bottom-4 z-[95] sm:right-6 sm:bottom-6" id="reserver">
      <AnimatePresence mode="wait">
        {open ? (
          <motion.form
            key="panel"
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="glass-copper w-[min(92vw,22rem)] p-6"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-2xl text-pierre">{t.booking.title}</h3>
              <button type="button" onClick={() => setOpen(false)} aria-label="Fermer">
                <X className="h-4 w-4 text-pierre/60" />
              </button>
            </div>
            <div className="rule-copper my-5" />

            {sent ? (
              <p className="py-6 font-serif text-lg text-cuivre">{t.booking.confirm}</p>
            ) : (
              <div className="space-y-4">
                <label className="block">
                  <span className="eyebrow">{t.booking.arrival}</span>
                  <input
                    type="date"
                    required
                    className="mt-2 w-full border-b border-border bg-transparent pb-2 font-sans text-sm text-pierre outline-none focus:border-cuivre"
                  />
                </label>
                <label className="block">
                  <span className="eyebrow">{t.booking.departure}</span>
                  <input
                    type="date"
                    required
                    className="mt-2 w-full border-b border-border bg-transparent pb-2 font-sans text-sm text-pierre outline-none focus:border-cuivre"
                  />
                </label>
                <label className="block">
                  <span className="eyebrow">{t.booking.guests}</span>
                  <div className="relative">
                    <select className="mt-2 w-full appearance-none border-b border-border bg-transparent pb-2 font-sans text-sm text-pierre outline-none focus:border-cuivre">
                      {[1, 2, 3, 4].map((n) => (
                        <option key={n} value={n} className="bg-noir">
                          {n}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-0 bottom-2.5 h-4 w-4 text-cuivre" />
                  </div>
                </label>
                <button
                  type="submit"
                  className="btn-liquid mt-2 w-full border border-cuivre/60 py-3 font-sans text-[0.68rem] tracking-[0.26em] text-cuivre uppercase transition-colors duration-500 hover:text-noir"
                >
                  {t.booking.submit}
                </button>
                <p className="font-sans text-[0.65rem] leading-relaxed text-muted-foreground">
                  {t.booking.note}
                </p>
              </div>
            )}
          </motion.form>
        ) : (
          <motion.button
            key="fab"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => setOpen(true)}
            className="glass-copper flex items-center gap-3 px-6 py-4 font-sans text-[0.68rem] tracking-[0.26em] text-cuivre uppercase"
          >
            <Calendar className="h-4 w-4" />
            {t.booking.title}
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

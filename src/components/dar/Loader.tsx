import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 2600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="chaux grain fixed inset-0 z-[200] flex flex-col items-center justify-center"
          exit={{ opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
        >
          <div className="relative overflow-hidden px-2">
            <motion.h1
              className="text-copper font-serif text-[clamp(2.2rem,8vw,4.6rem)] font-light tracking-[0.42em]"
              initial={{ y: "115%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            >
              DAR ELIA
            </motion.h1>
          </div>
          <motion.div
            className="mt-6 h-px origin-left bg-cuivre"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.9, delay: 0.3, ease: [0.65, 0, 0.35, 1] }}
            style={{ width: "min(70vw, 460px)" }}
          />
          <motion.p
            className="eyebrow mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
          >
            Marrakech
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

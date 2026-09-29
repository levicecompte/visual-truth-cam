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
          <svg
            viewBox="0 0 320 120"
            className="w-[min(70vw,420px)]"
            fill="none"
            aria-label="DAR ELIA"
          >
            <motion.path
              d="M12 88 V32 h26 c18 0 28 11 28 28 s-10 28-28 28 z M84 88 L108 32 L132 88 M94 72 h28 M150 88 V32 h24 c14 0 20 8 20 17 s-7 16-19 16 h-25 m22 0 l22 23"
              stroke="url(#copper)"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />
            <motion.path
              d="M228 88 V32 M228 32 h30 M228 58 h24 M228 88 h30 M272 88 V32 M286 32 V88 h26 M300 32 v0"
              stroke="url(#copper)"
              strokeWidth="1.6"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.8, delay: 0.35, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="copper" x1="0" y1="0" x2="320" y2="0">
                <stop stopColor="#8E5A3E" />
                <stop offset="0.5" stopColor="#D79A74" />
                <stop offset="1" stopColor="#8E5A3E" />
              </linearGradient>
            </defs>
          </svg>
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

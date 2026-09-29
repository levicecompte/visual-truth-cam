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
            viewBox="0 0 600 120"
            className="w-[min(78vw,520px)]"
            fill="none"
            aria-label="DAR ELIA"
          >
            <motion.text
              x="300"
              y="82"
              textAnchor="middle"
              fontFamily="'Cormorant Garamond', Georgia, serif"
              fontSize="78"
              fontWeight="300"
              letterSpacing="18"
              fill="none"
              stroke="url(#copper)"
              strokeWidth="0.9"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2.1, ease: "easeInOut" }}
            >
              DAR ELIA
            </motion.text>
            <defs>
              <linearGradient id="copper" x1="0" y1="0" x2="600" y2="0">
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

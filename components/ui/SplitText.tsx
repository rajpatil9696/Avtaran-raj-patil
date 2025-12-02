import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function SplitText({
  text,
  highlight,
}: {
  text: string;
  highlight?: string | string[];
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Split text into words
  const words = text.split(" ");

  return (
    <div ref={ref} className="flex flex-wrap justify-center gap-1">
      {words.map((word, wi) => {
        const isHighlight = Array.isArray(highlight)
          ? highlight.includes(word)
          : word === highlight;

        return (
          <span key={wi} className="inline-flex gap-0">
            {word.split("").map((char, li) => (
              <motion.span
                key={li}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: (wi * 10 + li) * 0.05, duration: 0.3 }}
                className={isHighlight ? "text-[#0f6089]" : "text-[#0f6089]"}
              >
                {char}
              </motion.span>
            ))}
            {/* Preserve space between words */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{
                delay: (wi * 10 + word.length) * 0.05,
                duration: 0.3,
              }}
              className="-ml-0.5"
            >
              {"\u00A0"}
            </motion.span>
          </span>
        );
      })}
    </div>
  );
}

export default SplitText;

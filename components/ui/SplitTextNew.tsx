import { motion } from "framer-motion";
// import { useRef } from "react";

function SplitText({
  text,
  highlight,
  isActive, // Add this prop
}: {
  text: string;
  highlight?: string | string[];
  isActive?: boolean; // Type definition
}) {
  const words = text.split(" ");

  return (
    <div className="flex flex-wrap justify-center gap-1">
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
                // Trigger animation based on isActive prop
                animate={
                  isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                // Delay starts after the 1.5s slide duration
                transition={{
                  delay: isActive ? 1.5 + (wi * 10 + li) * 0.05 : 0,
                  duration: 0.3,
                }}
                className={isHighlight ? "text-[#0f6089]" : "text-[#0f6089]"}
              >
                {char}
              </motion.span>
            ))}
          </span>
        );
      })}
    </div>
  );
}

export default SplitText;

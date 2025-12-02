import { motion, useInView } from "motion/react";
import { useRef } from "react";

function AnimatePara({
  text,
  className,
  highlightText,
  highlightClassName,
  highlightColor = "#0f6089",
  highlightTexts,
}: {
  text: string;
  className?: string;
  highlightText?: string;
  highlightClassName?: string;
  highlightColor?: string;
  highlightTexts?: Array<string | { text: string; color?: string; className?: string }>;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const renderWithHighlights = () => {
    // Multi-term highlighting takes precedence if provided
    if (highlightTexts && highlightTexts.length > 0) {
      const entries = highlightTexts.map((item) =>
        typeof item === "string"
          ? { text: item, color: highlightColor, className: highlightClassName }
          : { text: item.text, color: item.color ?? highlightColor, className: item.className ?? highlightClassName }
      );
      // Sort by length to prefer longer matches in alternation
      const sorted = [...entries].sort((a, b) => b.text.length - a.text.length);
      const alternation = sorted.map((e) => escapeRegExp(e.text)).join("|");
      if (!alternation) return text;
      const regex = new RegExp(`(${alternation})`, "g");
      const parts = text.split(regex);
      return parts.map((part, index) => {
        if (part === undefined || part === "") return part;
        const matched = sorted.find((e) => e.text === part);
        if (!matched) return <span key={`t-${index}`}>{part}</span>;
        return (
          <span
            key={`h-${index}`}
            className={`rounded px-1 text-white ${matched.className ?? ""}`}
            style={{ backgroundColor: matched.color }}
          >
            {part}
          </span>
        );
      });
    }
    // Single-term highlighting (backward compatible)
    if (!highlightText) return text;
    const parts = text.split(highlightText);
    return parts.map((part, index) => {
      if (index === parts.length - 1) {
        return <span key={`t-${index}`}>{part}</span>;
      }
      return (
        <span key={`c-${index}`}>
          {part}
          <span
            className={`rounded px-1 text-white ${highlightClassName ?? ""}`}
            style={{ color: highlightColor }}
          >
            {highlightText}
          </span>
        </span>
      );
    });
  };
  return (
    <motion.p
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 1, type: "tween", stiffness: 300,delay:0.1 }}
      className={`font-normal text-[12px] sm:text-[14px] md:text-[18px] lg:text-[20px] ${className} relative z-[2]`}
    >
      {renderWithHighlights()}
    </motion.p>
  );
}

export default AnimatePara;

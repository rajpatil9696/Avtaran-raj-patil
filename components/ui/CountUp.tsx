import { motion, useMotionValue, animate, useInView } from "motion/react";
import { useEffect, useState, useRef } from "react";

interface CountUpProps {
  from?: number;
  to?: number;
  duration?: number;
}

function CountUp({ from = 0, to = 100, duration = 2 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const count = useMotionValue(from);
  const [display, setDisplay] = useState(from);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, to, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(Math.floor(latest)),
    });
    return () => controls.stop?.();
  }, [from, to, duration, isInView]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

export default CountUp;

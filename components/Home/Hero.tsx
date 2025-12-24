import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Hero1 from "./Hero1";
import Hero2 from "./Hero2";
import Hero3 from "./Hero3";

const components = [
  Hero1,
  Hero2,
  Hero3,
  Hero1,
  Hero2,
  Hero3,
  Hero1,
  Hero2,
  Hero3,
  Hero1,
  Hero2,
  Hero3,
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % components.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // const CurrentHero = components[index]

  return (
    <div className="relative w-full overflow-hidden min-h-[60vh]">
      <div className="w-full h-fit opacity-0 z-[-1] relative">
        <Hero1 isActive={true} />
      </div>
      <div className="absolute inset-0 w-full h-full">
        {/* Previous slides stay rendered (stacked below) */}
        {components.map((Comp, i) => {
          // This is a simple boolean variable
          const isActive = i === index;

          return (
            <motion.div
              key={i}
              initial={{ x: "100%" }}
              animate={{ x: i === index ? 0 : i < index ? 0 : "100%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{ zIndex: i === index ? 20 : 10 }}
              className="absolute inset-0 w-full h-full"
            >
              <Comp isActive={isActive} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

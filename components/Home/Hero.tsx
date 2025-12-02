import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Hero1 from "./Hero1";
import Hero2 from "./Hero2";
import Hero3 from "./Hero3";

const components = [Hero1, Hero2, Hero3];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % components.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // const CurrentHero = components[index]

  return (
    <div className="relative w-full overflow-hidden min-h-[60vh]">
      <div className="w-full h-fit opacity-0 z-[-1] relative">
        <Hero1 />
      </div>
      <div className="absolute inset-0 w-full h-full">
        {/* Previous slides stay rendered (stacked below) */}
        {components.map((Comp, i) => (
          <div
            key={i}
            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${i === index ? "z-20" : "z-10"
              }`}
          >
            {i === index ? (
              <motion.div
                key={`hero-${i}`}
                initial={{ x: "100%", opacity: 1 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full"
              >
                <Comp />
              </motion.div>
            ) : (
              <div className="absolute inset-0 w-full h-full">
                <Comp />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

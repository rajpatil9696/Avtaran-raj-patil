import { motion } from "motion/react";
import { cubicBezier } from "motion";
import Hero from "../../components/Tax/Hero";
import NumberCard from "../../components/common/NumberCard";
import { TaxCard } from "../../components/Tax/helper/constant";
import Work from "../../components/Home/Work";
import TaxSvg from "../constant/TaxSvg";

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

const pageTransition = {
  duration: 0.6,
  ease: cubicBezier(0.42, 0, 0.58, 1),
};

function Tax() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      //   onAnimationComplete={() => setStartAnimation(true)}
      className="w-full min-h-screen h-fit relative"
    >
      <Hero />
      <section className="max-w-[1400px] mx-auto px-[2vw] mb-[10vh] flex flex-col justify-center items-center">
        {TaxCard.map((card) => (
          <NumberCard
            imgSrc="/taxMoney.png"
            SVG={<TaxSvg />}
            no={card.no}
            key={card.no}
            heading={card.heading}
            para={
              [card.para1, card.para2, card.para3].filter(Boolean) as string[]
            }
          />
        ))}
      </section>
      <Work />
    </motion.div>
  );
}

export default Tax;

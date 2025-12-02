import { motion } from "motion/react";
import { cubicBezier } from "motion";
import Hero from "../../components/FOM/Hero"
import NumberCard from "../../components/common/NumberCard"
import { FOMCard } from "../../components/FOM/helper/constant"
import Work from "../../components/Home/Work";
import FomSvg from "../constant/FomSvg";

const pageVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
};

const pageTransition = {
    duration: 0.6,
    ease: cubicBezier(0.42, 0, 0.58, 1),
};

function FOM() {
    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
            //   onAnimationComplete={() => setStartAnimation(true)}
            className="w-full min-h-screen h-fit relative">
            <Hero />
            <section className="max-w-[1400px] mx-auto px-[2vw] mb-[10vh] flex flex-col justify-center items-center">
                {FOMCard.map((card) => (
                    <NumberCard
                        SVG={<FomSvg />}
                        imgSrc="/fomImage.png"
                        no={card.no}
                        key={card.no}
                        heading={card.heading}
                    />
                ))}
            </section>
            <Work />
        </motion.div>
    )
}

export default FOM
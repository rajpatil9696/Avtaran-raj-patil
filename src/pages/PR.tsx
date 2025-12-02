import { motion } from "motion/react";
import { cubicBezier } from "motion";
import Hero from "../../components/PR/Hero"
import NumberCard from "../../components/common/NumberCard"
import { PRCard } from "../../components/PR/helper/constant"
import Work from "../../components/Home/Work";
import PrSvg from "../constant/PrSvg";

const pageVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
};

const pageTransition = {
    duration: 0.6,
    ease: cubicBezier(0.42, 0, 0.58, 1),
};

function PR() {
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
            <p className="text-center px-[5vw] max-w-[1400px] mx-auto">You can become a <span className="text-[#0F6089]">citizen</span> of that country by establishing permanent residence there; <br /> nevertheless, citizenship requires meeting specific qualifying standards.
            </p>
            <p className="text-[#0F6089] text-center px-[5vw] max-w-[1400px] mx-auto">Connect with us and we can help you with end-to-end PR services for countries like:</p>
            <section className="max-w-[1400px] mx-auto px-[2vw] mb-[10vh] flex flex-col justify-center items-center">
                {PRCard.map((card) => (
                    <NumberCard
                        SVG={<PrSvg />}
                        imgSrc="/prImage.png"
                        no={card.no}
                        key={card.no}
                        heading={card.heading}
                        plainUlLIst={[card.plainUl1, card.plainUl2, card.plainUl3, card.plainUl4, card.plainUl5, card.plainUl6, card.plainUl7, card.plainUl8, card.plainUl9].filter(Boolean) as string[]}
                    />
                ))}
            </section>
            <Work />
        </motion.div>
    )
}

export default PR
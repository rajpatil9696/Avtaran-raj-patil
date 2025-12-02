import { motion } from "motion/react";
import { cubicBezier } from "motion";
import Hero from "../../components/Business/Hero"
import NumberCard from "../../components/common/NumberCard"
import { BusinessCard } from "../../components/Business/helper/constant"
import Work from "../../components/Home/Work";
import SetUpSvg from "../constant/SetUpSvg";

const pageVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
};

const pageTransition = {
    duration: 0.6,
    ease: cubicBezier(0.42, 0, 0.58, 1),
};

function Business() {
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
                {BusinessCard.map((card) => (
                    <NumberCard
                        SVG={<SetUpSvg />}
                        imgSrc="/setUpImage.png"
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

export default Business
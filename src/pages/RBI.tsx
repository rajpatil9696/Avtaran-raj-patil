import { motion } from "motion/react";
import { cubicBezier } from "motion";
import Hero from "../../components/RBI/Hero"
import NumberCard from "../../components/common/NumberCard"
import { RBICard } from "../../components/RBI/helper/constant"
import Work from "../../components/Home/Work";
import RbiSvg from "../constant/RbiSvg";

const pageVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
};

const pageTransition = {
    duration: 0.6,
    ease: cubicBezier(0.42, 0, 0.58, 1),
};

function RBI() {
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
                {RBICard.map((card) => (
                    <NumberCard
                        SVG={<RbiSvg />}
                        imgSrc="/rbiMoney.png"
                        no={card.no}
                        key={card.no}
                        heading={card.heading}
                        para={[card.para1, card.para2, card.para3].filter(Boolean) as string[]}
                        bluePara={card.bluePara}
                        ulLIst={[card.ul1, card.ul2].filter(Boolean) as string[]}
                    />
                ))}
            </section>
            <Work />
        </motion.div>
    )
}

export default RBI
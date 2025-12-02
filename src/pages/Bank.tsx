import { motion } from "motion/react";
import { cubicBezier } from "motion";
import Hero from "../../components/Bank/Hero"
import NumberCard from "../../components/common/NumberCard"
import { BankCard } from "../../components/Bank/helper/constant"
import Work from "../../components/Home/Work";
import BankSvg from "../constant/BankSvg";

const pageVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
};

const pageTransition = {
    duration: 0.6,
    ease: cubicBezier(0.42, 0, 0.58, 1),
};

function Bank() {
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
                {BankCard.map((card) => (
                    <NumberCard
                        SVG={<BankSvg />}
                        imgSrc="/bankImage.png"
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

export default Bank
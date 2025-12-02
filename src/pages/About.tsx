import { motion } from "motion/react";
import { cubicBezier } from "motion";
import Story from "../../components/Home/Story";
import Choose from "../../components/Home/Choose";
import Boxes from "../../components/Home/Boxes";
import SplitText from "../../components/ui/SplitText";
import AnimatePara from "../../components/ui/AnimatePara";
import Team from "../../components/Home/Team";
import Work from "../../components/Home/Work";

const pageVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };
  
  const pageTransition = {
    duration: 0.6,
    ease: cubicBezier(0.42, 0, 0.58, 1),
  };

function About() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
    //   onAnimationComplete={() => setStartAnimation(true)}
     className="w-full min-h-screen h-fit relative mt-6">
        <h2 className="text-[24px] leading-[130%] tracking-[-1]  md:text-[36px] lg:text-[40px] font-semibold">
      <SplitText text="About US" highlight="US" />
      </h2>
      <AnimatePara
        text='Your Trusted Partner for Global Expansion and Compliance'
        highlightTexts={["Trusted", "Partner", "Global Expansion", "Compliance"]}
        className=" mb-10 text-center w-full"
      />
        <Story noHeading={true} />
      <Choose />
      <Boxes />
      <Team />
      <Work />
     </motion.div>
  )
}

export default About
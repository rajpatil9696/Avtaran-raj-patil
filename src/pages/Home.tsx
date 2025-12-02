
import Hero from "../../components/Home/Hero";
import Story from "../../components/Home/Story";
import Globe from "../../components/Home/Globe";
import People from "../../components/Home/People";
import Consult from "../../components/Home/Consult";
import Choose from "../../components/Home/Choose";
import Work from "../../components/Home/Work";
import Boxes from "../../components/Home/Boxes";
import Services from "../../components/Home/Services";
import Brands from "../../components/Home/Brands";
import Conversation from "../../components/Home/Conversation";
import Team from "../../components/Home/Team";
import { motion } from "motion/react";
import { cubicBezier } from "motion";

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

const pageTransition = {
  duration: 0.6,
  ease: cubicBezier(0.42, 0, 0.58, 1),
};


function Home() {

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
      <Story />
      <Choose />
      <Boxes />
      <Services />
      <Brands />
      <Team />
      <Globe />
      <People />
      <Consult />
      <Conversation />
      <Work />
    </motion.div>
  )
}

export default Home
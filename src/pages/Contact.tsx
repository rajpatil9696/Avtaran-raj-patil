import { motion } from "motion/react";
import Conversation from "../../components/Home/Conversation";
import { cubicBezier } from "motion";
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

function Contact() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
    //   onAnimationComplete={() => setStartAnimation(true)}
     className="w-full min-h-screen h-fit relative">
        <Conversation />
      <Work />
     </motion.div>
  )
}

export default Contact
import { motion, AnimatePresence } from "motion/react";

const variants = {
  rest: {
    scale: 1,
    translateY: 0,
    backgroundColor: "transparent",
    boxShadow: "none",
    borderRadius: 999,
    padding: "4px 10px",
    opacity: 0,
    y: 20,
  },
  animate: {
    scale: 1,
    translateY: 0,
    backgroundColor: "transparent",
    boxShadow: "none",
    borderRadius: 999,
    padding: "4px 10px",
    opacity: 1,
    y: 0,
  },
  hover: {
    scale: 1.2,
    translateY: -5,
    color: "#0F6089",
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    boxShadow: `
      inset 0 4px 25px 3px rgba(0, 104, 255, 0.08),
      0 8px 25px rgba(0, 104, 255, 0.2)
    `,
    borderRadius: 999,
    padding: "4px 10px",
    // 👇 add glass blur here
    backdropFilter: "blur(10px) saturate(180%)",
    WebkitBackdropFilter: "blur(10px) saturate(180%)",
    border: "1px solid rgba(255, 255, 255, 0.25)",
  } as const,
};

export default function SideMenu({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 🪞 Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, backdropFilter: "blur(18px)" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 h-screen bg-[rgba(0,0,0,0.2)] z-[50]"
          />

          {/* 📜 Sliding Menu */}
          <motion.section
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.8, 0.25, 1],
            }}
            className="fixed top-0 right-0 w-full max-w-[450px] bg-white shadow-xl h-screen z-[55] flex flex-col justify-evenly items-center"
          >
            {[
              "Home",
              "About",
              "Services",
              "Start-ups",
              "Virtual Services",
              "Knowledge Center",
              "Career",
              "Contact",
            ].map((item) => (
              <motion.li
                key={item}
                exit={{ opacity: 0, y: 10 }}
                variants={variants}
                initial="rest"
                whileHover="hover"
                animate="animate"
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="list-none cursor-pointer text-lg font-medium tracking-wide"
              >
                {item}
              </motion.li>
            ))}
          </motion.section>
        </>
      )}
    </AnimatePresence>
  );
}

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

// --- Configuration ---
const MENU_ITEMS = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  {
    title: "Services",
    options: [
      { title: "Foreign Exchange RBI", href: "/rbi" },
      { title: "Corporate Advisory", href: "/advisory" },
      { title: "Investment Banking", href: "/bank" },
      { title: "Citizenship/ PR", href: "/citizenship-pr" },
      { title: "Family Office Management", href: "/family-office-management" },
      { title: "Business set-up Services", href: "/business" },
    ],
  },
  { title: "Start-ups", href: "/startups", options: [] },
  {
    title: "Virtual Services",
    options: [
      { title: "Virtual CFO", href: "/virtual-cfo" }
    ],
  },
  { title: "Knowledge Center", href: "/knowledge" },
  { title: "Career", href: "/career" },
  { title: "Contact", href: "/contact" },
];

// --- Animation Variants ---
const itemVariants = {
  rest: {
    scale: 1,
    backgroundColor: "rgba(255, 255, 255, 0)",
    boxShadow: "none",
    padding: "8px 20px",
    borderRadius: 999,
  },
  hover: {
    scale: 1.05,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    color: "#0F6089",
    boxShadow: `
      inset 0 4px 25px 3px rgba(0, 104, 255, 0.08),
      0 8px 25px rgba(0, 104, 255, 0.2)
    `,
    backdropFilter: "blur(10px) saturate(180%)",
    WebkitBackdropFilter: "blur(10px) saturate(180%)",
    border: "1px solid rgba(255, 255, 255, 0.25)",
  },
};

// --- Reusable Item Component ---
function MenuItem({ item }: { item: any }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasOptions = item.options && item.options.length > 0;

  return (
    <div className="w-full max-w-[300px] flex flex-col items-center">
      <motion.div
        variants={itemVariants}
        initial="rest"
        whileHover="hover"
        animate="rest" // Reset to rest when not hovering
        onClick={() => hasOptions && setIsExpanded(!isExpanded)}
        className="cursor-pointer w-full flex items-center justify-between text-lg font-medium tracking-wide text-gray-800 transition-colors"
      >
        <a href={item.href} className="w-full text-center relative z-10">
          {item.title}
        </a>

        {/* Dropdown Icon */}
        {hasOptions && (
          <motion.span
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="absolute right-4"
          >
            <ChevronDown size={20} className="opacity-60" />
          </motion.span>
        )}
      </motion.div>

      {/* Expandable Content */}
      <AnimatePresence>
        {isExpanded && hasOptions && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden w-full flex flex-col items-center"
          >
            <div className="pt-2 pb-4 flex flex-col gap-3 w-full items-center">
              {item.options.map((option: any, i: number) => (
                <motion.a
                  key={i}
                  href={option.href}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-gray-600 hover:text-[#0F6089] text-base hover:underline underline-offset-4"
                >
                  {option.title}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// --- Main SideMenu Component ---
export default function SideMenu({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  // 🔒 Prevent background scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 🪞 Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, backdropFilter: "blur(4px)" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/20 z-[50]"
          />

          {/* 📜 Sliding Menu */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 w-full max-w-[450px] h-[100dvh] bg-white shadow-2xl z-[55] flex flex-col overflow-y-auto"
          >
            {/* Scrollable Container */}
            <div className="flex flex-col items-center gap-6 py-20 min-h-full">
              {MENU_ITEMS.map((item, index) => (
                <MenuItem key={index} item={item} />
              ))}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

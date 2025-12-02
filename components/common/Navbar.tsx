import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import MenuToClose from "../ui/MenuToClose";
import SideMenu from "./SIdeMenu";
import { useNavigate } from "react-router-dom";
import PrSvg from "../../src/constant/PrSvg";
import TaxSvg from "../../src/constant/TaxSvg";
import RbiSvg from "../../src/constant/RbiSvg";
import AdvisorySvg from "../../src/constant/AdvisorySvg";
import BankSvg from "../../src/constant/BankSvg";
import FomSvg from "../../src/constant/FomSvg";
import SetUpSvg from "../../src/constant/SetUpSvg";

const variants = {
  rest: {
    scale: 1,
    translateY: 0,
    backgroundColor: "transparent",
    boxShadow: "none",
    borderRadius: 999,
    padding: "4px 10px",
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

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const [serviceDrop, setServiceDrop] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "none";
    }
  }, [isOpen]);
  return (
    <nav className="w-full px-[2vw] pt-[20px] fixed top-0 z-50 h-[100px]">
      <div className=" px-[10px] flex justify-between items-center shadow-md navbar h-full relative z-50">
        <img
          src="/logo.png"
          alt="Logo"
          className="max-h-[60%] w-auto max-w-[80%] pl-1"
        />
        <AnimatePresence mode="wait">
          {search ? (
            <motion.div
              key="search-bar"
              initial={{ scaleX: 0, originX: 1 }} // collapsed at right edge
              animate={{ scaleX: 1, originX: 1 }} // expand from right
              exit={{ scaleX: 0, originX: 1 }} // collapse back into right
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full flex h-full items-center relative px-[20px]"
            >
              <div className="rounded-full h-[60%] p-[2px] bg-gradient-to-b w-full from-white to-[#9BC4FF]">
                <input
                  type="text"
                  placeholder="Type Here ..."
                  className="w-full h-full shadow-inner shadow-[0_4px_25px_3px_rgba(0, 104, 255, 0.08)]  pl-4 rounded-full outline-none border-none bg-white placeholder-[#646464]"
                />
              </div>
              <svg
                className="absolute scale-70 opacity-70 cursor-pointer right-6"
                width="40"
                height="40"
                onClick={() => setSearch(false)}
                viewBox="0 0 40 40"
              >
                <path
                  d="M 10,10 L 30,30 M 30,10 L 10,30"
                  stroke="#0F6089"
                  stroke-width="3"
                />
              </svg>
            </motion.div>
          ) : (
            <div className="flex justify-evenly font-medium text-[14px] items-center w-full text-[#4d4d4d]">
              <motion.a
                href="/"
                variants={variants}
                initial="rest"
                whileHover="hover"
                animate="rest"
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="list-none link1"
              >
                Home
              </motion.a>
              <motion.a
                href="/about"
                variants={variants}
                initial="rest"
                whileHover="hover"
                animate="rest"
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="list-none link2 items-center"
              >
                About{" "}
                <img
                  src="/dropdown.png"
                  alt=">"
                  className="max-w-full w-[18px] max-h-full"
                />
              </motion.a>
              <motion.li
                variants={variants}
                initial="rest"
                whileHover="hover"
                animate="rest"
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="list-none link3 relative"
              >
                Services{" "}
                <img
                  onClick={() => setServiceDrop((prev) => !prev)}
                  src="/dropdown.png"
                  alt=">"
                  className={`max-w-full w-[18px] max-h-full ${
                    serviceDrop ? "rotate-180" : "rotate-0"
                  } transition-all duration-300`}
                />
                {serviceDrop && (
                  <div className="top-[40px] bg-white gap-3 absolute left-1/2 -translate-x-1/2 dropdown z-50 rounded-2xl w-fit h-fit whitespace-nowrap py-4 px-2 flex flex-col">
                    <a
                      href="/tax"
                      className="text-[#4d4d4d] hover:text-[#0F6089] hover:bg-[#0068FF14] p-0.5 rounded-md pl-1 hover:scale-105 transition-all duration-300 flex items-center gap-1"
                    >
                      <TaxSvg height="30" />
                      Taxation
                    </a>
                    <a
                      href="/gst"
                      className="text-[#4d4d4d] hover:text-[#0F6089] hover:bg-[#0068FF14] p-0.5 rounded-md pl-1 hover:scale-105 transition-all duration-300 flex items-center gap-1"
                    >
                      <TaxSvg height="30" />
                      Goods & Service Tax(GST)
                    </a>
                    <a
                      href="/rbi"
                      className="text-[#4d4d4d] hover:text-[#0F6089] hover:bg-[#0068FF14] p-0.5 rounded-md pl-1 hover:scale-105 transition-all duration-300 flex items-center gap-1"
                    >
                      <RbiSvg height="30" />
                      Foreign Exchange RBI
                    </a>
                    <a
                      href="/advisory"
                      className="text-[#4d4d4d] hover:text-[#0F6089] hover:bg-[#0068FF14] p-0.5 rounded-md pl-1 hover:scale-105 transition-all duration-300 flex items-center gap-1"
                    >
                      <AdvisorySvg height="30" />
                      Corporate Advisory
                    </a>
                    <a
                      href="/bank"
                      className="text-[#4d4d4d] hover:text-[#0F6089] hover:bg-[#0068FF14] p-0.5 rounded-md pl-1 hover:scale-105 transition-all duration-300 flex items-center gap-1"
                    >
                      <BankSvg height="30" />
                      Investment Banking
                    </a>
                    <a
                      href="/citizenship-pr"
                      className="text-[#4d4d4d] hover:text-[#0F6089] hover:bg-[#0068FF14] p-0.5 rounded-md pl-1 hover:scale-105 transition-all duration-300 flex items-center gap-1"
                    >
                      <PrSvg height="30" />
                      Citizenship/ PR
                    </a>
                    <a
                      href="/family-office-management"
                      className="text-[#4d4d4d] hover:text-[#0F6089] hover:bg-[#0068FF14] p-0.5 rounded-md pl-1 hover:scale-105 transition-all duration-300 flex items-center gap-1"
                    >
                      <FomSvg height="30" />
                      Family Office Management
                    </a>
                    <a
                      href="/business"
                      className="text-[#4d4d4d] hover:text-[#0F6089] hover:bg-[#0068FF14] p-0.5 rounded-md pl-1 hover:scale-105 transition-all duration-300 flex items-center gap-1"
                    >
                      <SetUpSvg height="30" />
                      Business set-up Services
                    </a>
                  </div>
                )}
              </motion.li>
              <motion.li
                variants={variants}
                initial="rest"
                whileHover="hover"
                animate="rest"
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="list-none link4"
              >
                Start-ups{" "}
                <img
                  src="/dropdown.png"
                  alt=">"
                  className="max-w-full w-[18px] max-h-full"
                />
              </motion.li>
              <motion.li
                variants={variants}
                initial="rest"
                whileHover="hover"
                animate="rest"
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="list-none link5"
              >
                Virtual Services{" "}
                <img
                  src="/dropdown.png"
                  alt=">"
                  className="max-w-full w-[18px] max-h-full"
                />
              </motion.li>
              <motion.li
                variants={variants}
                initial="rest"
                whileHover="hover"
                animate="rest"
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="list-none link6"
              >
                Knowledge Center
              </motion.li>
              <motion.a
                href="/career"
                variants={variants}
                initial="rest"
                whileHover="hover"
                animate="rest"
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="list-none link7"
              >
                Career
              </motion.a>
              <motion.a
                href="/contact"
                variants={variants}
                initial="rest"
                whileHover="hover"
                animate="rest"
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="list-none link8 cursor-pointer"
              >
                Contact
              </motion.a>
            </div>
          )}
        </AnimatePresence>
        <div className="flex items-center gap-2 justify-center">
          <svg
            onClick={() => setSearch(true)}
            width="24"
            height="24"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="max-h-[70%] aspect-square cursor-pointer hidden md:block"
          >
            <path
              opacity="0.2"
              d="M24 14C24 15.9778 23.4135 17.9112 22.3147 19.5557C21.2159 21.2002 19.6541 22.4819 17.8268 23.2388C15.9996 23.9957 13.9889 24.377 12.0491 23.8079C10.1093 23.422 8.32746 22.4696 6.92894 21.0711C5.53041 19.6725 4.578 17.8907 4.19215 15.9509C3.8063 14.0111 4.00433 12.0004 4.76121 10.1732C5.51809 8.3459 6.79981 6.78412 8.4443 5.6853C10.0888 4.58649 12.0222 4 14 4C15.3132 4 16.6136 4.25866 17.8268 4.7612C19.0401 5.26375 20.1425 6.00035 21.0711 6.92893C21.9997 7.85752 22.7363 8.95991 23.2388 10.1732C23.7413 11.3864 24 12.6`68 24 14Z"
              fill="#0F6089"
            />
            <path
              d="M28.7075 27.2925L22.45 21.035C24.2672 18.8555 25.1742 16.0594 24.9823 13.2282C24.7904 10.397 23.5144 7.74878 21.4197 5.83448C19.3249 3.92017 16.5728 2.88715 13.7359 2.95033C10.8989 3.01351 8.19547 4.16801 6.18804 6.173667C4.18061 8.17932 3.02372 10.8817 2.95804 13.7186C2.89235 16.5555 3.92294 19.3086 5.83539 21.405C7.74785 23.5014 10.3949 24.7798 13.2259 24.9742C16.0569 25.1686 18.8539 24.2641 21.035 22.4487L27.2925 28.7075C27.3854 28.8004 27.4957 28.8741 27.6171 28.9244C27.7385 28.9747 27.8686 29.0006 28 29.0006C28.1314 29.0006 28.2615 28.9747 28.3829 28.9244C28.5043 28.8741 28.6146 28.8004 28.7075 28.7075C28.8004 28.6146 28.8741 28.5043 28.9244 28.3829C28.9747 28.2615 29.0006 28.1314 29.0006 28C29.0006 27.8686 28.9747 27.7385 28.9244 27.6171C28.8741 27.4957 28.8004 27.3854 28.7075 27.2925ZM5 14C5 12.22 5.52784 10.4799 6.51677 8.99987C7.5057 7.51982 8.91131 6.36627 10.5558 5.68508C12.2004 5.0039 14.01 4.82567 15.7558 5.17293C17.5016 5.5202 19.1053 6.37737 20.364 7.63604C21.6226 8.89471 22.4798 10.4984 22.8271 12.2442C23.1743 13.99 22.9961 15.7996 22.3149 17.4442C21.6337 19.0887 20.4802 20.4943 19.0001 21.4832C17.5201 22.4722 15.78 23 14 23C11.6139 22.9974 9.32621 22.0483 7.63896 20.361C5.95171 18.6738 5.00264 16.3861 5 14Z"
              fill="#0F6089"
            />
          </svg>
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="h-[40px] w-[40px] max-w-[60%] flex items-center justify-center md:hidden relative z-[60]"
          >
            <MenuToClose />
          </button>
          <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} />
          <button
            onClick={() => navigate("/contact")}
            className="hidden md:flex h-[70%] px-3 py-2 rounded-full max-w-[134px] group bg-[#262626] text-white font-semibold text-[16px] hover:shadow-[0_4px_32px_0_rgba(15,96,137,0.5)] duration-300 transition items-center gap-1 shadow-md"
          >
            Contact
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="group-hover:rotate-45 transition duration-300"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.5 3H4.5C4.10218 3 3.72064 3.15804 3.43934 3.43934C3.15804 3.72064 3 4.10218 3 4.5V19.5C3 19.8978 3.15804 20.2794 3.43934 20.5607C3.72064 20.842 4.10218 21 4.5 21H19.5C19.8978 21 20.2794 20.842 20.5607 20.5607C20.842 20.2794 21 19.8978 21 19.5V4.5C21 4.10218 20.842 3.72064 20.5607 3.43934C20.2794 3.15804 19.8978 3 19.5 3ZM15.75 13.5C15.75 13.6989 15.671 13.8897 15.5303 14.0303C15.3897 14.171 15.1989 14.25 15 14.25C14.8011 14.25 14.6103 14.171 14.4697 14.0303C14.329 13.8897 14.25 13.6989 14.25 13.5V10.8103L9.53063 15.5306C9.46094 15.6003 9.37822 15.6556 9.28717 15.6933C9.19613 15.731 9.09855 15.7504 9 15.7504C8.90145 15.7504 8.80387 15.731 8.71283 15.6933C8.62178 15.6556 8.53906 15.6003 8.46937 15.5306C8.39969 15.4609 8.34442 15.3782 8.3067 15.2872C8.26899 15.1961 8.24958 15.0985 8.24958 15C8.24958 14.9015 8.26899 14.8039 8.3067 14.7128C8.34442 14.6218 8.39969 14.5391 8.46937 14.4694L13.1897 9.75H10.5C10.3011 9.75 10.1103 9.67098 9.96967 9.53033C9.82902 9.38968 9.75 9.19891 9.75 9C9.75 8.80109 9.82902 8.61032 9.96967 8.46967C10.1103 8.32902 10.3011 8.25 10.5 8.25H15C15.1989 8.25 15.3897 8.32902 15.5303 8.46967C15.671 8.61032 15.75 8.80109 15.75 9V13.5Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

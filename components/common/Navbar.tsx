import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import MenuToClose from "../ui/MenuToClose";
import SideMenu from "./SIdeMenu";
import { useNavigate } from "react-router-dom";
import PrSvg from "../../src/constant/PrSvg";
// import TaxSvg from "../../src/constant/TaxSvg";
import RbiSvg from "../../src/constant/RbiSvg";
import AdvisorySvg from "../../src/constant/AdvisorySvg";
import BankSvg from "../../src/constant/BankSvg";
import FomSvg from "../../src/constant/FomSvg";
import SetUpSvg from "../../src/constant/SetUpSvg";
import VirtualCfoSvg from '../../src/constant/VirtualCfoSvg'

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
  // const [search, setSearch] = useState(false);
  const [serviceDrop, setServiceDrop] = useState(false);
  const navigate = useNavigate();
  const[virtualServiceDrop,setvirtualServiceDrop]=useState(false);

  return (
    <nav className="w-full px-[2vw] pt-[20px] fixed top-0 z-50 h-[100px] bg-[#f8f8f8]">
      <div className=" px-[10px]  flex justify-between items-center h-full relative z-50">
        <img
          src="/logo.png"
          alt="Logo"
          className="max-h-[60%] w-auto max-w-[80%] pl-1"
        />
        <AnimatePresence mode="wait">
          <div className="hidden lg:flex justify-evenly font-medium text-[14px] items-center w-full text-[#4d4d4d]">
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
              {/* <img
                  src="/dropdown.png"
                  alt=">"
                  className="max-w-full w-[18px] max-h-full"
                /> */}
            </motion.a>
            <motion.li
              variants={variants}
              initial="rest"
              whileHover="hover"
              animate="rest"
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="list-none link3 relative cursor-pointer"
              onClick={() => setServiceDrop((prev) => !prev)}
            >
              Services{" "}
              <img
                src="/dropdown.png"
                alt=">"
                className={`max-w-full w-[18px] max-h-full ${
                  serviceDrop ? "rotate-180" : "rotate-0"
                } transition-all duration-300`}
              />
              {serviceDrop && (
                <div className="top-[40px] bg-white gap-3 absolute left-1/2 -translate-x-1/2 dropdown z-50 rounded-2xl w-fit h-fit whitespace-nowrap py-4 px-2 flex flex-col">
                  {/* <a
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
                    </a> */}
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
              onClick={() => setvirtualServiceDrop((prev) => !prev)}
            >
              Virtual Services{" "}
              <img
                src="/dropdown.png"
                alt=">"
                className={`max-w-full w-[18px] max-h-full ${
                  virtualServiceDrop ? "rotate-180" : "rotate-0"
                } transition-all duration-300`}
              />
              {virtualServiceDrop && (
                <div
                  className="
                             absolute top-[40px] left-1/2 -translate-x-1/2
                           bg-white z-50
                             rounded-2xl
                             w-fit h-fit
                             whitespace-nowrap
                             py-4 px-3
                            flex flex-col gap-3
                            shadow-lg
                                       "
                >
                  <a href="/virtual-cfo" className="text-[#4d4d4d] hover:text-[#0F6089] hover:bg-[#0068FF14] p-0.5 rounded-md pl-1 hover:scale-105 transition-all duration-300 flex items-center gap-1">
                    <VirtualCfoSvg height="30" width="30" />
                    Virtual CFO 
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
          </div>
        </AnimatePresence>
        <div className="flex items-center gap-2 justify-center">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="h-[40px] w-[40px] max-w-[60%] flex items-center justify-center lg:hidden relative z-[60]"
          >
            <MenuToClose />
          </button>
          <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} />
          <button
            onClick={() => navigate("/contact")}
            className="hidden lg:flex h-[70%] px-3 py-2 rounded-full max-w-[134px] group bg-[#0F6089] text-white font-semibold text-[16px] hover:shadow-[0_4px_32px_0_rgba(15,96,137,0.5)] duration-300 transition items-center gap-1 shadow-md cursor-pointer"
          >
            Contact
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              // className="group-hover:rotate-45 transition duration-300"
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

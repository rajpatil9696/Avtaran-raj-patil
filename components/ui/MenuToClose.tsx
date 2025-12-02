import { useRef, useState } from "react";
import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);

export default function MenuToClose() {
  const pathRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    gsap.to(pathRef.current, {
      duration: 0.5,
      morphSVG: open
        ? "M8.33334 28.3334H21.6667M8.33334 20.0001H31.6667M8.33334 11.6667H21.6667"
        : "M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18",
      ease: "power2.inOut",
    });
    setOpen(!open);
  };

  return (
    <svg
      onClick={handleToggle}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ cursor: "pointer" }}
    >
      <path
        ref={pathRef}
        d="M8.33334 28.3334H21.6667M8.33334 20.0001H31.6667M8.33334 11.6667H21.6667"
        stroke="#0F6089"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

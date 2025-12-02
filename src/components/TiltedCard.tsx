import type { SpringOptions } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import "./TiltedCard.css";
import { useNavigate } from "react-router-dom";

interface TiltedCardProps {
  imgSrc?: string;
  href?: string;
  captionText?: string;
  imageHeight?: React.CSSProperties["height"];
  imageWidth?: React.CSSProperties["width"];
  scaleOnHover?: number;
  rotateAmplitude?: number;
  showTooltip?: boolean;
  overlayContent?: React.ReactNode;
  className?: string
  innerClassName?: string
}

const springValues: SpringOptions = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

export default function TiltedCard({
  imgSrc,
  href,
  captionText = "",
  imageHeight = "100%",
  imageWidth = "100%",
  scaleOnHover = 1.1,
  rotateAmplitude = 14,
  showTooltip = true,
  overlayContent = null,
  className,
  innerClassName
}: TiltedCardProps) {
  const ref = useRef<HTMLElement>(null);
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0);
  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1,
  });

  const [lastY, setLastY] = useState<number>(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  function handleMouse(e: React.MouseEvent<HTMLElement>) {
    if (!ref.current || isMobile) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);

    const velocityY = offsetY - lastY;
    rotateFigcaption.set(-velocityY * 0.6);
    setLastY(offsetY);
  }

  function handleMouseEnter() {
    if (isMobile) return;
    scale.set(scaleOnHover);
    opacity.set(1);
  }

  function handleMouseLeave() {
    if (isMobile) return;
    opacity.set(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    rotateFigcaption.set(0);
  }

  return (
    <motion.figure
      onClick={() => { href && navigate(href) }}
      ref={ref}
      className={`tilted-card-figure ${href && 'cursor-pointer'} ${innerClassName}`}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className={`tilted-card-inner ${className}`}
        style={{
          width: imageWidth,
          height: imageHeight,
          rotateX: isMobile ? 0 : rotateX,
          rotateY: isMobile ? 0 : rotateY,
          scale: isMobile ? 1 : scale,
        }}
      >
        {imgSrc && <motion.img
          src={imgSrc}
          alt={"BG"}
          className="tilted-card-img"
        />}
        {overlayContent}
      </motion.div>

      {showTooltip && !isMobile && (
        <motion.figcaption
          className="tilted-card-caption"
          style={{
            x,
            y,
            opacity,
            rotate: rotateFigcaption,
          }}
        >
          {captionText}
        </motion.figcaption>
      )}
    </motion.figure>
  );
}

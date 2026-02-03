import { useRef } from "react";

// Configuration for partner logo rows
// Each row contains images that will scroll horizontally
// Add more images to any row by adding paths to the images array
const partnerRows = [
  {
    id: "row1",
    images: [
      "/partners/row1/1.png",
      "/partners/row1/2.png",
      "/partners/row1/3.png",
      "/partners/row1/4.png",
      "/partners/row1/5.png",
      "/partners/row1/6.png",
      "/partners/row1/7.png",
      "/partners/row1/8.png",
      "/partners/row1/9.png",
    ],
    direction: "left" as const,
  },
  {
    id: "row2",
    images: [
      "/partners/row2/10.png",
      "/partners/row2/11.png",
      "/partners/row2/12.png",
      "/partners/row2/13.png",
      "/partners/row2/14.png",
      "/partners/row2/15.png",
      "/partners/row2/16.png",
      "/partners/row2/17.png",
    ],
    direction: "right" as const,
  },
  {
    id: "row3",
    images: [
      "/partners/row3/18.png",
      "/partners/row3/19.png",
      "/partners/row3/20.png",
      "/partners/row3/21.png",
      "/partners/row3/22.png",
      "/partners/row3/23.png",
      "/partners/row3/24.png",
      "/partners/row3/25.png",
      "/partners/row3/26.png",
      "/partners/row3/27.png",
      "/partners/row3/28.png",
      "/partners/row3/29.png",
      "/partners/row3/30.png",
      "/partners/row3/31.png",
    ],
    direction: "left" as const,
  },
];

interface MarqueeRowProps {
  images: string[];
  direction: "left" | "right";
  rowId: string;
}

function MarqueeRow({ images, direction, rowId }: MarqueeRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (rowRef.current) {
      rowRef.current.style.animationPlayState = "paused";
    }
  };

  const handleMouseLeave = () => {
    if (rowRef.current) {
      rowRef.current.style.animationPlayState = "running";
    }
  };

  // Duplicate images for seamless infinite scroll
  const duplicatedImages = [...images, ...images];

  return (
    <div
      className="overflow-hidden w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={rowRef}
        className="flex w-fit whitespace-nowrap"
        style={{
          animation: `slide-${direction} 30s linear infinite`,
          transform:
            direction === "right" ? "translateX(-50%)" : "translateX(0%)",
        }}
      >
        {duplicatedImages.map((imagePath, idx) => (
          <div key={`${rowId}-${idx}`} className="flex-shrink-0">
            <img
              src={imagePath}
              alt={`Partner logos ${idx + 1}`}
              className="h-[60px]  sm:h-[70px] md:h-[80px] lg:h-[90px] w-auto object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function Partners() {
  return (
    <section className="w-full py-8 md:py-12 overflow-hidden">
      <div className="flex flex-col gap-2 md:gap-3">
        {partnerRows.map((row) => (
          <MarqueeRow
            key={row.id}
            images={row.images}
            direction={row.direction}
            rowId={row.id}
          />
        ))}
      </div>
    </section>
  );
}

export default Partners;

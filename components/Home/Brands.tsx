import AnimatePara from "../ui/AnimatePara";
import SplitText from "../ui/SplitText";

function Brands() {
  return (
    <section className="w-full min-h-[30vh] flex flex-col items-center h-fit gap-2 relative pb-[6vh] my-[5vh] px-4">
      <h2 className="text-[24px] leading-[130%] tracking-[-1] sm:text-[28px] md:text-[36px] lg:text-[40px] font-semibold text-center">
      <SplitText text="Brands we have worked with" highlight={["Brands","worked"]} />
      </h2>
      <AnimatePara text='Check a list of some global brand who have collaborated with us' />
      <div className="w-full flex flex-col gap-6 mt-[40px] md:mt-[60px]">
        {/* Carousel 1 */}
        <div className="overflow-hidden w-full">
          <div className="flex gap-3 md:gap-4 w-fit animate-slide-left whitespace-nowrap"
            style={{ transform: "translateX(0%)" }}>
            {Array.from({ length: 10 }).map((_, idx) => (
              <div
                key={`brand1-${idx}`}
                className="flex items-center w-fit gap-2 px-2 py-2 bg-white rounded-full shadow border min-w-[170px] md:min-w-[200px] lg:min-w-[220px] max-w-[190px] md:max-w-[230px] lg:max-w-[250px] overflow-hidden"
              >
                <img
                  src="/mock-img.png"
                  alt="Brand Logo"
                  className="w-7 h-7 md:w-8 md:h-8 rounded-full object-cover"
                />
                <span className="text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-medium w-fit truncate">
                  Mock Company name
                </span>
              </div>
            ))}
            {/* Duplicate for seamless infinite scroll */}
            {Array.from({ length: 10 }).map((_, idx) => (
              <div
                key={`brand1-dup-${idx}`}
                className="flex items-center gap-2 px-2 py-2 bg-white rounded-full shadow border min-w-[170px] md:min-w-[200px] lg:min-w-[220px] max-w-[170px] md:max-w-[200px] lg:max-w-[220px] overflow-hidden"
              >
                <img
                  src="/mock-img.png"
                  alt="Brand Logo"
                  className="w-7 h-7 md:w-8 md:h-8 rounded-full object-cover"
                />
                <span className="text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-medium truncate">
                  Mock Company name
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* Carousel 2 */}
        <div className="overflow-hidden w-full">
          <div className="flex gap-3 md:gap-4 animate-slide-right whitespace-nowrap w-fit"
            style={{ transform: "translateX(-50%)" }}>
            {Array.from({ length: 10 }).map((_, idx) => (
              <div
                key={`brand2-${idx}`}
                className="flex items-center gap-2 px-2 w-fit py-2 bg-white rounded-full shadow border min-w-[170px] md:min-w-[200px] lg:min-w-[220px] max-w-[170px] md:max-w-[200px] lg:max-w-[220px] overflow-hidden"
              >
                <img
                  src="/mock-img.png"
                  alt="Brand Logo"
                  className="w-7 h-7 md:w-8 md:h-8 rounded-full object-cover"
                />
                <span className="text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-medium truncate">
                  Mock Company name
                </span>
              </div>
            ))}
            {/* Duplicate for seamless infinite scroll */}
            {Array.from({ length: 10 }).map((_, idx) => (
              <div
                key={`brand2-dup-${idx}`}
                className="flex items-center gap-2 px-2 w-fit py-2 bg-white rounded-full shadow border min-w-[170px] md:min-w-[200px] lg:min-w-[220px] max-w-[170px] md:max-w-[200px] lg:max-w-[220px] overflow-hidden"
              >
                <img
                  src="/mock-img.png"
                  alt="Brand Logo"
                  className="w-7 h-7 md:w-8 md:h-8 rounded-full object-cover"
                />
                <span className="text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-medium truncate">
                  Mock Company name
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brands;

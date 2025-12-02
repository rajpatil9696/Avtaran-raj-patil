import AnimatePara from "../ui/AnimatePara";
import SplitText from "../ui/SplitText";

function Choose() {
  return (
    <section className="w-full min-h-[70vh] h-fit pb-[10vh] pt-[4vh] text-center flex flex-col gap-1.5 relative px-4">
      <img
        src="/grid.png"
        alt="grid"
        className="h-[90vh] max-w-full absolute top-[calc(50%+4vh)] left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <h2 className="text-[24px] leading-[130%] tracking-[-1]  md:text-[36px] lg:text-[40px] font-semibold">
        <SplitText text="Why choose Us" highlight={["choose", "Us"]} />
      </h2>
      <AnimatePara text='“Where Expertise Meets Excellence, Worldwide”' />
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6 md:gap-3 px-[4vw] md:px-[8vw] text-start h-fit">
        <div className="flex flex-col items-center justify-center relative w-full md:w-auto h-fit">
          <img
            src="/group.png"
            alt="hand"
            className="w-full max-w-[520px] md:max-w-[35vw] relative z-20"
          />
          <p className="text-[13px] sm:text-[14px] md:text-[16px] font-semibold md:translate-y-1/2 text-center md:text-left md:-mt-10">
            Our{" "}
            <span className="brandColor text-[17px] sm:text-[20px]">
              {" "}
              Experts
            </span>{" "}
            will take care of your{" "}
            <span className="brandColor text-[17px] sm:text-[20px]">
              {" "}
              Investments
            </span>{" "}
          </p>
        </div>
        <div className="flex flex-col gap-6 items-start justify-center mb-auto mt-[10px] md:mt-[30px] w-full md:w-auto">
          <div className="flex items-start gap-3 md:gap-4 max-w-[650px]">
            <img
              src="/mic.png"
              alt="logo"
              className="w-10 h-10 md:w-13 md:h-13 aspect-square"
            />
            <p className="font-normal text-[14px] md:text-[16px]">
              {" "}
              <span className="brandColor block text-[18px] md:text-[24px] font-semibold">
                Global Reach, Local Expertise
              </span>{" "}
              With{" "}
              <b>
                20+ strategic locations across India, Europe, North America,
              </b>{" "}
              and the Middle East, we bring you unparalleled market access
              combined with deep local regulatory knowledge. Our presence in{" "}
              <b>17 prime Indian cities</b> ensures we understand the nuances of
              doing business across diverse markets.
            </p>
          </div>
          <div className="flex items-start gap-3 md:gap-4 max-w-[650px]">
            <img
              src="/record.png"
              alt="logo"
              className="w-10 h-10 md:w-13 md:h-13 aspect-square"
            />
            <p className="font-normal text-[14px] md:text-[16px]">
              {" "}
              <span className="brandColor block text-[18px] md:text-[24px] font-semibold">
                Proven Track Record
              </span>
              Trusted by major international corporations from over{" "}
              <b>15 countries,</b> including leading companies from the{" "}
              <b>USA and Europe.</b> When global giants choose us to enter the
              Indian market, you know you're in capable hands.
            </p>
          </div>
          <div className="flex items-start gap-3 md:gap-4 max-w-[650px]">
            <img
              src="/cost.png"
              alt="logo"
              className="w-10 h-10 md:w-13 md:h-13 aspect-square"
            />
            <p className="font-normal text-[14px] md:text-[16px]">
              {" "}
              <span className="brandColor block text-[18px] md:text-[24px] font-semibold">
                Cost-Effective Excellence
              </span>{" "}
              Get <b>enterprise-level</b> services without enterprise-level
              costs. Our <b>umbrella approach</b> delivers maximum efficiency at
              optimal investment, giving you more <b>value</b> for every rupee
              spent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Choose;

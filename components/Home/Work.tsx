import AnimatePara from "../ui/AnimatePara";
import SplitText from "../ui/SplitText";
function Work() {
  return (
    <section className="relative max-w-[1200px] mx-auto px-4">
      <img
        src="/grid.png"
        alt="grid"
        className="h-[90vh] max-w-full absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <div className="flex flex-col gap-2 md:hidden  items-center justify-center">
        <div className="w-full md:w-[60%]">
          <h2 className="text-[24px] leading-[130%] tracking-[-1] sm:text-[28px] md:text-[36px] lg:text-[40px] font-semibold text-center">
            <SplitText text="Let's build your next" highlight="Friend's" />
            <SplitText text="move — together." highlight="Friend's" />
          </h2>
          <AnimatePara
            text={`Step into smarter finance`}
            className=" -mb-1 text-center"
          />
          <AnimatePara
            text={`with Avataran Captials`}
            className="text-center -mb-1 "
          />
        </div>

        <img src="/workus.jpg" className="w-[80%]  md:w-[40%]" alt="" />
      </div>
      <div className=" flex-col  md:flex gap-2 md:flex-row hidden items-center justify-center">
        <div className="w-full md:w-[60%]">
          <h2 className="text-[24px] leading-[130%] tracking-[-1] sm:text-[28px] md:text-[36px] lg:text-[40px] font-semibold text-center xl:text-nowrap">
            <SplitText
              text="Let's build your next move — together."
              highlight="Friend's"
            />
          </h2>
          <AnimatePara
            text={`Step into smarter finance with Avataran Captials`}
            className=" -mb-1 text-center"
          />
        </div>

        <img src="/workus.jpg" className="w-[80%] md:w-[40%]" alt="" />
      </div>
    </section>
  );
}

export default Work;

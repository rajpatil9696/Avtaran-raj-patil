import AnimatePara from "../ui/AnimatePara";
import SplitText from "../ui/SplitText";
import Partners from "./Partners";

function Brands() {
  return (
    <section className="w-full min-h-[30vh] flex flex-col items-center h-fit gap-2 relative pb-[6vh] my-[5vh] px-4">
      <h2 className="text-[24px] leading-[130%] tracking-[-1] sm:text-[28px] md:text-[36px] lg:text-[40px] font-semibold text-center">
        <SplitText
          text="Companies That Trust Us"
          highlight={["Brands", "worked"]}
        />
      </h2>
      <AnimatePara text="Check a list of some global brand who have collaborated with us" />
      <Partners />
    </section>
  );
}

export default Brands;

import SplitText from "../ui/SplitText";

function Consult() {
  return (
    <section className="w-full min-h-[30vh] flex flex-col items-center h-fit relative sm:pb-[10vh] my-[5vh] px-4">
      <img
        src="/grid.png"
        alt="grid"
        className="h-[90vh] max-w-full absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <h2 className="text-[24px] leading-[130%] tracking-[-1] sm:text-[28px] md:text-[36px] lg:text-[40px] font-semibold text-center">
      <SplitText text="Consulting that" highlight="Consulting" />
      <SplitText text="feels like Friend's advice" highlight="Friend's" />
      </h2>
      <img src="/consulting.png" alt="Consulting" className="w-full max-w-[1200px] mx-auto relative z-30 mt-4 md:mt-6" />
    </section>
  );
}

export default Consult;

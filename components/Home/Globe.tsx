import SplitText from "../ui/SplitText";

function Globe() {
  return (
    <section className="w-full min-h-[30vh] h-fit py-[4vh] px-[2vw] md:px-[5vw]">
      <h2 className="font-semibold w-fit mx-auto mb-4 md:mb-5 text-[24px] leading-[130%] tracking-[-1] sm:text-[28px] md:text-[36px] lg:text-[40px] flex items-center justify-center flex-wrap text-center gap-2 relative">
      <SplitText text="Find US across the Globe" highlight={["US","Globe"]} />
        <img src="/star.png" alt="Star" className="w-3 h-3 md:w-4 md:h-4 " />
        <img src="/star.png" alt="Star" className="w-3 h-3 md:w-4 md:h-4 absolute top-0 right-[6px] md:right-[15px]" />
      </h2>
      <img src="/map.png" alt="Map" className="w-full max-w-[1200px] mx-auto h-auto" />
    </section>
  );
}

export default Globe;

import CountUp from "../ui/CountUp";

function Boxes() {
  return (
    <section className="flex flex-wrap justify-center gap-4 md:gap-[5%] items-stretch max-w-[1200px] mx-auto min-h-[300px] font-semibold text-white px-4">
      <div className="bg-[#0F6089] shadow-2xl relative w-full sm:w-[48%] lg:w-[30%] min-h-[220px] md:min-h-[260px] lg:min-h-[272px] rounded-3xl mb-[4vh] p-4 md:p-3 overflow-hidden">
        <img
          src="/grid2.png"
          alt="Grid"
          className="absolute w-full h-full inset-0"
        />
        <p className="text-[60px] md:text-[72px] lg:text-[80px] sans leading-24 relative z-10">
          <CountUp to={300} />+
        </p>
        <p className="text-[22px] md:text-[26px] lg:text-[32px] leading-6 relative z-10">
          Professionals
        </p>
        <p className="text-[14px] lg:text-[16px] p-3 absolute bottom-0 z-10 left-0">
          headed by the core team{" "}
        </p>
      </div>
      <div className="bg-[#618C99] shadow-2xl relative w-full sm:w-[48%] lg:w-[30%] min-h-[220px] md:min-h-[260px] lg:min-h-[272px] rounded-3xl mb-[4vh] pb-[42px] h-fit p-4 md:p-3 overflow-hidden">
        <img
          src="/grid2.png"
          alt="Grid"
          className="absolute w-full h-full inset-0"
        />
        <p className="text-[60px] md:text-[72px] lg:text-[80px] sans leading-24 relative z-10">
          <CountUp to={17} />+
        </p>
        <p className="text-[22px] md:text-[26px] lg:text-[32px] leading-6 relative z-10">
          Prime Locations
        </p>
        <p className="text-[14px] lg:text-[16px] p-3 absolute bottom-0 z-10 left-0">
          Across India, Europe, Canada, USA & Middle East
        </p>
      </div>
      <div className="bg-[#C9A32F] shadow-2xl relative w-full sm:w-[48%] lg:w-[30%] min-h-[220px] md:min-h-[260px] lg:min-h-[272px] rounded-3xl mb-[4vh] pb-[88px] h-fit p-4 md:p-3 overflow-hidden">
        <img
          src="/grid2.png"
          alt="Grid"
          className="absolute w-full h-full inset-0"
        />
        <p className="text-[60px] md:text-[72px] lg:text-[80px] sans leading-24 relative z-10">
          $<CountUp to={20} />
          m+
        </p>
        <p className="text-[22px] md:text-[26px] lg:text-[32px] leading-6 relative z-10">
          Under Management
        </p>
        <p className="text-[14px] lg:text-[16px] p-3 absolute bottom-0 z-10 left-0">
          We manage $20m+ worth of capital
        </p>
      </div>
    </section>
  );
}

export default Boxes;

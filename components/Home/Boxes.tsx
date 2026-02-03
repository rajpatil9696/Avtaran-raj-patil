import CountUp from "../ui/CountUp";

function Boxes() {
  return (
    <section className="flex flex-wrap justify-center gap-4 md:gap-[5%] lg:gap-2 xl:gap-[2%]  items-stretch max-w-[1200px] mx-auto min-h-[300px] font-semibold text-white px-4">
      <div className="bg-[#0F6089] shadow-2xl relative w-full sm:w-[48%] lg:w-[32%] min-h-[220px] md:min-h-[260px] lg:min-h-[272px] rounded-3xl mb-[4vh] p-4 md:p-3 overflow-hidden">
        <img
          src="/grid2.png"
          alt="Grid"
          className="absolute w-full h-full inset-0"
        />
        <p className="text-[60px] md:text-[72px] lg:text-[65px] sans leading-24 relative z-10">
          <CountUp to={20000} />+
        </p>
        <p className="text-[22px] md:text-[26px] lg:text-[25px] leading-6 relative z-10">
          Satisfied Clients
        </p>
        <p className="text-[11px] md:text-[13px] lg:text-[12px] xl:text-sm p-2 absolute bottom-3 pl-3 z-10 left-0">
          Trusted globally by our clients
        </p>
      </div>
      <div className="bg-[#618C99] shadow-2xl relative w-full sm:w-[48%] lg:w-[32%] min-h-[220px] md:min-h-[260px] lg:min-h-[272px] rounded-3xl mb-[4vh] pb-[42px] h-fit p-4 md:p-3 overflow-hidden">
        <img
          src="/grid2.png"
          alt="Grid"
          className="absolute w-full h-full inset-0"
        />
        <p className="text-[60px] md:text-[72px] lg:text-[65px] sans leading-24 relative z-10">
          <CountUp to={43} />+
        </p>
        <p className="text-[22px] md:text-[26px] lg:text-[25px] leading-6 relative z-10">
          Countries
        </p>
        <p className="text-[11px] md:text-[13px] lg:text-[12px] xl:text-sm p-2 absolute bottom-3 pl-3 z-10 left-0">
          {/* Across India, Europe, Canada, USA, Middle East */}
          Global presence across continents
        </p>
      </div>
      <div className="bg-[#C9A32F] shadow-2xl relative w-full sm:w-[48%] lg:w-[32%] min-h-[220px] md:min-h-[260px] lg:min-h-[272px] rounded-3xl mb-[4vh] pb-[88px] h-fit p-4 md:p-3 overflow-hidden">
        <img
          src="/grid2.png"
          alt="Grid"
          className="absolute w-full h-full inset-0"
        />
        <p className="text-[60px] md:text-[72px] lg:text-[65px] sans leading-24 relative z-10">
          $<CountUp to={500} />
          m+
        </p>
        <p className="text-[20px] md:text-[26px] lg:text-[25px] leading-6 relative z-10">
          Transactions Managed
        </p>
        <p className="text-[11px] md:text-[13px] lg:text-[12px] xl:text-sm p-2 absolute bottom-3 pl-3 z-10 left-0">
          Value successfully handled
        </p>
      </div>
    </section>
  );
}

export default Boxes;

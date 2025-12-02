import Svg1 from "../../components/Home/Services/Svg1";
import Svg2 from "../../components/Home/Services/Svg2";
import Svg3 from "../../components/Home/Services/Svg3";
import Svg4 from "../../components/Home/Services/Svg4";
import Svg5 from "../../components/Home/Services/Svg5";
import Svg6 from "../../components/Home/Services/Svg6";
import Svg7 from "../../components/Home/Services/Svg7";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ScrollStack() {
  useEffect(() => {
    const cards = gsap.utils.toArray(".card") as HTMLElement[];
    cards.forEach((card) => {
      ScrollTrigger.create({
        trigger: card,
        start: "top top",
        end: "bottom top",
        scrub: true,
      });
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
    };
  }, []);
  return (
    <section className="w-full flex flex-col gap-5 items-center py-[5vh] px-[2vw]">
      <div className="card sticky top-[10vh] bg-blue-200 p-4 serviceBox overflow-hidden pb-[16%] pr-[8%]">
        <Svg1 />
        <h2 className="font-semibold text-[20px] sm:text-[22px] md:text-[26px] lg:text-[32px] text-center relative z-10">
          Taxation
        </h2>
        <p className="text-[16px] text-start relative z-10 pr-[20%]">
          Taxation is essential for funding public services. Understanding the
          basics helps individuals and businesses make smarter financial
          decisions.
        </p>
        <img
          src="/grid.png"
          alt="grid"
          className="h-full max-w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-20"
        />
        <img
          src="/services/note1.png"
          alt="Note1"
          className="absolute bottom-0 right-0 max-w-[40%] max-h-[40%] z-[1] pointer-events-none"
        />
      </div>
      <div className="card sticky top-[10vh] bg-blue-200 p-4 rounded serviceBox overflow-hidden pb-[18%]">
        <Svg2 />
        <h2 className="font-semibold text-[20px] sm:text-[22px] md:text-[26px] lg:text-[32px] text-center relative z-10">
          Foreign Exchange/ RBI
        </h2>
        <p className="text-[16px] text-start relative z-10 pb-[20%]">
          Foreign exchange is crucial for the economy, influencing trade and
          investment. Knowing about currency exchange and the Reserve Bank of
          India (RBI) .
        </p>
        <img
          src="/grid.png"
          alt="grid"
          className="h-full max-w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-20"
        />
        <img
          src="/services/note2.png"
          alt="Note2"
          className="absolute bottom-0 right-1/2 translate-x-1/2 max-w-[70%] max-h-[40%] z-[1] pointer-events-none"
        />
      </div>
      <div className="card sticky top-[10vh] bg-blue-200 p-4 rounded serviceBox overflow-hidden pb-[26%] pr-[10%]">
        <Svg3 />
        <h2 className="font-semibold text-[20px] sm:text-[22px] md:text-[26px] lg:text-[32px] text-center relative z-10">
          Corporate Advisory
        </h2>
        <p className="text-[16px] text-start relative z-10 corporate">
          Corporate advisory is crucial for navigating complex financial
          landscapes. It offers expert advice on mergers, acquisitions, and
          strategic planning to boost growth and efficiency. By utilizing market
          insights and financial analysis, advisors help companies make informed
          decisions aligned with their long-term goals.
        </p>
        <img
          src="/grid.png"
          alt="grid"
          className="w-[100%] h-[38%] object-cover max-w-full absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-20"
        />
        <img
          src="/services/female.png"
          alt="Female"
          className="absolute bottom-0 right-0 max-w-[50%] md:max-w-[100%] max-h-[60%] z-[1] pointer-events-none"
        />
      </div>
      <div className="card sticky top-[10vh] bg-blue-200 p-4 rounded serviceBox overflow-hidden pb-[18%] pr-[8%]">
        <Svg4 />
        <h2 className="font-semibold text-[20px] sm:text-[22px] md:text-[26px] lg:text-[32px] text-center relative z-10">
          Investment Banking
        </h2>
        <p className="text-[16px] text-start relative z-10 pr-[30%] pb-[20%]">
          Investment banking plays a crucial role in finance by helping
          companies raise capital and navigate complex transactions.
        </p>
        <img
          src="/grid.png"
          alt="grid"
          className="h-full max-w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-20"
        />
        <img
          src="/footer.png"
          alt="Note1"
          className="absolute bottom-0 right-0 max-w-[60%] max-h-[40%] z-[1] pointer-events-none"
        />
      </div>
      <div className="card sticky top-[10vh] bg-blue-200 p-4 rounded serviceBox overflow-hidden pb-[20%] pr-[8%]">
        <Svg5 />
        <h2 className="font-semibold text-[20px] sm:text-[22px] md:text-[26px] lg:text-[32px] text-center relative z-10">
          Citizenship/ PR
        </h2>
        <p className="text-[16px] text-start relative z-10 pr-[30%] pb-[20%]">
          Citizenship is a vital aspect of national identity, shaping the rights
          and responsibilities of individuals within a country.
        </p>
        <img
          src="/grid.png"
          alt="grid"
          className="h-full max-w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-20"
        />
        <img
          src="/services/passport.png"
          alt="Note1"
          className="absolute bottom-0 right-0 max-w-[50%] max-h-[50%] z-[1] pointer-events-none"
        />
      </div>
      <div className="card sticky top-[10vh] bg-blue-200 p-4 h-auto md:h-[300px] lg:h-[330px] rounded serviceBox overflow-hidden pt-[18%] pr-[8%]">
        <Svg6 />
        <h2 className="font-semibold text-[20px] sm:text-[22px] md:text-[26px] lg:text-[32px] text-center relative z-10">
          Family Office Management
        </h2>
        <p className="text-[16px] text-start relative z-10">
          Taxation is essential for funding public services. Understanding the
          basics helps individuals and businesses make smarter financial
          decisions.
        </p>
        <img
          src="/grid.png"
          alt="grid"
          className="h-full max-w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-20"
        />
        <img
          src="/services/hand.png"
          alt="Note1"
          className="absolute top-0 right-0  max-w-[50%] md:max-w-[60%] max-h-[50%] z-[1] pointer-events-none"
        />
      </div>
      <div className="card sticky top-[10vh] bg-blue-200 p-4 h-auto md:h-[300px] lg:h-[330px] rounded serviceBox overflow-hidden pt-[18%] pr-[8%]">
        <Svg7 />
        <h2 className="font-semibold text-[20px] sm:text-[22px] md:text-[26px] lg:text-[32px] text-center relative z-10">
          Business set-up Services
        </h2>
        <p className="text-[16px] text-start relative z-10">
          Taxation is essential for funding public services. Understanding the
          basics helps individuals and businesses make smarter financial
          decisions.
        </p>
        <img
          src="/grid.png"
          alt="grid"
          className="h-full max-w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-20"
        />
        <img
          src="/services/files.png"
          alt="Note1"
          className="absolute top-0 right-0 max-w-[30%] md:max-w-[40%] max-h-[40%] z-[1] pointer-events-none"
        />
      </div>
    </section>
  );
}

export default ScrollStack;

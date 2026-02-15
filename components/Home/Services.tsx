import TiltedCard from "../../src/components/TiltedCard";
 import Svg1 from "../Home/Services/Svg1";
import Svg2 from "../Home/Services/Svg2";
import Svg3 from "../Home/Services/Svg3";
import Svg4 from "../Home/Services/Svg4";
import Svg5 from "../Home/Services/Svg5";
import Svg6 from "../Home/Services/Svg6";
import Svg7 from "../Home/Services/Svg7";
import AnimatePara from "../ui/AnimatePara";
import SplitText from "../ui/SplitText";
import ScrollStack from "../../src/components/ScrollStack";
import { useEffect, useState } from "react";

function Services() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  return (
    <section className="w-full h-fit py-[4vh] text-center flex flex-col gap-1.5 relative px-4">
      {!isMobile && (
        <img
          src="/grid.png"
          alt="grid"
          className="h-[90vh] max-w-full absolute top-[calc(50%+4vh)] left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      )}
      <h2 className="text-[24px] leading-[130%] tracking-[-1] sm:text-[28px] md:text-[36px] lg:text-[40px] font-semibold">
        <SplitText text="Our Services" highlight="Services" />
      </h2>
      <AnimatePara text="“Where Expertise Meets Excellence, Worldwide”" />
      {!isMobile && (
        <section className="grid min-h-[62vh] grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-[1200px] w-full mx-auto p-4 md:p-6 h-fit">
          {/* <TiltedCard
            href="/tax"
            innerClassName=" min-h-full rounded col-span-1 md:col-span-1 lg:col-span-2 md:row-span-1 lg:row-span-2 pb-[8%] md:pb-[16%] md:pr-[8%] p-4"
            className="bg-blue-200 h-auto md:h-[380px] lg:h-[420px] serviceBox relative overflow-hidden"
            imgSrc="/grid.png"
            overlayContent={
              <>
                <Svg1 />
                <h2 className="font-semibold text-[20px] sm:text-[22px] md:text-[26px] lg:text-[32px] text-center relative z-10">
                  <SplitText text="Taxation" />
                </h2>
                <p className="text-[16px] text-start relative z-10 pr-[20%]">
                  Complexities of tax law are streamlined through expert
                  guidance, helping individuals and businesses stay compliant,
                  optimize their liabilities, and make informed financial
                  decisions.
                </p>
                <img
                  src="/services/note1.png"
                  alt="Note1"
                  className="absolute bottom-0 right-0 max-w-[40%] max-h-[40%] z-[1] pointer-events-none"
                />
              </>
            }
          /> */}
          <TiltedCard
            href="/rbi"
            innerClassName=" p-4 rounded col-span-1 md:col-span-1 lg:col-span-2 md:row-span-1 lg:row-span-2 pb-[8%] md:pb-[18%]"
            className="bg-blue-200 serviceBox relative overflow-hidden"
            imgSrc="/grid.png"
            overlayContent={
              <>
                <Svg2 />
                <h2 className="font-semibold text-[20px] sm:text-[22px] md:text-[26px] lg:text-[32px] text-center relative z-10">
                  <SplitText text="Foreign Exchange/ RBI" />
                </h2>
                <p className="text-[16px] text-start relative z-10 pb-[20%]">
                  We guide you through foreign exchange regulations, RBI norms,
                  and currency-related requirements, ensuring smooth, compliant
                  cross-border transactions.
                </p>
                <img
                  src="/services/note2.png"
                  alt="Note2"
                  className="absolute bottom-0 right-1/2 translate-x-1/2 max-w-[70%] max-h-[40%] z-[1] pointer-events-none"
                />
              </>
            }
          />
          <TiltedCard
            href="/advisory"
            innerClassName="pb-[13%] md:pb-[26%] md:pr-[10%] p-4 rounded col-span-1 md:col-span-2 lg:col-span-2 md:row-span-2 lg:row-span-4"
            className="bg-blue-200 serviceBox3 relative overflow-hidden"
            imgSrc="/grid.png"
            overlayContent={
              <>
                <Svg3 />
                <h2 className="font-semibold text-[20px] sm:text-[22px] md:text-[26px] lg:text-[32px] text-center relative z-10">
                  <SplitText text="Corporate Advisory" />
                </h2>
                <p className="text-[16px] text-start relative z-10 corporate">
                  Our corporate advisory solutions support mergers,
                  acquisitions, restructuring, and strategic planning. With
                  market insights and financial expertise, we help organisations
                  make decisions aligned with long-term growth.
                </p>
                <img
                  src="/services/female.png"
                  alt="Female"
                  className="absolute bottom-0 right-0 max-w-[50%] md:max-w-[100%] max-h-[60%] z-[1] pointer-events-none"
                />
              </>
            }
          />
          <TiltedCard
            href="/bank"
            innerClassName="p-4 rounded col-span-1 md:col-span-1 lg:col-span-2 md:row-span-1 lg:row-span-2 pb-[8%] md:pb-[18%] md:pr-[8%]"
            className="bg-blue-200 serviceBox relative overflow-hidden"
            imgSrc="/grid.png"
            overlayContent={
              <>
                <Svg4 />
                <h2 className="font-semibold text-[20px] sm:text-[22px] md:text-[26px] lg:text-[32px] text-center relative z-10">
                  <SplitText text="Investment Banking" />
                </h2>
                <p className="text-[16px] text-start relative z-10 pr-[30%] pb-[20%]">
                  We assist businesses in raising capital, structuring deals,
                  and managing high-value transactions, offering end-to-end
                  financial guidance at every stage.
                </p>
                <img
                  src="/footer.png"
                  alt="Note1"
                  className="absolute bottom-0 right-0 max-w-[60%] max-h-[40%] z-[1] pointer-events-none"
                />
              </>
            }
          />
          <TiltedCard
            href="/citizenship-pr"
            innerClassName="p-4 rounded col-span-1 md:col-span-1 lg:col-span-2 md:row-span-1 lg:row-span-2 pb-[10%] md:pb-[20%] md:pr-[8%]"
            className="bg-blue-200 serviceBox relative overflow-hidden"
            imgSrc="/grid.png"
            overlayContent={
              <>
                <Svg5 />
                <h2 className="font-semibold text-[20px] sm:text-[22px] md:text-[26px] lg:text-[32px] text-center relative z-10">
                  <SplitText text="Citizenship/ PR" />
                </h2>
                <p className="text-[16px] text-start relative z-10 pr-[30%] pb-[20%]">
                  We provide strategic assistance for global citizenship and
                  residency pathways, helping individuals and families navigate
                  legal, financial, and documentation requirements with ease.
                </p>
                <img
                  src="/services/passport.png"
                  alt="Note1"
                  className="absolute bottom-0 right-0 max-w-[50%] max-h-[50%] z-[1] pointer-events-none"
                />
              </>
            }
          />
          <TiltedCard
            href="/virtual-cfo"
            innerClassName="p-4 rounded col-span-1 md:col-span-1 lg:col-span-2 md:row-span-1 lg:row-span-2 pb-[10%] md:pb-[20%] md:pr-[8%]"
            className="bg-blue-200 serviceBox relative overflow-hidden"
            imgSrc="/grid.png"
            overlayContent={
              <>
                <Svg1/>
                <h2 className="font-semibold text-[20px] sm:text-[22px] md:text-[26px] lg:text-[32px] text-center relative z-10">
                  <SplitText text="Virtual CFO" />
                </h2>
                <p className="text-[16px] text-start relative z-10 pr-[30%] pb-[20%]">
                  Virtual CFOs (Chief Financial Officers) are the strategic advisors and financial performance overseers of a business who work remotely. 
                </p>
                <img
                  src="/services/passport.png"
                  alt="Note1"
                  className="absolute bottom-0 right-0 max-w-[50%] max-h-[50%] z-[1] pointer-events-none"
                />
              </>
            }
          />
          <TiltedCard
            href="/family-office-management"
            innerClassName="p-4 h-auto md:h-[300px] lg:h-[330px] rounded col-span-1 md:col-span-2 lg:col-span-3 md:row-span-2 lg:row-span-3 pb-[8%] md:pr-[8%]"
            className="bg-blue-200 serviceBox relative overflow-hidden"
            imgSrc="/grid.png"
            overlayContent={
              <>
                <Svg6 />
                <h2 className="font-semibold text-[20px] sm:text-[22px] md:text-[26px] lg:text-[32px] text-center relative z-10">
                  <SplitText text="Family Office Management" />
                </h2>
                <p className="text-[16px] text-start relative z-10">
                  From wealth preservation to multi-asset planning, we manage
                  family offices with a focus on governance, tax efficiency, and
                  long-term financial stewardship.
                </p>
                <img
                  src="/services/hand.png"
                  alt="Note1"
                  className="absolute top-0 right-0  max-w-[50%] md:max-w-[60%] max-h-[50%] z-[30] pointer-events-none"
                />
              </>
            }
          />
          <TiltedCard
            href="/business"
            innerClassName="p-4 h-auto md:h-[300px] lg:h-[330px] rounded col-span-1 md:col-span-2 lg:col-span-3 md:row-span-2 lg:row-span-3 pb-[8%] md:pr-[8%]"
            className="bg-blue-200 serviceBox relative overflow-hidden"
            imgSrc="/grid.png"
            overlayContent={
              <>
                <Svg7 />
                <h2 className="font-semibold text-[20px] sm:text-[22px] md:text-[26px] lg:text-[32px] text-center relative z-10">
                  <SplitText text="Business set-up Services" />
                </h2>
                <p className="text-[16px] text-start relative z-10">
                  We streamline the process of establishing a business—handling
                  registrations, regulatory approvals, compliance, and
                  operational structuring to ensure a seamless launch.
                </p>
                <img
                  src="/services/files.png"
                  alt="Note1"
                  className="absolute top-0 right-0 max-w-[30%] md:max-w-[40%] max-h-[40%] z-[1] pointer-events-none"
                />
              </>
            }
          />
        </section>
      )}
      {isMobile && <ScrollStack />}
    </section>
  );
}

export default Services;

import type React from "react";
import SplitText from "../ui/SplitText"

function NumberCard({ no, heading, para, ulLIst, plainUlLIst, SVG, imgSrc, bluePara, svgNo }: { no?: number; heading: string; para?: string[]; ulLIst?: string[]; plainUlLIst?: string[]; SVG: React.ReactNode; imgSrc: string; bluePara?: string; svgNo?: number }) {
  return (
    <div className="flex justify-center items-center w-full h-fit gap-4">
      <div className={`${(no == 1 || no == 4 || no == 7) ? "bg-[#0F6089]" : (no == 2 || no == 5) ? "bg-[#6A919B]" : "bg-[#C9A32F]"} ${!svgNo ? "opacity-100" : "opacity-0"} shadow-2xl h-full flex justify-center items-center relative w-[28%] lg:w-[15%] min-h-[220px] md:min-h-[260px] lg:min-h-[272px] rounded-3xl my-[4vh] p-4 m-2 py-auto md:p-3 overflow-hidden`}>
        <img
          src="/grid2.png"
          alt="Grid"
          className="absolute w-full h-full inset-0"
        />
        <p className="text-[60px] md:text-[72px] lg:text-[80px] h-fit text-white px-[20px] sans leading-24 relative z-10">
          {no}
        </p>
      </div>
      <div className="py-[10px] pr-[20%] w-[65%] lg:max-w-[80%] relative min-h-[210px] md:min-h-[250px] lg:min-h-[262px] overflow-hidden bg-blue-200 p-4 serviceBox"> 
        <div className="flex justify-start items-center w-full gap-2">
          {svgNo ? (
            <p className="font-semibold text-[20px] sm:text-[22px] md:text-[26px] lg:text-[32px] text-[#0f6089]">{svgNo === 4 ? "iv" : "i".repeat(svgNo)}.</p>
          ) : (
            SVG
          )}
          <h2 className="font-semibold text-[20px] sm:text-[22px] md:text-[26px] lg:text-[32px] text-center relative z-10">
            <SplitText text={heading} highlight={heading.split(" ")} />
          </h2>
        </div>
        <img
          src="/grid5.png"
          alt="grid"
          className="h-full max-w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
        />
        {para && para.map((para, i) => (
          <p key={i} className="text-[16px] text-start relative z-10 mr-auto pr-[8%]">
            {para}
          </p>
        ))}
        {bluePara &&
          <p className="text-[#0F6089] text-start w-full -tracking-1 leading-[150%] text-[12px] md:text-[14px]">
            {bluePara}
          </p>
        }
        {ulLIst &&
          <ul className="list-disc text-[#0F6089] text-start w-full pl-2 -tracking-1 leading-[150%] text-[12px] md:text-[14px] ml-5">
            {ulLIst.map((ulPara, i) => (
              <li key={i}>{ulPara}</li>
            ))}
          </ul>
        }
        {plainUlLIst &&
          <ul className="list-disc text-start w-full pl-2 -tracking-1 leading-[150%] text-[12px] md:text-[14px] ml-5">
            {plainUlLIst.map((ulPara, i) => (
              <li key={i}>{ulPara}</li>
            ))}
          </ul>
        }
        {!svgNo &&
          <><img
            src={imgSrc}
            alt="Female"
            className="absolute bottom-0 right-0 max-w-[50%] md:max-w-[100%] max-h-[60%] z-[1] pointer-events-none"
          />
            <img src="/star.png" alt="Star" className="w-5 h-5 absolute top-5 right-10" />
            <img src="/star.png" alt="Star" className="w-5 h-5 absolute top-10 right-5" />
          </>
        }
      </div>
    </div>
  )
}

export default NumberCard
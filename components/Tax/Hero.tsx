import SplitText from "../ui/SplitText";

function Hero() {
  return (
    <section className="w-full min-h-[70vh] h-fit py-[4vh] text-center flex flex-col gap-1.5 relative px-4mb-5 ">
      <img
        src="/grid.png"
        alt="grid"
        className="h-[90vh] max-w-full absolute top-[calc(50%+4vh)] left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <h2 className="text-[24px] leading-[130%] tracking-[-1] mb-[40px] md:-mb-10 md:text-[36px] lg:text-[40px] font-semibold">
        <SplitText text="Direct Tax" highlight="Tax" />
      </h2>
      <div className="w-full h-fit flex flex-col-reverse md:flex-row justify-start relative items-center gap-6 md:gap-3 px-[1vw] sm:px-[4vw] md:px-[5vw] text-start mx-auto">
        <div className="flex -mr-20 flex-col gap-[30px] items-start justify-evenly h-full w-full md:w-[58%]">
          <div className="flex flex-col gap-3">
            <p className="mr-20">
              Income Tax is a form of direct taxation in which the government
              levies tax directly on the income or wealth of individuals and
              entities such as corporations, partnerships, and trusts. As a
              progressive taxation system, higher-income earners are required to
              pay tax at higher rates, ensuring fairness and contributing to
              national economic development.
            </p>
            <p className="mr-20">
              Managing direct taxes requires a clear understanding of evolving
              regulations, accurate reporting, and strategic planning to
              optimize tax outcomes. Our Income Tax Advisory services help
              clients stay compliant, minimize risks, and make informed
              financial decisions. From tax computation and filing to audits,
              assessments, and long-term tax planning, we ensure seamless
              compliance and efficient tax management for both individuals and
              businesses.
            </p>
          </div>
          <section className="flex md:flex-row flex-col justify-center items-center gap-4 relative z-40">
            <div className="h-fit relative overflow-hidden p-4 heroCard">
              <img src="/star.png" alt="Star" className="w-4 h-4 ml-auto" />
              <div className="flex justify-start items-center w-full gap-2">
                <h2 className="font-semibold text-[20px] sm:text-[22px] md:text-[24px] mb-2 lg:text-[26px] text-center relative z-10">
                  <SplitText text="Clarity" highlight="Clarity" />
                </h2>
              </div>
              <img
                src="/grid3.png"
                alt="grid"
                className="h-full max-w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-20"
              />
              <p className="text-[16px] text-start relative z-10 mr-auto pr-[8%]">
                See your money clearly so you make smarter decisions.
              </p>
            </div>
            <div className="h-fit relative overflow-hidden p-4 heroCard">
              <img src="/star.png" alt="Star" className="w-4 h-4 ml-auto" />
              <div className="flex justify-start items-center w-full gap-2">
                <h2 className="font-semibold text-[20px] sm:text-[22px] mb-2 md:text-[24px] lg:text-[26px] text-center relative z-10">
                  <SplitText text="Trust" highlight="Trust" />
                </h2>
              </div>
              <img
                src="/grid3.png"
                alt="grid"
                className="h-full max-w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-20"
              />
              <p className="text-[16px] text-start relative z-10 mr-auto pr-[8%]">
                Your data stays safe while we help you grow confidently.
              </p>
            </div>
            <div className="h-fit relative overflow-hidden p-4 heroCard">
              <img src="/star.png" alt="Star" className="w-4 h-4 ml-auto" />
              <div className="flex justify-start items-center w-full gap-2">
                <h2 className="font-semibold text-[20px] sm:text-[22px] mb-2 md:text-[24px] lg:text-[26px] text-center relative z-10">
                  <SplitText text="Progress" highlight="Progress" />
                </h2>
              </div>
              <img
                src="/grid3.png"
                alt="grid"
                className="h-full max-w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-20"
              />
              <p className="text-[16px] text-start relative z-10 mr-auto pr-[8%]">
                We guide you step by step toward stronger financial habits.
              </p>
            </div>
          </section>
        </div>
        <div className="flex items-center justify-center relative right-0 w-full md:w-[48%]">
          <img
            src="/tax.png"
            alt="hand"
            className="w-full max-w-[520px] md:max-w-[66vw] relative z-20"
          />
          <div
            style={{
              position: "absolute",
              width: "40%",
              height: "40%",
              left: "30%",
              top: "52%",
              borderRadius: "999px",
              background: "#0F608970",
              boxShadow: "0px 4px 142px 42px #0F6089",
              transform: "translate(-50%,-50%)",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

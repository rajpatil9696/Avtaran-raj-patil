import SplitText from "../ui/SplitText";
import AnimatePara from "../ui/AnimatePara";

function Story({ noHeading = false }: { noHeading?: boolean }) {
  return (
    <section className="w-full min-h-[70vh] h-fit py-[4vh] text-center flex flex-col gap-1.5 relative px-4">
      <img
        src="/grid.png"
        alt="grid"
        className="h-[90vh] max-w-full absolute top-[calc(50%+4vh)] left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      {!noHeading && (
        <>
          <h2 className="text-[24px] leading-[130%] tracking-[-1]  md:text-[36px] lg:text-[40px] font-semibold">
            <SplitText text="Our Story" highlight="Story" />
          </h2>
          <AnimatePara
            text='"More Than Managing Assets—We Build Relationships"'
            className=" mb-2 xl:-mb-[40px]"
          />
        </>
      )}
      <div className="w-[calc(100%-10vw)] h-fit flex flex-col-reverse md:flex-row justify-center items-center gap-6 md:gap-3 px-[1vw] sm:px-[4vw] md:px-[5vw] text-start mx-auto">
        <div className="flex flex-col gap-4 items-start justify-center w-full md:w-[48%] h-fit">
          <div className="flex items-start gap-2 h-fit">
            <img
              src="/logo2.png"
              alt="logo"
              className="w-8 h-8 md:w-10 md:h-10 aspect-square"
            />
            <p className="font-semibold brandColor text-xl md:text-2xl">
              {" "}
              <span className="brandColor">Avtaran Capital</span> Advisors is
              boutique global consulting firm.
            </p>
          </div>
          <div className="flex items-start gap-2 h-fit">
            <img
              src="/file.png"
              alt="logo"
              className="w-10 h-10 md:w-13 md:h-13 aspect-square"
            />
            <p className="font-regular text-[12px] sm:text-[14px] md:text-[16px]">
              A multi-disciplinary consulting group that offers a gamut of
              professional services. We are a team of{" "}
              <b className="brandColor">
                highly qualified, optimistic, positive professionals
              </b>{" "}
              who are committed to provide quality service to our clients by
              facilitating their task of achieving their remarkable objectives.
            </p>
          </div>
          <div className="flex items-start gap-2">
            <img
              src="/tick.png"
              alt="logo"
              className="w-10 h-10 md:w-13 md:h-13 aspect-square"
            />
            <p className="font-regular text-[12px] sm:text-[14px] md:text-[16px]">
              Avtaran Capital is a well-reputed firm that provides a whole range
              of integrated services to set up your business in India. Our
              expertise lies in a thorough understanding of the legal system,
              and offering services that complement the requirements within the{" "}
              <b className="brandColor">
                regulatory, compliance and tax environment in India.
              </b>{" "}
              We provide back-office solutions related to{" "}
              <b className="brandColor">Accounts, Tax and Finance functions.</b>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center relative w-full md:w-[48%]">
          <img
            src="/hand.png"
            alt="hand"
            className="w-full max-w-[520px] md:max-w-[45vw] relative z-20"
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

export default Story;

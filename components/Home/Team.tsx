import AnimatePara from "../ui/AnimatePara";
import SplitText from "../ui/SplitText";

function Team() {
  return (
    <section className="w-full min-h-[90vh] flex flex-col items-center h-fit relative py-[4vh] px-4">
      <img
        src="/grid.png"
        alt="grid"
        className="h-[90vh] max-w-full absolute top-[calc(50%+4vh)] left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <h2 className="text-[24px] leading-[130%] tracking-[-1] sm:text-[28px] md:text-[36px] lg:text-[40px] font-semibold text-center">
      <SplitText text="Meet OUR team of" highlight="OUR" />
      <SplitText text="extraordinary Experts" highlight="Experts" />
      </h2>
      <AnimatePara text='Our Expert People Ready to Help You' className="mt-1" />
      <section className="flex flex-wrap items-stretch justify-center gap-4 px-[2vw] md:px-[5vw] mx-auto relative z-30 mt-4">
        <div className="w-full sm:w-[48%] lg:w-[24%] flex flex-col gap-2">
            <img src="/hardik.png" alt="hardik" />
            <img src="/hardik2.png" alt="hardik" />
            <p className="brandColor text-center font-semibold text-[16px] md:text-[18px] lg:text-[20px]">Founder & CEO</p>
        </div>
        <div className="w-full sm:w-[48%] lg:w-[24%] flex flex-col gap-2">
            <img src="/chetna.png" alt="hardik" />
            <img src="/chetna2.png" alt="hardik" />
            <p className="brandColor text-center font-semibold text-[16px] md:text-[18px] lg:text-[20px]">Non-Executive Director</p>
        </div>
        <div className="w-full sm:w-[48%] lg:w-[24%] flex flex-col gap-2">
            <img src="/pritesh.png" alt="hardik" />
            <img src="/pritesh2.png" alt="hardik" />
            <p className="brandColor text-center font-semibold text-[16px] md:text-[18px] lg:text-[20px]">Non-Executive Director</p>
        </div>
        <div className="w-full sm:w-[48%] lg:w-[24%] flex flex-row-reverse justify-center items-start relative">
          <img src="/star.png" alt="Star" className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 absolute -top-[20px] md:-top-[26px] right-[14px] md:right-[24px] lg:right-[30px]" />
          <img src="/star.png" alt="Star" className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 absolute top-[0px] -right-[6px] md:-right-[10px]" />
        <img className="w-full" src="/certificate.png" alt="img" />
        </div>
      </section>
      <section className="flex flex-wrap mb-10 items-stretch justify-center gap-4 px-[2vw] md:px-[5vw] mx-auto relative z-30">
        <div className="w-full sm:w-[48%] lg:w-[24%] flex flex-col gap-2">
            <img src="/darshan.png" alt="hardik" />
            <img src="/darshan2.png" alt="hardik" />
            <p className="brandColor text-center font-semibold text-[16px] md:text-[18px] lg:text-[20px]">Non-Executive Director</p>
        </div>
        <div className="w-full sm:w-[48%] lg:w-[24%] flex flex-col gap-2">
            <img src="/hemal.png" alt="hardik" />
            <img src="/hemal2.png" alt="hardik" />
            <p className="brandColor text-center font-semibold text-[16px] md:text-[18px] lg:text-[20px]">Director Marketing</p>
        </div>
        <div className="w-full sm:w-[48%] lg:w-[24%] flex flex-col gap-2">
            <img src="/nikhil.png" alt="hardik" />
            <img src="/nikhil2.png" alt="hardik" />
            <p className="brandColor text-center font-semibold text-[16px] md:text-[18px] lg:text-[20px]">Business Head- Canada & SA</p>
        </div>
        <div className="w-full sm:w-[48%] lg:w-[24%] flex flex-col gap-2">
            <img src="/paresh.png" alt="hardik" />
            <img src="/paresh2.png" alt="hardik" />
            <p className="brandColor text-center font-semibold text-[16px] md:text-[18px] lg:text-[20px]">Business Head- North America</p>
        </div>
      </section>
      <button
        className="px-4 flex items-center gap-1 text-[14px] md:text-[16px] font-semibold py-2.5 md:py-3 text-white rounded-full bg-[#0F6089] hover:shadow-[0_4px_32px_0_rgba(15,96,137,0.5)] duration-300 transition shadow-[0px_4px_4px_rgba(77,77,77,0.25),inset_0px_4px_4px_rgba(255,255,255,0.25)] group z-[2] cursor-pointer"
      >
        Work with us
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="group-hover:rotate-45 transition duration-300"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.5 3H4.5C4.10218 3 3.72064 3.15804 3.43934 3.43934C3.15804 3.72064 3 4.10218 3 4.5V19.5C3 19.8978 3.15804 20.2794 3.43934 20.5607C3.72064 20.842 4.10218 21 4.5 21H19.5C19.8978 21 20.2794 20.842 20.5607 20.5607C20.842 20.2794 21 19.8978 21 19.5V4.5C21 4.10218 20.842 3.72064 20.5607 3.43934C20.2794 3.15804 19.8978 3 19.5 3ZM15.75 13.5C15.75 13.6989 15.671 13.8897 15.5303 14.0303C15.3897 14.171 15.1989 14.25 15 14.25C14.8011 14.25 14.6103 14.171 14.4697 14.0303C14.329 13.8897 14.25 13.6989 14.25 13.5V10.8103L9.53063 15.5306C9.46094 15.6003 9.37822 15.6556 9.28717 15.6933C9.19613 15.731 9.09855 15.7504 9 15.7504C8.90145 15.7504 8.80387 15.731 8.71283 15.6933C8.62178 15.6556 8.53906 15.6003 8.46937 15.5306C8.39969 15.4609 8.34442 15.3782 8.3067 15.2872C8.26899 15.1961 8.24958 15.0985 8.24958 15C8.24958 14.9015 8.26899 14.8039 8.3067 14.7128C8.34442 14.6218 8.39969 14.5391 8.46937 14.4694L13.1897 9.75H10.5C10.3011 9.75 10.1103 9.67098 9.96967 9.53033C9.82902 9.38968 9.75 9.19891 9.75 9C9.75 8.80109 9.82902 8.61032 9.96967 8.46967C10.1103 8.32902 10.3011 8.25 10.5 8.25H15C15.1989 8.25 15.3897 8.32902 15.5303 8.46967C15.671 8.61032 15.75 8.80109 15.75 9V13.5Z"
            fill="white"
          />
        </svg>
      </button>
    </section>
  );
}

export default Team;

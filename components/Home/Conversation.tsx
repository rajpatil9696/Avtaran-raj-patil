import SplitText from "../ui/SplitText";
import { motion } from "motion/react";

function Conversation() {
  return (
    <section className="w-full my-[7vh] min-h-[90vh] px-[1vw] h-fit py-[4vh] text-center flex flex-col gap-1.5 relative text-[#0F6089]">
      <img
        src="/grid.png"
        alt="grid"
        className="h-[90vh] max-w-full absolute top-[calc(50%+4vh)] left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <h2 className="text-[24px] leading-[130%] tracking-[-1] sm:text-[28px] md:text-[36px] lg:text-[40px] font-semibold px-4">
        <SplitText
          text="Let's Start the Conversation"
          highlight={["Start", "Conversation"]}
        />
      </h2>
      <section className="flex flex-col-reverse lg:flex-row justify-center items-center w-full h-fit min-h-[90vh] max-w-[1440px] mx-auto mt-5 gap-8 px-4">
        <section className="w-full lg:w-[50%] h-fit min-h-full flex flex-col justify-center items-start gap-6">
          <motion.img
            src="/conversation1.png"
            alt="Conversation1"
            className="w-full hidden lg:block z-[3]"
            initial={{ x: 0, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            style={{ transformOrigin: "right center" }} // anchor scaling to the left
            transition={{ type: "spring", stiffness: 200, damping: 20 }} // smooth
          />
          <div className="flex mt-2 items-center text-start gap-3 md:gap-4 font-semibold text-[16px] md:text-[18px] lg:text-[20px] text-[#0F6089]">
            <img
              src="/location.png"
              alt="Location"
              className="w-10 h-10 md:w-12 md:h-12"
            />
            <div>
              Avtaran Capital Advisors Private Limited
              <p className="text-[14px] md:text-[16px] text-[#0F6089]">
                301, Kamla Hub, N S Road No. 1, JVPD Scheme, Juhu, Near Aromas
                Café, Vile Parle West, Mumbai 400049, India
              </p>
            </div>
          </div>
          <div className="flex items-center text-start gap-3 md:gap-4 font-semibold text-[16px] md:text-[18px] lg:text-[20px]">
            <img
              src="/phone.png"
              alt="Location"
              className="w-10 h-10 md:w-12 md:h-12"
            />
            <p>+919833395565</p>
          </div>
          <div className="flex items-center text-start gap-3 md:gap-4 font-semibold text-[16px] md:text-[18px] lg:text-[20px] text-[#0F6089]">
            <img
              src="/mail.png"
              alt="Location"
              className="w-10 h-10 md:w-12 md:h-12"
            />
            <p>hck@avtaran.com</p>
          </div>
          <h2 className="font-semibold text-xl md:text-2xl mt-3 -mb-1">
            <span>Social</span> Links
          </h2>
          <div className="flex items-center gap-2 md:gap-3">
            <a
              target="_blank"
              href="https://www.facebook.com"
              className="w-fit h-fit rounded-full"
            >
              <img
                src="/social/facebook.png"
                alt="FaceBook"
                className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
              />
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com"
              className="w-fit h-fit rounded-full"
            >
              <img
                src="/social/youtube.png"
                alt="Youtube"
                className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
              />
            </a>
            <a
              target="_blank"
              href="https://www.x.com"
              className="w-fit h-fit rounded-full"
            >
              <img
                src="/social/x.png"
                alt="X"
                className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
              />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com"
              className="w-fit h-fit rounded-full"
            >
              <img
                src="/social/insta.png"
                alt="Insta"
                className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
              />
            </a>
          </div>
        </section>
        <section className="w-full lg:w-[50%] h-fit min-h-full flex flex-col justify-center items-start z-30 relative">
          <img
            src="/conversation1.png"
            alt="Conversation1"
            className="w-full mb-10 block lg:hidden object-right"
          />
          <h3 className="font-semibold text-xl md:text-2xl">
            <span>Let&apos;s Get in Touch</span>
          </h3>
          <p className="text-[14px] md:text-[16px]">
            or just reach out manually to{" "}
            <span className="font-semibold text-[#0F6089]">
              hck@avtaran.com
            </span>{" "}
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-10 w-full font-semibold text-[14px] md:text-[16px] mt-6 md:mt-8 text-[#0F6089]">
            <div className="w-full md:w-1/2 flex flex-col gap-1 items-start ">
              <label htmlFor="f_name">
                <span className="pl-2">First Name</span>
              </label>
              <input
                type="text"
                name="f_name"
                id="f_name"
                className="form-field w-full text-[12px]"
                placeholder="Enter your First Name"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-1 items-start ">
              <label htmlFor="l_name">
                <span className="pl-2">Last Name</span>
              </label>
              <input
                type="text"
                name="l_name"
                id="l_name"
                className="form-field w-full text-[12px]"
                placeholder="Enter your Last Name"
              />
            </div>
          </div>
          <div className="flex w-full font-semibold text-[14px] md:text-[16px] mt-6 md:mt-8">
            <div className="w-full flex flex-col gap-1 items-start ">
              <label htmlFor="email">
                <span className="pl-2">Email Address</span>
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="form-field w-full text-[12px]"
                placeholder="Enter your Email Address"
              />
            </div>
          </div>
          <div className="flex w-full font-semibold text-[14px] md:text-[16px] mt-6 md:mt-8">
            <div className="w-full flex flex-col gap-1 items-start ">
              <label htmlFor="phone">
                <span className="pl-2">Phone Number</span>
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                className="form-field w-full text-[12px]"
                placeholder="Enter your Phone Number"
              />
            </div>
          </div>
          <div className="flex w-full font-semibold text-[14px] md:text-[16px] mt-6 md:mt-8">
            <div className="w-full flex flex-col gap-1 items-start ">
              <label htmlFor="message">
                <span className="pl-2">Your Message</span>
              </label>
              <textarea
                rows={2}
                cols={1}
                name="message"
                id="message"
                className="form-field-textarea resize-none min-h-[150px] w-full text-[12px]"
                placeholder="Enter your Message Here"
              />
            </div>
          </div>
          <div className="flex justify-center gap-6 md:gap-10 w-full font-semibold text-[14px] md:text-[16px] mt-6 md:mt-8">
            <button className="mt-auto px-4 whitespace-nowrap flex items-center gap-1 text-[16px] font-semibold py-3 text-white rounded-full bg-[#0F6089] hover:shadow-[0_4px_32px_0_rgba(15,96,137,0.5)] duration-300 transition shadow-[0px_4px_4px_rgba(77,77,77,0.25),inset_0px_4px_4px_rgba(255,255,255,0.25)] group z-[2] cursor-pointer">
              Send Message
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
          </div>
          <img
            src="/female2.png"
            alt="female"
            className="w-[80%] md:w-[70%] sm:ml-[5%] -mt-6 md:-mt-10"
          />
        </section>
      </section>
    </section>
  );
}

export default Conversation;

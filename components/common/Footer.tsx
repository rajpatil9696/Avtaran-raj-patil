function Footer() {
  return (
    <section className="bg-black w-full min-h-[45vh] h-fit relative pt-[130px]  lg:pt-0 flex flex-col lg:flex-row items-center lg:items-center justify-between gap-6 lg:gap-0 lg:pb-0">
      <img
        src="/grid4.png"
        alt="grid"
        className="h-[45vh] w-full object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <div className="absolute top-[10px] sm:top-7 left-1/2 -translate-x-1/2 min-w-[520px] min-h-[64px] max-h-[20vh] text-white message flex justify-between items-center px-3 md:px-4">
        <input
          name="message"
          type="text"
          placeholder="Enter Your Email"
          className="w-[calc(100%-32px)] border-b-1 outline-0 pl-2 placeholder-white font-semibold text-[14px] md:text-[16px] mx-4"
        />
        <button className="mt-auto mx-auto w-fit px-3 md:px-4 whitespace-nowrap flex items-center gap-1 text-[14px] md:text-[16px] font-semibold py-2.5 md:py-3 text-white rounded-full bg-[#0F6089] hover:shadow-[0_4px_32px_0_rgba(15,96,137,0.5)] duration-300 transition shadow-[0px_4px_4px_rgba(77,77,77,0.25),inset_0px_4px_4px_rgba(255,255,255,0.25)] group z-[2] cursor-pointer">
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
      <div className="text-white h-fit w-[88%] sm:w-[70%] lg:w-[25%] min-h-20 flex-col flex gap-3 lg:gap-4 z-10 items-center lg:items-start text-center lg:text-left">
        <h3 className="font-semibold text-xl md:text-2xl px-[1vw]">
          Business Hours
        </h3>
        <ul className="list px-[6vw] sm:px-[4vw] lg:px-[2.5vw] flex flex-col gap-1 text-[14px] md:text-[16px]">
          <li>
            <span>Monday - Friday</span> 09:00 am - 07:00 pm
          </li>
          <li>
            <span>Saturday</span> 09:00 am - 12:00 pm
          </li>
          <li>
            Sunday :<span> Closed</span>
          </li>
        </ul>
      </div>
      <div
        className="px-3 md:px-4 w-[92%] sm:w-fit flex flex-col md:flex-row flex-nowrap 
items-center justify-center md:justify-between gap-2 md:gap-10 z-10 text-center md:text-left
bg-white/10 rounded-xl shadow-[0_0_50px_10px_rgba(255,255,255,0.2)]"
      >
        <img
          src="/logo.png"
          alt=""
          className="md:max-h-2/3 w-[90%] max-w-[250px] md:max-w-1/2 pl-2 object-contain"
        />
        <a
          href="/contact"
          // onClick={() => navigate("/contact")}
          className="h-[70%] my-auto px-3 md:px-4 hidden sm:flex items-center gap-1 text-[16px] md:text-[20px] lg:text-[24px] font-semibold py-2.5 md:py-3 text-white rounded-full bg-[#0F6089] group hover:shadow-[0_4px_32px_0_rgba(15,96,137,0.5)] duration-300 transition w-fit whitespace-nowrap 
    shadow-[0px_4px_4px_rgba(77,77,77,0.25),inset_0px_4px_4px_rgba(255,255,255,0.25)]"
        >
          Contact Us
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            className="group-hover:rotate-45 transition duration-300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.5 3H4.5C4.10218 3 3.72064 3.15804 3.43934 3.43934C3.15804 3.72064 3 4.10218 3 4.5V19.5C3 19.8978 3.15804 20.2794 3.43934 20.5607C3.72064 20.842 4.10218 21 4.5 21H19.5C19.8978 21 20.2794 20.842 20.5607 20.5607C20.842 20.2794 21 19.8978 21 19.5V4.5C21 4.10218 20.842 3.72064 20.5607 3.43934C20.2794 3.15804 19.8978 3 19.5 3ZM15.75 13.5C15.75 13.6989 15.671 13.8897 15.5303 14.0303C15.3897 14.171 15.1989 14.25 15 14.25C14.8011 14.25 14.6103 14.171 14.4697 14.0303C14.329 13.8897 14.25 13.6989 14.25 13.5V10.8103L9.53063 15.5306C9.46094 15.6003 9.37822 15.6556 9.28717 15.6933C9.19613 15.731 9.09855 15.7504 9 15.7504C8.90145 15.7504 8.80387 15.731 8.71283 15.6933C8.62178 15.6556 8.53906 15.6003 8.46937 15.5306C8.39969 15.4609 8.34442 15.3782 8.3067 15.2872C8.26899 15.1961 8.24958 15.0985 8.24958 15C8.24958 14.9015 8.26899 14.8039 8.3067 14.7128C8.34442 14.6218 8.39969 14.5391 8.46937 14.4694L13.1897 9.75H10.5C10.3011 9.75 10.1103 9.67098 9.96967 9.53033C9.82902 9.38968 9.75 9.19891 9.75 9C9.75 8.80109 9.82902 8.61032 9.96967 8.46967C10.1103 8.32902 10.3011 8.25 10.5 8.25H15C15.1989 8.25 15.3897 8.32902 15.5303 8.46967C15.671 8.61032 15.75 8.80109 15.75 9V13.5Z"
              fill="white"
            />
          </svg>
        </a>
      </div>
      <img
        src="/footer.png"
        alt="Phone"
        className="max-h-[26vh] md:max-h-[28vh] lg:max-h-[30vh] relative mt-auto max-w-[44%] sm:max-w-[32%] lg:max-w-[20%] z-10"
      />
    </section>
  );
}

export default Footer;

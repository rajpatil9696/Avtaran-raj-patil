// import React from 'react'
import arrow from '../../src/assets/arrow-square-up-right-fill 1.png'
import logo from '../../src/assets/avataran logo.png'
import rs from '../../src/assets/Icon Badge.png'
import phone from '../../src/assets/phone image.png'
import girl from '../../src/assets/girl image.png'
import mobile from '../../src/assets/mobile.png'
const VirtualCfo = () => {
  return (
    <>
      <div className="Hero w-full max-w-[1440px] mx-auto py-10 px-5 lg:py-16 lg:px-20">
        {/* Heading */}
        <h1 className="text-[24px] lg:text-[37px] font-sans font-semibold leading-[130%] tracking-[-0.5px] lg:tracking-[-1px] text-center">
          What Are <span className="text-[#0F6089]">Virtual CFO services?</span>
        </h1>
        <div className="main flex flex-col lg:flex-row relative items-center lg:items-start">
          {/* Left Content */}
          <div className="left">
            <div className="mt-6 lg:mt-10 font-sans max-w-full lg:max-w-[775px] text-[#000000] text-[14px] lg:text-[16px] font-normal tracking-[-0.5px] lg:tracking-[-1px] leading-[160%]">
              <p>
                Virtual CFOs (Chief Financial Officers) are the strategic
                advisors and financial performance overseers of a business who
                work remotely. Virtual CFOs or fractional CFOs are finance pros
                with multi-industry experience and who provide financial advice
                and implementation support to an organization.
              </p>

              <p className="mt-4">
                Virtual CFO services are very important to the entrepreneurial
                world, particularly small to medium-sized enterprises and
                start-up businesses because these providers offer expert skills
                at a much cheaper rate without the need to get a full-time
                CFO...
              </p>
            </div>

            {/* Button */}
            <button
              className="flex items-center justify-center w-[140px] h-[45px] lg:w-[160px] lg:h-[56px] rounded-2xl bg-[#0F6089]  mt-6 lg:mt-10  shadow-md hover:shadow-xl  transform hover:scale-105 transition-all duration-300">
              <p className="font-semibold text-[14px] lg:text-[16px] font-sans text-[#F2F2F2] leading-[130%]">
                Get in Touch
              </p>
            </button>
          </div>
          {/* Right Image - Hidden on Mobile */}
          <div className="hidden lg:block absolute w-[888px] h-[648px] top-[-100px] left-[644px] rotate-[7.1deg] -z-30">
            <img src={mobile} alt="mobile" />
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mt-[100px] z-30 pt-[40px]">
        <h1 className="text-[24px] lg:text-[37px] font-sans font-semibold leading-[130%] tracking-[-0.5px] lg:tracking-[-1px] text-center">
          What Are <span className="text-[#0F6089]">Virtual CFO services?</span>
        </h1>

        {/* grid section  */}
        <div className="max-w-[1344px]  mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">  
          {/* card for grid */}
          {/* 1 */}
          <div className="max-w-[432px] rounded-[12px] max-h-[256px] bg-white shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 p-5">
            {/* Image and H1 on same line */}
            <div className="flex items-center gap-4">
              <img
                src={rs}
                alt="rs"
                className="w-[38.45px] h-[38.45px] p-[5.5px] rounded-[68px]"
              />
              <h1 className="font-semibold font-sans text-[#0F6089] text-[21.97px] leading-[160%] tracking-[-0.92px] align-middle">
                Strategic Financial Planning
              </h1>
            </div>

            {/* Description below */}
            <p className="max-w-[394px] font-sans text-[#1A1A1A] mt-2 font-normal text-[16px] leading-[160%] tracking-[-1px] align-middle">
              The designing of financial strategies that are in accordance with
              the business goals, which will result in sustainable growth and
              long-term profitability.
            </p>
          </div>

          {/* 2 */}
          <div className="max-w-[432px] rounded-[12px] max-h-[256px] bg-white shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 p-5">
            {/* Image and H1 on same line */}
            <div className="flex items-center gap-4">
              <img
                src={rs}
                alt="rs"
                className="w-[38.45px] h-[38.45px] p-[5.5px] rounded-[68px]"
              />
              <h1 className="font-semibold font-sans text-[#0F6089] text-[21.97px] leading-[160%] tracking-[-0.92px] align-middle">
                Cash Flow Management
              </h1>
            </div>

            {/* Description below */}
            <p className="max-w-[394px] font-sans text-[#1A1A1A] mt-2 font-normal text-[16px] leading-[160%] tracking-[-1px] align-middle">
              Critical analysis and cash flow optimization, which aims at having
              all the required funds for the business and operations
              efficiency..
            </p>
          </div>

          {/* 3 */}
          <div className="max-w-[432px] rounded-[12px] max-h-[256px] bg-white shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 p-5">
            {/* Image and H1 on same line */}
            <div className="flex items-center gap-4">
              <img
                src={rs}
                alt="rs"
                className="w-[38.45px] h-[38.45px] p-[5.5px] rounded-[68px]"
              />
              <h1 className="font-semibold font-sans text-[#0F6089] text-[21.97px] leading-[160%] tracking-[-0.92px] align-middle">
                Budgeting and Forecasting
              </h1>
            </div>

            {/* Description below */}
            <p className="max-w-[394px] font-sans text-[#1A1A1A] mt-2 font-normal text-[16px] leading-[160%] tracking-[-1px] align-middle">
              Developing detailed budgets and financial forecasts is the primary
              duty of CFO Services India company, which allows, among other
              things, us to predict outcomes of financial decisions and,
              therefore, to make more reasonable decisions.
            </p>
          </div>

          {/* 4 */}
          <div className="max-w-[432px] rounded-[12px] max-h-[256px] bg-white shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 p-5">
            {/* Image and H1 on same line */}
            <div className="flex items-center gap-4">
              <img
                src={rs}
                alt="rs"
                className="w-[38.45px] h-[38.45px] p-[5.5px] rounded-[68px]"
              />
              <h1 className="font-semibold font-sans text-[#0F6089] text-[21.97px] leading-[160%] tracking-[-0.92px] align-middle">
                Financial Reporting and Analysis
              </h1>
            </div>

            {/* Description below */}
            <p className="max-w-[394px] font-sans text-[#1A1A1A] mt-2 font-normal text-[16px] leading-[160%] tracking-[-1px] align-middle">
              Offering in-depth financial reports, making sense of the data to
              give the business valuable tips and helping identify the
              business's financial health.
            </p>
          </div>

          {/* 5 */}
          <div className="max-w-[432px] rounded-[12px] max-h-[256px] bg-white shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 p-5">
            {/* Image and H1 on same line */}
            <div className="flex items-center gap-4">
              <img
                src={rs}
                alt="rs"
                className="w-[38.45px] h-[38.45px] p-[5.5px] rounded-[68px]"
              />
              <h1 className="font-semibold font-sans text-[#0F6089] text-[21.97px] leading-[160%] tracking-[-0.92px] align-middle">
                Risk Management and Compliance
              </h1>
            </div>

            {/* Description below */}
            <p className="max-w-[394px] font-sans text-[#1A1A1A] mt-2 font-normal text-[16px] leading-[160%] tracking-[-1px] align-middle">
              Being able to identify the possible financial risks of the
              company, making sure that all financial regulations and standards
              are met and protecting the business interests.
            </p>
          </div>

          {/* 6 */}
          <div className="max-w-[432px] rounded-[12px] max-h-[256px] bg-white shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 p-5">
            {/* Image and H1 on same line */}
            <div className="flex items-center gap-4">
              <img
                src={rs}
                alt="rs"
                className="w-[38.45px] h-[38.45px] p-[5.5px] rounded-[68px]"
              />
              <h1 className="font-semibold font-sans text-[#0F6089] text-[21.97px] leading-[160%] tracking-[-0.92px] align-middle">
                Investment and Capital Management
              </h1>
            </div>

            {/* Description below */}
            <p className="max-w-[394px] font-sans text-[#1A1A1A] mt-2 font-normal text-[16px] leading-[160%] tracking-[-1px] align-middle">
              Advising on investment strategies and capital allocation of the
              highest return and supporting company growth.
            </p>
          </div>

          {/* 7 */}
          <div className="max-w-[432px] rounded-[12px] max-h-[256px] bg-white shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 p-5">
            {/* Image and H1 on same line */}
            <div className="flex items-center gap-4">
              <img
                src={rs}
                alt="rs"
                className="w-[38.45px] h-[38.45px] p-[5.5px] rounded-[68px]"
              />
              <h1 className="font-semibold font-sans text-[#0F6089] text-[21.97px] leading-[160%] tracking-[-0.92px] align-middle">
                Improving ROI Using Automation
              </h1>
            </div>

            {/* Description below */}
            <p className="max-w-[394px] font-sans text-[#1A1A1A] mt-2 font-normal text-[16px] leading-[160%] tracking-[-1px] align-middle">
              Virtual CFOs utilize the right automation tools for different
              labor-intensive finance processes like MIS, payroll, and
              reconciliation.
            </p>
          </div>
        </div>
        {/* Bottom section  */}
        <div className="max-w-[1440px] mt-[120px]">
          {/* white div  */}.
          <div className="relative w-full bg-white h-auto lg:h-[281px] py-12 lg:py-0 flex flex-col lg:block items-center">
            <div className="relative lg:absolute top-0 lg:top-[13px] left-0 lg:left-[420px] font-sans font-semibold text-[26px] lg:text-[48px] leading-[120%] tracking-[-0.01em] text-center lg:text-left">
              <h1>
                <span className="text-[#0F6089]">Ready</span> to work{" "}
                <span className="text-[#0F6089] lg:ml-[80px]">With US</span>
              </h1>
            </div>

            <div className="relative lg:absolute  mt-6 lg:mt-0 top-0 lg:top-[100px] left-0 lg:left-[80px] font-sans font-semibold text-[40px] lg:text-[96px]  leading-[120%] tracking-[-0.06em]  text-[#0F608966] text-center lg:text-left">
              <h1>AVTARAN</h1>
            </div>

            <div className=" hidden lg:block  absolute  w-[448px] h-[320px]  top-[1px] left-[500px]">
              <img
                src={girl}
                alt="girl"
                className="w-full h-full object-contain"
              />
            </div>

            <div className=" relative lg:absolute top-0 lg:top-[130px] left-0 lg:left-[900px] font-sans font-bold text-[40px] lg:text-[96px] leading-[120%] tracking-[-0.06em]  text-[#1A1A1A66] text-center lg:text-left">
              <h1>CAPITAL</h1>
            </div>
          </div>
          {/* Black div  */}
          <div
            className="black w-screen bg-black  flex flex-col lg:block  items-center  py-12 lg:py-0  relative lg:h-[329px]">
            {/* Business Hours */}
            <div
              className="flex flex-col gap-3 w-full max-w-[292px] text-center lg:text-left lg:absolute lg:top-[100px] lg:left-[25px]">
              <h1
                className="font-sans text-white font-semibold  text-[20px] lg:text-[24px] leading-[130%] tracking-[-1px]">
                Business Hours
              </h1>

              <p className="text-white font-sans font-bold text-[14px] lg:text-[16px] leading-[100%] tracking-[-1px]">
                <span className="text-[#0F6089] font-semibold">
                  Monday-Friday
                </span>{" "}
                09:00am-07:00pm
              </p>

              <p className="text-white font-sans font-bold text-[14px] lg:text-[16px] leading-[100%] tracking-[-1px]">
                <span className="text-[#0F6089] font-semibold">Saturday</span>{" "}
                09:00am-12:00pm
              </p>

              <p className="text-white font-sans font-bold text-[14px] lg:text-[16px] leading-[100%] tracking-[-1px]">
                Sunday{" "}
                <span className="text-[#0F6089] font-semibold">Closed</span>
              </p>
            </div>

            {/* White Capsule */}
            <div
              className="mt-10 lg:mt-0 w-full max-w-[695px] rounded-full bg-white  flex flex-col lg:flex-row  items-center justify-between  gap-4 lg:gap-0 px-6 lg:px-8 py-2 lg:absolute lg:top-[60px] lg:left-[372px]">
              <div className="flex flex-col items-center gap-2 text-center">
                <img
                  src={logo}
                  alt="logo"
                  className="h-14 w-14 lg:h-16 lg:w-16"
                />
                <h1
                  className="text-[#0F6089] font-sans font-bold  text-[20px] lg:text-[28px] leading-none tracking-tight uppercase">
                  AVTARAN CAPITAL
                </h1>
              </div>

              {/* Button */}
              <div
                className="bg-[#0F6089] rounded-full flex items-center gap-3  px-6 lg:px-10 py-4 lg:py-6   hover:bg-[#0d5273]  transition-colors cursor-pointer">
                <p
                  className="font-semibold text-[16px] lg:text-[22px] leading-none tracking-tight text-white">
                  Contact Us
                </p>

                <img
                  src={arrow}
                  alt="arrow"
                  className="h-6 w-6 lg:h-8 lg:w-8"
                />
              </div>
            </div>
                      {/* phone */}
            <div
              className=" hidden lg:block  absolute w-[425px]  top-[50px] left-[1055px] rotate-[7.29deg]">
              <img src={phone} alt="phone" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VirtualCfo;
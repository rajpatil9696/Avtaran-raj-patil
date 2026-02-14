// import React from 'react'
import arrow from '../../src/assets/arrow-square-up-right-fill 1.png'
import logo from '../../src/assets/avataran logo.png'
import rs from '../../src/assets/Icon Badge.png'
import phone from '../../src/assets/phone image.png'
import girl from '../../src/assets/girl image.png'
const VirtualCfo = () => {
  return (
    <>
      <div className="Home w-full max-w-[1440px] mx-auto py-16 px-20">
        <h1 className="text-[37px] font-semibold leading-[130%] tracking-[-1px] text-center">
          What Are <span className="text-[#0F6089]">Virtual CFO services?</span>
        </h1>

        <div className="mt-10 max-w-[775px] max-h-[234px] text-[#000000] text-[16px] font-normal tracking-[-1px] leading-[160%]">
          <p>
            Virtual CFOs (Chief Financial Officers) are the strategic advisors
            and financial performance overseers of a business who work remotely.
            Virtual CFOs or fractional CFOs are finance pros with multi-industry
            experience and who provide financial advice and implementation
            support to an organization.
          </p>

          <p className="mt-4">
            Virtual CFO services are very important to the entrepreneurial
            world, particularly small to medium-sized enterprises and start-up
            businesses because these providers offer expert skills at a much
            cheaper rate without the need to get a full-time CFO...
          </p>
        </div>

        <button className="flex flex-row max-w-[160px] max-h-[56px] rounded-2xl  bg-[#0F6089] px-[16px] py-[24px] gap-[4px] align-middle mt-10 shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 ">
          <p className="font-semibold text-[16px] text-[#F2F2F2] leading-[130%]">
            Get in Touch
          </p>
          {/* <img className='max-w-[18px] max-h-[18px] ' src={arrow} alt="->" /> */}
        </button>
      </div>

      <div className="max-w-[1440px] h-[1001px] mt-4">
        <h1 className="text-[37px] font-semibold leading-[130%] tracking-[-1px] text-center">
          What Are <span className="text-[#0F6089]">Virtual CFO services?</span>
        </h1>

        {/* grid section  */}
        <div className="max-w-[1344px] max-h-[816px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
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
              <h1 className="font-semibold text-[#0F6089] text-[21.97px] leading-[160%] tracking-[-0.92px] align-middle">
                Strategic Financial Planning
              </h1>
            </div>

            {/* Description below */}
            <p className="max-w-[394px] text-[#1A1A1A] mt-2 font-normal text-[16px] leading-[160%] tracking-[-1px] align-middle">
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
              <h1 className="font-semibold text-[#0F6089] text-[21.97px] leading-[160%] tracking-[-0.92px] align-middle">
                Cash Flow Management
              </h1>
            </div>

            {/* Description below */}
            <p className="max-w-[394px] text-[#1A1A1A] mt-2 font-normal text-[16px] leading-[160%] tracking-[-1px] align-middle">
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
              <h1 className="font-semibold text-[#0F6089] text-[21.97px] leading-[160%] tracking-[-0.92px] align-middle">
                Budgeting and Forecasting
              </h1>
            </div>

            {/* Description below */}
            <p className="max-w-[394px] text-[#1A1A1A] mt-2 font-normal text-[16px] leading-[160%] tracking-[-1px] align-middle">
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
              <h1 className="font-semibold text-[#0F6089] text-[21.97px] leading-[160%] tracking-[-0.92px] align-middle">
                Financial Reporting and Analysis
              </h1>
            </div>

            {/* Description below */}
            <p className="max-w-[394px] text-[#1A1A1A] mt-2 font-normal text-[16px] leading-[160%] tracking-[-1px] align-middle">
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
              <h1 className="font-semibold text-[#0F6089] text-[21.97px] leading-[160%] tracking-[-0.92px] align-middle">
                Risk Management and Compliance
              </h1>
            </div>

            {/* Description below */}
            <p className="max-w-[394px] text-[#1A1A1A] mt-2 font-normal text-[16px] leading-[160%] tracking-[-1px] align-middle">
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
              <h1 className="font-semibold text-[#0F6089] text-[21.97px] leading-[160%] tracking-[-0.92px] align-middle">
                Investment and Capital Management
              </h1>
            </div>

            {/* Description below */}
            <p className="max-w-[394px] text-[#1A1A1A] mt-2 font-normal text-[16px] leading-[160%] tracking-[-1px] align-middle">
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
              <h1 className="font-semibold text-[#0F6089] text-[21.97px] leading-[160%] tracking-[-0.92px] align-middle">
                Improving ROI Using Automation
              </h1>
            </div>

            {/* Description below */}
            <p className="max-w-[394px] text-[#1A1A1A] mt-2 font-normal text-[16px] leading-[160%] tracking-[-1px] align-middle">
              Virtual CFOs utilize the right automation tools for different
              labor-intensive finance processes like MIS, payroll, and
              reconciliation.
            </p>
          </div>
        </div>
        {/* Bottom section  */}
        <div className="max-w-[1440px] h-[700px] mt-[120px]">
          {/* white div  */}.
          <div className="relative w-full h-[281px] bg-white">
            <div className="absolute w-[623px] h-[58px] top-[13px] left-[380px] font-semibold text-[48px] leading-[120%] tracking-[-0.01em]">
              <h1><span className='text-[#0F6089]'>Ready</span> to work <span className='text-[#0F6089] ml-[60px]'>With US</span></h1>
            </div>

            <div className="absolute w-[457px] h-[115px] top-[100px] left-[80px] text-[#0F608966] font-semibold text-[96px] leading-[120%] tracking-[-0.06em]">
              <h1>AVATARAN</h1>
            </div>

            <div className="absolute w-[448px] h-[320px] top-[1px] left-[500px]">
              <img
                src={girl}
                alt="girl"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="absolute w-[365px] h-[115px] top-[130px] left-[900px] text-[#1A1A1A66] font-bold text-[96px] leading-[120%] tracking-[-0.06em]">
              <h1>CAPITAL</h1>
            </div>
          </div>
          {/* Block div  */}
          <div className="black w-screen h-[329px] bg-[#000000] flex relative items-center justify-center ">
            <div className="flex flex-col w-[292px] h-[123px] gap-[12px] opacity-100  absolute top-[100px] left-[25px] ">
              <h1 className="h-[31px] text-[#ffffff] font-semibold text-[24px] leading-[130%] tracking-[-1px] align-middle ">
                Business Hours
              </h1>
              <p className="text-[#FFFFFF] font-bold text-[16px] leading-[100%] tracking-[-1px] align-middle ">
                <span className="text-[#0F6089] font-semibold ">
                  Monday-Friday
                </span>{" "}
                09:00am-07:00pm
              </p>
              <p className="text-[#FFFFFF] font-bold text-[16px] leading-[100%] tracking-[-1px] align-middle">
                <span className="text-[#0F6089] font-semibold  ">Saturday</span>{" "}
                09:00am-12:00pm
              </p>
              <p className="text-[#FFFFFF] font-bold text-[16px] leading-[100%] tracking-[-1px] align-middle">
                Sunday{" "}
                <span className="text-[#0F6089] font-semibold ">Closed</span>
              </p>
            </div>

            <div className="w-[695px] h-[138px] rounded-full bg-white flex  items-center justify-between px-8 absolute top-[60px] left-[372px]">
              <div className="flex items-center flex-col gap-2">
                <img src={logo} alt="logo" className="h-16 w-16" />
                <h1 className="text-[#0F6089] font-bold text-[28px] leading-none tracking-tight uppercase whitespace-nowrap">
                  AVATARAN CAPITAL
                </h1>
              </div>

              <div className="bg-[#0F6089] rounded-full flex items-center gap-3 px-10 py-6 hover:bg-[#0d5273] transition-colors cursor-pointer">
                <p className="font-semibold text-[22px] leading-none tracking-tight text-white whitespace-nowrap">
                  Contact Us
                </p>
                <img src={arrow} alt="arrow" className="h-8 w-8" />
              </div>
            </div>

            <div className="w-[425.11px] h-[318.86px] opacity-100 rotate-[7.29deg]  absolute top-[50.68px] left-[1055px]">
              <img src={phone} alt="phone" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VirtualCfo;


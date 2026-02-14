// import React from 'react'
// import arrow from '../../src/assets/arrow-square-up-right-fill 1.png'
import rs from '../../src/assets/Icon Badge.png'
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

        {/* grid  */}
        <div className="max-w-[1344px] max-h-[816px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* card for grid */}
          {/* <div className='max-w-[432px] max-h-[256px] rounded-xl bg-[#ffffff] shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 '>
                  <div className='flex max-w-[394px] max-h-[38.45px] w-full h-fit'>
                    <img src={rs} alt="rs" className='h-[38.45px] w-[38.45px] p-[5.5px] rounded-[67.98px]' />
                    <h1>Stratigic Financial Planning </h1>

                    <p className='max-w-[394px] max-h-[78px]'>The designing of financial strategies that are in accordance with the business goals, which will result in sustainable growth and long-term profitability.</p>
                  </div>
              </div> */}

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
             Critical analysis and cash flow optimization, which aims at having all the required funds for the business and operations efficiency..
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
              Developing detailed budgets and financial forecasts is the primary duty of CFO Services India company, which allows, among other things, us to predict outcomes of financial decisions and, therefore, to make more reasonable decisions.
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
              Offering in-depth financial reports, making sense of the data to give the business valuable tips and helping identify the business's financial health.
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
             Being able to identify the possible financial risks of the company, making sure that all financial regulations and standards are met and protecting the business interests.
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
              Advising on investment strategies and capital allocation of the highest return and supporting company growth.
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
              Virtual CFOs utilize the right automation tools for different labor-intensive finance processes like MIS, payroll, and reconciliation.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VirtualCfo;


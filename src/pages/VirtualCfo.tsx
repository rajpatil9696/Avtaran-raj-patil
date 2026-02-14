import React from 'react'
import arrow from '../../src/assets/arrow-square-up-right-fill 1.png'
const VirtualCfo = () => {
  return (
    <>
        <div className="Home w-full max-w-[1440px] mx-auto py-16 px-20">

      <h1 className="text-[37px] font-semibold leading-[130%] tracking-[-1px] text-center">
        What Are{" "}
        <span className="text-[#0F6089]">
          Virtual CFO services?
        </span>
      </h1>

      <div className="mt-10 max-w-[775px] max-h-[234px] text-[#000000] text-[16px] font-normal tracking-[-1px] leading-[160%]">
        <p>
          Virtual CFOs (Chief Financial Officers) are the strategic advisors
          and financial performance overseers of a business who work remotely.
          Virtual CFOs or fractional CFOs are finance pros with multi-industry
          experience and who provide financial advice and implementation support
          to an organization.
        </p>

        <p className="mt-4">
          Virtual CFO services are very important to the entrepreneurial world,
          particularly small to medium-sized enterprises and start-up businesses
          because these providers offer expert skills at a much cheaper rate
          without the need to get a full-time CFO...
        </p>
      </div>

      <button className='flex flex-row max-w-[160px] max-h-[56px] rounded-2xl  bg-[#0F6089] px-[16px] py-[24px] gap-[4px] align-middle mt-10 '>
        <p className='font-semibold text-[16px] text-[#F2F2F2] leading-[130%]'>Get in Touch</p>
        {/* <img className='max-w-[18px] max-h-[18px] ' src={arrow} alt="->" /> */}
      </button>

    </div>

    <div>
         <h1 className="text-[37px] font-semibold leading-[130%] tracking-[-1px] text-center">
        What Are{" "}
        <span className="text-[#0F6089]">
          Virtual CFO services?
        </span>
      </h1>
    </div>
    </>
  );
};

export default VirtualCfo;


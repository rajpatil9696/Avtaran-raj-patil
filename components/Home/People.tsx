import SplitText from "../ui/SplitText";

function People() {
  return (
    <section className="w-full min-h-[50vh] flex flex-col items-center h-fit relative py-[4vh] gap-[4vh] md:gap-[6vh] overflow-hidden px-4">
      <img
        src="/grid.png"
        alt="grid"
        className="h-[90vh] max-w-full absolute top-[calc(45%+4vh)] left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <h2 className="text-[24px] leading-[130%] tracking-[-1]  sm:text-[28px] md:text-[36px] lg:text-[40px] font-semibold text-center">
      <SplitText text="What People say about US" highlight={["People","US"]} />
      </h2>
      <section className="flex flex-col justify-center items-center gap-2 w-full max-w-[1200px] mx-auto">
        <h2 className="text-center w-full font-semibold text-[16px] md:text-[18px] lg:text-[20px]">
          Client <span>Testimonials</span>
        </h2>
        <section className="w-full h-fit flex flex-col md:flex-row justify-center items-center gap-4 md:gap-[20px] lg:gap-[30px]">
          <div className="w-full sm:w-[65%] md:w-[30%] blueBox">
            <div className="flex justify-start w-full items-center gap-3">
              <img
                src="/people/people1.png"
                alt="person1"
                className="w-10 h-10 md:w-13 md:h-13"
              />
              <h2 className="font-semibold text-[16px] md:text-[18px] lg:text-[20px]">
                <span>Rakesh Mishra</span>
              </h2>
            </div>
            <p className="font-semibold text-[13px] md:text-[15px]">
              "When Avatran Financial Services launched their innovative
              investment solutions in our area, it felt like a financial
              renaissance. The impact on our financial planning has been nothing
              short of extraordinary!"
            </p>
          </div>
          <div className="w-full sm:w-[65%] md:w-[30%] blueBox">
            <div className="flex justify-start w-full items-center gap-3">
              <img
                src="/people/people2.png"
                alt="person1"
                className="w-10 h-10 md:w-13 md:h-13"
              />
              <h2 className="font-semibold text-[16px] md:text-[18px] lg:text-[20px]">
                <span>Nandini Sharma</span>
              </h2>
            </div>
            <p className="font-semibold text-[13px] md:text-[15px]">
              "With Avatran Financial Services offering their dependable
              advisory services to our community, it was akin to embracing a new
              financial dawn, reminiscent of the excitement of the Renaissance.
              Our investment strategies have never been more robust!"
            </p>
          </div>
          <div className="w-full sm:w-[65%] md:w-[30%] blueBox">
            <div className="flex justify-start w-full items-center gap-3">
              <img
                src="/people/people3.png"
                alt="person1"
                className="w-10 h-10 md:w-13 md:h-13"
              />
              <h2 className="font-semibold text-[16px] md:text-[18px] lg:text-[20px]">
                <span>Ventakesh</span>
              </h2>
            </div>
            <p className="font-semibold text-[13px] md:text-[15px]">
              "Avatran Financial Services has revolutionized our community with
              its exceptional customer support and tailored financial solutions.
              It's like stepping into a new era of financial empowerment, where
              our financial goals are not only achievable but also supported at
              every turn!"
            </p>
          </div>
        </section>
      </section>
      <div className="transparent flex mx-auto sm:mx-0 items-start gap-2 max-w-[90vw] md:max-w-none">
        <img src="/people/star.png" alt="Star" className="w-14 h-14 md:w-18 md:h-18 lg:w-20 lg:h-20" />
        <div className="flex flex-col gap-2">
          <h2 className="text-[18px] md:text-[22px] lg:text-[24px] font-semibold flex items-center gap-2">
            <span className="text-[28px] md:text-[36px] lg:text-[40px] pr-1">4.5 + </span>average ratings
          </h2>
          <div className="flex gap-2 items-center text-[10px] md:text-[11px] lg:text-[12px]">
            <img src="/people/group.png" alt="Group" className="w-10 h-4 md:w-12 md:h-5 lg:w-14 lg:h-6" />
            from around 2000+ customers
          </div>
        </div>
      </div>
      <img
        src="/girl.png"
        alt="Female"
        className="right-0 bottom-0 max-h-[30%] female sm:max-h-[36%] lg:max-h-[50%] max-w-[60%] md:max-w-none"
      />
    </section>
  );
}

export default People;

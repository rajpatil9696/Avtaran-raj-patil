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
                <SplitText text="Citizenship PR" highlight="PR" />
            </h2>
            <div className="w-full h-fit flex flex-col-reverse md:flex-row justify-start relative items-center gap-6 md:gap-3 px-[1vw] sm:px-[4vw] md:px-[5vw] text-start mx-auto">
                <div className="flex -mr-20 flex-col gap-[20px] items-start justify-evenly h-full w-full md:w-[58%]">
                    <p className="mr-20">Any individual residing in a nation as a permanent resident but not a citizen is considered to have permanent residency (PR). Put simply, those who live abroad as permanent residents are people who are not citizens of their native nations. The government of that particular nation formally authorizes permanent residents to reside there. Permanent residents move abroad in search of better job and educational possibilities as well as a higher standard of living. With a permanent residence visa, you can remain in a nation indefinitely and maintain your nationality while working, studying, and living there without any restrictions.
                    </p>
                    <section className="flex justify-center items-center gap-4 relative z-40">
                        <div className="h-fit relative overflow-hidden p-4 heroCard">
                            <img src="/star.png" alt="Star" className="w-4 h-4 ml-auto" />
                            <div className="flex justify-start items-center w-full gap-2">
                                <h2 className="font-semibold text-[20px] mb-2 sm:text-[22px] md:text-[24px] lg:text-[26px] text-center relative z-10">
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
                                <h2 className="font-semibold text-[20px] mb-2 sm:text-[22px] md:text-[24px] lg:text-[26px] text-center relative z-10">
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
                                <h2 className="font-semibold text-[20px] mb-2 sm:text-[22px] md:text-[24px] lg:text-[26px] text-center relative z-10">
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
                    <img src="/pr.png" alt="hand" className="w-full max-w-[520px] md:max-w-[66vw] relative z-20" />
                    <div
                        style={{
                            position: "absolute",
                            width: "40%",
                            height: "40%",
                            left: "30%",
                            top: "52%",
                            borderRadius: '999px',
                            background: "#0F608970",
                            boxShadow: "0px 4px 142px 42px #0F6089",
                            transform: 'translate(-50%,-50%)'
                        }}
                    ></div>
                </div>
            </div>
        </section>
    );
}

export default Hero;

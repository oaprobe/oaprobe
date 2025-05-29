"use client";
// import Image from "next/image";
import Integrity from "./components/Integrity";
import IntegrityCrisis from "./components/IntegrityCrisis";
// import HoverReveal from "./components/HoverReveal";
import Hoverrevealcontainer from "./components/Hoverrevealcontainer";
import HowSaying from "./components/HowSaying";
import PreLoader from "./components/PreLoader";
import TextReveal from "./components/TextReveal";
import AlmosteverytopIMg from "./components/AlmosteverytopIMg";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <PreLoader setLoading={setLoading} />
      {loading && (
        <main className="[font-family:'Neue_Haas_Grotesk_Display_Pro'] mt-[var(--CALC_FIRST_HEADER_HEIGHT)]">
          <div className="h-10"></div>
          <Integrity />
          <div className="bg-background_reverse max-mxl:px-3 py-10">
            <TextReveal classes="px-6">
              <p className="text-center text-[1.75rem] md:text-[3rem] font-medium tracking-[.045rem] leading-[2] text-white">
                Online hiring starts with trust—keep it that way
              </p>
            </TextReveal>
          </div>
          <IntegrityCrisis />

          {/* even the top compoanies  */}
          <section>
            <div className="bg-green py-12 md:py-10 mxl:py-12 sticky top-0 z-10 flex justify-center items-start">
              <div className="basis-[35%] max-mxl:hidden"></div>
              <div className="mxl:basis-[65%] max-mxl:px-8 space-y-4 overflow-hidden ">
                <div className="2xl:translate-x-[60px] md:hidden overflow-hidden max-w-full">
                  <TextReveal classes="">
                    <p className="text-secondary_yellow tracking-[.035rem] leading-[2.2] font-medium text-[16px] md:text-[17px] ">
                      Even top companies like Amazon, Flipkart, UKG, and Meesho
                      have unknowingly shortlisted or extended offers to those
                      students who cheated in the OA rounds, compromising the
                      integrity of their hiring process.
                    </p>
                  </TextReveal>
                </div>
                <div className="2xl:translate-x-[60px] max-md:hidden overflow-hidden max-w-full">
                  <TextReveal classes="">
                    <p className="text-secondary_yellow tracking-[.035rem] leading-[2.2] font-medium text-[14px] md:text-[17px] ">
                      Even top companies like Amazon, Flipkart, UKG, and Meesho
                      have unknowingly shortlisted{" "}
                    </p>
                    <p className="text-secondary_yellow tracking-[.035rem] leading-[2.2] font-medium text-[14px] md:text-[17px] ">
                      or extended offers to those students who cheated in the OA
                      rounds, compromising the
                    </p>
                    <p className="text-secondary_yellow tracking-[.035rem] leading-[2.2] font-medium text-[14px] md:text-[17px] ">
                      integrity of their hiring process.
                    </p>
                  </TextReveal>
                </div>
              </div>
            </div>

            {/* recent cases  */}

            <section>
              <div className="flex max-mxl:flex-col">
                <div className="mxl:basis-[30%] md:px-10 px-5 bg-background2 flex justify-center  py-20">
                  <div className="mxl:hidden">
                    <TextReveal classes="space-y-4">
                      <p className="text-[#02313E] font-medium leading-[2] tracking-[.045rem] text-[1.375rem]">
                        Recent cases across top companies hiring cycles reveal a
                        disturbing pattern
                      </p>
                    </TextReveal>
                  </div>
                  <div className="max-mxl:hidden">
                    <TextReveal classes="space-y-4">
                      <p className="text-[#02313E] font-medium tracking-[.045rem]  text-[1.375rem] ">
                        Recent cases across
                      </p>
                      <p className="text-[#02313E] font-medium tracking-[.045rem]  text-[1.375rem] ">
                        top companies hiring{" "}
                      </p>
                      <p className="text-[#02313E] font-medium tracking-[.045rem]  text-[1.375rem] ">
                        cycles reveal a{" "}
                      </p>
                      <p className="text-[#02313E] font-medium tracking-[.045rem]  text-[1.375rem] ">
                        disturbing pattern
                      </p>
                    </TextReveal>
                  </div>
                </div>
                <Hoverrevealcontainer />
              </div>
            </section>
          </section>

          {/* almost every top  */}

          <div className="  w-full ">
            <div className="relative ">
              <AlmosteverytopIMg />
              <div className="absolute bottom-0  flex w-full justify-center">
                <div className="max-md:translate-y-[137px] mxl:translate-x-[137px] max-mxl:w-full  md:[clip-path:polygon(0px_0px,100%_0px,100%_100%,50%_100%,30%_calc(100%-3.71429px-6.95238vw),0px_calc(100%-3.71429px-6.95238vw))] bg-gradient-to-r backdrop-blur-[70px] from-[#004051] to-[#6B6969]">
                  <div className="absolute w-[70px] h-[40px] bg-white bottom-0 left-0"></div>
                  <div>
                    <div className="md:hidden py-5 mxl:py-10 px-5  mxl:pb-30 mxl:px-20 mxl:pr-60 space-y-4 tracking-[.06em] leading-[1.85] ">
                      <TextReveal classes="md:hidden ">
                        <p className="text-white/[.9] font-normal text-[1.675rem] mxl:text-[2.25rem] ">
                          Almost every top
                        </p>
                        <p className="text-white/[.9] font-normal text-[1.675rem] mxl:text-[2.25rem] ">
                          {" "}
                          company OA Integrity
                        </p>
                        <p className="text-white/[.9] font-normal text-[1.675rem] mxl:text-[2.25rem] ">
                          has been massively
                        </p>
                        <p className="text-white/[.9] font-normal text-[1.675rem] mxl:text-[2.25rem] ">
                          {" "}
                          Compromised
                        </p>
                      </TextReveal>
                    </div>
                    <div className="max-md:hidden py-5 mxl:py-10 font-medium racking-[.06em] leading-[1.85] mxl:pb-24 px-5 mxl:px-20 mxl:pr-[280px] space-y-4 ">
                      <TextReveal classes=" max-md:hidden t">
                        <p className="text-white/[.9]  text-[2.25rem] ">
                          Almost every top company OA Integrity
                        </p>
                        <p className="text-white/[.9]  text-[2.25rem] ">
                          has been massively compromised
                        </p>
                      </TextReveal>
                    </div>
                    <div className="flex justify-end max-mxl:mt-8">
                      <div className="w-max space-y-4 md:hidden tracking-[.09em] leading-[2] py-5 mxl:py-10 px-8 mxl:px-16">
                        <TextReveal classes="">
                          <p className="font-normal text-[1.125rem]  text-white">
                            Despite the use of{" "}
                          </p>
                          <p className="font-normal text-[1.125rem]  text-white">
                            lockdown browsers and{" "}
                          </p>
                          <p className="font-normal text-[1.125rem]  text-white">
                            plagiarism checks, the
                          </p>{" "}
                          <p className="font-normal text-[1.125rem]  text-white">
                            reality is harsh
                          </p>
                        </TextReveal>
                      </div>
                      <div className="w-max max-md:hidden tracking-[.09em] leading-[2] space-y-4 pb-16 py-5 mxl:py-10 px-8 mxl:px-16">
                        <TextReveal classes="">
                          <p className="font-normal text-[1.125rem] text-white">
                            Despite the use of lockdown browsers and{" "}
                          </p>
                          <p className="font-normal text-[1.125rem] text-white">
                            plagiarism checks, the reality is harsh
                          </p>
                        </TextReveal>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* problems from online assessments  */}
          <div className=" grid 2xl:grid-cols-[120px_12fr_1.5fr] 4k:grid-cols-[160px_12fr_1.5fr] mxl:grid-cols-[1fr_12fr_1.5fr] grid-cols-1">
            <div className="min-w-0"></div>
            <div className="min-w-0 max-mxl:px-5 border-l-2 bg-secondary_blue border-grey-almost/[.3] max-md:pt-44 py-16 mxl:py-28 2xl:py-32 flex justify-end">
              <div className="text-white mxl:hidden font-normal leading-[2] tracking-wide text-[1.5rem] space-y-4 ">
                <p className=" ">
                  Problems from the online assessments of tech companies are now
                  routinely circulated across public and private cheating
                  ecosystems — including Telegram channels/groups, WhatsApp
                  groups, and other websites
                </p>
              </div>
              <div className="text-white max-mxl:hidden leading-[2] font-normal text-[1.5rem] tracking-wider space-y-4 ">
                <TextReveal classes="">
                  <p className=" ">
                    Problems from the online assessments of tech companies{" "}
                  </p>
                  <p>
                    are now routinely circulated across public and private
                    cheating{" "}
                  </p>
                  <p>
                    ecosystems — including Telegram channels/groups, WhatsApp{" "}
                  </p>
                  <p>groups, and other websites</p>
                </TextReveal>
              </div>
            </div>
            <div className="min-w-0 bg-secondary_blue -ml-0.5"></div>
          </div>
          <div className=" grid min-h-[326px] 2xl:min-h-[423px] 2xl:grid-cols-[120px_12fr] 4k:grid-cols-[160px_12fr] mxl:grid-cols-[1fr_13.5fr] grid-cols-1">
            <div className="min-w-0 max-mxl:hidden"></div>
            <div className="min-w-0 bg-blue grid grid-cols-1 md:grid-cols-2">
              <div className="flex justify-center">
                <div className="font-normal mt-[14%] mxl:hidden px-5 text-[1.125rem] tracking-[.06em] leading-[2] text-white space-y-5">
                  <TextReveal classes="">
                    <p>
                      As a result, hundreds — sometimes thousands — of students
                      are bypass genuine skill evaluations,gaining unfair
                      advantages and very purpose of technical assessments.
                    </p>
                  </TextReveal>
                </div>
                <div className="font-normal mt-[14%] max-mxl:hidden px-5 text-[1.125rem] tracking-[.06em] leading-[2] text-white space-y-5">
                  <TextReveal classes="">
                    <p>As a result, hundreds — sometimes thousands — of </p>
                    <p>
                      students are able to bypass genuine skill evaluations,{" "}
                    </p>
                    <p>gaining unfair advantages and undermining the very </p>
                    <p>purpose of technical assessments.</p>
                  </TextReveal>
                </div>
              </div>
              <div className="flex mxl:border-l-2 mxl:border-white max-md:pb-12 justify-center">
                <div className="font-normal mxl:hidden mt-[14%] px-5 mb-[5%] tracking-[.06em] leading-[2] text-[1.125rem] text-white space-y-5">
                  <TextReveal classes="">
                    <p>
                      Beyond simply accessing leaked questions, many students
                      now submit codes directly copied from Telegram groups or
                      seek paid OA help services to clear assessments — further
                      eroding the credibility of the hiring process.
                    </p>
                  </TextReveal>
                </div>
                <div className="font-normal max-mxl:hidden mt-[14%] px-5 mb-[5%] tracking-[.06em] leading-[2] text-[1.125rem] text-white space-y-5">
                  <TextReveal classes="">
                    <p>Beyond simply accessing leaked questions, many </p>
                    <p>students now submit codes directly copied from </p>
                    <p>Telegram groups or seek paid OA help services to </p>
                    <p>clear assessments — further eroding the credibility </p>
                    <p>of the hiring process.</p>
                  </TextReveal>
                </div>
              </div>
            </div>
          </div>

          {/* how does teh saying go  */}
          <HowSaying />
          {/* <div className="w-full h-screen"></div> */}
        </main>
      )}
    </>
  );
}

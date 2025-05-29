import Image from "next/image";
import React from "react";
import TextReveal from "./TextReveal";
import ImageReveal from "./ImageReveal";
import Upskill from "./Upskill";

const Integrity = () => {
  return (
    <section className=" ">
      <div className="grid max-md:grid-cols-1 grid-cols-[5.8fr_6.8fr]">
        <div className="flex mxl:justify-end">
          <div className="px-2 mxl:px-12 py-8 max-mxl:max-w-full max-w-[587px] w-full bg-primary flex flex-col justify-center items-start relative">
            <div className="bg-background absolute bottom-0 right-0 w-[63px] h-[69px]"></div>
            <div className="mx-auto">
              <TextReveal classes="">
                <p className=" font-medium mxl:text-[2.75rem] text-[2rem] leading-[2] tracking-[0.015em] text-white">
                  Integrity Intelligence for
                </p>
                <p className="font-medium  mxl:text-[2.75rem] text-[2rem] leading-[2] tracking-[0.015em] text-white">
                  {" "}
                  Online Assessments
                </p>
              </TextReveal>
            </div>
          </div>
        </div>
        <div className="max-md:hidden"></div>
      </div>
      <div className="grid max-md:grid-cols-1 grid-cols-[1fr_1.45fr] 2xl:grid-cols-[1fr_1.4fr] ">
        <div className="min-w-0 flex px-7 py-10 items-end justify-end">
          <div className="md:hidden">
            <TextReveal classes="">
              <p className="font-medium text-[1rem] mxl:text-[1.25rem] tracking-[.035em] text-near-black  leading-[2]">
                Protect your hiring pipeline{" "}
              </p>
              <p className="font-medium text-[1rem] mxl:text-[1.25rem] tracking-[.035em] text-near-black  leading-[2]">
                from compromised candidates
              </p>
            </TextReveal>
          </div>
          <div className="max-md:hidden">
            <TextReveal classes="">
              <p className="font-medium text-[1rem] tracking-[.035em] mxl:text-[1.125rem] text-near-black  leading-[2]">
                Protect your hiring pipeline{" "}
              </p>
              <p className="font-medium text-[1rem] tracking-[.035em] mxl:text-[1.125rem] text-near-black  leading-[2]">
                from compromised{" "}
              </p>
              <p className="font-medium text-[1rem] tracking-[.035em] mxl:text-[1.125rem] text-near-black  leading-[2]">
                candidates
              </p>
            </TextReveal>
          </div>
        </div>
        <div className="min-w-0 overflow-visible  md:min-h-[550px]  mxl:min-w-[658px] mxl:min-h-[619px]  relative flex items-end  ">
          <div className="md:absolute relative  overflow-hidden inset-0">
            {/* <div className="bg-background absolute bottom-[100%] left-0 w-[63px] h-[69px]"></div> */}
            <ImageReveal>
              {/* <Image
                src="/herobg.png"
                alt=""
                width={758}
                height={519}
                className=" w-full max-md:min-w-[518px] sm:hidden object-center max-md:h-[510px] h-full"
              /> */}
              <Image
                src="/home.png"
                alt=""
                width={758}
                height={519}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, (max-width: 1600px) 65vw, (max-width: 2000px) 75vw"
                className=" w-full max-md:min-w-[518px] md:min-w-[530px] md:min-h-[550px]  mxl:min-w-[658px] mxl:min-h-[619px] object-center object-cover max-md:h-[510px] h-full"
              />
            </ImageReveal>
          </div>
          <Upskill />
        </div>
      </div>
    </section>
  );
};

export default Integrity;

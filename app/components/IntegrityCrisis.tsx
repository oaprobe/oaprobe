import React from "react";
import TextReveal from "./TextReveal";

const IntegrityCrisis = () => {
  return (
    <section>
      <div className="flex border-[#D7D7D7] max-mxl:mx-5 mxl:border-2 mxl:border-b-0">
        <div className=" max-mxl:w-full max-mxl:flex max-mxl:justify-start mxl:basis-[35%] mxl:border-r-[2px] flex  justify-start mxl:justify-center border-[#D7D7D7]">
          <div className="pt-24 mxl:hidden text-[1.25rem] md:text-[1.75rem]">
            <TextReveal classes="">
              <p className=" font-medium leading-[2] tracking-wide text-secondary_light_green">
                The Integrity Crisis in Online{" "}
              </p>
              <p className=" font-medium leading-[2] tracking-wide text-secondary_light_green">
                Assessments is Real. And It’s{" "}
              </p>
              <p className=" font-medium leading-[2] tracking-wide text-secondary_light_green">
                Growing.
              </p>
            </TextReveal>
          </div>
          <div className="pt-24 max-mxl:hidden text-[1.25rem] md:text-[1.75rem]">
            <TextReveal classes="">
              <p className=" font-medium leading-[2] tracking-wide text-secondary_light_green">
                The Integrity Crisis in{" "}
              </p>
              <p className=" font-medium leading-[2] tracking-wide text-secondary_light_green">
                Online Assessments is{" "}
              </p>
              <p className=" font-medium leading-[2] tracking-wide text-secondary_light_green">
                Real. And It’s Growing.
              </p>
            </TextReveal>
          </div>
        </div>
        <div className="max-mxl:hidden"></div>
      </div>

      <div className="flex max-mxl:mt-5 mxl:border-[#D7D7D7] justify-end max-mxl:mx-5 mxl:border-2 mxl:border-t-0!">
        <div className="mxl:basis-[35%] max-mxl:hidden mxl:border-r-[2px] flex justify-center border-[#D7D7D7]">
          <div></div>
        </div>
        <div className="flex mxl:basis-[65%] pb-20 justify-center">
          <div className="mx-auto space-y-9">
            <div className="md:hidden">
              <TextReveal classes="">
                <p className="font-light text-[.875rem] md:text-lg/[2] tracking-wide text-black ">
                  Many companies believe that only
                </p>
                <p className="font-light text-[.875rem] md:text-lg/[2] tracking-wide text-black ">
                  {" "}
                  a small fraction of candidates
                </p>
                <p className="font-light text-[.875rem] md:text-lg/[2] tracking-wide text-black ">
                  compromise the integrity of{" "}
                </p>
                <p className="font-light text-[.875rem] md:text-lg/[2] tracking-wide text-black ">
                  their online assessments
                </p>
              </TextReveal>
            </div>
            <div className="max-md:hidden">
              <TextReveal classes="">
                <p className="font-light mxl:text-lg/[2] tracking-wide text-black ">
                  Many companies believe that only a small fraction of{" "}
                </p>
                <p className="font-light text-lg/[2] tracking-wide text-black ">
                  candidates compromise the integrity of their online{" "}
                </p>
                <p className="font-light text-lg/[2] tracking-wide text-black ">
                  assessments
                </p>
              </TextReveal>
            </div>
            <TextReveal classes="">
              <p className="font-light text-[.875rem] mxl:text-lg/2 tracking-wide text-black ">
                The truth is far more alarming!
              </p>
            </TextReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrityCrisis;

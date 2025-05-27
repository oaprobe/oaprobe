import React from "react";
import clsx from "clsx/lite";
import { remvoeoverflowbody } from "@/lib/helpFunc";
const Link2 = ({
  activeDropDown,
  setActiveDropDown,
}: {
  activeDropDown: number;
  setActiveDropDown: (index: number) => void;
}) => {
  // console.log(activeDropDown);
  const handlelink = (e: React.MouseEvent) => {
    e.stopPropagation();
    remvoeoverflowbody();
    setActiveDropDown(0);
  };
  return (
    <div
      onClick={handlelink}
      className={clsx(
        "linksnav ",
        activeDropDown === 2 && "[transform:translateY(0)]  delay-[0s,0s]",
        activeDropDown !== 2 && "[transform:translateY(-100%)]  delay-[0s,0.5s]"
      )}
    >
      <div className=" grid min-w-0 gap-0 grid-cols-[6fr_18fr] h-auto w-full">
        <div className=" min-w-0" />
        <div className=" flex min-w-0 flex-col border border-solid [border-image:initial] border-border bg-background2 overflow-auto [scrollbar-width:none] cursor-auto">
          <div className=" grid min-w-0 gap-0 grid-cols-[repeat(18,_1fr)] h-auto w-full">
            <div className=" flex min-w-0 flex-col col-[span_4] pt-[calc(-7.28571px+3.45238vw)] pb-[calc(-7px+4.16667vw)]">
              <div className=" grid min-w-0 gap-[calc(-3.42857px+1.42857vw)_calc(-11.4286px+4.7619vw)] md:px-[calc(5.89474px+1.31579vw)] mxl:px-[calc(-5.71429px+2.38095vw)] px-[calc(8px+1.04167vw)]">
                <div className=" min-w-0">
                  <a
                    target="_self"
                    href="/software-development"
                    className="p-0 m-0 [color:inherit] no-underline box-border antialiased"
                  >
                    <span className=" linkTextNav">Software </span>
                  </a>
                </div>
                <div className=" min-w-0">
                  <a
                    target="_self"
                    href="/services/web-development"
                    className="p-0 m-0 [color:inherit] no-underline box-border antialiased"
                  >
                    <span className=" linkTextNav">Web </span>
                  </a>
                </div>
                <div className=" min-w-0">
                  <a
                    target="_self"
                    href="/services/mobile-development"
                    className="p-0 m-0 [color:inherit] no-underline box-border antialiased"
                  >
                    <span className=" linkTextNav">Mobile t</span>
                  </a>
                </div>
                <div className=" min-w-0">
                  <a
                    target="_self"
                    href="/services/software-testing"
                    className="p-0 m-0 [color:inherit] no-underline box-border antialiased"
                  >
                    <span className=" linkTextNav">Quality </span>
                  </a>
                </div>
                <div className=" min-w-0">
                  <a
                    target="_self"
                    href="/services/devops-development"
                    className="p-0 m-0 [color:inherit] no-underline box-border antialiased"
                  >
                    <span className=" linkTextNav">DevOps</span>
                  </a>
                </div>
                <div className=" min-w-0">
                  <a
                    target="_self"
                    href="/services/cloud-consulting"
                    className="p-0 m-0 [color:inherit] no-underline box-border antialiased"
                  >
                    <span className=" linkTextNav">Cloud </span>
                  </a>
                </div>
                <div className=" min-w-0">
                  <a
                    target="_self"
                    href="/solutions/cybersecurity"
                    className="p-0 m-0 [color:inherit] no-underline box-border antialiased"
                  >
                    <span className=" linkTextNav">Cybersecurity</span>
                  </a>
                </div>
              </div>
            </div>
            <div className=" flex min-w-0 flex-col col-[span_4] pt-[calc(-7.28571px+3.45238vw)] pb-[calc(-7px+4.16667vw)]">
              <div className=" grid min-w-0 gap-[calc(-3.42857px+1.42857vw)_calc(-11.4286px+4.7619vw)] md:px-[calc(5.89474px+1.31579vw)] mxl:px-[calc(-5.71429px+2.38095vw)] px-[calc(8px+1.04167vw)]">
                <div className=" min-w-0">
                  <a
                    target="_self"
                    href="/software-development"
                    className="p-0 m-0 [color:inherit] no-underline box-border antialiased"
                  >
                    <span className=" linkTextNav">Software </span>
                  </a>
                </div>
                <div className=" min-w-0">
                  <a
                    target="_self"
                    href="/services/web-development"
                    className="p-0 m-0 [color:inherit] no-underline box-border antialiased"
                  >
                    <span className=" linkTextNav">Web </span>
                  </a>
                </div>
                <div className=" min-w-0">
                  <a
                    target="_self"
                    href="/services/mobile-development"
                    className="p-0 m-0 [color:inherit] no-underline box-border antialiased"
                  >
                    <span className=" linkTextNav">Mobile </span>
                  </a>
                </div>
                <div className=" min-w-0">
                  <a
                    target="_self"
                    href="/services/software-testing"
                    className="p-0 m-0 [color:inherit] no-underline box-border antialiased"
                  >
                    <span className=" linkTextNav">Quality </span>
                  </a>
                </div>
                <div className=" min-w-0">
                  <a
                    target="_self"
                    href="/services/devops-development"
                    className="p-0 m-0 [color:inherit] no-underline box-border antialiased"
                  >
                    <span className=" linkTextNav">DevOps</span>
                  </a>
                </div>
                <div className=" min-w-0">
                  <a
                    target="_self"
                    href="/services/cloud-consulting"
                    className="p-0 m-0 [color:inherit] no-underline box-border antialiased"
                  >
                    <span className=" linkTextNav">Cloud </span>
                  </a>
                </div>
                <div className=" min-w-0">
                  <a
                    target="_self"
                    href="/solutions/cybersecurity"
                    className="p-0 m-0 [color:inherit] no-underline box-border antialiased"
                  >
                    <span className=" linkTextNav">Cybersecurity</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-0 m-0 box-border antialiased flex min-w-0 flex-col col-[9_/_-1] mxl:pl-[calc(-5.71429px+2.38095vw)] md:pl-[calc(5.89474px + 1.31579vw)] pl-[calc(8px+1.04167vw)">
              <a
                href="/project-cost-calculator"
                className="p-0 m-0 [color:inherit] no-underline box-border antialiased block"
              >
                <div className="p-0 m-0 box-border antialiased min-w-0 relative overflow-hidden">
                  <div className="p-0 m-0 box-border antialiased flex min-w-0 h-[fit-content] w-full relative overflow-hidden [transform:translateZ(0px)_scale(1)] [transition-property:all] duration-500 ease-[ease] delay-[0ms] mxl:[aspect-ratio:auto_1.80095_/_1] md:[aspect-ratio:auto_4.23158_/_1]">
                    <img
                      alt="calculator"
                      draggable="false"
                      loading="lazy"
                      width={3040}
                      height={1688}
                      decoding="async"
                      data-nimg={1}
                      sizes="(max-width: 768px) 100vw, (max-width: 1080px) 100vw, 100vw"
                      src="/_next/image?url=https%3A%2F%2Fventionteams.com%2Fmedia%2Foriginal_images%2Fbanner_calculator_new.jpg&w=3840&q=75"
                      className="p-0 m-0 box-border antialiased select-none bg-[var(--my-colors-border)] text-transparent w-[508px] h-[282.074px] object-cover"
                    />
                  </div>
                  <div className="p-0 m-0 box-border antialiased flex min-w-0 absolute flex-col justify-between mxl:inset-[calc(-7.28571px+3.45238vw)_calc(-5.71429px+2.38095vw)_calc(-7px+4.16667vw)] md:inset-[calc(12.9474px+0.657895vw)_calc(5.89474px+1.31579vw)]  inset-[calc(14px+0.520833vw)_calc(8px+1.04167vw)]">
                    <div className="p-0 m-0 box-border antialiased flex min-w-0 flex-col mxl:gap-[calc(-1.71429px+0.714286vw)] md:gap-[calc(6.47368px+0.328947vw)]">
                      <span className="p-0 m-0 box-border antialiased min-w-0 !leading-[1.3] !font-normal mxl:text-[calc(-2px+1.66667vw)] text-[calc(18px+0.520833vw)] md:text-[calc(16.9474px+0.657895vw)]">
                        Project price calculator
                      </span>
                      <span className="p-0 m-0 box-border antialiased min-w-0 !leading-[1.4] !font-normal mxl:text-[calc(-2px+1.66667vw)] text-[calc(18px+0.520833vw)] md:text-[calc(16.9474px+0.657895vw)]">
                        Assess your costs in 60 seconds.
                      </span>
                    </div>
                    <div className="m-0 box-border antialiased flex [transition-property:all] duration-[650ms] ease-[ease] delay-[0ms] justify-between items-center w-[fit-content] mxl:min-w-[calc(5.71429px+14.2857vw)] min-w-[calc(140px+10.4167vw)] p-[calc(13px+0.260417vw)_calc(14px+0.520833vw)] mxl:p-[calc(1.71429px+0.952381vw)_calc(1.14286px+1.19048vw)] md:p-[calc(12.4737px+0.328947vw)_calc(12.9474px+0.657895vw)] bg-pink md:min-w-[calc(149.263px+9.21053vw)]">
                      <div className="p-0 m-0 box-border antialiased min-w-0">
                        <span className="p-0 m-0 box-border antialiased min-w-0 [transition-property:color] ease-[ease] delay-[0ms] !leading-[1.4] !font-normal mxl:text-[calc(1.71429px+0.952381vw)] md:!text-[calc(12.4737px+0.328947vw)]">
                          Get my free estimate
                        </span>
                      </div>
                      <div className="p-0 m-0 box-border antialiased flex min-w-0 items-center justify-center relative [transition-property:all] duration-200 ease-[ease] delay-[0ms] mxl:w-[calc(1.71429px+0.952381vw)] w-[calc(12.8837px+0.290698vw)] mxl:h-[calc(1.71429px + 0.952381vw)]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 14"
                          className="p-0 m-0 box-border antialiased [transition-property:all] duration-200 ease-[ease] delay-[0ms] stroke-[0] h-full"
                        >
                          <path
                            fill="#000"
                            fillRule="evenodd"
                            d="M14 1v12.985h-1.402V3.497h-.14L1.995 14 1 13.015 11.5 2.58V2.4H1.003V1H14"
                            clipRule="evenodd"
                            className="p-0 m-0 box-border antialiased [transition-property:all] duration-200 ease-[ease] delay-[0ms] stroke-[0]"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Link2;

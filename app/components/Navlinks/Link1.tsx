import Image from "next/image";
import React from "react";
import clsx from "clsx/lite";
import { remvoeoverflowbody } from "@/lib/helpFunc";
const Link1 = ({
  activeDropDown,
  setActiveDropDown,
}: {
  activeDropDown: number;
  setActiveDropDown: (index: number) => void;
}) => {
  //   console.log(activeDropDown);
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
        activeDropDown === 1 && "[transform:translateY(0)]  delay-[0s,0s]",
        activeDropDown !== 1 && "[transform:translateY(-100%)]  delay-[0s,0.5s]"
      )}
    >
      <div className=" grid min-w-0 gap-0 grid-cols-[6fr_18fr] h-auto w-full">
        <div className=" min-w-0" />
        <div className=" flex min-w-0 flex-col border border-solid [border-image:initial] border-border bg-background2 overflow-auto [scrollbar-width:none] cursor-auto">
          <div className=" grid min-w-0 gap-0 grid-cols-[repeat(18,_1fr)] h-auto w-full">
            <div className=" flex min-w-0 flex-col col-[span_6] pt-[calc(-7.28571px+3.45238vw)] pb-[calc(-7px+4.16667vw)]">
              <div className=" min-w-0 m-[0px_0px_calc(1.14286px+1.19048vw)] mxl:px-[calc(-5.71429px+2.38095vw)] md:pl-[calc(5.89474px+1.31579vw)] md:pr-[calc(5.89474px+1.31579vw)] px-[calc(8px+1.04167vw)]">
                <span className=" min-w-0 opacity-50 [transition-property:all] duration-200 ease-[ease] delay-[0ms] !leading-[1.4] !font-normal !text-[calc(12.4737px+0.328947vw)]">
                  Services
                </span>
              </div>
              <div className=" grid min-w-0 gap-[calc(-3.42857px+1.42857vw)_calc(-11.4286px+4.7619vw)] md:px-[calc(5.89474px+1.31579vw)] mxl:px-[calc(-5.71429px+2.38095vw)] px-[calc(8px+1.04167vw)]">
                <div className=" min-w-0">
                  <a
                    target="_self"
                    href="/software-development"
                    className="p-0 m-0 [color:inherit] no-underline box-border antialiased"
                  >
                    <span className=" linkTextNav">Software development</span>
                  </a>
                </div>
                <div className=" min-w-0">
                  <a
                    target="_self"
                    href="/services/web-development"
                    className="p-0 m-0 [color:inherit] no-underline box-border antialiased"
                  >
                    <span className=" linkTextNav">Web development</span>
                  </a>
                </div>
                <div className=" min-w-0">
                  <a
                    target="_self"
                    href="/services/mobile-development"
                    className="p-0 m-0 [color:inherit] no-underline box-border antialiased"
                  >
                    <span className=" linkTextNav">Mobile development</span>
                  </a>
                </div>
                <div className=" min-w-0">
                  <a
                    target="_self"
                    href="/services/software-testing"
                    className="p-0 m-0 [color:inherit] no-underline box-border antialiased"
                  >
                    <span className=" linkTextNav">Quality Assurance</span>
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
                    <span className=" linkTextNav">Cloud consulting</span>
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
            <div className=" flex min-w-0 flex-col col-[span_6] pt-[calc(-7.28571px+3.45238vw)] pb-[calc(-7px+4.16667vw)]">
              <div className="  min-w-0 m-[0px_0px_calc(1.14286px+1.19048vw)] mxl:px-[calc(-5.71429px+2.38095vw)] md:pl-[calc(5.89474px+1.31579vw)] md:pr-[calc(5.89474px+1.31579vw)] px-[calc(8px+1.04167vw)]">
                <span className=" min-w-0 opacity-50 [transition-property:all] duration-200 ease-[ease] delay-[0ms] !leading-[1.4] !font-normal !text-[calc(12.4737px+!0.328947vw)]">
                  Technologies
                </span>
              </div>
              <div className="  grid min-w-0 gap-[calc(-3.42857px+1.42857vw)_calc(-11.4286px+4.7619vw)] md:px-[calc(5.89474px+1.31579vw)] mxl:px-[calc(-5.71429px+2.38095vw)] px-[calc(8px+1.04167vw)]">
                <div className=" min-w-0">
                  <a
                    target="_self"
                    href="/solutions/ai"
                    className="p-0 m-0 [color:inherit] no-underline box-border antialiased"
                  >
                    <span className=" linkTextNav">AI</span>
                  </a>
                </div>
                <div className=" min-w-0">
                  <a
                    target="_self"
                    href="/services/backend-development"
                    className="p-0 m-0 [color:inherit] no-underline box-border antialiased"
                  >
                    <span className=" linkTextNav">Backend</span>
                  </a>
                </div>
                <div className=" min-w-0">
                  <a
                    target="_self"
                    href="/services/frontend-development"
                    className="p-0 m-0 [color:inherit] no-underline box-border antialiased"
                  >
                    <span className=" linkTextNav">Frontend</span>
                  </a>
                </div>
                <div className=" min-w-0">
                  <a
                    target="_self"
                    href="/solutions/ar-vr"
                    className="p-0 m-0 [color:inherit] no-underline box-border antialiased"
                  >
                    <span className=" linkTextNav">AR/VR</span>
                  </a>
                </div>
                <div className=" min-w-0">
                  <a
                    target="_self"
                    href="/fintech/blockchain"
                    className="p-0 m-0 [color:inherit] no-underline box-border antialiased"
                  >
                    <span className=" linkTextNav">Blockchain</span>
                  </a>
                </div>
                <div className=" min-w-0">
                  <a
                    target="_self"
                    href="/solutions/big-data"
                    className="p-0 m-0 [color:inherit] no-underline box-border antialiased"
                  >
                    <span className=" linkTextNav">Big data</span>
                  </a>
                </div>
                <div className=" min-w-0">
                  <a
                    target="_self"
                    href="/skills"
                    className="p-0 m-0 [color:inherit] no-underline box-border antialiased"
                  >
                    <span className=" linkTextNav">All technologies</span>
                  </a>
                </div>
              </div>
            </div>
            <div className=" flex min-w-0 flex-col col-[span_6] pt-[calc(-7.28571px+3.45238vw)] pb-[calc(-7px+4.16667vw)]">
              <div className="  min-w-0 m-[0px_0px_calc(1.14286px+1.19048vw)] mxl:px-[calc(-5.71429px+2.38095vw)] md:pl-[calc(5.89474px+1.31579vw)] md:pr-[calc(5.89474px+1.31579vw)] px-[calc(8px+1.04167vw)]">
                <span className=" min-w-0 opacity-50 [transition-property:all] duration-200 ease-[ease] delay-[0ms] !leading-[1.4] !font-normal !text-[calc(12.4737px+0.328947vw)]">
                  Platforms
                </span>
              </div>
              <div className="  grid min-w-0 gap-[calc(-3.42857px+1.42857vw)_calc(-11.4286px+4.7619vw)] md:px-[calc(5.89474px+1.31579vw)] mxl:px-[calc(-5.71429px+2.38095vw)] px-[calc(8px+1.04167vw)]">
                <div className=" min-w-0">
                  <a
                    target="_self"
                    href="/services/aws-cloud-consulting"
                    className="p-0 m-0 [color:inherit] no-underline box-border antialiased"
                  >
                    <span className=" linkTextNav">AWS</span>
                  </a>
                </div>
                <div className=" min-w-0">
                  <a
                    target="_self"
                    href="/services/azure-cloud-consulting"
                    className="p-0 m-0 [color:inherit] no-underline box-border antialiased"
                  >
                    <span className=" linkTextNav">Azure</span>
                  </a>
                </div>
                <div className=" min-w-0">
                  <a
                    target="_self"
                    href="/services/gcp-consulting"
                    className="p-0 m-0 [color:inherit] no-underline box-border antialiased"
                  >
                    <span className=" linkTextNav">Google Cloud</span>
                  </a>
                </div>
                <div className=" min-w-0">
                  <a
                    target="_self"
                    href="/salesforce"
                    className="p-0 m-0 [color:inherit] no-underline box-border antialiased"
                  >
                    <span className=" linkTextNav">Salesforce</span>
                  </a>
                </div>
                <div className=" min-w-0">
                  <a
                    target="_self"
                    href="/services/sharepoint-development"
                    className="p-0 m-0 [color:inherit] no-underline box-border antialiased"
                  >
                    <span className=" linkTextNav">SharePoint</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex min-w-0 flex-row">
            <div className=" min-w-0 relative flex-1 overflow-hidden">
              <a
                href="/project-cost-calculator"
                className="p-0 m-0 [color:inherit] no-underline box-border group/link1 antialiased"
              >
                <div className=" flex min-w-0 h-[fit-content] w-full relative overflow-hidden group-hover/link1:scale-110 scale-100 [transition-property:all] duration-500 ease-[ease] delay-[0ms] ">
                  <Image
                    src="/banner_calculator_narrow.webp"
                    alt="calculator"
                    width={2880}
                    height={220}
                    sizes="(max-width: 768px) 260vw, (max-width: 1080px) 118vw, 75vw"
                    className=" select-none bg-[var(--my-colors-border)] text-transparent w-[1023px] h-[78.1458px] object-cover"
                  />
                </div>
                <div className=" min-w-0 absolute md:py-[calc(12.9474px+0.657895vw)] mxl:py-[calc(-3.14286px+2.14286vw)] md:left-[calc(5.89474px+1.31579vw)] md:right-[calc(5.89474px+1.31579vw)] mxl:left-[calc(-5.71429px+2.38095vw)] mxl:right-[calc(-5.71429px+2.38095vw)] inset-[0px_calc(8px+1.04167vw)] py-[calc(14px+0.520833vw)]">
                  <div className=" flex min-w-0 flex-row justify-between items-center">
                    <span className=" min-w-0 !leading-[1.4] !font-medium mxl:text-[calc(1.14286px+1.19048vw)] text-[calc(14px+0.520833vw)] text-white md:!text-[calc(12.9474px+0.657895vw)]">
                      Want to start a project with us but need cost details?
                      Click here for an estimate
                    </span>
                    <div className=" flex min-w-0 items-center justify-center relative mxl:w-[calc(1.14286px+1.19048vw)] mxl:h-[calc(1.14286px+1.19048vw)] w-[calc(13.7674px+0.581395vw)] h-[calc(13.7674px+0.581395vw)] md:w-[calc(1.14286px+1.19048vw)] md:h-[calc(1.14286px+1.19048vw)] mxl:ml-[calc(1.14286px+1.19048vw)] mxl:mt-[calc(0.428571px+0.238095vw)] m-[calc(2.44186px+0.145349vw)_0px_0px_calc(13.7674px+0.581395vw)]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className=" [transition-property:all] fill-white duration-200 ease-[ease] delay-[0ms] stroke-[0] h-full"
                      >
                        <path
                          fill="#000"
                          d="M17 4.632V3.35H0V0h24v24h-3.349V7h-1.283L2.97 23.398.602 21.03z"
                          className=" [transition-property:all] fill-white duration-200 ease-[ease] delay-[0ms] stroke-[0]"
                        />
                      </svg>
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

export default Link1;

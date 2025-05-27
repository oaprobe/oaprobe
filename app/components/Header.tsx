"use client";
import React, { useEffect, useState } from "react";
import Link1 from "./Navlinks/Link1";
import Link2 from "./Navlinks/Link2";
import { remvoeoverflowbody } from "@/lib/helpFunc";
import { motion } from "motion/react";
import clsx from "clsx";
import { useWindowSize } from "@uidotdev/usehooks";
import Link from "next/link";

const Header = () => {
  const [activeDropDown, setActiveDropDown] = useState<number>(0);
  const [navopen, setNavOpen] = useState(false);
  const [bodyElement, setBodyElement] = useState<HTMLElement | null>(null);
  // console.log(activeDropDown);
  const dropdownlinks = [
    "Expertise",
    "Industries",
    "Engagement models",
    "About us",
  ];
  const width = useWindowSize().width;
  useEffect(() => {
    if (typeof document !== "undefined") {
      setBodyElement(document.getElementsByTagName("body")[0]);
    }
  }, []);

  const handlenavlink = (index: number) => {
    if (!bodyElement) return;
    bodyElement.style.overflow = "hidden";

    if (activeDropDown === index + 1) {
      setActiveDropDown(0);
      remvoeoverflowbody();
    } else {
      setActiveDropDown(index + 1);
    }
  };

  const handlenavopen = () => {
    if (!bodyElement) return;

    if (!navopen) {
      bodyElement.style.overflow = "hidden";
    } else {
      remvoeoverflowbody();
    }
    setNavOpen(!navopen);
  };
  const headerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="w-full fixed font-funnelDisplay top-0 z-[6778345] "
    >
      <div className="mxl:h-[calc(6.28571px+3.21429vw)] h-[calc(45.3023px+1.74419vw)] max-h-[calc(45.3023px+1.74419vw)]  mxl:max-h-[calc(6.28571px+3.21429vw)] w-full max-w-screen z-[10] relative">
        <div className="grid bg-background border-b border-border h-full z-[2] relative grid-cols-[23fr_0fr_4fr_5fr] md:grid-cols-[13fr_0fr_1fr_2fr] mxl:grid-cols-[6fr_16fr_2fr_0fr]">
          <div className="flex z-[4] h-full justify-between pl-[calc(8px+1.04167vw)] mxl:pl-[calc(-5.71429px+2.38095vw)] md:pl-[calc(5.89474px+1.31579vw)]">
            <>
              <Link
                aria-label="Vention"
                href="/"
                className="p-0 m-0 [color:inherit] no-underline box-border antialiased"
              >
                <div className=" flex min-w-0 items-center h-full">
                  <div className=" flex min-w-0 items-center justify-center relative mxl:h-[calc(0.285714px+1.54762vw)] h-[calc(16px+1.04167vw)] md:h-[calc(16.9474px+0.657895vw)] ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 136 30"
                      className=" [transition-property:all] duration-200 ease-[ease] delay-[0ms] stroke-[0] h-full"
                    >
                      <path
                        fill="#000"
                        d="M26.816 17.902c.03 1.023.215 1.95.521 2.848.906 2.657 2.55 4.658 5.22 5.695 1.825.71 3.7.762 5.583.261 2.008-.533 3.653-1.607 4.8-3.371.218-.336.365-.717.568-1.064.06-.103.197-.229.3-.23 1.032-.016 2.063-.008 3.094-.004.034 0 .067.02.154.048-.084.278-.155.56-.253.83-1.23 3.379-3.677 5.46-7.064 6.442-2.895.839-5.806.817-8.656-.258-3.035-1.145-5.203-3.236-6.525-6.186-1.15-2.566-1.425-5.257-1.016-8.03.42-2.847 1.594-5.317 3.687-7.313 1.59-1.517 3.48-2.493 5.63-2.933 3.048-.625 6.003-.339 8.765 1.146 3.342 1.796 5.333 4.615 6.012 8.342.21 1.156.255 2.332.137 3.509-.019.193-.085.276-.282.27-.26-.008-.521 0-.782 0H26.815zm17.541-2.76c-.453-4.551-4.486-8.243-9.373-7.878-4.924.367-7.625 4.48-8.035 7.879h17.408ZM103.178 30c-2.637-.09-5.078-.73-7.238-2.262-2.432-1.726-3.946-4.09-4.638-6.971-.758-3.155-.61-6.272.707-9.257 1.662-3.769 4.567-6.051 8.613-6.836 2.889-.56 5.693-.254 8.334 1.078 3.129 1.576 5.117 4.128 6.047 7.477.879 3.165.763 6.323-.51 9.367-1.571 3.756-4.387 6.103-8.368 6.99-.965.214-1.963.28-2.946.414zm8.922-12.829a10.8 10.8 0 0 0-.801-4.194c-1.542-3.772-5.149-5.956-9.181-5.447-3.613.457-5.965 2.518-7.216 5.875-.819 2.196-.86 4.456-.263 6.71.542 2.05 1.604 3.793 3.328 5.071 2.111 1.566 4.487 2.014 7.039 1.515 2.004-.392 3.645-1.428 4.919-3.023 1.52-1.9 2.162-4.1 2.175-6.507m8.492-12.286v2.84c.089-.06.133-.074.156-.106 1.857-2.499 4.41-3.418 7.43-3.245 1.633.093 3.136.588 4.449 1.588 1.494 1.139 2.421 2.664 2.831 4.47a14.8 14.8 0 0 1 .387 3.127c.039 5.134.019 10.268.018 15.403 0 .127-.013.255-.022.404-.13.009-.234.021-.338.021-.865.002-1.731-.012-2.596.008-.296.008-.36-.1-.356-.368.013-.83.005-1.66.005-2.49V13.908c0-1.319-.21-2.594-.823-3.78-1.117-2.163-3.192-3.074-5.45-2.915-3.086.218-5.116 2.485-5.552 5.368-.093.618-.136 1.25-.137 1.875-.011 4.814-.006 9.629-.006 14.443v.49h-2.354q-.953 0-.953-.936l.001-23.087q0-.48.481-.48zm-52.591 24.49h-3.257c-.008-.16-.023-.308-.023-.457-.001-4.98.01-9.96-.007-14.942-.006-1.52-.25-3.003-1.105-4.31-1.235-1.887-3.04-2.6-5.22-2.444-3.145.225-5.136 2.567-5.54 5.501-.078.573-.11 1.157-.11 1.735q-.014 7.258 0 14.515c0 .312-.064.434-.408.424a39 39 0 0 0-2.49 0c-.346.011-.406-.118-.406-.426.007-5.81.005-11.621.005-17.432 0-2.087.006-4.174-.006-6.261-.002-.31.077-.41.395-.402.853.021 1.708.016 2.56.001.261-.004.354.068.35.34-.015.782-.005 1.564-.002 2.347 0 .044.017.088.038.19.17-.218.3-.405.449-.576 1.862-2.158 4.266-2.97 7.05-2.814 1.43.08 2.779.464 3.99 1.244 1.735 1.12 2.789 2.734 3.324 4.705.31 1.14.417 2.304.416 3.484C67.998 18.86 68 23.924 68 28.987v.388ZM25.27 4.907c-.197.51-.38.993-.57 1.473l-7.11 17.926c-.636 1.606-1.276 3.21-1.902 4.82-.08.204-.18.267-.389.266a608 608 0 0 0-5.336.002c-.23.002-.33-.084-.41-.29Q5.945 19.971 2.33 10.842 1.248 8.119.165 5.397C.105 5.246.06 5.089 0 4.916c.102-.014.17-.03.24-.03.925-.002 1.85-.011 2.775.009.125.003.318.122.362.234C4.89 9.024 6.39 12.924 7.892 16.823c1.196 3.104 2.394 6.206 3.584 9.312.086.223.203.309.445.299q.712-.03 1.422 0c.246.011.351-.077.436-.3 1.19-3.106 2.389-6.209 3.586-9.312 1.49-3.864 2.982-7.73 4.463-11.598.095-.249.208-.351.482-.346.878.016 1.756.006 2.633.007.093 0 .185.012.328.022ZM73.318.001v.442c0 1.257-.006 2.514.003 3.771.005.733-.144.668.688.669 1.778.004 3.557.001 5.336.001h.44c.01.16.023.276.023.392.002.724-.011 1.448.006 2.17.006.28-.08.369-.363.367-1.695-.01-3.392-.005-5.087-.004-.237 0-.475.015-.712-.004-.269-.021-.343.083-.34.347.014 1.161.007 2.324.007 3.487 0 3.902-.003 7.804.004 11.706 0 .377.015.765.103 1.129.285 1.175 1.157 1.884 2.413 1.932 1.125.042 2.253.032 3.38.015.353-.005.445.113.436.447-.021.71-.018 1.424-.001 2.135.006.283-.063.396-.373.392-1.34-.02-2.68.008-4.02-.027a6.2 6.2 0 0 1-2.605-.63c-1.488-.742-2.282-1.989-2.526-3.599a11 11 0 0 1-.11-1.63c-.006-7.673-.004-15.347-.004-23.02q0-.488.474-.489zm15.798 29.371h-3.277v-.467c0-6.922 0-13.846.009-20.769 0-.287-.104-.331-.35-.33-1.173.009-2.347-.006-3.52.01-.312.005-.411-.086-.403-.4.019-.826.006-1.653.006-2.509.156-.009.27-.02.385-.02 2.252-.002 4.504.005 6.756-.008.321-.002.419.081.419.413-.01 7.907-.008 15.814-.009 23.721 0 .105-.01.21-.017.36z"
                        className=" [transition-property:all] duration-200 ease-[ease] delay-[0ms] stroke-[0]"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
              <div className=" min-w-0 h-full block visible pl-[calc(-5.71429px+2.38095vw)] pr-[calc(5.89474px+1.31579vw)]">
                <div className="p-0  min-w-0 relative h-full">
                  <div className="p-0 m-0 [box-sizing:initial] antialiased flex min-w-0 relative h-full items-center justify-center">
                    <div className="p-0  min-w-0 relative">
                      <div className="p-0  flex min-w-0 items-center justify-center relative w-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 30 30"
                          className="p-0  [transition-property:all] duration-200 ease-[ease] delay-[0ms] stroke-[0] overflow-visible h-[calc(1.14286px + 1.19048vw)] w-[calc(1.14286px + 1.19048vw)]"
                        >
                          <path
                            fill="#000"
                            fillRule="evenodd"
                            d="M14.984 28.538c.65-.003 1.874-.664 3.052-3.229 1.008-2.192 1.708-5.265 1.82-8.771h-9.754c.113 3.506.813 6.58 1.82 8.771 1.18 2.565 2.404 3.226 3.053 3.229zm-3.88-.595C9.4 25.42 8.244 21.28 8.1 16.538H2.038c.41 5.38 4.094 9.846 9.066 11.405M2.037 14.539H8.1c.144-4.742 1.3-8.883 3.002-11.406-4.97 1.56-8.656 6.025-9.065 11.406m12.948-14h-.024C6.695.558 0 7.266 0 15.538s6.695 14.979 14.962 15H15c8.284 0 15-6.716 15-15 0-8.285-6.716-15-15-15h-.014Zm3.858 27.422c4.998-1.545 8.707-6.023 9.118-11.422h-6.104c-.144 4.752-1.305 8.9-3.014 11.422m9.118-13.422c-.41-5.4-4.12-9.878-9.118-11.423 1.709 2.523 2.87 6.67 3.014 11.423zm-12.99-12c-.65.004-1.872.667-3.05 3.228-1.007 2.192-1.707 5.265-1.82 8.772h9.755c-.113-3.507-.813-6.58-1.82-8.772-1.18-2.565-2.403-3.225-3.053-3.228h-.011Z"
                            clipRule="evenodd"
                            className="p-0  [transition-property:all] duration-200 ease-[ease] delay-[0ms] stroke-[0]"
                          />
                        </svg>
                      </div>
                      <div className="p-0  [animation-name:dWXmnh] min-w-0 absolute top-0 right-0 rounded-[50%] translate-x-1/2 -translate-y-1/2 [animation-duration:2s] [animation-timing-function:ease] [animation-iteration-count:infinite] w-[calc(-1.14286px+0.47619vw)] h-[calc(-1.14286px+0.47619vw)]" />
                    </div>
                  </div>
                  <div className="p-0  min-w-0 opacity-0 pointer-events-none [transition-property:all] duration-200 ease-[ease] delay-[0ms] relative">
                    <div className="p-0  min-w-0 absolute left-2/4 -translate-x-1/2 translate-y-0 bottom-[4px]">
                      <div className="p-0  min-w-0 [clip-path:polygon(0%_100%,_50%_0%,_100%_100%)] w-[calc(4.85714px+0.47619vw)] h-[calc(3.14286px+0.357143vw)]" />
                    </div>
                    <div className="p-0  min-w-0 absolute translate-x-0 translate-y-full bottom-[5px] right-[calc(-0.894737px - 1.31579vw)]">
                      <div className=" min-w-0">
                        <div className=" min-w-0">
                          <span className=" min-w-0 !leading-[1.4] !font-normal !text-[calc(12.9474px !+ !0.657895vw)]" />
                        </div>
                        <Link
                          aria-label="link"
                          href="/"
                          className="p-0 m-0 [color:inherit] no-underline box-border antialiased"
                        >
                          <div className="pt-[4px] pr-[calc(12.9474px+0.657895vw] box-border antialiased flex w-full justify-center items-center min-w-[calc(26px+14.1667vw)] mt-[calc(12.9474px+0.657895vw)]">
                            <span className=" min-w-0 !leading-[1.4] !font-normal !text-[calc(12.9474px+!0.657895vw)]" />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="p-0 m-0 [box-sizing:initial] antialiased min-w-0 absolute top-0 h-full w-[calc(6.42857px+11.9048vw)] right-[calc(-7.36842px-1.64474vw)]" />
                  <div className=" min-w-0 absolute bottom-0 invisible translate-x-0 translate-y-0 [transition-property:all] duration-200 ease-[ease] delay-[0ms] right-[calc(-6.89474px-1.31579vw)]">
                    <div className="m-0 box-border antialiased flex min-w-0 flex-col border border-solid [border-image:initial] gap-y-[calc(12.4737px+0.328947vw)] -mr-px">
                      <Link
                        href="/"
                        className="p-0 m-0 [color:inherit] no-underline box-border antialiased"
                      >
                        <div className=" min-w-0 relative cursor-default">
                          <div className=" min-w-0 absolute left-[calc(5.71429px-2.38095vw)] top-2/4 translate-x-0 -translate-y-1/2 pl-[calc(-4px+0.833333vw)] pr-[calc(-4px+0.833333vw)]">
                            <div className=" flex min-w-0 items-center justify-center relative h-[calc(2.28571px+0.714286vw)] w-[calc(2.28571px+0.714286vw)]">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 30 30"
                                className=" opacity-100 [transition-property:all] duration-200 ease-[ease] delay-[0ms] stroke-[0] h-full"
                              >
                                <path
                                  fill="#000"
                                  fillRule="evenodd"
                                  d="M23.372 17.21-9.724 9.724 2.21 2.21L30 15 15.858.856l-2.21 2.21 9.724 9.723-.648.648H0v3.125h22.723z"
                                  clipRule="evenodd"
                                  className=" [transition-property:all] duration-200 ease-[ease] delay-[0ms] stroke-[0]"
                                />
                              </svg>
                            </div>
                          </div>
                          <span className=" min-w-0 [transition-property:all] duration-200 ease-[ease] delay-[0ms] whitespace-nowrap !leading-[1.4] !font-normal !text-[calc(12.4737px+!0.328947vw)]">
                            US &amp; worldwide
                          </span>
                        </div>
                      </Link>
                      <a
                        href="/uk"
                        className="p-0 m-0 [color:inherit] no-underline box-border antialiased"
                      >
                        <div className=" min-w-0 relative">
                          <div className=" min-w-0 absolute left-[calc(5.71429px - 2.38095vw)] top-2/4 translate-x-0 -translate-y-1/2 pl-[calc(-4px+0.833333vw)] pr-[calc(-4px+0.833333vw)]">
                            <div className=" flex min-w-0 items-center justify-center relative h-[calc(2.28571px+0.714286vw)] w-[calc(2.28571px+0.714286vw)]">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 30 30"
                                className=" opacity-0 [transition-property:all] duration-200 ease-[ease] delay-[0ms] stroke-[0] h-full"
                              >
                                <path
                                  fill="#000"
                                  fillRule="evenodd"
                                  d="M23.372 17.21-9.724 9.724 2.21 2.21L30 15 15.858.856l-2.21 2.21 9.724 9.723-.648.648H0v3.125h22.723z"
                                  clipRule="evenodd"
                                  className=" [transition-property:all] duration-200 ease-[ease] delay-[0ms] stroke-[0]"
                                />
                              </svg>
                            </div>
                          </div>
                          <span className=" min-w-0 [transition-property:all] duration-200 ease-[ease] delay-[0ms] whitespace-nowrap !leading-[1.4] !font-normal !text-[calc(12.4737px+!0.328947vw)]">
                            UK
                          </span>
                        </div>
                      </a>
                      <a
                        href="/de"
                        className="p-0 m-0 [color:inherit] no-underline box-border antialiased"
                      >
                        <div className=" min-w-0 relative">
                          <div className=" min-w-0 absolute left-[calc(5.71429px-2.38095vw)] top-2/4 translate-x-0 -translate-y-1/2 pl-[calc(-4px+0.833333vw)] pr-[calc(-4px+0.833333vw)]">
                            <div className=" flex min-w-0 items-center justify-center relative h-[calc(2.28571px+0.714286vw)] w-[calc(2.28571px+0.714286vw)]">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 30 30"
                                className=" opacity-0 [transition-property:all] duration-200 ease-[ease] delay-[0ms] stroke-[0] h-full"
                              >
                                <path
                                  fill="#000"
                                  fillRule="evenodd"
                                  d="M23.372 17.21-9.724 9.724 2.21 2.21L30 15 15.858.856l-2.21 2.21 9.724 9.723-.648.648H0v3.125h22.723z"
                                  clipRule="evenodd"
                                  className=" [transition-property:all] duration-200 ease-[ease] delay-[0ms] stroke-[0]"
                                />
                              </svg>
                            </div>
                          </div>
                          <span className=" min-w-0 [transition-property:all] duration-200 ease-[ease] delay-[0ms] whitespace-nowrap !leading-[1.4] !font-normal !text-[calc(12.4737px+!0.328947vw)]">
                            DACH
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </>
          </div>

          <div className="flex overflow-hidden ">
            <div className="mxl:w-[1px] h-full bg-border w-0 z-[4]"></div>
            <div className="grid flex-[1_1_0] grid-flow-col items-center">
              {dropdownlinks.slice(0, -1).map((link, index) => (
                <div key={index} className="mxl:block hidden h-full group">
                  <div
                    onClick={() => handlenavlink(index)}
                    className="h-full cursor-pointer"
                  >
                    <div className="flex relative z-[4] h-full items-center justify-center ">
                      <span className="mxl:text-[calc(1.71429px+0.952381vw)]  md:text-[calc(12.4737px+0.328947vw)] text-text leading-[1.4] font-normal text-[calc(13px+0.260417vw)]">
                        {link}
                      </span>
                      <div
                        className={`flex m-[0px_0px_0px_calc(0.142857px+0.357143vw)] items-center duration-200 transition-all relative h-[calc(2.28571px+0.714286vw)] w-[calc(2.28571px+0.714286vw)] ${
                          activeDropDown === index + 1 ? "" : "rotate-180"
                        } `}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 13"
                        >
                          <path
                            fill="#000"
                            fillRule="evenodd"
                            d="M12 3.512 2.512 13 .756 11.243 11.999 0 12 .001h.001l11.243 11.242L21.488 13z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div
                        className={`absolute inset-0 h-full ${
                          activeDropDown === index + 1
                            ? "border-secondary"
                            : "border-transparent"
                        } border-b-[calc(-0.571429px+0.238095vw)] bg-transparent z-[-1] transition-all duration-200 group-hover:bg-background2  `}
                      ></div>
                    </div>
                    {index + 1 === 1 ? (
                      <Link1
                        activeDropDown={activeDropDown}
                        setActiveDropDown={setActiveDropDown}
                      />
                    ) : index + 1 === 2 ? (
                      <Link2
                        activeDropDown={activeDropDown}
                        setActiveDropDown={setActiveDropDown}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              ))}
              <div className="mxl:block hidden h-full group">
                <div
                  // onClick={() => handlenavlink(index)}
                  className="h-full cursor-pointer"
                >
                  <div className="flex relative z-[4] h-full items-center justify-center ">
                    <span className="mxl:text-[calc(1.71429px+0.952381vw)]  md:text-[calc(12.4737px+0.328947vw)] text-text leading-[1.4] font-normal text-[calc(13px+0.260417vw)]">
                      Portfolio
                    </span>
                    {/* <div
                      className={`flex m-[0px_0px_0px_calc(0.142857px+0.357143vw)] items-center duration-200 transition-all relative h-[calc(2.28571px+0.714286vw)] w-[calc(2.28571px+0.714286vw)] group-hover:rotate-180`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 13"
                      >
                        <path
                          fill="#000"
                          fillRule="evenodd"
                          d="M12 3.512 2.512 13 .756 11.243 11.999 0 12 .001h.001l11.243 11.242L21.488 13z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div> */}
                    <div
                      className={`absolute inset-0 h-full border-transparent border-b-[calc(-0.571429px+0.238095vw)] bg-transparent z-[-1] transition-all duration-200 group-hover:bg-background2  `}
                    ></div>
                  </div>
                  {/* {index + 1 === 1 ? (
                      <Link1
                        activeDropDown={activeDropDown}
                        setActiveDropDown={setActiveDropDown}
                      />
                    ) : index + 1 === 2 ? (
                      <Link2
                        activeDropDown={activeDropDown}
                        setActiveDropDown={setActiveDropDown}
                      />
                    ) : (
                      ""
                    )} */}
                </div>
              </div>
              {dropdownlinks.slice(-1).map((link, index) => (
                <div key={index} className="mxl:block hidden h-full group">
                  <div
                    onClick={() => handlenavlink(index)}
                    className="h-full cursor-pointer"
                  >
                    <div className="flex relative z-[4] h-full items-center justify-center ">
                      <span className="mxl:text-[calc(1.71429px+0.952381vw)]  md:text-[calc(12.4737px+0.328947vw)] text-text leading-[1.4] font-normal text-[calc(13px+0.260417vw)]">
                        {link}
                      </span>
                      <div
                        className={`flex m-[0px_0px_0px_calc(0.142857px+0.357143vw)] items-center duration-200 transition-all relative h-[calc(2.28571px+0.714286vw)] w-[calc(2.28571px+0.714286vw)] ${
                          activeDropDown === index + 1 ? "" : "rotate-180"
                        } `}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 13"
                        >
                          <path
                            fill="#000"
                            fillRule="evenodd"
                            d="M12 3.512 2.512 13 .756 11.243 11.999 0 12 .001h.001l11.243 11.242L21.488 13z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div
                        className={`absolute inset-0 h-full ${
                          activeDropDown === index + 1
                            ? "border-secondary"
                            : "border-transparent"
                        } border-b-[calc(-0.571429px+0.238095vw)] bg-transparent z-[-1] transition-all duration-200 group-hover:bg-background2  `}
                      ></div>
                    </div>
                    {/* {index + 1 === 1 ? (
                      <Link1
                        activeDropDown={activeDropDown}
                        setActiveDropDown={setActiveDropDown}
                      />
                    ) : index + 1 === 2 ? (
                      <Link2
                        activeDropDown={activeDropDown}
                        setActiveDropDown={setActiveDropDown}
                      />
                    ) : (
                      ""
                    )} */}
                  </div>
                </div>
              ))}
              <div className="mxl:block hidden h-full group">
                <div
                  // onClick={() => handlenavlink(index)}
                  className="h-full cursor-pointer"
                >
                  <div className="flex relative z-[4] h-full items-center justify-center ">
                    <span className="mxl:text-[calc(1.71429px+0.952381vw)]  md:text-[calc(12.4737px+0.328947vw)] text-text leading-[1.4] font-normal text-[calc(13px+0.260417vw)]">
                      Insights
                    </span>
                    {/* <div
                      className={`flex m-[0px_0px_0px_calc(0.142857px+0.357143vw)] items-center duration-200 transition-all relative h-[calc(2.28571px+0.714286vw)] w-[calc(2.28571px+0.714286vw)] group-hover:rotate-180`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 13"
                      >
                        <path
                          fill="#000"
                          fillRule="evenodd"
                          d="M12 3.512 2.512 13 .756 11.243 11.999 0 12 .001h.001l11.243 11.242L21.488 13z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div> */}
                    <div
                      className={`absolute inset-0 h-full border-transparent border-b-[calc(-0.571429px+0.238095vw)] bg-transparent z-[-1] transition-all duration-200 group-hover:bg-background2  `}
                    ></div>
                  </div>
                  {/* {index + 1 === 1 ? (
                      <Link1
                        activeDropDown={activeDropDown}
                        setActiveDropDown={setActiveDropDown}
                      />
                    ) : index + 1 === 2 ? (
                      <Link2
                        activeDropDown={activeDropDown}
                        setActiveDropDown={setActiveDropDown}
                      />
                    ) : (
                      ""
                    )} */}
                </div>
              </div>
            </div>

            <div className="mxl:block hidden overflow-hidden relative z-[4] h-full min-w-0">
              <a href="">
                <div className="flex items-center justify-center h-full bg-primary transition-all duration-[400] px-[calc(3.42857px+1.90476vw)] relative">
                  <span className="mxl:text-[calc(1.71429px+0.952381vw)]  md:text-[calc(12.4737px+0.328947vw)] text-primary_text transition-all duration-200 text-[calc(13px+0.260417vw)] leading-[1.4] font-normal">
                    Contact us
                  </span>
                </div>
              </a>
            </div>
          </div>
          <div className="mxl:px-[calc(-5.71429px+2.38095vw)] md:pr-[calc(5.89474px+1.31579vw)]  h-full z-[3] cursor-pointer transition-all duration-200 pl-0 pr-[calc(8px+1.04167vw)]">
            <div className=" flex min-w-0 items-center justify-center h-full visible [transition-property:all] duration-200 ease-[ease] delay-[0ms]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 30 30"
                className="p-0 m-0 mxl:h-[calc(1.14286px+1.19048vw)] fill-text h-[20px] box-border antialiased [transition-property:all] duration-200 ease-[ease] delay-[0ms] stroke-[0] h-[calc(1.14286px + 1.19048vw)]"
              >
                <path
                  fill="#000"
                  fillRule="evenodd"
                  d="M20.619 23.087a12.44 12.44 0 0 1-7.519 2.514C6.196 25.6.6 20.004.6 13.1.6 6.197 6.196.6 13.1.6c6.903 0 12.5 5.596 12.5 12.5 0 3.18-1.187 6.082-3.143 8.289l5.927 5.927-1.768 1.767zm2.481-9.986c0 5.522-4.477 10-10 10s-10-4.478-10-10 4.477-10 10-10 10 4.477 10 10"
                  clipRule="evenodd"
                  className=" fill-text [transition-property:all] duration-200 ease-[ease] delay-[0ms] stroke-[0]"
                ></path>
              </svg>
            </div>
          </div>
          {width && width < 1080 && (
            <div className="relative">
              <div onClick={handlenavopen} className="relative z-[3] h-full ">
                <div className=" min-w-0 w-full h-full items-center justify-center flex">
                  <div className=" flex min-w-0 items-center justify-center w-[calc(16.8372px+2.90698vw)] h-[calc(16.8372px+2.90698vw)]">
                    <div className=" min-w-0 relative cursor-pointer w-[calc(17.7674px+0.581395vw)] h-[calc(17.7674px+0.581395vw)]">
                      <div className=" min-w-0 w-full absolute top-2/4 translate-x-0 -translate-y-1/2">
                        <div
                          className={clsx(
                            "p-0 box-border antialiased min-w-0 w-full m-[0px_0px_calc(1.76744px+0.581395vw)] [transition-property:transform,_background-color] duration-[0.125s,0.0001s] delay-[0s,0.125s]  ease-linear translate-x-0  md:h-[3px] h-[2px]",
                            {
                              "bg-background [transform:translate3d(0px,150%,0px)]":
                                navopen === true,
                            },
                            {
                              "bg-background_reverse [transform:translate3d(0px,0px,0px)]":
                                navopen === false,
                            }
                          )}
                        ></div>
                        <div
                          className={clsx(
                            "min-w-0 w-full [transition-property:transform,_background-color] duration-[0.125s,.0001s] delay-[0s,0.125s] ease-linear  translate-x-0  md:h-[3px] h-[2px]",
                            {
                              "bg-background [transform:translate3d(0px,-150%,0px)]":
                                navopen === true,
                            },
                            {
                              "bg-background_reverse [transform:translate3d(0px,0px,0px)]":
                                navopen === false,
                            }
                          )}
                        ></div>
                      </div>
                      <div className=" min-w-0 w-full absolute top-2/4 translate-x-0 -translate-y-1/2">
                        <div
                          className={clsx(
                            " min-w-0 w-full [transition-property:transform,_background-color] duration-[.125s,.0001s] delay-[.075s,0.075s]  ease-linear absolute top-2/4 translate-x-0 -translate-y-1/2  md:h-[3px] h-[2px]",
                            {
                              "bg-background_reverse [transform:rotateZ(45deg)]":
                                navopen === true,
                            },
                            {
                              "bg-background [transform:rotateZ(0)]":
                                navopen === false,
                            }
                          )}
                        ></div>
                        <div
                          className={clsx(
                            " min-w-0 w-full [transition-property:transform,_background-color] duration-[.125s,.0001s] delay-[0.075s,0.075s]  ease-linear absolute top-2/4 translate-x-0  -translate-y-1/2  md:h-[3px] h-[2px]",
                            {
                              "bg-background_reverse [transform:rotateZ(-45deg)]":
                                navopen === true,
                            },
                            {
                              "bg-background [transform:rotateZ(0)]":
                                navopen === false,
                            }
                          )}
                        ></div>
                      </div>
                      {/* <div className=" min-w-0 w-full absolute top-2/4 translate-x-0 -translate-y-1/2 opacity-0 h-full">
                      <div className=" min-w-0 w-full absolute top-2/4 translate-x-0 -translate-y-1/2 rotate-45 [transition-property:all] duration-200 ease-[ease] delay-[0ms] md:h-[3px] h-[2px]"></div>
                      <div className=" min-w-0 w-full absolute top-2/4 translate-x-0 -translate-y-1/2 -rotate-45 [transition-property:all] duration-200 ease-[ease] delay-[0ms] md:h-[3px] h-[2px]"></div>
                    </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* mobile nav  */}
        {width && width < 1080 && (
          <div
            className={clsx("mobnavdrop", {
              "[transform:translate3d(0px,0px,0px) visible delay-[0s,0s]":
                navopen === true,
              "[transform:translate3d(0px,-100%,0px)]  invisible delay-[0s,0.5s]":
                navopen === false,
            })}
          >
            <div className="flex mb-[-1px] grow h-[1px] min-w-0">
              <div className="grid md:grid-cols-[4fr_12fr] md:grid-rows-[auto] w-full min-w-0 grid-cols-1 grid-rows-[0px_1fr]">
                <div className="min-w-0"></div>
                <div className="relative min-w-0">
                  <div className="md:border-l min-w-0  border-l-border absolute overflow-auto bg-background inset-0 pb-[47px]     ">
                    {dropdownlinks.slice(0, -1).map((link, index) => (
                      <div
                        key={index}
                        className=" min-w-0 border-b [border-bottom-style:solid] group hover:bg-background2 cursor-pointer md:px-[calc(5.89474px+1.31579vw)] bg-background border-border p-[calc(13px+0.260417vw)_calc(8px+1.04167vw)]"
                      >
                        <div className="p-0  flex min-w-0 justify-between items-center">
                          <span className="p-0  min-w-0 [transition-property:all] duration-200 group-hover:text-secondary ease-[ease] delay-[0ms] !leading-[1.4] !font-normal font-aeonikpro-regular text-text text-[calc(14px+0.520833vw)] md:text-[calc(12.9474px+0.657895vw)]">
                            {link}
                          </span>
                          <div className="p-0  flex min-w-0 items-center justify-center h-full [transition-property:all] duration-200 ease-[ease] delay-[0ms]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              className="p-0  [transition-property:all] fill-text group-hover:fill-secondary duration-200 ease-[ease] delay-[0ms] stroke-[0] h-[16px]"
                            >
                              <path
                                fill="#000"
                                fillRule="evenodd"
                                d="M20.488 12 11 2.512 12.757.755 24 12h-.001v.002L12.758 23.244 11 21.487z"
                                clipRule="evenodd"
                                className="p-0 fill-text [transition-property:all] group-hover:fill-secondary duration-200 ease-[ease] delay-[0ms] stroke-[0]"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    ))}
                    <a href="">
                      <div className=" min-w-0 border-b [border-bottom-style:solid] group hover:bg-background2 cursor-pointer md:px-[calc(5.89474px+1.31579vw)] bg-background border-border p-[calc(13px+0.260417vw)_calc(8px+1.04167vw)]">
                        <div className="p-0  flex min-w-0 justify-between items-center">
                          <span className="p-0 font-aeonikpro-regular min-w-0 [transition-property:all] duration-200 group-hover:text-secondary ease-[ease] delay-[0ms] !leading-[1.4] !font-normal text-text text-[calc(14px+0.520833vw)] md:text-[calc(12.9474px+0.657895vw)]">
                            Portfolio
                          </span>
                          <div className="p-0  flex min-w-0 items-center justify-center h-full [transition-property:all] duration-200 ease-[ease] delay-[0ms]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              className="p-0  [transition-property:all] fill-text group-hover:fill-secondary duration-200 ease-[ease] delay-[0ms] stroke-[0] h-[16px]"
                            >
                              <path
                                fill="#000"
                                fillRule="evenodd"
                                d="M20.488 12 11 2.512 12.757.755 24 12h-.001v.002L12.758 23.244 11 21.487z"
                                clipRule="evenodd"
                                className="p-0 fill-text [transition-property:all] group-hover:fill-secondary duration-200 ease-[ease] delay-[0ms] stroke-[0]"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </a>
                    {dropdownlinks.slice(-1).map((link, index) => (
                      <div
                        key={index}
                        className=" min-w-0 border-b [border-bottom-style:solid] group hover:bg-background2 cursor-pointer md:px-[calc(5.89474px+1.31579vw)] bg-background border-border p-[calc(13px+0.260417vw)_calc(8px+1.04167vw)]"
                      >
                        <div className="p-0  flex min-w-0 justify-between items-center">
                          <span className="p-0 font-aeonikpro-regular  min-w-0 [transition-property:all] duration-200 group-hover:text-secondary ease-[ease] delay-[0ms] !leading-[1.4] !font-normal text-text text-[calc(14px+0.520833vw)] md:text-[calc(12.9474px+0.657895vw)]">
                            {link}
                          </span>
                          <div className="p-0  flex min-w-0 items-center justify-center h-full [transition-property:all] duration-200 ease-[ease] delay-[0ms]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              className="p-0  [transition-property:all] fill-text group-hover:fill-secondary duration-200 ease-[ease] delay-[0ms] stroke-[0] h-[16px]"
                            >
                              <path
                                fill="#000"
                                fillRule="evenodd"
                                d="M20.488 12 11 2.512 12.757.755 24 12h-.001v.002L12.758 23.244 11 21.487z"
                                clipRule="evenodd"
                                className="p-0 fill-text [transition-property:all] group-hover:fill-secondary duration-200 ease-[ease] delay-[0ms] stroke-[0]"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    ))}
                    <a href="">
                      <div className=" min-w-0 border-b [border-bottom-style:solid] group hover:bg-background2 cursor-pointer md:px-[calc(5.89474px+1.31579vw)] bg-background border-border p-[calc(13px+0.260417vw)_calc(8px+1.04167vw)]">
                        <div className="p-0  flex min-w-0 justify-between items-center">
                          <span className="p-0 font-aeonikpro-regular min-w-0 [transition-property:all] duration-200 group-hover:text-secondary ease-[ease] delay-[0ms] !leading-[1.4] !font-normal text-text text-[calc(14px+0.520833vw)] md:text-[calc(12.9474px+0.657895vw)]">
                            Insignts
                          </span>
                          <div className="p-0  flex min-w-0 items-center justify-center h-full [transition-property:all] duration-200 ease-[ease] delay-[0ms]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              className="p-0  [transition-property:all] fill-text group-hover:fill-secondary duration-200 ease-[ease] delay-[0ms] stroke-[0] h-[16px]"
                            >
                              <path
                                fill="#000"
                                fillRule="evenodd"
                                d="M20.488 12 11 2.512 12.757.755 24 12h-.001v.002L12.758 23.244 11 21.487z"
                                clipRule="evenodd"
                                className="p-0 fill-text [transition-property:all] group-hover:fill-secondary duration-200 ease-[ease] delay-[0ms] stroke-[0]"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </a>
                    <div className="flex flex-col "></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:grid-cols-[4fr_12fr] grid border-b border-border w-full z-[0] grid-cols-1 border-t md:border-t-[0px]">
              {/* <div className=" flex min-w-0 items-center [border-top-style:solid] pl-[calc(5.89474px+1.31579vw)] pr-[calc(5.89474px+1.31579vw)] row-[1] border-t-0">
                <div className=" flex min-w-0 items-center h-auto pt-0 pb-0 w-full">
                  <div className="pt-[calc(2.44186px+0.145349vw)] m-0 box-border antialiased min-w-0 border border-solid [border-image:initial] rounded-[34px]">
                    <div className=" flex min-w-0 relative">
                      <div className=" min-w-0 cursor-pointer">
                        <div className="p-0 mt-[calc(4.88372px+0.290698vw)] box-border antialiased flex min-w-0 items-center justify-center relative h-[calc(13.7674px+0.581395vw)] w-[calc(13.7674px+0.581395vw)]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 25"
                            className=" [transition-property:all] duration-200 ease-[ease] delay-[0ms] stroke-[0] h-full"
                          >
                            <path
                              fill="#000"
                              fillRule="evenodd"
                              d="M10.62 1.9c.2.27.22.64.05.94A8.27 8.27 0 0 0 9.5 7.08a8.43 8.43 0 0 0 12.23 7.46.88.88 0 0 1 .95.1c.26.22.37.58.27.91a11.2 11.2 0 0 1-10.75 7.99C6 23.54 1 18.56 1 12.4 1 7.1 4.73 2.67 9.73 1.55c.33-.08.69.05.89.33ZM8.3 3.84a9.4 9.4 0 0 0-5.56 8.56c0 5.2 4.24 9.4 9.47 9.4a9.48 9.48 0 0 0 8.36-4.99A10.13 10.13 0 0 1 8.3 3.85Z"
                              clipRule="evenodd"
                              className=" [transition-property:all] duration-200 ease-[ease] delay-[0ms] stroke-[0]"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className=" min-w-0 cursor-pointer">
                        <div className="p-0 mt-[calc(4.88372px+0.290698vw)] box-border antialiased flex min-w-0 items-center justify-center relative h-[calc(13.7674px+0.581395vw)] w-[calc(13.7674px+0.581395vw)]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 25"
                            className=" [transition-property:all] duration-200 ease-[ease] delay-[0ms] stroke-[0] h-full"
                          >
                            <path
                              fill="#000"
                              fillRule="evenodd"
                              d="M11.98.537c.5 0 .904.404.904.903v2.008a.903.903 0 0 1-1.807 0V1.44c0-.499.405-.903.903-.903m0 16.664a4.718 4.718 0 1 0 0-9.437 4.718 4.718 0 0 0 0 9.437m0 1.807a6.525 6.525 0 1 0 0-13.05 6.525 6.525 0 0 0 0 13.05m.904 2.62a.903.903 0 1 0-1.807 0v2.007a.903.903 0 1 0 1.807 0zm7.582-17.576a.903.903 0 0 1 0 1.277l-1.42 1.42a.903.903 0 1 1-1.277-1.278l1.42-1.42a.903.903 0 0 1 1.277 0ZM6.192 19.604a.903.903 0 1 0-1.278-1.277l-1.42 1.42a.903.903 0 1 0 1.278 1.277zm14.275 1.42a.904.904 0 0 1-1.278 0l-1.42-1.42a.903.903 0 1 1 1.278-1.278l1.42 1.42a.904.904 0 0 1 0 1.277ZM4.914 6.748A.903.903 0 1 0 6.192 5.47l-1.42-1.42a.903.903 0 1 0-1.278 1.28l1.42 1.42ZM24 12.466a.903.903 0 0 1-.904.903H21.09a.903.903 0 1 1 0-1.806h2.008c.498 0 .903.404.903.903Zm-21.089.903a.903.903 0 0 0 0-1.806H.903a.903.903 0 1 0 0 1.806z"
                              clipRule="evenodd"
                              className=" [transition-property:all] duration-200 ease-[ease] delay-[0ms] stroke-[0]"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className=" min-w-0 rounded-[50%] absolute top-2/4 translate-x-full -translate-y-1/2 [transition-property:all] duration-200 ease-[ease] delay-[0ms] w-[calc(23.5349px+1.16279vw)] h-[calc(23.5349px+1.16279vw)]" />
                    </div>
                  </div>
                  <div className=" min-w-0 hidden pl-[10px]">
                    <span className=" min-w-0 [transition-property:all] duration-200 ease-[ease] delay-[0ms] !leading-[1.4] !font-medium !text-[calc(12.4737px+0.328947vw)]">
                      Light mode
                    </span>
                  </div>
                </div>
              </div> */}
              <div></div>
              <div className="md:border-l row-span-1  border-l-border bg-background  ">
                <a href="">
                  <div className="m-0 box-border antialiased flex min-w-0 group hover:bg-secondary flex-1 h-full md:p-[calc(12.9474px+0.657895vw)_calc(5.89474px+1.31579vw)] bg-primary p-[calc(21px+0.78125vw)_calc(8px+1.04167vw)] justify-between [transition-property:all] duration-200 ease-[ease] delay-[0ms]">
                    <span className=" min-w-0 [transition-property:all] duration-200 ease-[ease] delay-[0ms] !leading-[1.4] !font-medium group-hover:text-primary_hover_text text-primary_text text-[calc(14px+0.520833vw)] md:text-[calc(12.9474px+0.657895vw)]">
                      Contact us
                    </span>
                    <div className="p-0 box-border antialiased flex min-w-0 items-center justify-center relative w-[calc(13.7674px+0.581395vw)] m-[calc(2.44186px+0.145349vw)_0px_0px_calc(13.7674px+0.581395vw)] h-[calc(13.7674px+0.581395vw)]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="  fill-primary_text group-hover:fill-primary_hover_text [transition-property:all] duration-200 ease-[ease] delay-[0ms] stroke-[0] h-full"
                      >
                        <path
                          fill="#000"
                          d="M17 4.632V3.35H0V0h24v24h-3.349V7h-1.283L2.97 23.398.602 21.03z"
                          className=" fill-primary_text group-hover:fill-primary_hover_text [transition-property:all] duration-200 ease-[ease] delay-[0ms] stroke-[0]"
                        />
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;

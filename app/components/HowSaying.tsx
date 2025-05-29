"use client";
import React, { useState } from "react";
import { gsap } from "gsap";
import { useWindowSize } from "@uidotdev/usehooks";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image from "next/image";
import TextReveal from "./TextReveal";
gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(useGSAP);
const imagepatterns = [
  "https://ik.imagekit.io/4icxlwaom/Rubrik_idsw_a10gh_0.svg?updatedAt=1746185055545",
  "https://ik.imagekit.io/4icxlwaom/chargebee.svg?updatedAt=1746184887762",
  "https://ik.imagekit.io/4icxlwaom/plum_rebranded_logo.svg?updatedAt=1746184887464",
  "https://ik.imagekit.io/4icxlwaom/servicenow.svg?updatedAt=1746184887213",
  "https://ik.imagekit.io/4icxlwaom/autodesk.svg?updatedAt=1746184886830",
  "https://ik.imagekit.io/4icxlwaom/adobe.svg?updatedAt=1746184886877",
  "https://ik.imagekit.io/4icxlwaom/Snowflake_idCkdSg0B6_0.svg?updatedAt=1746184886821",
  "https://ik.imagekit.io/4icxlwaom/atlassian.svg?updatedAt=1746184810193",
  "https://ik.imagekit.io/4icxlwaom/Visa%20Inc%20logo%20-%20Brandlogos.net.svg?updatedAt=1746184809989",
  "https://ik.imagekit.io/4icxlwaom/amazon.svg?updatedAt=1746184809995",
  "https://ik.imagekit.io/4icxlwaom/myntra.svg?updatedAt=1746184761746",
  "https://ik.imagekit.io/4icxlwaom/turing.svg?updatedAt=1746184761710",
  "https://ik.imagekit.io/4icxlwaom/swiggy.svg?updatedAt=1746184761711",
  "https://ik.imagekit.io/4icxlwaom/PAYO.png?updatedAt=1746184704374",
  "https://ik.imagekit.io/4icxlwaom/cdnlogo.com_goldman-sachs.svg?updatedAt=1746184704435",
  "https://ik.imagekit.io/4icxlwaom/oracle.svg?updatedAt=1746184701472",
  "https://ik.imagekit.io/4icxlwaom/GWRE.svg?updatedAt=1746184701520",
  "https://ik.imagekit.io/4icxlwaom/KD.svg?updatedAt=1746184701383",
  "https://ik.imagekit.io/4icxlwaom/sharechat.svg?updatedAt=1746184701291",
  "https://ik.imagekit.io/4icxlwaom/uber.svg?updatedAt=1746184701026",
  "https://ik.imagekit.io/4icxlwaom/TOST.svg?updatedAt=1746184701019",
  "https://ik.imagekit.io/4icxlwaom/PGRU.svg?updatedAt=1746184700964",
  "https://ik.imagekit.io/4icxlwaom/microsoft-svgrepo-com.svg?updatedAt=1746184700494",
  "https://ik.imagekit.io/4icxlwaom/linkedin-svgrepo-com.svg?updatedAt=1746184700483",
  "https://ik.imagekit.io/4icxlwaom/AAPL.svg?updatedAt=1746184696927",
  "https://ik.imagekit.io/4icxlwaom/JPM.svg?updatedAt=1746184697127",
  "https://ik.imagekit.io/4icxlwaom/INTU.svg?updatedAt=1746184697102",
  "https://ik.imagekit.io/4icxlwaom/NKE.svg?updatedAt=1746184697022",
  "https://ik.imagekit.io/4icxlwaom/PANW.svg?updatedAt=1746184696868",
  "https://ik.imagekit.io/4icxlwaom/GIB.svg?updatedAt=1746184696861",
  "https://ik.imagekit.io/4icxlwaom/BK.svg?updatedAt=1746184696815",
  "https://ik.imagekit.io/4icxlwaom/YHOO.defunct.2017.svg?updatedAt=1746184696779",
  "https://ik.imagekit.io/4icxlwaom/WMT.svg?updatedAt=1746184696681",
  "https://ik.imagekit.io/4icxlwaom/COUP.svg?updatedAt=1746184696727",
];
const iamgeslength = imagepatterns.length;
const HowSaying = () => {
  const [logonum, setLogonum] = useState(0);
  const { width, height } = useWindowSize();
  console.log(width, height);

  useGSAP(
    () => {
      if (width && height) {
        // console.log("shiva");
        const g = width > height;
        console.log(g);
        const l = height * (g ? 0.15 : 1);
        const v =
          width > 1080
            ? 7
            : width <= 1080 && width > 768
            ? 5
            : width <= 768 && width > 425
            ? 3
            : 1;
        console.log(g, l, v);

        gsap.fromTo(
          ".pattern-review",
          { opacity: 0 },
          {
            scrollTrigger: {
              trigger: ".review-container",
              scrub: 1,
              start: "top bottom+=".concat(l.toString()),
              end: "bottom bottom+=".concat(l.toString()),
              // markers: true,
            },
            opacity: 1,
            duration: 1,
            ease: "power2.in",
            // yoyo: !0,
            stagger: {
              // from: v * 4,
              amount: 1,
              axis: "y",
              grid: [Math.ceil(iamgeslength / v), v],
            },
          }
        );
        //   gsap.from("#textcontainer",{
        //     opacity:0,
        //     y:100,
        //     duration:1,
        //     ease:"power3.out",
        //     stagger:0.5
        //   })
      }
    },
    { dependencies: [width, height], revertOnUpdate: true }
  );

  // const handleclick = () => {
  //   console.log("clicked");
  // };

  return (
    <section className="textcontainer">
      <div className="grid  2xl:grid-cols-[120px_12fr_1.5fr] 4k:grid-cols-[160px_12fr_1.5fr] mxl:grid-cols-[1fr_12fr_1.5fr] grid-cols-1">
        <div className="min-w-0"></div>
        <div className="border-b-2 p-[49.1929px_0px_0px] border-l-2 border-secondary_light_green/[.3]">
          <div className="compromiseindivcont ">
            {/* <div className="cols"> */}
            <div className="compromiseindivcontleftcont">
              <TextReveal classes="">
                <div className="compromiseindivcontleftcontleftnum ">1</div>
                <p className="compromiseindivcontleftcontlefdesc">
                  company’s compromised OA
                </p>
              </TextReveal>
            </div>
            <div className="compromiseindivcontleftcontrightcont">
              <TextReveal classes="">
                <p className="compromiseindivcontleftcontrightcontext">
                  might be an incident
                </p>
              </TextReveal>
            </div>
          </div>
          <div className="compromiseindivcont">
            {/* <div className="cols"> */}
            <div className="compromiseindivcontleftcont">
              <TextReveal classes="">
                <div className="compromiseindivcontleftcontleftnum">10+</div>
                <p className="compromiseindivcontleftcontlefdesc">
                  companies compromised OA&apos;s
                </p>
              </TextReveal>
            </div>
            <div className="compromiseindivcontleftcontrightcont">
              <TextReveal classes="">
                <p className="compromiseindivcontleftcontrightcontext">
                  signals a problem
                </p>
              </TextReveal>
            </div>
          </div>
          <div className="compromiseindivcont">
            {/* <div className="cols"> */}
            <div className="compromiseindivcontleftcont">
              <TextReveal classes="">
                <div className="compromiseindivcontleftcontleftnum">100+</div>
                <p className="compromiseindivcontleftcontlefdesc">
                  companies compromised OA&apos;s
                </p>
              </TextReveal>
            </div>
            <div className="compromiseindivcontleftcontrightcont">
              <TextReveal classes="">
                <p className="compromiseindivcontleftcontrightcontext">
                  reveals an epidemic
                </p>
              </TextReveal>
            </div>
          </div>
        </div>
        <div className="min-w-0 border-b-2 border-secondary_light_green/[.3]"></div>
      </div>
      <div className="2xl:grid-cols-[120px_12fr_1.5fr] 4k:grid-cols-[160px_12fr_1.5fr] mxl:grid-cols-[1fr_12fr_1.5fr] grid-cols-1  grid  ">
        <div className="min-w-0"></div>
        <div className="border-l-2 border-secondary_light_green/[.3]">
          <div className="review-container  grid  gap-[calc(11px+0.260417vw)_0px] mxl:grid-cols-7 mxl:gap-y-[calc(-2px+1.66667vw)] py-16 mxl:py-24 mxl:px-[calc(-5.71429px+2.38095vw)] md:grid-cols-5 md:gap-y-[calc(16.9474px+0.657895vw)] md:px-[calc(5.89474px+1.31579vw)] grid-cols-3 px-[calc(8px+1.04167vw)] ">
            {imagepatterns.map((item, index) => (
              <div key={index} className="relative min-w-0 ">
                <div
                  onClick={
                    width && width < 768
                      ? () => setLogonum(index + 1)
                      : () => {}
                  }
                  className={`pattern-review flex items-center justify-center group ${
                    index + 1 === logonum && "bg-white"
                  } md:hover:bg-white ease-in duration-300`}
                >
                  <Image
                    src={item}
                    alt=""
                    width={100}
                    height={100}
                    className={`w-full h-full rounded-[50%] opacity-0 md:group-hover:opacity-100 duration-300 ${
                      index + 1 === logonum && "opacity-100"
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* text  */}
          <div className="w-full">
            <div className="flex justify-end p-8">
              {/* <div className="mxl:hidden  text-[22px]  leading-[180%] font-medium text-black">
                <TextReveal classes="">
                  <p>
                    Tracking Integrity: 1,000+ identifiers detected across
                    compromised OAs of 100+ tech companies
                  </p>
                </TextReveal>
              </div> */}
              <div className="max-w-[555px] md:hidden text-[32px]  leading-[180%] font-medium text-black">
                <TextReveal classes="">
                  <p>
                    Tracking Integrity: 1,000+ identifiers detected across
                    compromised OAs of 100+ tech companies
                  </p>
                </TextReveal>
              </div>
              <div className="max-w-[555px] max-md:hidden text-[32px]  leading-[180%] font-medium text-black">
                <TextReveal classes="">
                  <p>Tracking Integrity: 1,000+ identifiers </p>
                  <p>detected across compromised OAs</p>
                  <p>of 100+ tech companies</p>
                </TextReveal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowSaying;

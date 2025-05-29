"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

const PreLoader = ({
  setLoading,
}: {
  setLoading: (value: boolean) => void;
}) => {
  const container = useRef<HTMLDivElement>(null);
  const counter = useRef<HTMLDivElement>(null);
  const [bodyElement, setBodyElement] = useState<HTMLElement | null>(null);
  let i = {
    value: 0,
  };
  useEffect(() => {
    const body = document && document.getElementsByTagName("body");
    body[0].style.overflow = "hidden";
    if (!container.current) {
      return;
    }
    container.current.style.opacity = "1";
    container.current.style.display = "flex";
    if (typeof document !== "undefined") {
      setBodyElement(document.getElementsByTagName("body")[0]);
    }
  }, []);
  useLayoutEffect(() => {
    // console.log(container.current);
    // if (!container.current) {
    //   return;
    // }
    // container.current.style.opacity = "1";
    // container.current.style.display = "flex";
  }, []);
  // useEffect(() => {
  //   console.log(container.current);
  //   if (bodyElement) {
  //     // bodyElement.style.overflow = "hidden";
  //     let currentValue = 0;
  //     let timeoutId: NodeJS.Timeout; // 👈 Type for setTimeout ID
  //     if (!bodyElement) return;

  //     function updateCounter() {
  //       console.log(currentValue);

  //       if (currentValue === 100) {
  //         return;
  //       }

  //       currentValue += Math.floor(Math.random() * 10) + 1;

  //       if (currentValue > 100) {
  //         currentValue = 100;
  //       }

  //       if (counter.current) {
  //         counter.current.textContent = currentValue.toString();
  //       }

  //       const delay = Math.floor(Math.random() * 200) + 50;
  //       timeoutId = setTimeout(updateCounter, delay);
  //     }

  //     updateCounter();

  //     return () => {
  //       clearTimeout(timeoutId); // 👈 Clean up if component unmounts
  //     };
  //   }
  // }, [bodyElement]);
  useGSAP(
    () => {
      if (!bodyElement) return;
      const t = function () {
        let o = Math.round(i.value);
        if (counter.current) {
          counter.current.textContent = o.toString();
        }
      };
      const r = gsap.timeline({
        onComplete: () => {
          setTimeout(() => {
            if (!container.current) return;
            container.current.remove();
          }, 500),
            (bodyElement.style.overflow = "");
          setLoading(true);
        },
      });
      r.to(i, {
        value: 100,
        onUpdate: t,
        duration: 5,
        ease: "power2.out",
      });
    },
    { dependencies: [bodyElement], revertOnUpdate: true }
  );

  return (
    <div
      ref={container}
      className="block z-[1000000000] fixed inset-0 h-[100dvh] w-full"
    >
      <div className="w-full  justify-end   flex-col  inset-0  flex items-end z-100  bg-[rgb(235,235,237)]  h-[100dvh] pb-[2.5rem] relative ">
        <div className=" w-full  max-w-[90rem] mb-0 mx-auto px-[1.25rem]  ">
          <div className="box-border justify-between items-end  flex">
            <div className="box-border max-w-[23.75rem]">
              <div className="box-border text-[#b8cce7] [font-family:'Neue_Haas_Grotesk_Display_Pro'] leading-[0.95] tracking-[-0.175rem] mt-0 mb-0 -ml-0.5 font-medium text-[2rem] md:text-[3.5rem]">
                Loading your perfect voice…
              </div>
            </div>
            <div
              ref={counter}
              className="box-border text-[#25292e] [font-family:'Neue_Haas_Grotesk_Display_Pro'] tracking-[-0.6875rem] text-[9rem] leading-[0.8]"
            >
              00
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreLoader;

"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

const PreLoader = () => {
  const container = useRef<HTMLDivElement>(null);
  const counter = useRef<HTMLDivElement>(null);
  const [bodyElement, setBodyElement] = useState<HTMLElement | null>(null);
  useEffect(() => {
    const body = document && document.getElementsByTagName("body");
    body[0].style.overflow = "hidden";
    if (typeof document !== "undefined") {
      setBodyElement(document.getElementsByTagName("body")[0]);
    }
  }, []);
  useEffect(() => {
    // console.log(bodyElement);
    if (bodyElement) {
      // bodyElement.style.overflow = "hidden";
      let currentValue = 0;
      let timeoutId: NodeJS.Timeout; // 👈 Type for setTimeout ID
      if (!bodyElement) return;

      function updateCounter() {
        // console.log(currentValue);

        if (currentValue === 100) {
          return;
        }

        currentValue += Math.floor(Math.random() * 10) + 1;

        if (currentValue > 100) {
          currentValue = 100;
        }

        if (counter.current) {
          counter.current.textContent = currentValue.toString();
        }

        const delay = Math.floor(Math.random() * 200) + 50;
        timeoutId = setTimeout(updateCounter, delay);
      }

      updateCounter();

      return () => {
        clearTimeout(timeoutId); // 👈 Clean up if component unmounts
      };
    }
  }, [bodyElement]);
  useGSAP(() => {
    if (!bodyElement) return;
    gsap.to(container.current, {
      delay: 3.5,
      duration: 0.25,
      opacity: 0,
      onComplete: () => {
        container.current?.remove();
        bodyElement.style.overflow = "";
      },
    });
  }, [bodyElement]);
  return (
    <div
      ref={container}
      className="w-full flex items-end z-[67783456] bg-[rgb(235,235,237)] relative h-screen "
    >
      <div className="flex items-end grow flex-col p-10">
        <div className="box-border justify-between items-end w-full h-full px-5 flex">
          <div className="box-border max-w-[23.75rem]">
            <div className="box-border text-[#b8cce7] font-funnelDisplay leading-[0.95] tracking-[-0.175rem] mt-0 mb-0 -ml-0.5 font-medium text-[2rem] md:text-[3.5rem]">
              Loading your perfect voice…
            </div>
          </div>
          <div
            ref={counter}
            className="box-border text-[#25292e] font-funnelDisplay tracking-[-0.6875rem] text-[9rem] leading-[0.8]"
          >
            0
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreLoader;

"use client";
import { useWindowSize } from "@uidotdev/usehooks";
import Image from "next/image";
import React from "react";
import ImageReveal from "./ImageReveal";

const AlmosteverytopIMg = () => {
  const width = useWindowSize().width;
  return (
    <ImageReveal>
      {width && width > 768 ? (
        <Image
          src="/oaintegrity.png"
          className="mx-auto w-full object-cover  mxl:aspect-[1280/790]"
          width={1280}
          height={790}
          alt=""
        />
      ) : (
        <Image
          src="/oaintegritysmall.png"
          className="mx-auto w-full object-cover "
          width={1280}
          height={790}
          alt=""
        />
      )}
    </ImageReveal>
  );
};

export default AlmosteverytopIMg;

"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Upskill = () => {
  const upskillVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 1,
      },
    },
  };
  return (
    <motion.div
      variants={upskillVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="bg-white z-[3] absolute md:relative ml-3 md:ml-8 mxl:ml-16 2xl:ml-24 mb-12  space-y-6 px-5 pb-10 py-5"
    >
      <Image src="/googlelogo.svg" alt="" width={30} height={30} />
      <div className="bg-secondary_yellow relative space-y-2 px-4 py-3 ">
        <p className="font-medium text-[20px] text-text-nearwhite tracking-wide">
          UPSKILLING LAUNCHPAD OA
        </p>
        <div className="bg-yellow px-4 w-max py-2">
          <p className="font-normal text-[16px] tracking-[.02em] leading-[1.3] text-near-black">
            6 assessment takers detected{" "}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Upskill;

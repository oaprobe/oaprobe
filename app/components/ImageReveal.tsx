"use client";
import React from "react";
import { motion } from "motion/react";

const ImageReveal = ({ children }: { children: React.ReactNode }) => {
  const varianst = {
    initial: {
      clipPath: "inset(0px 100% 0px 0px)",
    },
    animate: {
      clipPath: "inset(0px 0% 0px 0px)",
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <motion.div
      variants={varianst}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default ImageReveal;

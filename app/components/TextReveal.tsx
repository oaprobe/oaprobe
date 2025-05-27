"use client";
import React from "react";
import { motion } from "motion/react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);
const TextReveal = ({
  children,
  classes,
}: {
  children: React.ReactNode;
  classes: string;
}) => {
  // const ref = useRef(null);
  // const isinview = useInView(ref, { once: true });

  // useEffect(() => {
  //   gsap.from(ref.current, {
  //     opacity: 0,
  //     y: 50,
  //     duration: 0.5,
  //     scrollTrigger: {
  //       trigger: ref.current,
  //       // start: "top 20%",
  //       once: true,
  //     },
  //     stagger: 0.2,
  //   });
  // }, []);
  // const childCount = React.Children.count(children);
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.2,
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: "100%" },
    show: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.2,
      },
    },
  };
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={classes}
    >
      {React.Children.map(children, (child) => (
        <div className="overflow-hidden">
          <motion.div variants={item}>{child}</motion.div>
        </div>
      ))}
    </motion.div>
  );
};

export default TextReveal;

import clsx from "clsx";
import React from "react";
import TextReveal from "./TextReveal";
interface Props {
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
  comp: string;
  desc: string;
  index: number;
  prevActive: number;
  setPrevActive: React.Dispatch<React.SetStateAction<number>>;
}
const HoverReveal = ({
  active,
  setActive,
  comp,
  desc,
  index,
  prevActive,
  setPrevActive,
}: Props) => {
  let less = active < index + 1;
  let gret = active > index + 1;
  if (active === index + 1) {
    if (prevActive < active) {
      less = true;
      gret = false;
    } else {
      less = false;
      gret = true;
    }
  }
  return (
    <div
      onMouseEnter={() => {
        setActive(index + 1);
        setPrevActive(active);
      }}
      className={clsx("p-10 2xl:p-20 relative ", {
        "pb-24 2xl:pb-28": active === index + 1,
      })}
    >
      <div
        className={clsx(
          "absolute  inset-0 transition-transform duration-300 bg-secondary_light_green z-[-1] ease-[cubic-bezier(0.215,0.61,0.355,1)] ",
          {
            "origin-[center_top]": less,
            "origin-[center_bottom]": gret,
            "[transform:scale3d(1,0,1)] ": active !== index + 1,
            "[transform:scale3d(1,1,1)] ": active === index + 1,
          }
        )}
      ></div>
      <div className="flex max-mxl:flex-col justify-between">
        <TextReveal>
          <h1
            className={clsx(
              "font-normal transition-colors duration-300 text-[2.25rem] ",
              {
                "text-green": active === index + 1,
                "text-black": active !== index + 1,
              }
            )}
          >
            {comp}
          </h1>
        </TextReveal>
        <div
          className={clsx(
            " overflow-hidden  transition-all delay-0 duration-500",
            {
              "h-[58px]": active === index + 1,
              "h-0": active !== index + 1,
            }
          )}
        >
          <TextReveal>
            <p className="max-w-[448px] h-full  text-white font-normal text-[1rem] leading-[2]">
              {desc}
            </p>
          </TextReveal>
        </div>
      </div>
    </div>
  );
};

export default HoverReveal;

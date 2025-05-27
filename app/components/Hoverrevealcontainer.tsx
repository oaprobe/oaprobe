"use client";
import React, { useState } from "react";
import HoverReveal from "./HoverReveal";

const Hoverrevealcontainer = () => {
  const [active, setActive] = useState(1);
  const [prevActive, setPrevActive] = useState(1);
  const comapnycases = [
    {
      companyname: "Flipkart",
      description:
        "Meesho extended an offer to a student who had submitted OA problems code solutions copied from a Telegram group.",
    },
    {
      companyname: "Meesho",
      description:
        "Meesho extended an offer to a student who had submitted OA problems code solutions copied from a Telegram group.",
    },
    {
      companyname: "Amazon",
      description:
        "Meesho extended an offer to a student who had submitted OA problems code solutions copied from a Telegram group.",
    },
    {
      companyname: "UKG",
      description:
        "Meesho extended an offer to a student who had submitted OA problems code solutions copied from a Telegram group.",
    },
    {
      companyname: "Amazon",
      description:
        "Meesho extended an offer to a student who had submitted OA problems code solutions copied from a Telegram group.",
    },
  ];
  return (
    <div className="mxl:basis-[70%]">
      {comapnycases.map((item, index) => (
        <HoverReveal
          key={index}
          active={active}
          index={index}
          setActive={setActive}
          comp={item.companyname}
          desc={item.description}
          prevActive={prevActive}
          setPrevActive={setPrevActive}
        />
      ))}
    </div>
  );
};

export default Hoverrevealcontainer;

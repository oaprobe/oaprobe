"use client";

import { useWindowSize } from "@uidotdev/usehooks";

const remvoeoverflowbody = () => {
  const body = document.getElementsByTagName("body");
  //   console.log(body[0].style.overflow === "hidden");

  if (body[0].style.overflow === "hidden") {
    body[0].style.overflow = "";
  } else {
    return;
  }
};
const windowsize = () => {
  const dimesions = useWindowSize();
  return dimesions;
};
export { remvoeoverflowbody, windowsize };

"use client";

// import { useWindowSize } from "@uidotdev/usehooks";

const remvoeoverflowbody = () => {
  if (typeof document === "undefined") return;

  const body = document.getElementsByTagName("body")[0];
  if (!body) return;

  if (body.style.overflow === "hidden") {
    body.style.overflow = "";
  }
};

// const windowsize = () => {
//   const dimesions = useWindowSize();
//   return dimesions;
// };
export { remvoeoverflowbody };

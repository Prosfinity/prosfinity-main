/* eslint-disable @next/next/no-img-element */
import { useInViewport } from "ahooks";
import React, { useEffect, useRef, useState } from "react";

const ComparisonCompare = () => {
  const ref = useRef(null);

  const [loaded, setLoaded] = useState(false);
  const [inViewport] = useInViewport(ref);

  useEffect(() => {
    if (!loaded && inViewport) {
      setLoaded(true);
    }
  }, [inViewport, loaded]);

  return (
    <div ref={ref} className="w-full xl:w-container mx-auto px-5 md:px-20 mt-16 xl:mt-28">
      <p
        className={`${
          loaded || inViewport
            ? "animate__animated animate__slideInUp animate__fast"
            : ""
        } text-center text-2xl md:text-3xl font-semibold leading-normal md:leading-relaxed`}
      >
        How AIShieldNet ZDR Outperforms EDR and Traditional Antivirus?
      </p>
      <div
        className={`${
          loaded || inViewport
            ? `animate__animated animate__slideInUp animate__fast`
            : ""
        } shadow-xl rounded-lg mt-5`}
      >
        <img src="/images/comparison/comparison.png" alt="comparison" />
      </div>
    </div>
  );
};

export default ComparisonCompare;

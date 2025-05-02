/* eslint-disable @next/next/no-img-element */
import { useInViewport } from "ahooks";
import React, { useEffect, useRef, useState } from "react";

const WhyUsMain = () => {
  const ref = useRef(null);

  const [loaded, setLoaded] = useState(false);
  const [inViewport] = useInViewport(ref);

  useEffect(() => {
    if (!loaded && inViewport) {
      setLoaded(true);
    }
  }, [inViewport, loaded]);

  return (
    <div className="container mx-auto px-5 md:px-20 mt-20">
      <h2
        className={`${
          loaded || inViewport
            ? `animate__animated animate__slideInUp animate__fast`
            : ""
        } text-center text-3xl md:text-3xl font-bold text-gray-800 leading-tight md:leading-tight mt-5`}
      >
        Why Choose AI ShieldNet Over Traditional Products?
      </h2>
      <div className="flex justify-center items-center mt-5">
        <div
          className={`${
            loaded || inViewport
              ? `animate__animated animate__slideInUp animate__fast`
              : ""
          } shadow-xl rounded-lg`}
        >
          <img src="/images/why-us/why-us-table.png" alt="why-us-table" />
        </div>
      </div>
    </div>
  );
};

export default WhyUsMain;

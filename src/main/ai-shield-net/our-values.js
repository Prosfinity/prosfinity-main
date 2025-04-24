import { useInViewport } from "ahooks";
import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

const OurValues = () => {
  const ref = useRef(null);

  const [loaded, setLoaded] = useState(false);
  const [inViewport] = useInViewport(ref);

  useEffect(() => {
    if (!loaded && inViewport) {
      setLoaded(true);
    }
  }, [inViewport]);

  return (
    <div className="flex justify-center items-center mt-20">
      <div className="bg-btnDark rounded-2xl px-20 pt-16 pb-20">
        <h1 className="text-white text-4xl md:text-[67px] font-bold leading-tight md:leading-tight uppercase text-center">
          Our Values
        </h1>
        <div
          ref={ref}
          className="flex justify-between items-center mt-5 gap-16 min-w-[1000px]"
        >
          <span
            className={`${
              loaded || inViewport
                ? "animate__animated animate__bounceIn animate__fast"
                : ""
            }`}
          >
            <p className="text-white text-[75px] font-thin text-center">
              <CountUp end={305} />
              K+
            </p>
            <p className="text-white text-lg text-center">
              Phishing Sites Detected
            </p>
          </span>
          <span
            className={`${
              loaded || inViewport
                ? "animate__animated animate__bounceIn animate__fast"
                : ""
            }`}
          >
            <p className="text-white text-[75px] font-thin text-center">
              <CountUp end={200} />
              K+
            </p>
            <p className="text-white text-lg text-center">Zero Day Phishing</p>
          </span>
          <span
            className={`${
              loaded || inViewport
                ? "animate__animated animate__bounceIn animate__fast"
                : ""
            }`}
          >
            <p className="text-white text-[75px] font-thin text-center">
              <CountUp end={30} />K
            </p>
            <p className="text-white text-lg text-center">Global Users</p>
          </span>
          <span
            className={`${
              loaded || inViewport
                ? "animate__animated animate__bounceIn animate__fast"
                : ""
            }`}
          >
            <p className="text-white text-[75px] font-thin text-center">
              $<CountUp end={50} />
              M+
            </p>
            <p className="text-white text-lg text-center">Safeguarded</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default OurValues;

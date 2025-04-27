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
    <div className="flex justify-center items-center mt-10 xl:mt-20 px-5">
      <div className="bg-btnDark rounded-2xl px-5 pt-16 pb-20">
        <h1 className="text-white text-3xl md:text-4xl font-bold leading-tight md:leading-tight uppercase text-center">
          Our Values
        </h1>
        <div
          ref={ref}
          className="flex flex-wrap justify-center items-center mt-10 xl:mt-5 gap-16 w-full xl:w-[1000px]"
        >
          <span
            className={`${
              loaded || inViewport
                ? "animate__animated animate__bounceIn animate__fast"
                : ""
            } w-4/12 md:w-2/12`}
          >
            <p className="text-white text-3xl md:text-5xl font-thin text-center">
              <CountUp end={305} />
              K+
            </p>
            <p className="text-[15px] md:text-xl text-white text-center">
              Phishing Sites Detected
            </p>
          </span>
          <span
            className={`${
              loaded || inViewport
                ? "animate__animated animate__bounceIn animate__fast"
                : ""
            } w-4/12 md:w-2/12`}
          >
            <p className="text-white text-3xl md:text-5xl font-thin text-center">
              <CountUp end={200} />
              K+
            </p>
            <p className="text-[15px] md:text-xl text-white text-center">Zero Day Phishing</p>
          </span>
          <span
            className={`${
              loaded || inViewport
                ? "animate__animated animate__bounceIn animate__fast"
                : ""
            } w-4/12 md:w-2/12`}
          >
            <p className="text-white text-3xl md:text-5xl font-thin text-center">
              <CountUp end={30} />K
            </p>
            <p className="text-[15px] md:text-xl text-white text-center">Global Users</p>
          </span>
          <span
            className={`${
              loaded || inViewport
                ? "animate__animated animate__bounceIn animate__fast"
                : ""
            } w-4/12 md:w-2/12`}
          >
            <p className="text-white text-3xl md:text-5xl font-thin text-center">
              $<CountUp end={50} />
              M+
            </p>
            <p className="text-[15px] md:text-xl text-white text-center">Safeguarded</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default OurValues;

/* eslint-disable @next/next/no-img-element */
import { useInViewport } from "ahooks";
import React, { useEffect, useRef, useState } from "react";

const FeaturesSolution8 = () => {
  const ref = useRef(null);

  const [loaded, setLoaded] = useState(false);
  const [inViewport] = useInViewport(ref);

  useEffect(() => {
    if (!loaded && inViewport) {
      setLoaded(true);
    }
  }, [inViewport, loaded]);

  return (
    <div ref={ref} className="mx-auto mt-20 px-5 xl:px-0 border-b border-gray-200 py-10">
      <div className="w-full xl:w-7/12 flex flex-wrap lg:flex-nowrap justify-between items-start mx-auto gap-10">
        <div className="w-full lg:w-8/12 mx-auto">
          <div
            className={`${
              loaded || inViewport
                ? `animate__animated animate__slideInUp animate__fast`
                : ""
            } shadow-xl rounded-lg`}
          >
            <img
              src="/images/features/solutions/solution8.png"
              alt="solution8"
            />
          </div>
        </div>
        <div className="w-full lg:w-4/12 mx-auto">
          <p
            className={`${
              loaded || inViewport
                ? `animate__animated animate__slideInUp animate__fast`
                : ""
            } text-xl md:text-2xl font-semibold leading-tight md:leading-normal mt-5`}
          >
            Anti-Virus Dashboard
          </p>
          <h2
            className={`${
              loaded || inViewport
                ? `animate__animated animate__slideInUp animate__fast`
                : ""
            } text-3xl md:text-3xl font-bold text-gray-800 leading-tight md:leading-tight mt-5`}
          >
            Anti-Virus Threat Monitoring
          </h2>
          <p
            className={`${
              loaded || inViewport
                ? `animate__animated animate__slideInUp animate__fast`
                : ""
            } text-lg md:text-lg leading-tight md:leading-normal mt-5`}
          >
            Tracks <b>KPI warnings</b> over time, with a <b>line chart</b> showing trends and a <b>bar chart</b> highlighting daily threat spikes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSolution8;

import { useInViewport } from "ahooks";
import React, { useEffect, useRef, useState } from "react";

const FeaturesSolution2 = () => {
  const ref = useRef(null);

  const [loaded, setLoaded] = useState(false);
  const [inViewport] = useInViewport(ref);

  useEffect(() => {
    if (!loaded && inViewport) {
      setLoaded(true);
    }
  }, [inViewport]);

  return (
    <div ref={ref} className="mx-auto mt-20 px-5 xl:px-0">
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
              src="/images/features/solutions/solution2.png"
              alt="solution2"
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
            Phishing Dashboard
          </p>
          <h2
            className={`${
              loaded || inViewport
                ? `animate__animated animate__slideInUp animate__fast`
                : ""
            } text-3xl md:text-3xl font-bold text-gray-800 leading-tight md:leading-tight mt-5`}
          >
            Monitoring Phishing Risks in Real-Time
          </h2>
          <p
            className={`${
              loaded || inViewport
                ? `animate__animated animate__slideInUp animate__fast`
                : ""
            } text-lg md:text-lg leading-tight md:leading-normal mt-5`}
          >
            The <b>Phishing KPI Warning</b> tracks risks, while bar and line charts
            show threat frequency, severity, and trends over time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSolution2;

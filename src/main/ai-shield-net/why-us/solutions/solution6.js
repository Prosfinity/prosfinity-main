/* eslint-disable @next/next/no-img-element */
import { useInViewport } from "ahooks";
import React, { useEffect, useRef, useState } from "react";

const WhyUsSolution6 = () => {
  const ref = useRef(null);

  const [loaded, setLoaded] = useState(false);
  const [inViewport] = useInViewport(ref);

  useEffect(() => {
    if (!loaded && inViewport) {
      setLoaded(true);
    }
  }, [inViewport, loaded]);

  return (
    <div ref={ref} className="mx-auto mt-20 px-5 xl:px-0">
      <div className="w-full xl:w-7/12 flex flex-wrap lg:flex-nowrap justify-between items-start mx-auto gap-10">
        <div className="w-full lg:w-6/12 mx-auto">
          <div
            className={`${
              loaded || inViewport
                ? `animate__animated animate__slideInUp animate__fast`
                : ""
            } shadow-xl rounded-lg`}
          >
            <img src="/images/why-us/solutions/solution6.jpg" alt="solution6" />
          </div>
          <p
            className={`${
              loaded || inViewport
                ? `animate__animated animate__slideInUp animate__fast`
                : ""
            } text-center text-lg md:text-lg leading-tight md:leading-normal mt-5`}
          >
            With AI ShieldNet, you get <b>constant updates and improvements</b>{" "}
            without ever needing to worry about manual updates or patching,
            keeping your system secure 24/7.
          </p>
        </div>
        <div className="w-full lg:w-6/12 mx-auto">
          <h2
            className={`${
              loaded || inViewport
                ? `animate__animated animate__slideInUp animate__fast`
                : ""
            } text-3xl md:text-3xl font-bold text-gray-800 leading-tight md:leading-tight mt-5`}
          >
            Real-Time Threat Monitoring Powered by the Cloud
          </h2>
          <p
            className={`${
              loaded || inViewport
                ? `animate__animated animate__slideInUp animate__fast`
                : ""
            } text-lg md:text-lg leading-tight md:leading-normal mt-5`}
          >
            AI ShieldNet doesn’t just rely on static signatures or definitions.
            By running the AI engine in the cloud, we can leverage{" "}
            <b>real-time threat intelligence</b> and continuously update our
            protection algorithms. This cloud-based monitoring ensures that your
            endpoints are always protected, even against the newest, most
            sophisticated attacks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUsSolution6;

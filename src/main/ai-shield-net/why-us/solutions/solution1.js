/* eslint-disable @next/next/no-img-element */
import { useInViewport } from "ahooks";
import React, { useEffect, useRef, useState } from "react";

const WhyUsSolution1 = () => {
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
          <h2
            className={`${
              loaded || inViewport
                ? `animate__animated animate__slideInUp animate__fast`
                : ""
            } text-3xl md:text-3xl font-bold text-gray-800 leading-tight md:leading-tight mt-5`}
          >
            Protecting You from Emerging Threats with AI-Powered Endpoint
            Phishing Protection
          </h2>
          <p
            className={`${
              loaded || inViewport
                ? `animate__animated animate__slideInUp animate__fast`
                : ""
            } text-lg md:text-lg leading-tight md:leading-normal mt-5`}
          >
            Traditional cybersecurity solutions often struggle to keep up with
            evolving threats, especially phishing attacks at the endpoint.
            AIShieldNet, however, is built to combat these challenges by
            detecting and neutralizing zero-day URL’s that have yet to be
            discovered.
            <br />
            Leveraging AI-driven behavioral analysis and machine learning,
            AIShieldNet detects unknown phishing threats in real-time and
            responds instantly — without waiting for signature-based updates.
            Stay ahead of cybercriminals with proactive, real-time defense.
          </p>
        </div>
        <div className="w-full lg:w-6/12 mx-auto">
          <div
            className={`${
              loaded || inViewport
                ? `animate__animated animate__slideInUp animate__fast`
                : ""
            } shadow-xl rounded-lg`}
          >
            <img src="/images/why-us/solutions/solution1.jpg" alt="solution1" />
          </div>
            <p
              className={`${
                loaded || inViewport
                  ? `animate__animated animate__slideInUp animate__fast`
                  : ""
              } text-center text-lg md:text-lg leading-tight md:leading-normal mt-5`}
            >
              With AI ShieldNet, you’re always one step ahead of attackers,
              ensuring your network and endpoints are protected from the latest
              and most sophisticated attacks.
            </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUsSolution1;

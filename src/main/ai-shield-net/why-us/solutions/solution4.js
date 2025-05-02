/* eslint-disable @next/next/no-img-element */
import { useInViewport } from "ahooks";
import React, { useEffect, useRef, useState } from "react";

const WhyUsSolution4 = () => {
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
            <img src="/images/why-us/solutions/solution4.jpg" alt="solution4" />
          </div>
          <p
            className={`${
              loaded || inViewport
                ? `animate__animated animate__slideInUp animate__fast`
                : ""
            } text-center text-lg md:text-lg leading-tight md:leading-normal mt-5`}
          >
            Not only does AI ShieldNet help you save on existing costs, but it
            also future-proofs your network by providing access to innovative,
            <b>AI-driven features</b> that will continue to evolve as new threats
            emerge.
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
            Cost-Effective Protection with Future-Ready Features
          </h2>
          <p
            className={`${
              loaded || inViewport
                ? `animate__animated animate__slideInUp animate__fast`
                : ""
            } text-lg md:text-lg leading-tight md:leading-normal mt-5`}
          >
            As a startup, we understand the importance of cost-efficiency. By
            consolidating multiple security functions into one AI-powered
            solution, AI ShieldNet <b>reduces your overall cybersecurity expenses</b>.
            But that’s not all – our product is built for the future. We’re
            constantly evolving and plan to add more cutting-edge <b>AI Features</b> to
            keep you ahead of evolving threats.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUsSolution4;

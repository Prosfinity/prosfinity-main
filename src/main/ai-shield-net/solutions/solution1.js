import { useInViewport } from "ahooks";
import React, { useEffect, useRef, useState } from "react";
import SolutionItem from "./solution-item";

const Solution1 = () => {
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
      <div className="w-full xl:w-7/12 flex flex-wrap justify-between items-center mx-auto gap-10">
        <div className="w-full xl:w-6/12 mx-auto">
          <p
            className={`${
              loaded || inViewport
                ? `animate__animated animate__slideInUp animate__fast`
                : ""
            } text-2xl md:text-2xl font-bold leading-tight md:leading-tight`}
          >
            For Businesses of Any Size
          </p>
          <h2
            className={`${
              loaded || inViewport
                ? `animate__animated animate__slideInUp animate__fast`
                : ""
            } text-3xl md:text-4xl font-bold text-gray-800 leading-tight md:leading-tight mt-5`}
          >
            Protect Your Business, No Matter the Size
          </h2>
          <p
            className={`${
              loaded || inViewport
                ? `animate__animated animate__slideInUp animate__fast`
                : ""
            } text-lg md:text-lg leading-tight md:leading-normal mt-5`}
          >
            AIShieldNet’s cybersecurity solutions are designed to safeguard
            organizations of any size against the evolving threat of phishing
            attacks. By providing adaptable, customizable defenses, we empower
            businesses of all scales to stay secure in today’s dynamic threat
            landscape.
          </p>
          <div className="flex flex-col gap-2 mt-5">
            <SolutionItem content="Dual AI models to detect phishing attacks" />
            <SolutionItem content="Whitelist Trusted Domains" />
            <SolutionItem content="Sophisticated Analysis for suspicious sites" />
            <SolutionItem content="Enterprise-Grade Protection with Company Login" />
          </div>
          <div className="mt-5">
            <button className={`${
              loaded || inViewport
                ? `animate__animated animate__slideInUp animate__fast`
                : ""
            } bg-btnDark text-white font-medium rounded-lg hover:shadow-xl transition-all text-base md:text-2xl px-4 py-2 md:px-8 md:py-4`}
            >
              Protect Your Business Now
            </button>
          </div>
        </div>
        <div className="w-full xl:w-6/12 mx-auto">
          <div className={`${
              loaded || inViewport
                ? `animate__animated animate__slideInUp animate__fast`
                : ""
            } shadow-xl rounded-lg`}
          >
            <img src="/images/threat-intelligence.jpg" alt="solution1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution1;

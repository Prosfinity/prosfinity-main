import { useInViewport } from "ahooks";
import React, { useEffect, useRef, useState } from "react";

const WhyUsSolution2 = () => {
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
        <div className="w-full lg:w-6/12 mx-auto">
          <div
            className={`${
              loaded || inViewport
                ? `animate__animated animate__slideInUp animate__fast`
                : ""
            } shadow-xl rounded-lg`}
          >
            <img src="/images/why-us/solutions/solution2.jpg" alt="solution2" />
          </div>
          <p
            className={`${
              loaded || inViewport
                ? `animate__animated animate__slideInUp animate__fast`
                : ""
            } text-center text-lg md:text-lg leading-tight md:leading-normal mt-5`}
          >
            This <b>all-in-one solution</b> not only simplifies your
            cybersecurity but also reduces operational costs by eliminating the
            need for multiple subscriptions and software management tools.
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
            All-in-One Solution: Antivirus, AI Analysis, and AI Anti-Phishing
          </h2>
          <p
            className={`${
              loaded || inViewport
                ? `animate__animated animate__slideInUp animate__fast`
                : ""
            } text-lg md:text-lg leading-tight md:leading-normal mt-5`}
          >
            AI ShieldNet integrates <a>multiple layers of protection</a> into a
            single, streamlined solution. You no longer need separate antivirus
            software, AI analysis tools, or anti-phishing measures. It combines
            <b>AI Anti-Virus</b> capabilities, <b>AI-powered analysis</b>, and{" "}
            <b>AI Anti-Phishing</b> protection, all in one agent. This
            consolidation helps reduce the complexity of managing multiple
            tools, saving you both time and money.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUsSolution2;

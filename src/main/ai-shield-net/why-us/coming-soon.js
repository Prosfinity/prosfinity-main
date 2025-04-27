import { useInViewport } from "ahooks";
import React, { useEffect, useRef, useState } from "react";

const WhyUsComingSoon = () => {
  const ref = useRef(null);

  const [loaded, setLoaded] = useState(false);
  const [inViewport] = useInViewport(ref);

  useEffect(() => {
    if (!loaded && inViewport) {
      setLoaded(true);
    }
  }, [inViewport]);

  return (
    <div className="container mx-auto px-5 md:px-20 mt-20">
      <h2
        className={`${
          loaded || inViewport
            ? `animate__animated animate__slideInUp animate__fast`
            : ""
        } text-center text-3xl md:text-3xl font-bold text-gray-800 leading-tight md:leading-tight mt-5`}
      >
        Coming Soon: Even More Advanced AI Features
      </h2>
      <p
        className={`${
          loaded || inViewport
            ? `animate__animated animate__slideInUp animate__fast`
            : ""
        } text-lg md:text-lg leading-tight md:leading-normal mt-5`}
      >
        At AI ShieldNet, we’re committed to continuous innovation. In addition
        to our current features, we’ll soon be adding even more advanced AI
        Features to keep your network safer and more resilient. These new
        AI-powered tools will enhance our ability to detect and respond to
        emerging threats, ensuring you stay protected as the cyber landscape
        evolves.
      </p>
      <div className="flex justify-center items-center my-5">
      <div
        className={`${
          loaded || inViewport
            ? `animate__animated animate__slideInUp animate__fast`
            : ""
        } shadow-xl rounded-lg`}
      >
        <img src="/images/why-us/coming-soon.png" alt="coming-soon" />
      </div>
      </div>
      <p
        className={`${
          loaded || inViewport
            ? `animate__animated animate__slideInUp animate__fast`
            : ""
        } text-lg md:text-lg leading-tight md:leading-normal mt-5`}
      >
        As we continue to evolve, you’ll always have access to the latest
        advancements in AI-powered cybersecurity, ensuring that your protection
        stays cutting-edge.
      </p>
    </div>
  );
};

export default WhyUsComingSoon;

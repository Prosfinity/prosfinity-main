import { useInViewport } from "ahooks";
import React, { useEffect, useRef, useState } from "react";

const ComparisonWhyUs = () => {
  const ref = useRef(null);

  const [loaded, setLoaded] = useState(false);
  const [inViewport] = useInViewport(ref);

  useEffect(() => {
    if (!loaded && inViewport) {
      setLoaded(true);
    }
  }, [inViewport, loaded]);

  return (
    <div ref={ref} className="w-full xl:w-container mx-auto px-5 md:px-20 mt-16 xl:mt-28">
      <p
        className={`${
          loaded || inViewport
            ? "animate__animated animate__slideInUp animate__fast"
            : ""
        } text-2xl md:text-3xl font-semibold leading-normal md:leading-relaxed`}
      >
        Why AIShieldNet Zero-Day Detection and Response (ZDR) is the Future of
        Cybersecurity?
      </p>
      <p
        className={`${
          loaded || inViewport
            ? "animate__animated animate__slideInUp animate__fast"
            : ""
        } mt-5 text-lg md:text-xl font-light leading-6 lg:leading-10`}
      >
        By utilizing AI-driven behavioral analysis and machine learning,
        AIShieldNet detects and neutralizes unknown phishing threats in
        real-time, without waiting for signature-based updates.
      </p>
    </div>
  );
};

export default ComparisonWhyUs;

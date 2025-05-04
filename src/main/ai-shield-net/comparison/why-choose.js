import { useInViewport } from "ahooks";
import React, { useEffect, useRef, useState } from "react";

const ComparisonWhyChoose = () => {
  const ref = useRef(null);

  const [loaded, setLoaded] = useState(false);
  const [inViewport] = useInViewport(ref);

  useEffect(() => {
    if (!loaded && inViewport) {
      setLoaded(true);
    }
  }, [inViewport, loaded]);

  return (
    <div className="bg-sky-500 py-10 mt-16 xl:mt-28">
      <div
        ref={ref}
        className="w-full xl:w-container mx-auto px-5 md:px-20"
      >
        <p
          className={`${
            loaded || inViewport
              ? "animate__animated animate__slideInUp animate__fast"
              : ""
          } text-2xl md:text-3xl font-semibold leading-normal md:leading-relaxed text-center text-white`}
        >
          Why Choose AIShieldNet ZDR?
        </p>
        <p
          className={`${
            loaded || inViewport
              ? "animate__animated animate__slideInUp animate__fast"
              : ""
          } mt-5 text-lg md:text-xl font-light leading-6 lg:leading-10 text-center text-white`}
        >
          <b>The Future of Cybersecurity is AI-Driven</b>
          <br />
          Traditional antivirus solutions are outdated, and EDR systems often
          fail to keep up with modern threats. With <b>AIShieldNet ZDR</b>,
          you’re choosing next-generation security that delivers fast,
          intelligent, and proactive protection against even the most
          sophisticated cyberattacks.
        </p>
        <p
          className={`${
            loaded || inViewport
              ? "animate__animated animate__slideInUp animate__fast"
              : ""
          } text-2xl md:text-3xl font-semibold leading-normal md:leading-relaxed mt-10 text-center text-white`}
        >
          Ready to Stay One Step Ahead of Cyber Threats?
        </p>
        <p
          className={`${
            loaded || inViewport
              ? "animate__animated animate__slideInUp animate__fast"
              : ""
          } mt-5 text-lg md:text-xl font-light leading-6 lg:leading-10 text-center text-white`}
        >
          Protect your business with AIShieldNet ZDR – AI-driven, real-time
          defense that stops cyberattacks before they can harm you.
        </p>
      </div>
    </div>
  );
};

export default ComparisonWhyChoose;

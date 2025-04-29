import { useInViewport } from "ahooks";
import React, { useEffect, useRef, useState } from "react";

const FreeTrialWhatIs = () => {
  const ref = useRef(null);

  const [loaded, setLoaded] = useState(false);
  const [inViewport] = useInViewport(ref);

  useEffect(() => {
    if (!loaded && inViewport) {
      setLoaded(true);
    }
  }, [inViewport]);

  return (
    <div
      ref={ref}
      className="w-full xl:w-container mx-auto px-5 md:px-20 mt-16 xl:mt-28"
    >
      <p
        className={`${
          loaded || inViewport
            ? "animate__animated animate__slideInUp animate__fast"
            : ""
        } text-2xl md:text-3xl font-semibold leading-normal md:leading-relaxed`}
      >
        What is AI ShieldNet?
      </p>
      <p
        className={`${
          loaded || inViewport
            ? "animate__animated animate__slideInUp animate__fast"
            : ""
        } text-xl md:text-2xl font-semibold leading-normal md:leading-relaxed mt-5`}
      >
        AI-Powered Endpoint Protection for Zero-Day Threats
      </p>
      <p
        className={`${
          loaded || inViewport
            ? "animate__animated animate__slideInUp animate__fast"
            : ""
        } mt-5 text-lg md:text-xl font-light leading-6 lg:leading-10`}
      >
        AI ShieldNet installs as a lightweight agent on your endpoints, offering
        next-generation protection against zero-day vulnerabilities. Powered by
        AI. It delivers automated threat detection and response, ensuring your
        devices are always one step ahead of cyberattacks.
      </p>
      <div className="flex justify-center mt-10">
        <div
          className={`${
            loaded || inViewport
              ? `animate__animated animate__slideInUp animate__fast`
              : ""
          } shadow-xl rounded-lg`}
        >
          <img src="/images/free-trial/free-trial.jpg" alt="free-trial" />
        </div>
      </div>
      <p
        className={`${
          loaded || inViewport
            ? "animate__animated animate__slideInUp animate__fast"
            : ""
        } text-2xl md:text-3xl font-semibold leading-normal md:leading-relaxed mt-10`}
      >
        See AI ShieldNet - 1 Month Free Trial
      </p>
      <p
        className={`${
          loaded || inViewport
            ? "animate__animated animate__slideInUp animate__fast"
            : ""
        } mt-5 text-lg md:text-xl font-light leading-6 lg:leading-10`}
      >
        Want to see how AI ShieldNet works? Book our demo to understand how easy
        it is to install the agent on your endpoints and protect your devices
        from emerging threats. Start your <b>1 month free trial</b> after the
        demo.
      </p>
    </div>
  );
};

export default FreeTrialWhatIs;

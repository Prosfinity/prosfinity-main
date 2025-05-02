import { useInViewport } from "ahooks";
import { useEffect, useRef, useState } from "react";

const FreeTrialBanner = () => {
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
      className="w-full xl:w-container px-8 lg:px-20 xl:px-0 mx-auto text-white mt-16 xl:mt-28 pt-10"
    >
      <div className="w-full lg:w-4/6">
        <p
          className={`${
            loaded || inViewport
              ? "animate__animated animate__slideInUp animate__fast"
              : ""
          } text-3xl md:text-4xl font-semibold leading-normal md:leading-relaxed`}
        >
          Experience AI ShieldNet – Endpoint Phishing Protection Powered by AI
        </p>
        <p
          className={`${
            loaded || inViewport
              ? "animate__animated animate__slideInUp animate__fast"
              : ""
          } mt-5 text-lg md:text-xl font-light leading-6 lg:leading-10`}
        >
          Start your 1 month free trial and protect your network’s endpoints from emerging cyber threats with our AI-powered zero-day protection
        </p>
      </div>
    </div>
  );
};

export default FreeTrialBanner;

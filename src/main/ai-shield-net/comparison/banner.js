import { useInViewport } from "ahooks";
import { useEffect, useRef, useState } from "react";

const ComparisonBanner = () => {
  const ref = useRef(null);

  const [loaded, setLoaded] = useState(false);
  const [inViewport] = useInViewport(ref);

  useEffect(() => {
    if (!loaded && inViewport) {
      setLoaded(true);
    }
  }, [inViewport, loaded]);

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
          } text-2xl md:text-4xl font-semibold leading-normal md:leading-relaxed`}
        >
          AIShieldNet: The Future of Cybersecurity with AI-Powered Endpoint
          Phishing Protection
        </p>
        <p
          className={`${
            loaded || inViewport
              ? "animate__animated animate__slideInUp animate__fast"
              : ""
          } mt-5 text-lg md:text-xl font-light leading-6 lg:leading-10`}
        >
          Protect your business from evolving phishing threats at the endpoint
          with AI-driven detection and real-time prevention. Safeguard your team
          from deceptive attacks that bypass traditional defenses — all with the
          power of AI.
        </p>
      </div>
    </div>
  );
};

export default ComparisonBanner;

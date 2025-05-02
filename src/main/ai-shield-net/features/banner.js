import { useInViewport } from "ahooks";
import { useEffect, useRef, useState } from "react";

const FeaturesBanner = () => {
  const ref = useRef(null);

  const [loaded, setLoaded] = useState(false);
  const [inViewport] = useInViewport(ref);

  const [stepAnimation, setStepAnimation] = useState(1);

  useEffect(() => {
    if (!loaded && inViewport) {
      setLoaded(true);
    }
  }, [inViewport, loaded]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStepAnimation((prev) => (prev > 3 ? 1 : prev + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, [stepAnimation]);

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
          How can AI ShieldNet change your work?
        </p>
        <p
          className={`${
            loaded || inViewport
              ? "animate__animated animate__slideInUp animate__fast"
              : ""
          } mt-5 text-lg md:text-xl font-light leading-6 lg:leading-10`}
        >
          AI ShieldNet has all the essential features to ensure cybersecurity
          for your business platform. In addition to its core technologies, the
          user interface is optimized for easy monitoring, allowing users to
          stay updated with the fastest and most accurate cybersecurity
          information.
        </p>
      </div>
    </div>
  );
};

export default FeaturesBanner;

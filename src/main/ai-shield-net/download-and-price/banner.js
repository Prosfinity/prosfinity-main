import { useInViewport } from "ahooks";
import { CheckIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const DownloadAndPriceBanner = () => {
  const ref = useRef(null);

  const [loaded, setLoaded] = useState(false);
  const [inViewport] = useInViewport(ref);

  const [stepAnimation, setStepAnimation] = useState(1);

  useEffect(() => {
    if (!loaded && inViewport) {
      setLoaded(true);
    }
  }, [inViewport]);

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
          } text-2xl md:text-3xl font-semibold leading-normal md:leading-relaxed`}
        >
          Experience the Power of AI ShieldNet
        </p>
        <div className="flex flex-col gap-2 mt-5">
          <div
            className={`${
              loaded || inViewport
                ? `animate__animated animate__bounceInLeft animate__fast`
                : ""
            } flex items-center gap-2`}
          >
            <CheckIcon />
            <p className="text-sm xl:text-base text-white">
              Our dual AI engine delivers unparalleled phishing detection rates
            </p>
          </div>

          <div
            className={`${
              loaded || inViewport
                ? `animate__animated animate__bounceInLeft animate__fast`
                : ""
            } flex items-center gap-2`}
          >
            <CheckIcon />
            <p className="text-sm xl:text-base text-white">
              Identifies and blocks threats before they can cause harm
            </p>
          </div>
          <div
            className={`${
              loaded || inViewport
                ? `animate__animated animate__bounceInLeft animate__fast`
                : ""
            } flex items-center gap-2`}
          >
            <CheckIcon />
            <p className="text-sm xl:text-base text-white">
              Continuously learns and adapts to new phishing tactics
            </p>
          </div>
          <div
            className={`${
              loaded || inViewport
                ? `animate__animated animate__bounceInLeft animate__fast`
                : ""
            } flex items-center gap-2`}
          >
            <CheckIcon />
            <p className="text-sm xl:text-base text-white">
              Cloud-based solution for minimal system impact and easy management
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadAndPriceBanner;

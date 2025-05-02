import { useInViewport } from "ahooks";
import { CheckIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const DownloadAndPriceBanner = () => {
  const ref = useRef(null);

  const [loaded, setLoaded] = useState(false);
  const [inViewport] = useInViewport(ref);

  const [includeApp, setIncludeApp] = useState(true);

  useEffect(() => {
    if (!loaded && inViewport) {
      setLoaded(true);
    }
  }, [inViewport]);

  return (
    <div
      ref={ref}
      className="w-full xl:w-container flex flex-col lg:flex-row px-8 lg:px-20 xl:px-0 mx-auto text-white mt-16 xl:mt-28 pt-10 gap-5"
    >
      <div className="w-full lg:w-6/12">
        <p
          className={`${
            loaded || inViewport
              ? "animate__animated animate__slideInUp animate__fast"
              : ""
          } text-3xl md:text-4xl font-semibold leading-normal md:leading-relaxed`}
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
      <div className="w-full lg:w-5/12">
        <label className="inline-flex items-center cursor-pointer gap-3">
          <input
            type="checkbox"
            checked={includeApp}
            onChange={() => setIncludeApp(!includeApp)}
            className="sr-only peer"
          />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-sky-300 dark:peer-focus:ring-sky-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-sky-600 dark:peer-checked:bg-sky-600"></div>
          <span className="text-white ms-3 text-sm font-medium dark:text-gray-300">
            {includeApp ? "With" : "Without"} AI ShieldNet
          </span>
        </label>
        <div className="bg-white rounded-xl flex flex-col items-center justify-center py-5 pb-10 px-10 mt-5">
          <img
            src={includeApp ? "/images/download-and-price/with-aishieldnet.png" : "/images/download-and-price/without-aishieldnet.png"}
            style={{ width: 170 }}
          />
          <p className="text-black text-base md:text-lg font-semibold leading-normal md:leading-relaxed">
            {includeApp ? "Enjoy Peace of Mind" : "Leaving Your Business Vulnerable"}
          </p>
          <p className="text-gray-500 text-sm md:text-base leading-normal md:leading-relaxed mt-4">
            {includeApp ? "Free from devastating Phishing Attacks, Data Breaches, and Financial Losses" : "Expose Your Business to Cyber Threats like Data Breaches, Financial Losses, and Reputational Damage"}
            Losses
          </p>
        </div>
      </div>
    </div>
  );
};

export default DownloadAndPriceBanner;

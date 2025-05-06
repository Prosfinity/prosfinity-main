/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
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
  }, [inViewport, loaded]);

  return (
    <div
      ref={ref}
      className="xl:w-container mx-auto mt-16 flex w-full flex-col gap-5 px-8 pt-10 text-white lg:flex-row lg:px-20 xl:mt-32 xl:px-0"
    >
      <div className="w-full lg:w-6/12">
        <p
          className={`${
            loaded || inViewport
              ? "animate__animated animate__slideInUp animate__fast"
              : ""
          } text-3xl font-semibold leading-normal md:text-4xl md:leading-relaxed`}
        >
          Experience the Power of AI ShieldNet
        </p>
        <div className="mt-5 flex flex-col gap-2">
          <div
            className={`${
              loaded || inViewport
                ? `animate__animated animate__bounceInLeft animate__fast`
                : ""
            } flex items-center gap-2`}
          >
            <CheckIcon />
            <p className="text-sm text-white xl:text-base">
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
            <p className="text-sm text-white xl:text-base">
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
            <p className="text-sm text-white xl:text-base">
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
            <p className="text-sm text-white xl:text-base">
              Cloud-based solution for minimal system impact and easy management
            </p>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-5/12">
        <label className="inline-flex cursor-pointer items-center gap-3">
          <input
            type="checkbox"
            checked={includeApp}
            onChange={() => setIncludeApp(!includeApp)}
            className="peer sr-only"
          />
          <div className="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-sky-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-sky-300     rtl:peer-checked:after:-translate-x-full"></div>
          <span className="ms-3 text-sm font-medium text-white ">
            {includeApp ? "With" : "Without"} AI ShieldNet
          </span>
        </label>
        <div className="mt-5 flex flex-col items-center justify-center rounded-xl bg-white px-10 py-5 pb-10">
          <img
            src={
              includeApp
                ? "/images/download-and-price/with-aishieldnet.png"
                : "/images/download-and-price/without-aishieldnet.png"
            }
            style={{ width: 170 }}
          />
          <p className="text-base font-semibold leading-normal text-black md:text-lg md:leading-relaxed">
            {includeApp
              ? "Enjoy Peace of Mind"
              : "Leaving Your Business Vulnerable"}
          </p>
          <p className="mt-4 text-sm leading-normal text-gray-500 md:text-base md:leading-relaxed">
            {includeApp
              ? "Free from devastating Phishing Attacks, Data Breaches, and Financial Losses"
              : "Expose Your Business to Cyber Threats like Data Breaches, Financial Losses, and Reputational Damage"}
            Losses
          </p>
        </div>
      </div>
    </div>
  );
};

export default DownloadAndPriceBanner;

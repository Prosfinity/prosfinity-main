import { useInViewport } from "ahooks";
import React, { useEffect, useRef, useState } from "react";

const DownloadAndPriceDownload = () => {
  const ref = useRef(null);

  const [loaded, setLoaded] = useState(false);
  const [inViewport] = useInViewport(ref);

  useEffect(() => {
    if (!loaded && inViewport) {
      setLoaded(true);
    }
  }, [inViewport]);

  return (
    <div ref={ref} className="mx-auto px-5 xl:px-0 mt-64 md:mt-20">
      <div className="w-full xl:w-7/12 flex flex-wrap lg:flex-nowrap justify-between items-start mx-auto gap-10">
        <div className="w-full lg:w-6/12 mx-auto">
          <h2
            className={`${
              loaded || inViewport
                ? `animate__animated animate__slideInUp animate__fast`
                : ""
            } text-3xl md:text-3xl font-bold text-gray-800 leading-tight md:leading-tight mt-5`}
          >
            AI ShieldNet Agent Sensor
          </h2>
          <p
            className={`${
              loaded || inViewport
                ? `animate__animated animate__slideInUp animate__fast`
                : ""
            } text-lg md:text-lg leading-tight md:leading-normal mt-5`}
          >
            AI-powered security agent, installed on your server or endpoint, is
            designed to safeguard your business from threats like Zero Day
            Phishing, malware, ransomware, and viruses, providing comprehensive
            protection at every level
          </p>
          <div className="mt-5">
            <a href="/product/AIShieldNet/download-and-price/agent-download">
              <button
                className={`${
                  loaded || inViewport
                    ? `animate__animated animate__slideInUp animate__fast`
                    : ""
                } bg-btnDark text-white font-medium rounded-lg hover:shadow-xl transition-all text-base px-4 py-2 md:px-8 md:py-2`}
              >
                Get My Free Download
              </button>
            </a>
          </div>
        </div>
        <div className="w-full lg:w-6/12 mx-auto">
          <div
            className={`${
              loaded || inViewport
                ? `animate__animated animate__slideInUp animate__fast`
                : ""
            } shadow-xl rounded-lg`}
          >
            <img
              src="/images/download-and-price/download1.png"
              alt="download1"
            />
          </div>
        </div>
      </div>
      <div className="w-full xl:w-7/12 flex flex-wrap lg:flex-nowrap justify-between items-start mx-auto gap-10">
        <div className="w-full lg:w-6/12 mx-auto">
          <h2
            className={`${
              loaded || inViewport
                ? `animate__animated animate__slideInUp animate__fast`
                : ""
            } text-3xl md:text-3xl font-bold text-gray-800 leading-tight md:leading-tight mt-5`}
          >
            Browser Extension
          </h2>
          <p
            className={`${
              loaded || inViewport
                ? `animate__animated animate__slideInUp animate__fast`
                : ""
            } text-lg md:text-lg leading-tight md:leading-normal mt-5`}
          >
            Download the Chrome or Firefox extension to protect your endpoint.
            The AI Phishing Extension is free to use and specifically designed
            to defend against Zero-Day Phishing
          </p>
          <div className="mt-5">
            <a href="/product/AIShieldNet/download-and-price/download-extension">
              <button
                className={`${
                  loaded || inViewport
                    ? `animate__animated animate__slideInUp animate__fast`
                    : ""
                } bg-btnDark text-white font-medium rounded-lg hover:shadow-xl transition-all text-base px-4 py-2 md:px-8 md:py-2`}
              >
                Get My Free Download
              </button>
            </a>
          </div>
        </div>
        <div className="w-full lg:w-6/12 mx-auto">
          <div
            className={`${
              loaded || inViewport
                ? `animate__animated animate__slideInUp animate__fast`
                : ""
            } shadow-xl rounded-lg`}
          >
            <img
              src="/images/download-and-price/download2.png"
              alt="download2"
            />
          </div>
        </div>
      </div>
      <div className="w-full xl:w-7/12 flex flex-wrap lg:flex-nowrap justify-between items-start mx-auto gap-10">
        <div className="w-full lg:w-6/12 mx-auto">
          <h2
            className={`${
              loaded || inViewport
                ? `animate__animated animate__slideInUp animate__fast`
                : ""
            } text-3xl md:text-3xl font-bold text-gray-800 leading-tight md:leading-tight mt-5`}
          >
            Leveraging API
          </h2>
          <p
            className={`${
              loaded || inViewport
                ? `animate__animated animate__slideInUp animate__fast`
                : ""
            } text-lg md:text-lg leading-tight md:leading-normal mt-5`}
          >
            Integrate advanced AI-powered file and phishing detection capabilities into your existing applications for enterprise-grade security
          </p>
          <div className="mt-5">
            <a href="/product/AIShieldNet/download-and-price/agent-download">
              <button
                className={`${
                  loaded || inViewport
                    ? `animate__animated animate__slideInUp animate__fast`
                    : ""
                } bg-btnDark text-white font-medium rounded-lg hover:shadow-xl transition-all text-base px-4 py-2 md:px-8 md:py-2`}
              >
                Get My Free Download
              </button>
            </a>
          </div>
        </div>
        <div className="w-full lg:w-6/12 mx-auto">
          <div
            className={`${
              loaded || inViewport
                ? `animate__animated animate__slideInUp animate__fast`
                : ""
            } shadow-xl rounded-lg`}
          >
            <img
              src="/images/download-and-price/download3.png"
              alt="download3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadAndPriceDownload;

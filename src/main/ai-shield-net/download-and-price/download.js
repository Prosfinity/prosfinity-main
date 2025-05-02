/* eslint-disable @next/next/no-img-element */
import { useInViewport } from "ahooks";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const DownloadAndPriceDownload = () => {
  const ref = useRef(null);

  const [loaded, setLoaded] = useState(false);
  const [inViewport] = useInViewport(ref);

  useEffect(() => {
    if (!loaded && inViewport) {
      setLoaded(true);
    }
  }, [inViewport, loaded]);

  return (
    <div ref={ref} className="mx-auto mt-64 px-5 md:mt-20 xl:px-0">
      <div className="mx-auto flex w-full flex-wrap items-start justify-between gap-10 lg:flex-nowrap xl:w-7/12">
        <div className="mx-auto w-full lg:w-6/12">
          <h2
            className={`${
              loaded || inViewport
                ? `animate__animated animate__slideInUp animate__fast`
                : ""
            } mt-5 text-3xl font-bold leading-tight text-gray-800 md:text-3xl md:leading-tight`}
          >
            AI ShieldNet Agent Sensor
          </h2>
          <p
            className={`${
              loaded || inViewport
                ? `animate__animated animate__slideInUp animate__fast`
                : ""
            } mt-5 text-lg leading-tight md:text-lg md:leading-normal`}
          >
            AI-powered security agent, installed on your server or endpoint, is
            designed to safeguard your business from threats like Zero Day
            Phishing, malware, ransomware, and viruses, providing comprehensive
            protection at every level
          </p>
          <div className="mt-5">
            <Link href="/product/AIShieldNet/download-and-price/agent-download">
              <button
                className={`${
                  loaded || inViewport
                    ? `animate__animated animate__slideInUp animate__fast`
                    : ""
                } bg-btnDark rounded-lg px-4 py-2 text-base font-medium text-white transition-all hover:shadow-xl md:px-8 md:py-2`}
              >
                Get My Free Download
              </button>
            </Link>
          </div>
        </div>
        <div className="mx-auto w-full lg:w-6/12">
          <div
            className={`${
              loaded || inViewport
                ? `animate__animated animate__slideInUp animate__fast`
                : ""
            } rounded-lg shadow-xl`}
          >
            <img
              src="/images/download-and-price/download1.png"
              alt="download1"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto flex w-full flex-wrap items-start justify-between gap-10 lg:flex-nowrap xl:w-7/12">
        <div className="mx-auto w-full lg:w-6/12">
          <h2
            className={`${
              loaded || inViewport
                ? `animate__animated animate__slideInUp animate__fast`
                : ""
            } mt-5 text-3xl font-bold leading-tight text-gray-800 md:text-3xl md:leading-tight`}
          >
            Browser Extension
          </h2>
          <p
            className={`${
              loaded || inViewport
                ? `animate__animated animate__slideInUp animate__fast`
                : ""
            } mt-5 text-lg leading-tight md:text-lg md:leading-normal`}
          >
            Download the Chrome or Firefox extension to protect your endpoint.
            The AI Phishing Extension is free to use and specifically designed
            to defend against Zero-Day Phishing
          </p>
          <div className="mt-5">
            <Link href="/product/AIShieldNet/download-and-price/download-extension">
              <button
                className={`${
                  loaded || inViewport
                    ? `animate__animated animate__slideInUp animate__fast`
                    : ""
                } bg-btnDark rounded-lg px-4 py-2 text-base font-medium text-white transition-all hover:shadow-xl md:px-8 md:py-2`}
              >
                Get My Free Download
              </button>
            </Link>
          </div>
        </div>
        <div className="mx-auto w-full lg:w-6/12">
          <div
            className={`${
              loaded || inViewport
                ? `animate__animated animate__slideInUp animate__fast`
                : ""
            } rounded-lg shadow-xl`}
          >
            <img
              src="/images/download-and-price/download2.png"
              alt="download2"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto flex w-full flex-wrap items-start justify-between gap-10 lg:flex-nowrap xl:w-7/12">
        <div className="mx-auto w-full lg:w-6/12">
          <h2
            className={`${
              loaded || inViewport
                ? `animate__animated animate__slideInUp animate__fast`
                : ""
            } mt-5 text-3xl font-bold leading-tight text-gray-800 md:text-3xl md:leading-tight`}
          >
            Leveraging API
          </h2>
          <p
            className={`${
              loaded || inViewport
                ? `animate__animated animate__slideInUp animate__fast`
                : ""
            } mt-5 text-lg leading-tight md:text-lg md:leading-normal`}
          >
            Integrate advanced AI-powered file and phishing detection
            capabilities into your existing applications for enterprise-grade
            security
          </p>
          <div className="mt-5">
            <Link href="/contact">
              <button
                className={`${
                  loaded || inViewport
                    ? `animate__animated animate__slideInUp animate__fast`
                    : ""
                } bg-btnDark rounded-lg px-4 py-2 text-base font-medium text-white transition-all hover:shadow-xl md:px-8 md:py-2`}
              >
                Get My Free Download
              </button>
            </Link>
          </div>
        </div>
        <div className="mx-auto w-full lg:w-6/12">
          <div
            className={`${
              loaded || inViewport
                ? `animate__animated animate__slideInUp animate__fast`
                : ""
            } rounded-lg shadow-xl`}
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

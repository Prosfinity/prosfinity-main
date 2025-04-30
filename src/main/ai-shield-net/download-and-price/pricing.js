import { useInViewport } from "ahooks";
import { CastIcon, CheckIcon, EditIcon, ShieldCheckIcon } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const DownloadAndPricePricing = () => {
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
      className="w-full xl:w-container px-8 lg:px-20 xl:px-0 mx-auto mt-16 xl:mt-28 pt-10 gap-5"
    >
      <div className="text-center">
        <p
          className={`${
            loaded || inViewport
              ? "animate__animated animate__slideInUp animate__fast"
              : ""
          } text-2xl md:text-3xl font-semibold leading-normal md:leading-relaxed`}
        >
          Pricing
        </p>
        <p
          className={`${
            loaded || inViewport
              ? `animate__animated animate__slideInUp animate__fast`
              : ""
          } text-lg md:text-lg leading-tight md:leading-normal mt-5`}
        >
          Whether you need standalone zero-day detection and response, real-time
          web browsing security, or an advanced solution to enhance your
          existing security infrastructure, AI ShieldNet offers tailored pricing
          to meet your needs
        </p>
      </div>
      <div className="w-full flex flex-wrap lg:flex-nowrap justify-between items-start mx-auto gap-10 mt-10">
        <div className="w-full lg:w-4/12 mx-auto">
          <div className="flex flex-col items-center gap-2 shadow-xl p-5 rounded-lg min-h-[700px]">
            <ShieldCheckIcon color="#605BE5" size={50} />
            <p className="text-center text-lg md:text-xl font-semibold leading-normal md:leading-relaxed">
              Zero-Day Phishing Detection
            </p>
            <p className="text-sky-500 text-xl md:text-2xl font-semibold leading-normal md:leading-relaxed">
              Zero-Day Protection
            </p>
            <p className="text-center text-sm md:text-base leading-tight md:leading-normal mt-2">
              Enterprise-grade AI-powered security to safeguard your business
            </p>
            <div className="flex flex-col gap-2 mt-5 flex-1">
              <div className="flex items-center gap-2">
                <CheckIcon size={20} color="#605BE5" />
                <p className="text-sm md:text-base leading-tight md:leading-normal">
                  AI Endpoint Phishing Protection
                </p>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon size={20} color="#605BE5" />
                <p className="text-sm md:text-base leading-tight md:leading-normal">
                  Windows Support
                </p>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon size={20} color="#605BE5" />
                <p className="text-sm md:text-base leading-tight md:leading-normal">
                  Malware
                </p>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon size={20} color="#605BE5" />
                <p className="text-sm md:text-base leading-tight md:leading-normal">
                  Ransomware
                </p>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon size={20} color="#605BE5" />
                <p className="text-sm md:text-base leading-tight md:leading-normal">
                  Viruses
                </p>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon size={20} color="#605BE5" />
                <p className="text-sm md:text-base leading-tight md:leading-normal">
                  Zero-Day Detection & Response
                </p>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon size={20} color="#605BE5" />
                <p className="text-sm md:text-base leading-tight md:leading-normal">
                  Cloud Platform
                </p>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon size={20} color="#605BE5" />
                <p className="text-sm md:text-base leading-tight md:leading-normal">
                  7 x 24 Support
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-5 text-gray-800">
                <p className="text-lg md:text-xl text-center leading-tight md:leading-normal line-through font-semibold">$30 HKD</p>
                <p className="text-xl md:text-2xl text-center leading-tight md:leading-normal font-semibold">$9.99 HKD</p>
                <p className="text-base md:text-lg text-center leading-tight md:leading-normal">/Month Per EndPoint</p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-4/12 mx-auto">
          <div className="flex flex-col items-center gap-2 shadow-xl p-5 rounded-lg min-h-[700px]">
            <CastIcon color="#605BE5" size={50} />
            <p className="text-center text-lg md:text-xl font-semibold leading-normal md:leading-relaxed">
              Browser Extension
            </p>
            <p className="text-center text-sky-500 text-xl md:text-2xl font-semibold leading-normal md:leading-relaxed">
              Free Anti Phishing Extension
            </p>
            <p className="text-center text-sm md:text-base leading-tight md:leading-normal mt-2">
              AI Phishing protection for your web browsing experience
            </p>
            <div className="flex flex-col gap-2 mt-5 flex-1">
              <div className="flex items-center gap-2">
                <CheckIcon size={20} color="#605BE5" />
                <p className="text-sm md:text-base leading-tight md:leading-normal">
                  Chrome Extension
                </p>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon size={20} color="#605BE5" />
                <p className="text-sm md:text-base leading-tight md:leading-normal">
                  Firefox Extension
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-5 text-gray-800">
                <p className="text-xl md:text-2xl text-center leading-tight md:leading-normal font-semibold">$0 HKD</p>
                <p className="text-base md:text-lg text-center leading-tight md:leading-normal">/Month</p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-4/12 mx-auto">
          <div className="flex flex-col items-center gap-2 shadow-xl p-5 rounded-lg min-h-[700px]">
            <EditIcon color="#605BE5" size={50} />
            <p className="text-center text-lg md:text-xl font-semibold leading-normal md:leading-relaxed">
              API
            </p>
            <p className="text-center text-sky-500 text-xl md:text-2xl font-semibold leading-normal md:leading-relaxed">
              AI Driven
            </p>
            <p className="text-center text-sm md:text-base leading-tight md:leading-normal mt-2">
              Integrate advanced AI-powered file and phishing detection
              capabilities into your existing applications for enterprise-grade
              security
            </p>
            <div className="flex flex-col gap-2 mt-5 flex-1">
              <div className="flex items-center gap-2">
                <CheckIcon size={20} color="#605BE5" />
                <p className="text-sm md:text-base leading-tight md:leading-normal">
                  Zero-Day Files Detection (Exe, Doc, PDF, Excel)
                </p>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon size={20} color="#605BE5" />
                <p className="text-sm md:text-base leading-tight md:leading-normal">
                  Zero-Day Phishing Detection
                </p>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon size={20} color="#605BE5" />
                <p className="text-sm md:text-base leading-tight md:leading-normal">
                  Anti-Virus Database
                </p>
              </div>
            </div>
              <button
                className="bg-btnDark text-white font-medium rounded-lg hover:shadow-xl transition-all text-base px-4 py-2 md:px-8 md:py-2"
              >
                Contact Us
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadAndPricePricing;

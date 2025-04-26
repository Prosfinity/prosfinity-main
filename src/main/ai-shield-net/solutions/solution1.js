import { ArrowBigRight } from "lucide-react";
import React from "react";

const Solution1 = () => {
  return (
    <div className="mx-auto mt-20 min-w-[1000px]">
      <div className="w-7/12 flex justify-between items-center mx-auto gap-10">
        <div className="w-6/12 mx-auto">
          <p className="text-4xl md:text-2xl font-bold leading-tight md:leading-tight">
            For Businesses of Any Size
          </p>
          <h2 className="text-4xl md:text-4xl font-bold text-gray-800 leading-tight md:leading-tight mt-5">
            Protect Your Business, No Matter the Size
          </h2>
          <p className="text-4xl md:text-lg leading-tight md:leading-normal mt-5">
            AIShieldNet’s cybersecurity solutions are designed to safeguard
            organizations of any size against the evolving threat of phishing
            attacks. By providing adaptable, customizable defenses, we empower
            businesses of all scales to stay secure in today’s dynamic threat
            landscape.
          </p>
          <div className="flex flex-col gap-2 mt-5">
            <div className="flex items-center gap-2">
              <ArrowBigRight />
              <p className="text-gray-600 hover:text-gray-900">
                Dual AI models to detect phishing attacks
              </p>
            </div>
            <div className="flex items-center gap-2">
              <ArrowBigRight />
              <p className="text-gray-600 hover:text-gray-900">
                Whitelist Trusted Domains
              </p>
            </div>
            <div className="flex items-center gap-2">
              <ArrowBigRight />
              <p className="text-gray-600 hover:text-gray-900">
                Sophisticated Analysis for suspicious sites
              </p>
            </div>
            <div className="flex items-center gap-2">
              <ArrowBigRight />
              <p className="text-gray-600 hover:text-gray-900">
                Enterprise-Grade Protection with Company Login
              </p>
            </div>
            <div className="flex items-center gap-2">
              <ArrowBigRight />
              <p className="text-gray-600 hover:text-gray-900">
                Sophisticated Analysis for suspicious sites
              </p>
            </div>
          </div>
          <div className="mt-5">
            <button className="bg-btnDark text-white w-80 h-16 font-medium rounded-lg hover:shadow-xl transition-all">
              Protect Your Business Now
            </button>
          </div>
        </div>
        <div className="w-6/12 mx-auto">
          <div className="shadow-xl rounded-lg">
            <img src="/images/threat-intelligence.jpg" alt="solution1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution1;

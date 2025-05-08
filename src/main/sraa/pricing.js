import { useInViewport } from "ahooks";
import { CastIcon, CheckIcon, EditIcon, ShieldCheckIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const SRAAPricing = () => {
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
      className="w-full xl:w-container px-8 lg:px-20 xl:px-0 mx-auto mt-8 xl:mt-16 gap-5"
    >
      <div className="w-full flex flex-wrap lg:flex-nowrap justify-between items-start mx-auto gap-10 mt-10">
        <div className="w-full lg:w-4/12 mx-auto">
          <div className="flex flex-col items-center gap-2 shadow-xl p-5 rounded-lg min-h-[500px]">
            <div className="flex flex-col gap-2 mt-5 text-gray-800">
              <p className="text-xl md:text-2xl text-center leading-tight md:leading-normal font-semibold">
                $10,000 HKD / System
              </p>
            </div>
            <p className="text-center text-sm md:text-base font-semibold leading-normal md:leading-relaxed">
              SRAA
            </p>
            <p className="text-center text-sm md:text-base leading-normal md:leading-relaxed">
              Security Risk Assessment and Audit
            </p>
            <div className="flex flex-col gap-2 mt-5 flex-1">
              <div className="flex items-center gap-2">
                <CheckIcon size={20} color="#605BE5" />
                <p className="text-sm md:text-base leading-tight md:leading-normal">
                  Mobile, Web, Windows & MacOS
                </p>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon size={20} color="#605BE5" />
                <p className="text-sm md:text-base leading-tight md:leading-normal">
                  Summary & Technical Report
                </p>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon size={20} color="#605BE5" />
                <p className="text-sm md:text-base leading-tight md:leading-normal">
                  Compliance Checklist
                </p>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon size={20} color="#605BE5" />
                <p className="text-sm md:text-base leading-tight md:leading-normal">
                  Within 10 working days
                </p>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon size={20} color="#605BE5" />
                <p className="text-sm md:text-base leading-tight md:leading-normal">
                  7 x 24 Support
                </p>
              </div>
            </div>
            <Link href="/service/sraa/contact">
              <button className="bg-btnDark text-white font-medium rounded-lg hover:shadow-xl transition-all text-base px-4 py-2 md:px-8 md:py-2">
                Request SRAA
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-4/12 mx-auto">
          <div className="flex flex-col items-center gap-2 shadow-xl p-5 rounded-lg min-h-[500px]">
            <div className="flex flex-col gap-2 mt-5 text-gray-800">
              <p className="text-xl md:text-2xl text-center leading-tight md:leading-normal font-semibold">
                $10,000 HKD / System
              </p>
            </div>
            <p className="text-center text-sm md:text-base font-semibold leading-normal md:leading-relaxed">
              PT
            </p>
            <p className="text-center text-sm md:text-base leading-normal md:leading-relaxed">
              Penetration Testing (Web / Mobile / Windows / MacOS)
            </p>
            <div className="flex flex-col gap-2 mt-5 flex-1">
              <div className="flex items-center gap-2">
                <CheckIcon size={20} color="#605BE5" />
                <p className="text-sm md:text-base leading-tight md:leading-normal">
                  Simulates real-world attacks
                </p>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon size={20} color="#605BE5" />
                <p className="text-sm md:text-base leading-tight md:leading-normal">
                  Summary & Technical Report
                </p>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon size={20} color="#605BE5" />
                <p className="text-sm md:text-base leading-tight md:leading-normal">
                  OWASP Top 10
                </p>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon size={20} color="#605BE5" />
                <p className="text-sm md:text-base leading-tight md:leading-normal">
                  Within 5 working days
                </p>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon size={20} color="#605BE5" />
                <p className="text-sm md:text-base leading-tight md:leading-normal">
                  24/7 Support
                </p>
              </div>
            </div>
            <Link href="/service/sraa/contact">
              <button className="bg-btnDark text-white font-medium rounded-lg hover:shadow-xl transition-all text-base px-4 py-2 md:px-8 md:py-2">
                Request PT
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-4/12 mx-auto">
          <div className="flex flex-col items-center gap-2 shadow-xl p-5 rounded-lg min-h-[500px]">
            <div className="flex flex-col gap-2 mt-5 text-gray-800">
              <p className="text-xl md:text-2xl text-center leading-tight md:leading-normal font-semibold">
                $6,000 HKD / Day
              </p>
            </div>
            <p className="text-center text-sm md:text-base font-semibold leading-normal md:leading-relaxed">
              IR
            </p>
            <p className="text-center text-sm md:text-base leading-normal md:leading-relaxed">
              Incident Response
            </p>
            <div className="flex flex-col gap-2 mt-5 flex-1">
              <div className="flex items-center gap-2">
                <CheckIcon size={20} color="#605BE5" />
                <p className="text-sm md:text-base leading-tight md:leading-normal">
                  2-3 Days to Identify Root Cause
                </p>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon size={20} color="#605BE5" />
                <p className="text-sm md:text-base leading-tight md:leading-normal">
                  Lateral Movement Tracing
                </p>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon size={20} color="#605BE5" />
                <p className="text-sm md:text-base leading-tight md:leading-normal">
                  Forensic Report
                </p>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon size={20} color="#605BE5" />
                <p className="text-sm md:text-base leading-tight md:leading-normal">
                  Business Recovery
                </p>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon size={20} color="#605BE5" />
                <p className="text-sm md:text-base leading-tight md:leading-normal">
                  24/7 Support
                </p>
              </div>
            </div>
            <Link href="/service/sraa/contact">
              <button className="bg-btnDark text-white font-medium rounded-lg hover:shadow-xl transition-all text-base px-4 py-2 md:px-8 md:py-2">
                Request IR
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SRAAPricing;

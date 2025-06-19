import { useInViewport } from "ahooks";
import {
  ArrowRightIcon,
  BotIcon,
  CheckIcon,
  HandIcon,
  Quote,
  QuoteIcon,
  SearchIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Section1 = () => {
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
      className="w-full xl:w-container mx-auto px-5 md:px-20 mt-10 sm:mt-20 xl:mt-10"
    >
      <h3 className="text-3xl md:text-4xl font-bold leading-tight md:leading-tight text-center">
        AIShieldNet - Real-Time LLM Intelligence - New Security Standard
      </h3>
      <p
        className={`${
          loaded || inViewport
            ? "animate__animated animate__slideInUp animate__fast"
            : ""
        } text-lg md:text-xl mt-5 text-center italic`}
      >
        LLM-Powered Endpoint Defense - Why AIShieldNet Outperforms Traditional
        EDRs?
      </p>
      <div className="mt-10">
        <img
          className={`${
            loaded || inViewport
              ? "animate__animated animate__slideInUp animate__fast"
              : ""
          } shadow-2xl rounded-2xl`}
          src="/images/bannnnn.png"
          alt="software dashboard"
        />
      </div>
      <div className="flex flex-wrap gap-5 mt-16">
        <p
          className={`${
            loaded || inViewport
              ? "animate__animated animate__slideInUp animate__fast"
              : ""
          } text-lg md:text-xl font-light`}
        >
          Traditional EDRs rely on signature matching and rigid rules. They miss
          unknown threats, fileless malware, and even common zero-days. Worse -
          they flood your SOC with false positives. AIShieldNet’s LLM-powered
          EDR uses language models like BERT and Phi-2 to understand behavior -
          not just match it. It sees context, intention, and anomalies invisible
          to rule-based tools.
        </p>
        <p
          className={`${
            loaded || inViewport
              ? "animate__animated animate__slideInUp animate__fast"
              : ""
          } text-lg md:text-xl font-semibold flex items-center gap-2 mt-5`}
        >
          <SearchIcon size={30} className="mb-1" />
          Looking for endpoint protection that thinks like an analyst?
        </p>
        <p
          className={`${
            loaded || inViewport
              ? "animate__animated animate__slideInUp animate__fast"
              : ""
          } text-lg md:text-xl flex items-center gap-2`}
        >
          <ArrowRightIcon size={30} className="mb-1" />
          Explore AIShieldNet - Built on Real-Time LLM Endpoint Protection
        </p>
      </div>
      <div className="flex justify-center mt-5">
        <Link href="/product/AIShieldNet">
          <button className="flex items-center gap-2 bg-btnBlue text-white font-medium rounded-lg hover:shadow-xl transition-all text-base px-4 py-2 md:px-8 md:py-4">
            Discover AIShieldNet <ArrowRightIcon size={20} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Section1;

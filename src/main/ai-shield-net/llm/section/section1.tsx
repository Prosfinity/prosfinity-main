import { useInViewport } from "ahooks";
import {
  ArrowRightIcon,
  CheckIcon,
  SearchIcon
} from "lucide-react";
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
      className="w-full xl:w-container mx-auto px-5 md:px-20"
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
        <Link href="/files/AIShieldNet%20LLM-Powered%20ZDR%20Technical%20Review.pdf" target="_blank">
          <img
            className={`${
              loaded || inViewport
                ? "animate__animated animate__slideInUp animate__fast"
                : ""
            } shadow-2xl rounded-2xl`}
            src="/images/banner-llm.jpeg"
            alt="software dashboard"
          />
        </Link>
      </div>

      <p
        className={`${
          loaded || inViewport
            ? "animate__animated animate__slideInUp animate__fast"
            : ""
        } text-xl md:text-2xl font-bold mt-10`}
      >
        Why LLM-Powered Detection Changes Everything
      </p>
      <ul className="flex flex-col gap-2 mt-5">
        <li className="flex gap-2 text-base md:text-lg font-light">
          <div className="mt-1">
            <CheckIcon size={20} />
          </div>
          <span>
            Detects zero-day, fileless, and insider attacks -{" "}
            <b>no signature needed</b>
          </span>
        </li>
        <li className="flex items-center gap-2 text-base md:text-lg font-light">
          <div className="mt-1">
            <CheckIcon size={20} />
          </div>
          <span>
            Analyzes <b>every single process</b> on Windows in real-time
          </span>
        </li>
        <li className="flex items-center gap-2 text-base md:text-lg font-light">
          <div className="mt-1">
            <CheckIcon size={20} />
          </div>
          <span>
            Understands attack <b>context and intent</b>, like a human analyst
          </span>
        </li>
        <li className="flex items-center gap-2 text-base md:text-lg font-light">
          <div className="mt-1">
            <CheckIcon size={20} />
          </div>
          <span>
            Stops threats in <b>under 1 second</b>, before damage begins
          </span>
        </li>
        <li className="flex items-center gap-2 text-base md:text-lg font-light">
          <div className="mt-1">
            <CheckIcon size={20} />
          </div>
          <span>
            Reduces false positives by up to <b>80%</b>
          </span>
        </li>
        <li className="flex items-center gap-2 text-base md:text-lg font-light">
          <div className="mt-1">
            <CheckIcon size={20} />
          </div>
          <span>
            Learns from your environment over time -{" "}
            <b>gets smarter automatically</b>
          </span>
        </li>
      </ul>
      <div className="flex justify-center mt-5">
        <Link
          href="/files/AIShieldNet LLM-Powered ZDR Technical Review.pdf"
          target="_blank"
        >
          <button className="flex items-center gap-2 bg-btnBlue text-white font-medium rounded-lg hover:shadow-xl transition-all text-base px-4 py-2 md:px-8 md:py-4">
            Want proof? Download full technical PDF
          </button>
        </Link>
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

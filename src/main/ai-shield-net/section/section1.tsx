import { useInViewport } from "ahooks";
import { BotIcon, CheckIcon, Quote, QuoteIcon } from "lucide-react";
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
        AIShieldNet - LLM Real Time Zero-Day Detection And Response - A New
        Security Standard
      </h3>
      <div className="flex flex-wrap gap-5 mt-16">
        <p
          className={`${
            loaded || inViewport
              ? "animate__animated animate__slideInUp animate__fast"
              : ""
          } text-lg md:text-xl font-semibold`}
        >
          Why Traditional Security Tools Fall Short
        </p>
        <p
          className={`${
            loaded || inViewport
              ? "animate__animated animate__slideInUp animate__fast"
              : ""
          } text-lg md:text-xl font-light`}
        >
          Most endpoint security solutions depend on static rules, signature
          databases, or basic machine learning models. These approaches often
          miss new or sophisticated attacks because:
        </p>
        <div
          className={`${
            loaded || inViewport
              ? "animate__animated animate__slideInUp animate__fast"
              : ""
          } flex flex-col gap-2`}
        >
          <div className="flex items-center gap-2 text-base md:text-lg font-light">
            Outdated Rules & Signatures: Attackers easily bypass static
            detection by modifying techniques or using novel malware
          </div>
          <div className="flex items-center gap-2 text-base md:text-lg font-light">
            Limited Context: Simple ML models lack the depth to understand
            complex attack patterns or subtle behaviors
          </div>
        </div>
        <p
          className={`${
            loaded || inViewport
              ? "animate__animated animate__slideInUp animate__fast"
              : ""
          } text-lg md:text-xl font-semibold mt-5`}
        >
          AIShieldNet: LLMs Transform Endpoint Detection
        </p>
        <p
          className={`${
            loaded || inViewport
              ? "animate__animated animate__slideInUp animate__fast"
              : ""
          } text-lg md:text-xl font-light`}
        >
          AIShieldNet is among the first solutions to harness Large Language
          Models (LLMs) for real-time endpoint detection and response (EDR) - a
          true leap beyond current industry standards
        </p>
        <p
          className={`${
            loaded || inViewport
              ? "animate__animated animate__slideInUp animate__fast"
              : ""
          } text-lg md:text-xl font-semibold mt-5`}
        >
          Unique Advantages of LLM-Powered Detection
        </p>
        <div
          className={`${
            loaded || inViewport
              ? "animate__animated animate__slideInUp animate__fast"
              : ""
          } flex flex-col gap-2`}
        >
          <div className="flex gap-2 text-base md:text-lg font-light">
            <div className="mt-1">
              <CheckIcon size={20} />
            </div>
            <p>
              <span className="font-semibold">Deep Process Understanding:</span>{" "}
              AIShieldNet uses LLMs to analyze every process creation event,
              interpreting sequences and relationships that static rules or ML
              cannot
            </p>
          </div>
          <div className="flex gap-2 text-base md:text-lg font-light">
            <div className="mt-1">
              <CheckIcon size={20} />
            </div>
            <p>
              <span className="font-semibold">
                Root-Level Threat Detection:
              </span>{" "}
              By transforming endpoint activity into rich, human-readable
              narratives, LLMs can spot the earliest signs of hands-on-keyboard
              (HOK) attacks, lateral movement, and novel threats - before damage
              occurs
            </p>
          </div>
          <div className="flex gap-2 text-base md:text-lg font-light">
            <div className="mt-1">
              <CheckIcon size={20} />
            </div>
            <p>
              <span className="font-semibold">Contextual Intelligence:</span>{" "}
              LLMs excel at correlating disparate events, reducing false
              positives and surfacing real threats that would otherwise be lost
              in the noise
            </p>
          </div>
          <div className="flex gap-2 text-base md:text-lg font-light">
            <div className="mt-1">
              <CheckIcon size={20} />
            </div>
            <p>
              <span className="font-semibold">Adaptive and Evolving:</span>{" "}
              Unlike legacy systems, LLMs continuously learn from new data,
              adapting to emerging attack techniques without waiting for
              signature updates
            </p>
          </div>
          <div className="flex gap-2 text-base md:text-lg font-light">
            <div className="mt-1">
              <CheckIcon size={20} />
            </div>
            <p>
              <span className="font-semibold">
                Scalable, Holistic Security:
              </span>{" "}
              AIShieldNet’s architecture enables comprehensive protection across
              endpoints, cloud, and hybrid environments, closing the visibility
              gaps that plague traditional EDR
            </p>
          </div>
        </div>
        <div className="mt-10">
          <img
            className={`${
              loaded || inViewport
                ? "animate__animated animate__slideInUp animate__fast"
                : ""
            } shadow-2xl rounded-2xl`}
            src="/images/portal_dashboard.png"
            alt="software dashboard"
          />
        </div>
        <p
          className={`${
            loaded || inViewport
              ? "animate__animated animate__slideInUp animate__fast"
              : ""
          } text-lg md:text-xl font-semibold mt-5`}
        >
          <BotIcon size={50} className="mb-1" />
          Why LLMs in EDR Are a Game-Changer?
        </p>
        <div
          className={`${
            loaded || inViewport
              ? "animate__animated animate__slideInUp animate__fast"
              : ""
          } flex flex-col gap-2`}
        >
          <div className="flex gap-2 text-base md:text-lg font-light">
            <div className="mt-1">
              <CheckIcon size={20} />
            </div>
            <p>
              <span className="font-semibold">First-Mover Advantage:</span> Very
              few, if any, EDR vendors have successfully integrated full-scale
              LLMs into their detection pipeline - making AIShieldNet a pioneer
              in this space
            </p>
          </div>
          <div className="flex gap-2 text-base md:text-lg font-light">
            <div className="mt-1">
              <CheckIcon size={20} />
            </div>
            <p>
              <span className="font-semibold">
                Superior Detection of Advanced Attacks:
              </span>{" "}
              LLMs can detect sophisticated, multi-stage attacks that bypass
              conventional tools, including fileless malware and
              living-off-the-land techniques
            </p>
          </div>
          <div className="flex gap-2 text-base md:text-lg font-light">
            <div className="mt-1">
              <CheckIcon size={20} />
            </div>
            <p>
              <span className="font-semibold">Reduced Analyst Burden:</span> By
              filtering out noise and providing clear, actionable alerts,
              AIShieldNet helps security teams focus on real incidents -
              minimizing alert fatigue and resource drain
            </p>
          </div>
        </div>
        <div
          className={`${
            loaded || inViewport
              ? "animate__animated animate__slideInUp animate__fast"
              : ""
          } space-y-4 mt-5`}
        >
          <blockquote className="relative bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <QuoteIcon className="absolute top-4 left-4 h-8 w-8 text-purple-400 opacity-50" />
            <div className="ml-12">
              <p className="text-lg leading-relaxed text-gray-800 italic mb-3">
                "We caught a never-before-seen attack thanks to AIShieldNet –
                other tools missed it entirely."
              </p>
              <cite className="text-sm font-medium text-purple-600 not-italic">
                — Head of Cybersecurity at a Finance Org, Hong Kong
              </cite>
            </div>
          </blockquote>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <Link href="/product/AIShieldNet/free-trial">
          <button className="bg-btnBlue text-white font-medium rounded-lg hover:shadow-xl transition-all text-base px-4 py-2 md:px-8 md:py-4 uppercase">
            Try Free Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Section1;

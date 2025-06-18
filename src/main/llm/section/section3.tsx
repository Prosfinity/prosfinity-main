import { useInViewport } from "ahooks";
import { CheckIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Section3 = () => {
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
      className="w-full xl:w-container mx-auto px-5 md:px-20 mt-10 sm:mt-20 xl:mt-32 pb-20"
    >
      <h3 className="text-3xl md:text-4xl font-bold leading-tight md:leading-tight text-center">
        🔥 Instant Value with AIShieldNet + LLM
      </h3>
      <div
        className={`${
          loaded || inViewport
            ? "animate__animated animate__slideInUp animate__fast"
            : ""
        } flex flex-col gap-2 mt-10`}
      >
        <div className="flex gap-2 text-base md:text-lg font-light">
          <div className="mt-1">
            <CheckIcon size={20} />
          </div>
          <p>100% Windows process monitoring</p>
        </div>
        <div className="flex gap-2 text-base md:text-lg font-light">
          <div className="mt-1">
            <CheckIcon size={20} />
          </div>
          <p>Detects fileless, zero-day, and novel attacks</p>
        </div>
        <div className="flex gap-2 text-base md:text-lg font-light">
          <div className="mt-1">
            <CheckIcon size={20} />
          </div>
          <p>Cloud-native, real-time LLM detection</p>
        </div>
        <div className="flex gap-2 text-base md:text-lg font-light">
          <div className="mt-1">
            <CheckIcon size={20} />
          </div>
          <p>Minimal false positives - accurate from Day 1</p>
        </div>
      </div>
      <p
        className={`${
          loaded || inViewport
            ? "animate__animated animate__slideInUp animate__fast"
            : ""
        } text-lg md:text-xl font-semibold mt-5`}
      >
        🎯 Built for modern threats. Tested in real enterprise environments.
      </p>
      <div className="flex justify-center mt-5">
        <Link href="/product/AIShieldNet">
          <button className="bg-btnBlue text-white font-medium rounded-lg hover:shadow-xl transition-all text-base px-4 py-2 md:px-8 md:py-4">
            Explore more
          </button>
        </Link>
      </div>
      <div
        className={`${
          loaded || inViewport
            ? "animate__animated animate__slideInUp animate__fast"
            : ""
        } flex flex-col gap-2 mt-10`}
      >
        <div className="flex gap-2 text-base md:text-lg font-light">
          <div className="mt-1">
            <CheckIcon size={20} />
          </div>
          <p>
            <span className="font-semibold">Zero-Day Threat Detection:</span>
            <br />
            Detects novel and unknown threats by analyzing behaviors and
            context, not just known signatures
          </p>
        </div>
        <div className="flex gap-2 text-base md:text-lg font-light">
          <div className="mt-1">
            <CheckIcon size={20} />
          </div>
          <p>
            <span className="font-semibold">Contextual Awareness:</span>
            <br />
            Understands the intent and relationships behind activities,
            providing deep, narrative-driven analysis
          </p>
        </div>
        <div className="flex gap-2 text-base md:text-lg font-light">
          <div className="mt-1">
            <CheckIcon size={20} />
          </div>
          <p>
            <span className="font-semibold">Detection of Unseen Threats:</span>
            <br />
            Uses advanced learning to recognize and respond to previously unseen
            attack techniques
          </p>
        </div>
        <div className="flex gap-2 text-base md:text-lg font-light">
          <div className="mt-1">
            <CheckIcon size={20} />
          </div>
          <p>
            <span className="font-semibold">
              Natural Language Explanations:
            </span>
            <br />
            Generates human-readable, actionable explanations for every alert,
            reducing analyst workload
          </p>
        </div>
        <div className="flex gap-2 text-base md:text-lg font-light">
          <div className="mt-1">
            <CheckIcon size={20} />
          </div>
          <p>
            <span className="font-semibold">
              Continuous Learning and Adaptation:
            </span>
            <br />
            Continuously learns from new data in the cloud, instantly adapting
            to new threats without manual updates
          </p>
        </div>
        <div className="flex gap-2 text-base md:text-lg font-light">
          <div className="mt-1">
            <CheckIcon size={20} />
          </div>
          <p>
            <span className="font-semibold">
              Noise Reduction / Fewer False Positives:
            </span>
            <br />
            Minimizes alert fatigue by understanding context and intent,
            surfacing only real threats
          </p>
        </div>
      </div>
      <p
        className={`${
          loaded || inViewport
            ? "animate__animated animate__slideInUp animate__fast"
            : ""
        } text-lg md:text-xl mt-10 text-center`}
      >
        AIShieldNet uses powerful Large Language Models (LLMs) to analyze every
        process on your endpoints in real time - detecting what traditional
        tools miss.
      </p>
    </div>
  );
};

export default Section3;

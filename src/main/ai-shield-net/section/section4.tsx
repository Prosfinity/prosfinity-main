import { useInViewport } from "ahooks";
import { BrainIcon, SwordsIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ComparisonTable } from "./comparison-table";
import Link from "next/link";

const Section4 = () => {
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
      className="w-full xl:w-container mx-auto px-5 md:px-20 mt-10 sm:mt-20 xl:mt-32"
    >
      <h3 className="text-3xl md:text-4xl font-bold leading-tight md:leading-tight text-center">
        🎁 30 Day Free Trial – Try It Now
      </h3>
      <p
        className={`${
          loaded || inViewport
            ? "animate__animated animate__slideInUp animate__fast"
            : ""
        } text-lg md:text-xl mt-10 text-center`}
      >
        Experience the world’s first LLM-powered endpoint security platform.
        Want future-ready protection? The time is now. AIShieldNet: A New Class
        of Defense. Powered by Language. Designed for Speed.
      </p>
      <div className="flex justify-center mt-5">
        <Link href="/product/AIShieldNet/free-trial">
          <button className="bg-btnBlue text-white font-medium rounded-lg hover:shadow-xl transition-all text-base px-4 py-2 md:px-8 md:py-4 uppercase">
            START FREE TRIAL
          </button>
        </Link>
      </div>
      <p
        className={`${
          loaded || inViewport
            ? "animate__animated animate__slideInUp animate__fast"
            : ""
        } text-lg md:text-xl mt-10 text-center`}
      >
        AIShieldNet – The future of endpoint security is not rule-based. Let AI
        defend faster than hackers.
      </p>
    </div>
  );
};

export default Section4;

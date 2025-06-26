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

const Section2 = () => {
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
        📊 Accuracy and Coverage Comparison
      </h3>
      <div className="mt-10">
        <img
          className={`${
            loaded || inViewport
              ? "animate__animated animate__slideInUp animate__fast"
              : ""
          } shadow-2xl rounded-2xl`}
          src="/images/compare.png"
          alt="software dashboard"
        />
      </div>
    </div>
  );
};

export default Section2;

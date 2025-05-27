import { useInViewport } from "ahooks";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Banner = () => {
  const ref = useRef(null);

  const [loaded, setLoaded] = useState(false);
  const [inViewport] = useInViewport(ref);

  const [stepAnimation, setStepAnimation] = useState(1);

  useEffect(() => {
    if (!loaded && inViewport) {
      setLoaded(true);
    }
  }, [inViewport, loaded]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStepAnimation((prev) => (prev > 3 ? 1 : prev + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, [stepAnimation]);

  return (
    <div
      ref={ref}
      className="w-full xl:w-container px-8 lg:px-20 xl:px-0 mx-auto text-white mt-16 xl:mt-28 pt-10"
    >
      <div className="w-full lg:w-4/6">
        <p
          className={`${
            loaded || inViewport
              ? "animate__animated animate__slideInUp animate__fast"
              : ""
          } text-2xl md:text-4xl font-semibold leading-normal md:leading-relaxed`}
        >
          AI Endpoint Phishing Protection
        </p>
        <h1
          className={`${
            loaded || inViewport
              ? "animate__animated animate__slideInUp animate__fast"
              : ""
          } mt-5 text-3xl md:text-5xl font-bold leading-tight md:leading-tight uppercase`}
        >
          Prevent Zero
          <br />
          Day
        </h1>
        <div
          className={`${
            loaded || inViewport
              ? "animate__animated animate__slideInUp animate__fast"
              : ""
          }`}
        >
          {stepAnimation === 1 && (
            <span className="animate__animated animate__flipInX animate__fast mt-5 text-3xl md:text-5xl font-bold leading-tight md:leading-tight uppercase text-yellow-400">
              Malware
            </span>
          )}
          {stepAnimation === 2 && (
            <span className="animate__animated animate__flipInX animate__fast mt-5 text-3xl md:text-5xl font-bold leading-tight md:leading-tight uppercase text-yellow-400">
              Ransomware
            </span>
          )}
          {stepAnimation === 3 && (
            <span className="animate__animated animate__flipInX animate__fast mt-5 text-3xl md:text-5xl font-bold leading-tight md:leading-tight uppercase text-yellow-400">
              Phishing
            </span>
          )}
          {stepAnimation === 4 && (
            <span className="animate__animated animate__flipInX animate__fast mt-5 text-3xl md:text-5xl font-bold leading-tight md:leading-tight uppercase text-yellow-400">
              Virus
            </span>
          )}
        </div>
        <p
          className={`${
            loaded || inViewport
              ? "animate__animated animate__slideInUp animate__fast"
              : ""
          } mt-5 text-3xl md:text-4xl font-semibold leading-normal md:leading-10`}
        >
          AI-Powered Zero-Day Phishing
          <br />
          Protection & Ransomware
        </p>
        <p
          className={`${
            loaded || inViewport
              ? "animate__animated animate__slideInUp animate__fast"
              : ""
          } mt-5 text-lg md:text-xl font-light leading-6 lg:leading-10`}
        >
          Protect your business from evolving threats with AI-driven detection -
          proactive safeguarding against phishing attacks and ransomware at the
          endpoint, without relying on outdated, static databases.
        </p>
        <div
          className={`${
            loaded || inViewport
              ? "animate__animated animate__slideInUp animate__fast"
              : ""
          } mt-7 space-y-4`}
        >
          <Link href="/product/AIShieldNet/phishing-defense-review">
            <button className="bg-btnDark text-white font-medium rounded-lg hover:shadow-xl transition-all text-base md:text-lg px-4 py-2 md:px-8 md:py-4">
              Schedule Phishing Defense Review
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;

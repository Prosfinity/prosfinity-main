import { useInViewport } from "ahooks";
import { CheckIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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
        Real Use Cases
      </h3>
      <p
        className={`${
          loaded || inViewport
            ? "animate__animated animate__slideInUp animate__fast"
            : ""
        } text-lg md:text-xl  mt-5`}
      >
        ⚔️ Stops zero-day ransomware - before first file gets encrypted
      </p>
      <div className="mt-5">
        <img
          className={`${
            loaded || inViewport
              ? "animate__animated animate__slideInUp animate__fast"
              : ""
          } shadow-2xl rounded-2xl`}
          src="/images/portal_dashboard.png"
          alt="portal dashboard"
        />
      </div>
      <p
        className={`${
          loaded || inViewport
            ? "animate__animated animate__slideInUp animate__fast"
            : ""
        } text-lg md:text-xl mt-10`}
      >
        🕵️ Detects insider threats using legit tools like PowerShell
      </p>
      <div className="mt-5">
        <img
          className={`${
            loaded || inViewport
              ? "animate__animated animate__slideInUp animate__fast"
              : ""
          } shadow-2xl rounded-2xl`}
          src="/images/portal_llm_detection.png"
          alt="portal llm detection"
        />
      </div>
      <p
        className={`${
          loaded || inViewport
            ? "animate__animated animate__slideInUp animate__fast"
            : ""
        } text-lg md:text-xl mt-10`}
      >
        🌐 Blocks lateral movement and APTs across your network
      </p>
      <div className="mt-5">
        <img
          className={`${
            loaded || inViewport
              ? "animate__animated animate__slideInUp animate__fast"
              : ""
          } shadow-2xl rounded-2xl`}
          src="/images/portal_endpoint_dashboard.png"
          alt="portal endpoint dashboard"
        />
      </div>
      <p
        className={`${
          loaded || inViewport
            ? "animate__animated animate__slideInUp animate__fast"
            : ""
        } text-lg md:text-xl mt-10`}
      >
        💻 Catches human attackers in “hands-on-keyboard” scenarios
      </p>
      <div className="mt-5">
        <img
          className={`${
            loaded || inViewport
              ? "animate__animated animate__slideInUp animate__fast"
              : ""
          } shadow-2xl rounded-2xl`}
          src="/images/portal_antivirus_dashboard.png"
          alt="portal antivirus dashboard"
        />
      </div>
    </div>
  );
};

export default Section4;

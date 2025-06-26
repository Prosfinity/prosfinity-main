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
          src="/images/dashboard.jpeg"
          alt="software dashboard"
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
          src="/images/dashboard.jpeg"
          alt="software dashboard"
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
          src="/images/dashboard.jpeg"
          alt="software dashboard"
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
          src="/images/dashboard.jpeg"
          alt="software dashboard"
        />
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
        <li className="flex items-center gap-2 text-base md:text-lg font-light">
          <CheckIcon size={20} /> Detects zero-day, fileless, and insider
          attacks - <b>no signature needed</b>
        </li>
        <li className="flex items-center gap-2 text-base md:text-lg font-light">
          <CheckIcon size={20} /> Analyzes <b>every single process</b> on
          Windows in real-time
        </li>
        <li className="flex items-center gap-2 text-base md:text-lg font-light">
          <CheckIcon size={20} /> Understands attack <b>context and intent</b>,
          like a human analyst
        </li>
        <li className="flex items-center gap-2 text-base md:text-lg font-light">
          <CheckIcon size={20} /> Stops threats in <b>under 1 second</b>, before
          damage begins
        </li>
        <li className="flex items-center gap-2 text-base md:text-lg font-light">
          <CheckIcon size={20} /> Reduces false positives by up to <b>80%</b>
        </li>
        <li className="flex items-center gap-2 text-base md:text-lg font-light">
          <CheckIcon size={20} /> Learns from your environment over time -{" "}
          <b>gets smarter automatically</b>
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
    </div>
  );
};

export default Section4;

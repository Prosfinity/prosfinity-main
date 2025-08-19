/* eslint-disable @next/next/no-img-element */
import { useInViewport } from "ahooks";
import { SparkleIcon } from "lucide-react";
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
    <div ref={ref} className="mx-auto px-5 xl:px-0 py-10">
      <div className="w-full xl:w-8/12 flex flex-wrap lg:flex-nowrap justify-between items-start mx-auto gap-10">
        <div className="w-full">
          <h2
            className={`${
              loaded || inViewport
                ? "animate__animated animate__slideInUp animate__fast"
                : ""
            } text-2xl md:text-3xl font-semibold leading-normal md:leading-relaxed mt-5 text-center`}
          >
            Why Choose Zero-Day Ransomware Terminator?
          </h2>
          <ul
            className={`${
              loaded || inViewport
                ? "animate__animated animate__slideInUp animate__fast"
                : ""
            } flex flex-col gap-2 ml-5 text-lg mt-5`}
          >
            <li className="flex gap-2">
              <span className="mt-1">
                <SparkleIcon className="size-4" />
              </span>
              <span className="text-justify">
                Complete Peace of Mind: Your assets never face the threat of
                unknown ransomware.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1">
                <SparkleIcon className="size-4" />
              </span>
              <span className="text-justify">
                Productivity and Usability: Employees work with confidence - no
                slowdowns, no interruptions, no false alarms.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1">
                <SparkleIcon className="size-4" />
              </span>
              <span className="text-justify">
                Future-Proof Security: Stay ahead of attackers who craft new
                malware every day.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Section2;

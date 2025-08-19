/* eslint-disable @next/next/no-img-element */
import { useInViewport } from "ahooks";
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
    <div ref={ref} className="mx-auto px-5 xl:px-0 mb-20">
      <div className="w-full xl:w-8/12 flex flex-wrap lg:flex-nowrap justify-between items-start mx-auto gap-10">
        <div>
          <h2
            className={`${
              loaded || inViewport
                ? "animate__animated animate__slideInUp animate__fast"
                : ""
            } text-xl md:text-2xl font-semibold leading-normal md:leading-relaxed mt-5 text-center`}
          >
            Stop Ransomware. <br />
            Stop Zero-Day Attacks. <br />
            Own Your Security - Before the Threat Even Begins
          </h2>
          <div className="w-full mx-auto mt-10">
            <Link
              href="/files/AIShieldNet%20LLM-Powered%20ZDR%20Technical%20Review.pdf"
              target="_blank"
            >
              <img
                className={`${
                  loaded || inViewport
                    ? "animate__animated animate__slideInUp animate__fast"
                    : ""
                } shadow-2xl rounded-2xl`}
                src="/images/banner-new.png"
                alt="software dashboard"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;

/* eslint-disable @next/next/no-img-element */
import { useInViewport } from "ahooks";
import React, { useEffect, useRef, useState } from "react";

const FeaturesSolution7 = () => {
  const ref = useRef(null);

  const [loaded, setLoaded] = useState(false);
  const [inViewport] = useInViewport(ref);

  useEffect(() => {
    if (!loaded && inViewport) {
      setLoaded(true);
    }
  }, [inViewport, loaded]);

  return (
    <div ref={ref} className="mx-auto mt-20 px-5 xl:px-0 border-b border-gray-200 py-10">
      <div className="w-full xl:w-7/12 flex flex-wrap lg:flex-nowrap justify-between items-start mx-auto gap-10">
        <div className="w-full lg:w-4/12 mx-auto">
          <p
            className={`${
              loaded || inViewport
                ? `animate__animated animate__slideInUp animate__fast`
                : ""
            } text-xl md:text-2xl font-semibold leading-tight md:leading-normal mt-5`}
          >
            Execute File Whitelist
          </p>
          <h2
            className={`${
              loaded || inViewport
                ? `animate__animated animate__slideInUp animate__fast`
                : ""
            } text-3xl md:text-3xl font-bold text-gray-800 leading-tight md:leading-tight mt-5`}
          >
            Managing Whitelisted Files
          </h2>
          <p
            className={`${
              loaded || inViewport
                ? `animate__animated animate__slideInUp animate__fast`
                : ""
            } text-lg md:text-lg leading-tight md:leading-normal mt-5`}
          >
            View and manage trusted file hashes in the <b>Whitelist</b>, <b>add hashes</b> to prevent false flags, or <b>remove them</b> to restore security checks.
          </p>
        </div>
        <div className="w-full lg:w-8/12 mx-auto">
          <div
            className={`${
              loaded || inViewport
                ? `animate__animated animate__slideInUp animate__fast`
                : ""
            } shadow-xl rounded-lg`}
          >
            <img
              src="/images/features/solutions/solution7.png"
              alt="solution7"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSolution7;

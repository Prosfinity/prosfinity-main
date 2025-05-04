/* eslint-disable @next/next/no-img-element */
import { useInViewport } from "ahooks";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import featuresData from "./featuresData";
import SingleFeature from "./single-feature";

const Features = () => {
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
      <div className="container mx-auto w-full flex flex-wrap lg:flex-nowrap justify-between items-start gap-10">
        <div>
          <h2
            className={`${
              loaded || inViewport
                ? "animate__animated animate__slideInUp animate__fast"
                : ""
            } text-3xl md:text-4xl font-semibold leading-normal md:leading-relaxed mt-5 text-center`}
          >
            Our Expertise
          </h2>
          <p
            className={`${
              loaded || inViewport
                ? "animate__animated animate__slideInUp animate__fast"
                : ""
            } w-1/2 mt-5 text-lg md:text-xl font-light leading-6 lg:leading-10 text-center mx-auto`}
          >
            At Prosfinity, we understand that a robust security framework is
            crucial for protecting your assets and maintaining business
            continuity. Our team of certified security professionals brings
            extensive experience in conducting risk assessments across various
            industries.
          </p>
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3 mt-10">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

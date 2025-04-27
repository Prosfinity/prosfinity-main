import { useInViewport } from "ahooks";
import React, { useEffect, useRef, useState } from "react";

const FeaturesTitle = ({ title, subtitle }) => {
  const ref = useRef(null);

  const [loaded, setLoaded] = useState(false);
  const [inViewport] = useInViewport(ref);

  useEffect(() => {
    if (!loaded && inViewport) {
      setLoaded(true);
    }
  }, [inViewport]);

  return (
    <div
      ref={ref}
      className={`${
        loaded || inViewport
          ? `animate__animated animate__slideInUp animate__fast`
          : ""
      } mt-20`}
    >
      {title && (
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 leading-tight md:leading-tight mt-10">
          {title}
        </h2>
      )}
      {subtitle && (
        <h3 className="text-center text-2xl md:text-3xl font-bold text-gray-800 leading-tight md:leading-tight mt-5">
          {subtitle}
        </h3>
      )}
    </div>
  );
};

export default FeaturesTitle;

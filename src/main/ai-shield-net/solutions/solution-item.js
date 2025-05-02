import { useInViewport } from "ahooks";
import { ArrowBigRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const SolutionItem = ({ content }) => {
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
      className={`${
        loaded || inViewport
          ? `animate__animated animate__bounceInLeft animate__fast`
          : ""
      } flex items-center gap-2`}
    >
      <ArrowBigRight />
      <p className="text-sm xl:text-base text-gray-600 hover:text-gray-900">
        {content}
      </p>
    </div>
  );
};

export default SolutionItem;

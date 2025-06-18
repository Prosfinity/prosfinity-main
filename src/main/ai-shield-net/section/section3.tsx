import { useInViewport } from "ahooks";
import { BrainIcon, SwordsIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ComparisonTable } from "./comparison-table";

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
    <div
      ref={ref}
      className="w-full xl:w-container mx-auto px-5 md:px-20 mt-10 sm:mt-20 xl:mt-32"
    >
      <h3 className="text-3xl md:text-4xl font-bold leading-tight md:leading-tight text-center">
        How AIShieldNet Stands Out in the Crowd?
      </h3>
      <p
        className={`${
          loaded || inViewport
            ? "animate__animated animate__slideInUp animate__fast"
            : ""
        } text-lg md:text-xl mt-10`}
      >
        Not all endpoint security platforms are built equal. Here’s how
        AIShieldNet compares to traditional solutions on what really matters
      </p>
      <p
        className={`${
          loaded || inViewport
            ? "animate__animated animate__slideInUp animate__fast"
            : ""
        } text-lg md:text-xl font-semibold mt-10`}
      >
        <SwordsIcon size={30} className="mb-1" />
        AIShieldNet sees it. It understands the full behavior context - who,
        when, how, and why it’s dangerous.
      </p>
      <div className="mt-10">
        <ComparisonTable />
      </div>
    </div>
  );
};

export default Section3;

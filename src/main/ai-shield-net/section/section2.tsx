import { useInViewport } from "ahooks";
import { BrainIcon, CheckIcon } from "lucide-react";
import Link from "next/link";
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
    <div
      ref={ref}
      className="w-full xl:w-container mx-auto px-5 md:px-20 mt-10 sm:mt-20 xl:mt-32"
    >
      <h3 className="text-3xl md:text-4xl font-bold leading-tight md:leading-tight text-center">
        A scenario you NEVER want to face
      </h3>
      <div className="flex flex-wrap gap-5 mt-16">
        <p
          className={`${
            loaded || inViewport
              ? "animate__animated animate__slideInUp animate__fast"
              : ""
          } text-lg md:text-xl font-semibold`}
        >
          An employee opens a suspicious email attachment. Within 2 minutes:
        </p>
        <div
          className={`${
            loaded || inViewport
              ? "animate__animated animate__slideInUp animate__fast"
              : ""
          } flex flex-col gap-2`}
        >
          <div className="flex gap-2 text-base md:text-lg font-light">
            <div className="mt-1">
              <CheckIcon size={20} />
            </div>
            <p>A PowerShell process runs silently, encrypting files.</p>
          </div>
          <div className="flex gap-2 text-base md:text-lg font-light">
            <div className="mt-1">
              <CheckIcon size={20} />
            </div>
            <p>Shadow copy gets deleted.</p>
          </div>
          <div className="flex gap-2 text-base md:text-lg font-light">
            <div className="mt-1">
              <CheckIcon size={20} />
            </div>
            <p>All done by a “legit” process - so your EDR says nothing.</p>
          </div>
        </div>
      </div>
      <p
        className={`${
          loaded || inViewport
            ? "animate__animated animate__slideInUp animate__fast"
            : ""
        } text-lg md:text-xl font-semibold mt-10`}
      >
        <BrainIcon size={30} className="mb-1" />
        AIShieldNet sees it. It understands the full behavior context - who,
        when, how, and why it’s dangerous.
      </p>
      <div className="flex justify-center mt-5">
        <Link href="/product/AIShieldNet/free-trial">
          <button className="bg-btnBlue text-white font-medium rounded-lg hover:shadow-xl transition-all text-base px-4 py-2 md:px-8 md:py-4 uppercase">
            ACT NOW – DON’T LOSE CONTROL
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Section2;

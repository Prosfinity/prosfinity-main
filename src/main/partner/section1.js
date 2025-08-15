/* eslint-disable @next/next/no-img-element */
import { useInViewport } from "ahooks";
import { HeadsetIcon, ServerIcon, ShieldQuestionIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Section1 = () => {
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
      <div className="w-full xl:w-7/12 flex flex-wrap lg:flex-nowrap justify-between items-start mx-auto gap-10">
        <div>
          <h2
            className={`${
              loaded || inViewport
                ? "animate__animated animate__slideInUp animate__fast"
                : ""
            } text-2xl md:text-3xl font-semibold leading-normal md:leading-relaxed mt-5 text-center`}
          >
            Are you providing IT services to small and medium-sized businesses
            (SMEs)?
          </h2>
          <div className={`${
              loaded || inViewport
                ? "animate__animated animate__slideInUp animate__fast"
                : ""
            } grid grid-cols-1 md:grid-cols-3 gap-5 mt-10`}>
            <div className="flex flex-col items-center gap-5">
              <div className="bg-gradient rounded-lg p-4">
                <HeadsetIcon className="size-10 text-white" />
              </div>
              <p className="text-center text-lg">
                An IT Support or IT Outsourcing company?
              </p>
            </div>
            <div className="flex flex-col items-center gap-5">
              <div className="bg-gradient rounded-lg p-4">
                <ServerIcon className="size-10 text-white" />
              </div>
              <p className="text-center text-lg">
                A provider of network setup, infrastructure, or hardware
                maintenance?
              </p>
            </div>
            <div className="flex flex-col items-center gap-5">
              <div className="bg-gradient rounded-lg p-4">
                <ShieldQuestionIcon className="size-10 text-white" />
              </div>
              <p className="text-center text-lg">
                Offering cybersecurity services but lacking deep in-house
                expertise?
              </p>
            </div>
          </div>
          <div className={`${
              loaded || inViewport
                ? "animate__animated animate__slideInUp animate__fast"
                : ""
            } mt-10`}>
            <p className="text-lg">
              If yes - you're sitting on an untapped goldmine: the rising demand
              for cybersecurity from your existing clients.
              <br />
              See what you stand to gain?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;

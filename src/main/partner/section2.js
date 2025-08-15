/* eslint-disable @next/next/no-img-element */
import { useInViewport } from "ahooks";
import {
  DollarSignIcon,
  RepeatIcon,
  ShieldCheckIcon,
  ZapIcon,
} from "lucide-react";
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
      <div className="w-full xl:w-7/12 flex flex-wrap lg:flex-nowrap justify-between items-start mx-auto gap-10">
        <div>
          <h2
            className={`${
              loaded || inViewport
                ? "animate__animated animate__slideInUp animate__fast"
                : ""
            } text-2xl md:text-3xl font-semibold leading-normal md:leading-relaxed mt-5 text-center`}
          >
            Retain existing clients - double your contract value with the same
            level of effort!
          </h2>
          <div className={`${
              loaded || inViewport
                ? "animate__animated animate__slideInUp animate__fast"
                : ""
            } text-lg mt-5`}>
            As a Prosfinity partner, you can:
            <p className="flex gap-2 mt-2">
              <span className="mt-1">
                <ZapIcon className="size-5" />
              </span>{" "}
              <span>
                Add enterprise-grade cybersecurity services to your existing
                portfolio
              </span>
            </p>
            <p className="flex gap-2">
              <span className="mt-1">
                <DollarSignIcon className="size-5" />
              </span>{" "}
              <span>
                Earn high commissions on every deployed service contract
              </span>
            </p>
            <p className="flex gap-2">
              <span className="mt-1">
                <ShieldCheckIcon className="size-5" />
              </span>{" "}
              <span>
                Leave the technical cybersecurity work to Prosfinity - so you
                can focus on sales & client care
              </span>
            </p>
            <p className="flex gap-2">
              <span className="mt-1">
                <RepeatIcon className="size-5" />
              </span>{" "}
              <span>
                Turn one-time projects into recurring services with stable cash
                flow
              </span>
            </p>
          </div>
          <div className={`${
              loaded || inViewport
                ? "animate__animated animate__slideInUp animate__fast"
                : ""
            } mt-5`}>
            <p className="text-lg">
              A quick note: No need to invest in extra staff or tech. Prosfinity
              is the “cybersecurity team behind you”.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;

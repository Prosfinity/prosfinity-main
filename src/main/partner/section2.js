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
      <div className="w-full xl:w-8/12 flex flex-wrap lg:flex-nowrap justify-between items-start mx-auto gap-10">
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
          <div
            className={`${
              loaded || inViewport
                ? "animate__animated animate__slideInUp animate__fast"
                : ""
            } text-lg mt-5`}
          >
            As a Prosfinity partner, you can:
            <div className="grid gap-3 mt-5">
              {[
                {
                  icon: ZapIcon,
                  text: "Add enterprise-grade cybersecurity services to your existing portfolio",
                  color: "text-amber-500",
                  bgColor: "bg-amber-50",
                  borderColor: "border-amber-200",
                },
                {
                  icon: DollarSignIcon,
                  text: "Earn high commissions on every deployed service contract",
                  color: "text-green-500",
                  bgColor: "bg-green-50",
                  borderColor: "border-green-200",
                },
                {
                  icon: ShieldCheckIcon,
                  text: "Leave the technical cybersecurity work to Prosfinity - so you can focus on sales & client care",
                  color: "text-blue-500",
                  bgColor: "bg-blue-50",
                  borderColor: "border-blue-200",
                },
                {
                  icon: RepeatIcon,
                  text: "Turn one-time projects into recurring services with stable cash flow",
                  color: "text-purple-500",
                  bgColor: "bg-purple-50",
                  borderColor: "border-purple-200",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 p-2 rounded-xl border-2 ${item.borderColor} ${item.bgColor} hover:shadow-lg transition-all duration-300 hover:scale-[1.02]`}
                >
                  <div
                    className={`flex-shrink-0 w-7 h-7 ${item.bgColor} rounded-full flex items-center justify-center border-2 ${item.borderColor}`}
                  >
                    <item.icon className={`size-4 ${item.color}`} />
                  </div>
                  <p className="text-base font-medium text-slate-700 leading-relaxed pt-0.5">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div
            className={`${
              loaded || inViewport
                ? "animate__animated animate__slideInUp animate__fast"
                : ""
            } mt-5`}
          >
            <p className="text-lg">
              <i>A quick note:</i> No need to invest in extra staff or tech.
              Prosfinity is the “cybersecurity team behind you”.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;

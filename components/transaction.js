import { CheckIcon } from "@heroicons/react/solid";
import { useInViewport } from "ahooks";
import { useEffect, useRef, useState } from "react";

function Transaction() {
  const ref = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [inViewport] = useInViewport(ref);

  useEffect(() => {
    if (!loaded && inViewport) {
      setLoaded(true);
    }
  }, [inViewport]);

  let data = [
    {
      id: 1,
      title: "Day KPI Warning",
      description:
        "Real-time alerts for key performance indicators to ensure proactive protection against phishing threats",
    },
    {
      id: 2,
      title: "Security Status",
      description:
        "Monitor the security health of your endpoints with detailed status updates on threats",
    },
    {
      id: 3,
      title: "Agent Status",
      description:
        "Check the operational status of your security agents to ensure full protection across all devices",
    },
  ];

  return (
    <div ref={ref} className="w-full xl:w-container px-0 md:px-32 lg:px-12 xl:px-0 mx-auto overflow-hidden text-white flex flex-wrap lg:flex-nowrap justify-center xl:justify-between items-center gap-24 mb-36">
      <div className="w-full lg:w-11/12">
        <h2
          className={`${
            loaded || inViewport
              ? "animate__animated animate__slideInUp animate__fast"
              : ""
          } text-3xl md:text-4xl text-center lg:text-left font-semibold leading-tight md:leading-relaxed mb-16`}
        >
          Monitor Threat Overview Through the SaaS Platform
        </h2>
        {data.map((content, index) => {
          return (
            <div
              key={index}
              className={`${
                loaded || inViewport
                  ? "animate__animated animate__slideInUp animate__fast"
                  : ""
              } flex items-start gap-5 mt-8 mx-8 lg:mx-0`}
            >
              <CheckIcon className="w-8 bg-midBlue text-white rounded-full p-2" />
              <div className="">
                <p className="text-xl font-medium">{content.title}</p>
                <p className="mt-2 text-base leading-loose text-slate-400 group-hover:text-white">
                  {content.description}
                </p>
              </div>
            </div>
          );
        })}

        <div className="last"></div>
      </div>
      <div className="flex items-center gap-8 mx-10 xl:mx-0 xl:pr-20">
        <div className="flex flex-col items-start gap-7 z-10">
          <img
            className={`${
              loaded || inViewport
                ? "animate__animated animate__slideInUp animate__fast"
                : ""
            } w-min rounded-xl`}
            src="/screenshot1.png"
          />
          <img
            className={`${
              loaded || inViewport
                ? "animate__animated animate__slideInUp animate__fast"
                : ""
            } play-1 w-min rounded-xl`}
            src="/screenshot2.png"
          />
          <img
            className={`${
              loaded || inViewport
                ? "animate__animated animate__slideInUp animate__fast"
                : ""
            } play-2 w-min rounded-xl`}
            src="/screenshot3.png"
          />
        </div>
        <div className="flex flex-col items-start gap-7 z-10">
          <img className={`${
              loaded || inViewport
                ? "animate__animated animate__slideInUp animate__fast"
                : ""
            } w-min rounded-xl`}
            src="/screenshot4.png"
          />
          <img
            className={`${
              loaded || inViewport
                ? "animate__animated animate__slideInUp animate__fast"
                : ""
            } w-min rounded-xl`}
            src="/screenshot5.png"
          />
          <img
            className={`${
              loaded || inViewport
                ? "animate__animated animate__slideInUp animate__fast"
                : ""
            } play-3 w-min rounded-xl`}
            src="/screenshot6.png"
          />
        </div>
        <div
          className={`${
            loaded || inViewport
              ? "animate__animated animate__slideInUp animate__fast"
              : ""
          } hidden lg:block absolute w-[400px] h-[630px] bg-gradient rounded-2xl -mt-0 z-0 ml-44`}
        ></div>
      </div>
    </div>
  );
}

export default Transaction;

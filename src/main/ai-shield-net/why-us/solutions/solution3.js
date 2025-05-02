/* eslint-disable @next/next/no-img-element */
import { useInViewport } from "ahooks";
import React, { useEffect, useRef, useState } from "react";

const WhyUsSolution3 = () => {
  const ref = useRef(null);

  const [loaded, setLoaded] = useState(false);
  const [inViewport] = useInViewport(ref);

  useEffect(() => {
    if (!loaded && inViewport) {
      setLoaded(true);
    }
  }, [inViewport, loaded]);

  return (
    <div ref={ref} className="mx-auto mt-20 px-5 xl:px-0">
      <div className="w-full xl:w-7/12 flex flex-wrap lg:flex-nowrap justify-between items-start mx-auto gap-10">
        <div className="w-full lg:w-6/12 mx-auto">
          <h2
            className={`${
              loaded || inViewport
                ? `animate__animated animate__slideInUp animate__fast`
                : ""
            } text-3xl md:text-3xl font-bold text-gray-800 leading-tight md:leading-tight mt-5`}
          >
            Lightweight Agent That Won’t Slow Down Your System
          </h2>
          <p
            className={`${
              loaded || inViewport
                ? `animate__animated animate__slideInUp animate__fast`
                : ""
            } text-lg md:text-lg leading-tight md:leading-normal mt-5`}
          >
            One of the biggest challenges with traditional endpoint protection
            is that it often consumes <b>significant system resources</b> –
            slowing down your computer and affecting productivity. AI ShieldNet
            operates in a completely different way. The{" "}
            <b>AI engine runs in the cloud</b>, ensuring that{" "}
            <b>your PC resources are never affected</b> by the security
            operations. The agent itself is lightweight and efficient, meaning
            it won’t slow down your work while still providing comprehensive
            protection.
          </p>
        </div>
        <div className="w-full lg:w-6/12 mx-auto">
          <div
            className={`${
              loaded || inViewport
                ? `animate__animated animate__slideInUp animate__fast`
                : ""
            } shadow-xl rounded-lg`}
          >
            <img src="/images/why-us/solutions/solution3.jpg" alt="solution3" />
          </div>
          <p
            className={`${
              loaded || inViewport
                ? `animate__animated animate__slideInUp animate__fast`
                : ""
            } text-center text-lg md:text-lg leading-tight md:leading-normal mt-5`}
          >
            AI ShieldNet ensures that your endpoints remain fully protected
            <b>without compromising system performance</b>, allowing your
            devices to run smoothly and efficiently.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUsSolution3;

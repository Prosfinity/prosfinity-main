import { useInViewport } from "ahooks";
import React, { useEffect, useRef, useState } from "react";

const WhyUsSolution5 = () => {
  const ref = useRef(null);

  const [loaded, setLoaded] = useState(false);
  const [inViewport] = useInViewport(ref);

  useEffect(() => {
    if (!loaded && inViewport) {
      setLoaded(true);
    }
  }, [inViewport]);

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
            Scalable Security That Grows With Your Needs
          </h2>
          <p
            className={`${
              loaded || inViewport
                ? `animate__animated animate__slideInUp animate__fast`
                : ""
            } text-lg md:text-lg leading-tight md:leading-normal mt-5`}
          >
            AI ShieldNet is designed to scale with your business. Whether you’re
            protecting just a few endpoints or an entire enterprise network, our
            solution adapts to your needs. It’s perfect for startups, small
            businesses, and large corporations alike.
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
            <img src="/images/why-us/solutions/solution5.jpg" alt="solution5" />
          </div>
          <p
            className={`${
              loaded || inViewport
                ? `animate__animated animate__slideInUp animate__fast`
                : ""
            } text-center text-lg md:text-lg leading-tight md:leading-normal mt-5`}
          >
            As your organization grows, AI ShieldNet ensures that you can
            continue to rely on a secure, scalable solution that grows with you,
            offering seamless protection without the need for major
            infrastructure changes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUsSolution5;

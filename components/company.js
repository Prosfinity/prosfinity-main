import { useInViewport } from "ahooks";
import { useEffect, useRef, useState } from "react";

function Company() {
  const ref = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [inViewport] = useInViewport(ref);

  useEffect(() => {
    if (!loaded && inViewport) {
      setLoaded(true);
    }
  }, [inViewport]);

  return (
    <div ref={ref}>
      <div
        className={`${
          loaded || inViewport
            ? "animate__animated animate__slideInUp animate__fast"
            : ""
        } mt-72 sm:mt-64 md:mt-36 lg:mt-72 xl:mt-72 px-8 md:px-24 xl:px-0 w-full xl:w-container mx-auto text-white`}
      >
        <a
          href="https://www.microsoft.com/en-us/startups/blog/how-to-announce-your-startup-has-joined-microsoft-for-startups/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="text-center text-3xl md:text-4xl font-semibold w-full lg:w-7/12 mx-auto leading-tight md:leading-relaxed hover:text-blue">
            Prosfinity is now Part of Microsoft for Startups
          </h2>
        </a>
        <div
          className={`${
            loaded || inViewport
              ? "animate__animated animate__slideInUp animate__fast"
              : ""
          } flex flex-wrap justify-between items-center mt-8 md:mt-16 gap-4`}
        >
          <img
            className="w-28 md:w-44 opacity-80"
            src="/microsoft.png"
            alt="heineken logo"
          />
          <img
            className="w-20 md:w-32 opacity-80"
            src="/google.png"
            alt="google logo"
          />
          <img
            className="w-24 md:w-36 opacity-80"
            src="/paypal.png"
            alt="paypal logo"
          />
          <img
            className="w-24 md:w-36 opacity-80"
            src="/azure.png"
            alt="azure logo"
          />
        </div>
      </div>
    </div>
  );
}

export default Company;

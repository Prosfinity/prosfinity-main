/* eslint-disable @next/next/no-img-element */
import { useInViewport } from "ahooks";
import { useEffect, useRef, useState } from "react";
import Blog from "./blog";

const Hero = () => {
  const ref = useRef(null);

  const viewRef = useRef(null);
  const blogRef = useRef(null);

  const [loaded, setLoaded] = useState(false);
  const [inViewport] = useInViewport(ref);

  const [isReadMore, setIsReadMore] = useState(false);

  useEffect(() => {
    if (!loaded && inViewport) {
      setLoaded(true);
    }
  }, [inViewport, loaded]);

  useEffect(() => {
    if (isReadMore && blogRef.current) {
      const y =
        blogRef.current.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    if (!isReadMore && viewRef.current) {
      const y =
        viewRef.current.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, [isReadMore]);

  return (
    <div ref={ref} className="mx-auto px-5 xl:px-0 py-10">
      <div className="w-full xl:w-7/12 flex flex-wrap lg:flex-nowrap justify-between items-start mx-auto gap-10">
        <div ref={viewRef}>
          <h1
            className={`${
              loaded || inViewport
                ? "animate__animated animate__slideInUp animate__fast"
                : ""
            } text-3xl md:text-4xl font-semibold leading-normal md:leading-relaxed mt-5 text-center`}
          >
            Security Risk Assessment And Audit (SRAA)
          </h1>
          <h2
            className={`${
              loaded || inViewport
                ? "animate__animated animate__slideInUp animate__fast"
                : ""
            } text-xl italic md:text-2xl font-normal leading-normal md:leading-relaxed mt-5 text-center`}
          >
            Your first step toward cybersecurity readiness. Trusted by SMEs in
            Hong Kong and beyond
          </h2>
          <p
            className={`${
              loaded || inViewport
                ? "animate__animated animate__slideInUp animate__fast"
                : ""
            } mt-5 text-lg md:text-xl font-light leading-6 lg:leading-10 text-center`}
          >
            Is Your Business Ready to Face Cybersecurity Risks? According to
            Chubb's 2023 survey, 63% of small and medium-sized enterprises
            (SMEs) in Asia fell victim to cyberattacks within just 12 months.
            Even more concerning, most companies were unaware of the security
            vulnerabilities in their systems until an incident occurred.
            <br />
            So how can you proactively prevent these risks?
          </p>
          <div className="flex justify-center mt-5">
            <button
              className="bg-btnBlue text-white font-medium rounded-lg hover:shadow-xl transition-all text-base px-4 py-2 md:px-8 md:py-4"
              onClick={() => setIsReadMore(!isReadMore)}
            >
              {isReadMore ? "READ LESS" : "READ MORE"}
            </button>
          </div>
        </div>
      </div>
      <div ref={blogRef}>
        {isReadMore && <Blog />}
        {isReadMore && (
          <div className="flex justify-center mt-5">
            <button
              className="bg-btnBlue text-white font-medium rounded-lg hover:shadow-xl transition-all text-base px-4 py-2 md:px-8 md:py-4"
              onClick={() => setIsReadMore(!isReadMore)}
            >
              READ LESS
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;

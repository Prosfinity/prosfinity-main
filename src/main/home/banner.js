/* eslint-disable @next/next/no-img-element */
import { useInViewport } from "ahooks";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Banner = () => {
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
      className="w-full xl:w-container px-8 lg:px-20 xl:px-0 mx-auto text-white text-center mt-16 xl:mt-16 pt-28"
    >
      <div className="w-full lg:w-4/6 mx-auto">
        <h1
          className={`${
            loaded || inViewport
              ? "animate__animated animate__slideInUp animate__fast"
              : ""
          } text-4xl md:text-5xl font-bold leading-tight md:leading-tight`}
        >
          Saas Platform. One Agent
          <br />
          EndPoint Phishing and Zero Day Protection
        </h1>
        <p
          className={`${
            loaded || inViewport
              ? "animate__animated animate__slideInUp animate__fast"
              : ""
          } mt-5 text-base md:text-lg leading-normal md:leading-relaxed`}
        >
          AIShieldNet: Protect your digital assets with advanced AI detection.
        </p>
        <div
          className={`${
            loaded || inViewport
              ? "animate__animated animate__slideInUp animate__fast"
              : ""
          } mt-7 gap-2 flex flex-wrap justify-center`}
        >
          <Link href="/product/AIShieldNet/phishing-defense-review">
            <button className="bg-btnDark text-white w-64 mx-3 h-16 font-medium rounded-lg hover:shadow-xl transition-all">
              Phishing Defense Review
            </button>
          </Link>
          <Link href="https://www.youtube.com/watch?v=jDOWVF6bpxw">
            <button className="bg-btnLight text-blue w-44 mx-3 h-16 font-medium rounded-lg hover:shadow-xl transition-all">
              Watch a video
            </button>
          </Link>
        </div>
      </div>
      <img
        className={`${
          loaded || inViewport
            ? "animate__animated animate__slideInUp animate__fast"
            : ""
        } mt-10 absolute left-0 right-0 md:relative md:mt-20 shadow-2xl rounded-2xl`}
        src="/images/dashboard.jpeg"
        alt="software dashboard"
      />
    </div>
  );
};

export default Banner;

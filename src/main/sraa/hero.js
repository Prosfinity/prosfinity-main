/* eslint-disable @next/next/no-img-element */
import { useInViewport } from "ahooks";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const Hero = () => {
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
      className="mx-auto px-5 xl:px-0 py-10"
    >
      <div className="w-full xl:w-7/12 flex flex-wrap lg:flex-nowrap justify-between items-start mx-auto gap-10">
        <div>
          <h2
            className={`${
              loaded || inViewport
                ? "animate__animated animate__slideInUp animate__fast"
                : ""
            } text-3xl md:text-4xl font-semibold leading-normal md:leading-relaxed mt-5 text-center`}
          >
            Security Risk Assessment And Audit
          </h2>
          <p
            className={`${
              loaded || inViewport
                ? "animate__animated animate__slideInUp animate__fast"
                : ""
            } mt-5 text-lg md:text-xl font-light leading-6 lg:leading-10 text-center`}
          >
            Protect your business with our expert Security Risk Assessment and
            Audit Services! Identify vulnerabilities, mitigate risks, and
            strengthen your defenses with our comprehensive solutions. Plus, as
            a special bonus, receive FREE Zero-Day Endpoint Protection and
            Response to safeguard your systems against the latest threats. Stay
            secure, stay ahead—partner with us today!
          </p>
          <div className="flex justify-center mt-5">
            <Link href="/service/sraa/contact">
              <button className="bg-btnDark text-white font-medium rounded-lg hover:shadow-xl transition-all text-base px-4 py-2 md:px-8 md:py-4">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

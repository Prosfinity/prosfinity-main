/* eslint-disable @next/next/no-img-element */
import { useInViewport } from "ahooks";
import { useEffect, useRef, useState } from "react";

const Blog = () => {
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
            } text-3xl md:text-4xl font-semibold leading-normal md:leading-relaxed mt-5 text-center`}
          >
            Protect Your Business Before It’s Too Late: Why SMEs Need Security
            Risk Assessment & Audit (SRAA)
          </h2>
          <p
            className={`${
              loaded || inViewport
                ? "animate__animated animate__slideInUp animate__fast"
                : ""
            } mt-5 text-lg md:text-xl font-light leading-6 lg:leading-10 text-center`}
          >
            Cybersecurity threats are evolving faster than ever - and they’re no
            longer just targeting big corporations. In fact, small and
            medium-sized enterprises (SMEs) are now the top targets for
            cybercriminals due to weaker defenses and limited resources. If your
            business is not regularly evaluating its security posture, you're
            operating with unseen risks every day. That’s where Security Risk
            Assessment and Audit (SRAA) comes in. This is more than a technical
            check - it's your business resilience plan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;

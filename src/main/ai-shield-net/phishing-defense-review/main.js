import { useInViewport } from "ahooks";
import { BanknoteIcon, CheckIcon, InfinityIcon, SirenIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const PhishingDefenseReviewMain = () => {
  const ref = useRef(null);

  const [loaded, setLoaded] = useState(false);
  const [inViewport] = useInViewport(ref);

  useEffect(() => {
    if (!loaded && inViewport) {
      setLoaded(true);
    }
  }, [inViewport]);

  return (
    <div className="container mx-auto px-5 md:px-20 mt-20 pt-20">
      <h2
        className={`${
          loaded || inViewport
            ? `animate__animated animate__slideInUp animate__fast`
            : ""
        } text-center text-3xl md:text-3xl font-bold text-gray-800 leading-tight md:leading-tight mt-5`}
      >
        Private Phishing Technical Advisor Session
      </h2>
      <p
        className={`${
          loaded || inViewport
            ? `animate__animated animate__slideInUp animate__fast`
            : ""
        } text-lg md:text-lg leading-tight md:leading-normal mt-5`}
      >
        Get a personalized phishing defense assessment with our expert advisor.
        In this private session, we’ll review your current endpoint protection
        strategy, simulate common phishing attack scenarios, and provide
        actionable insights on how to improve your defenses against phishing
        threats.
      </p>
      <p
        className={`${
          loaded || inViewport
            ? `animate__animated animate__slideInUp animate__fast`
            : ""
        } text-sm md:text-base leading-tight md:leading-normal mt-5`}
      >
        Exclusive for 10 organizations: 30-day free trial + only HKD $9.99/month
        thereafter.
      </p>
      <div className="flex justify-center items-center my-5">
        <div
          className={`${
            loaded || inViewport
              ? `animate__animated animate__slideInUp animate__fast`
              : ""
          } shadow-xl rounded-lg`}
        >
          <img
            src="/images/phishing-defense-review/main.png"
            alt="phishing-defense-review"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-5">
        <div
          className={`${
            loaded || inViewport
              ? `animate__animated animate__bounceInLeft animate__fast`
              : ""
          } flex items-center gap-2`}
        >
          <CheckIcon />
          <p className="text-sm xl:text-base text-black">
            Get ZDR free for the first month
          </p>
        </div>
        <div
          className={`${
            loaded || inViewport
              ? `animate__animated animate__bounceInLeft animate__fast`
              : ""
          } flex items-center gap-2`}
        >
          <SirenIcon />
          <p className="text-sm xl:text-base text-black">
            1-on-1 consultation with a cybersecurity expert
          </p>
        </div>
        <div
          className={`${
            loaded || inViewport
              ? `animate__animated animate__bounceInLeft animate__fast`
              : ""
          } flex items-center gap-2`}
        >
          <BanknoteIcon />
          <p className="text-sm xl:text-base text-black">
            Only HKD $9.99/month thereafter
          </p>
        </div>
        <div
          className={`${
            loaded || inViewport
              ? `animate__animated animate__bounceInLeft animate__fast`
              : ""
          } flex items-center gap-2`}
        >
          <InfinityIcon />
          <p className="text-sm xl:text-base text-black">
            Limited to the first 10 organizations
          </p>
        </div>
      </div>
      <h2
        className={`${
          loaded || inViewport
            ? `animate__animated animate__slideInUp animate__fast`
            : ""
        } text-center text-3xl md:text-3xl font-bold text-gray-800 leading-tight md:leading-tight mt-10`}
      >
        AI ShieldNet Feature Demo Block Zero-day Phishing and Ransomware
      </h2>
      <div className="mt-10 w-full md:w-3/4 mx-auto">
        <iframe
          width="100%"
          height="600"
          src="https://www.youtube.com/embed/jDOWVF6bpxw?si=x94cOKZ3tqErLAFc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <h2
        className={`${
          loaded || inViewport
            ? `animate__animated animate__slideInUp animate__fast`
            : ""
        } text-center text-3xl md:text-3xl font-bold text-gray-800 leading-tight md:leading-tight mt-10`}
      >
        Schedule a Phishing Defense Review
      </h2>
      <p
        className={`${
          loaded || inViewport
            ? `animate__animated animate__slideInUp animate__fast`
            : ""
        } text-lg md:text-lg font-bold leading-tight md:leading-normal mt-5`}
      >
        AI ShieldNet: Advanced Cybersecurity with AI-Driven Defense
      </p>
      <p
        className={`${
          loaded || inViewport
            ? `animate__animated animate__slideInUp animate__fast`
            : ""
        } text-lg md:text-lg leading-tight md:leading-normal mt-5`}
      >
        AI ShieldNet is designed to enhance your platform’s defenses against
        cyberattacks, combining cutting-edge AI technology with robust
        protection services. Built upon four core features — AI Threat-Driven
        Detection and a powerful SaaS Platform — AI ShieldNet offers
        comprehensive protection for your business.
      </p>
      <p
        className={`${
          loaded || inViewport
            ? `animate__animated animate__slideInUp animate__fast`
            : ""
        } text-lg md:text-lg font-bold leading-tight md:leading-normal mt-5`}
      >
        Schedule a Phishing Defense Review with Our Expert Advisor
      </p>
      <p
        className={`${
          loaded || inViewport
            ? `animate__animated animate__slideInUp animate__fast`
            : ""
        } text-lg md:text-lg leading-tight md:leading-normal mt-5`}
      >
        Private Phishing Defense Review
        <br />
        In this session, our expert advisor will walk you through a personalized
        phishing defense review, covering your current endpoint protection
        strategies and identifying areas for improvement. We’ll also simulate
        real-world phishing attack scenarios and provide actionable insights to
        strengthen your defenses.
      </p>
      <p
        className={`${
          loaded || inViewport
            ? `animate__animated animate__slideInUp animate__fast`
            : ""
        } text-lg md:text-lg font-bold leading-tight md:leading-normal mt-5`}
      >
        Key Features of AI ShieldNet:
      </p>
      <ul>
        <li>
          <p
            className={`${
              loaded || inViewport
                ? `animate__animated animate__slideInUp animate__fast`
                : ""
            } text-lg md:text-lg leading-tight md:leading-normal mt-5`}
          >
            Managed Detection and Response (MDR) Operations: 24/7 monitoring and
            rapid response to detect and mitigate threats in real-time.
          </p>
        </li>
        <li>
          <p
            className={`${
              loaded || inViewport
                ? `animate__animated animate__slideInUp animate__fast`
                : ""
            } text-lg md:text-lg leading-tight md:leading-normal mt-5`}
          >
            Threat Intelligence: Proactive threat analysis and real-time updates
            to safeguard against emerging cyber threats.
          </p>
        </li>
        <li>
          <p
            className={`${
              loaded || inViewport
                ? `animate__animated animate__slideInUp animate__fast`
                : ""
            } text-lg md:text-lg leading-tight md:leading-normal mt-5`}
          >
            Managed Endpoint Protection: Continuous monitoring and defense for
            all endpoints in your network, ensuring robust protection for every
            device.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default PhishingDefenseReviewMain;

/* eslint-disable @next/next/no-img-element */
import { useInViewport } from "ahooks";
import { CheckIcon } from "flowbite-react";
import {
  AwardIcon,
  BadgeInfoIcon,
  BookOpenIcon,
  CircleArrowRightIcon,
  CogIcon,
  ShuffleIcon,
  WaypointsIcon,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Section3 = () => {
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
            } text-2xl md:text-3xl font-semibold leading-normal md:leading-relaxed mt-5 text-center`}
          >
            You lead the way - Prosfinity has your back
          </h2>
          <div className="mt-10">
            <p
              className={`${
                loaded || inViewport
                  ? "animate__animated animate__slideInUp animate__fast"
                  : ""
              } text-lg font-semibold`}
            >
              What Will You Be Selling? Solutions by Prosfinity - You Introduce,
              We Operate
            </p>
            <p
              className={`${
                loaded || inViewport
                  ? "animate__animated animate__slideInUp animate__fast"
                  : ""
              } text-lg mt-5`}
            >
              As a Prosfinity partner, you’ll gain instant access to premium
              cybersecurity services under the Prosfinity brand - without having
              to build a tech team or manage any infrastructure. These solutions
              have already been successfully deployed by SMEs across finance,
              education, logistics, and e-commerce sectors throughout Asia.
            </p>
          </div>
          <div
            ref={ref}
            className="w-full flex flex-col xl:flex-row xl:w-container px-8 lg:px-20 xl:px-0 mx-auto gap-10 mt-10"
          >
            <div className="w-full md:w-4/6 mx-auto">
              <p
                className={`${
                  loaded || inViewport
                    ? "animate__animated animate__slideInUp animate__fast"
                    : ""
                } text-xl font-semibold`}
              >
                AI ShieldNet - Real-Time AI-Powered Threat Protection Platform
              </p>
              <div
                className={`${
                  loaded || inViewport
                    ? "animate__animated animate__slideInUp animate__fast"
                    : ""
                } text-lg mt-5`}
              >
                A proactive, 24/7 security monitoring system powered by AI that:
                <ul className="flex flex-col gap-2 ml-5 mt-2">
                  <li className="flex gap-2">
                    <span className="mt-1">
                      <CheckIcon className="size-5" />
                    </span>
                    <span>
                      Automatically detects cyberattacks, malware, phishing, and
                      other threats
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1">
                      <CheckIcon className="size-5" />
                    </span>
                    <span>
                      Analyzes abnormal behavior across the entire IT
                      infrastructure
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1">
                      <CheckIcon className="size-5" />
                    </span>
                    <span>
                      Delivers early warnings and instant responses to minimize
                      risk and impact
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mt-5">
                <p
                  className={`${
                    loaded || inViewport
                      ? "animate__animated animate__slideInUp animate__fast"
                      : ""
                  } text-lg font-semibold flex gap-2`}
                >
                  <span className="mt-1">
                    <BadgeInfoIcon className="size-5" />
                  </span>{" "}
                  <span>Value for Your Clients:</span>
                </p>
                <p
                  className={`${
                    loaded || inViewport
                      ? "animate__animated animate__slideInUp animate__fast"
                      : ""
                  } text-lg mt-2`}
                >
                  <span>
                    Most SMEs lack specialized in-house cybersecurity teams. AI
                    ShieldNet gives them enterprise-grade protection - without
                    the cost of hiring or building new infrastructure.
                  </span>
                </p>
              </div>
            </div>
            <div className="w-full md:w-4/6 mx-auto">
              <p
                className={`${
                  loaded || inViewport
                    ? "animate__animated animate__slideInUp animate__fast"
                    : ""
                } text-xl font-semibold`}
              >
                Security Risk Assessment & Audit - Comprehensive Cybersecurity
                Checkup
              </p>
              <div
                className={`${
                  loaded || inViewport
                    ? "animate__animated animate__slideInUp animate__fast"
                    : ""
                } text-lg mt-5`}
              >
                A recurring (quarterly or bi-annual) assessment service that
                helps businesses:
                <ul className="flex flex-col gap-2 ml-5 mt-2">
                  <li className="flex gap-2">
                    <span className="mt-1">
                      <CheckIcon className="size-5" />
                    </span>
                    <span>
                      Analyze all existing cybersecurity risks within their
                      systems
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1">
                      <CheckIcon className="size-5" />
                    </span>
                    <span>
                      Audit configurations, user privileges, data
                      infrastructure, and potential vulnerabilities
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1">
                      <CheckIcon className="size-5" />
                    </span>
                    <span>
                      Receive in-depth reports with clear, actionable
                      recommendations
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1">
                      <CheckIcon className="size-5" />
                    </span>
                    <span>
                      Track and measure improvements in security posture over
                      time
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mt-5">
                <p
                  className={`${
                    loaded || inViewport
                      ? "animate__animated animate__slideInUp animate__fast"
                      : ""
                  } text-lg font-semibold flex gap-2`}
                >
                  <span className="mt-1">
                    <BadgeInfoIcon className="size-5" />
                  </span>{" "}
                  <span>Value for Your Clients:</span>
                </p>
                <p
                  className={`${
                    loaded || inViewport
                      ? "animate__animated animate__slideInUp animate__fast"
                      : ""
                  } text-lg mt-2`}
                >
                  <span>
                    This service helps businesses accurately assess their
                    current security landscape, understand hidden risks, and
                    develop improvement plans tailored to their budget. Not just
                    assessment - but hands-on guidance for real fixes.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <p
            className={`${
              loaded || inViewport
                ? "animate__animated animate__slideInUp animate__fast"
                : ""
            } text-lg mt-5 flex gap-2`}
          >
            <span className="mt-1">
              <AwardIcon className="size-5" />
            </span>{" "}
            A Flexible Partnership Model - A Win for You, A Win for Your
            Clients: Instead of spending hundreds of thousands of dollars to
            build an in-house cybersecurity team, now you only need to connect -
            and Prosfinity will handle the rest.
          </p>
          <p
            className={`${
              loaded || inViewport
                ? "animate__animated animate__slideInUp animate__fast"
                : ""
            } text-lg mt-5 flex gap-2`}
          >
            <span className="mt-1">
              <WaypointsIcon className="size-5" />
            </span>{" "}
            You Make the Connection: Introduce Prosfinity’s security solutions
            to businesses within your ecosystem - whether you're an agency, a
            software vendor, or an independent IT consultant.
          </p>
          <p
            className={`${
              loaded || inViewport
                ? "animate__animated animate__slideInUp animate__fast"
                : ""
            } text-lg mt-5 flex gap-2`}
          >
            <span className="mt-1">
              <CircleArrowRightIcon className="size-5" />
            </span>{" "}
            No deep technical knowledge needed. Simply say: "Let me connect you
            with a trusted cybersecurity expert."
          </p>
          <p
            className={`${
              loaded || inViewport
                ? "animate__animated animate__slideInUp animate__fast"
                : ""
            } text-lg mt-5 flex gap-2`}
          >
            <span className="mt-1">
              <CogIcon className="size-5" />
            </span>{" "}
            We Handle the Delivery: Our cybersecurity experts take care of the
            entire lifecycle: deployment - monitoring - reporting - technical
            support. No need to worry about delivery, SLAs, or post-sales
            operations.
          </p>
          <p
            className={`${
              loaded || inViewport
                ? "animate__animated animate__slideInUp animate__fast"
                : ""
            } text-lg mt-5 flex gap-2`}
          >
            <span className="mt-1">
              <BookOpenIcon className="size-5" />
            </span>{" "}
            White-label or co-branded models available - tailored to your
            business.
          </p>
          <p
            className={`${
              loaded || inViewport
                ? "animate__animated animate__slideInUp animate__fast"
                : ""
            } text-lg mt-5 flex gap-2`}
          >
            <span className="mt-1">
              <ShuffleIcon className="size-5" />
            </span>{" "}
            The Prosfinity Brand - Your Trustworthy Badge at the Negotiation
            Table: We don't just offer solutions – we bring a trusted
            cybersecurity brand backed by SMEs across Hong Kong and Asia. This
            empowers you to:
          </p>
          <ul
            className={`${
              loaded || inViewport
                ? "animate__animated animate__slideInUp animate__fast"
                : ""
            } flex flex-col gap-2 ml-5 mt-2 text-lg`}
          >
            <li className="flex gap-2">
              <span className="mt-1">
                <CheckIcon className="size-4" />
              </span>
              <span>Strengthen your credibility with clients</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1">
                <CheckIcon className="size-4" />
              </span>
              <span>Easily upsell your existing solutions</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1">
                <CheckIcon className="size-4" />
              </span>
              <span>
                Skip the cost of building systems, hiring technical teams, or
                managing after-sales support
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Section3;

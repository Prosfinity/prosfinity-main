/* eslint-disable @next/next/no-img-element */
import { useInViewport } from "ahooks";
import { CheckIcon } from "flowbite-react";
import {
  AwardIcon,
  BadgeInfoIcon,
  BookOpenIcon,
  CheckCircle,
  CircleArrowRightIcon,
  CogIcon,
  ShuffleIcon,
  WaypointsIcon,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ServiceComparison } from "./service-comparison";

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
      <div className="w-full xl:w-8/12 flex flex-wrap lg:flex-nowrap justify-between items-start mx-auto gap-10">
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
          <div className="mt-10">
            <ServiceComparison />
          </div>

          <div className="grid gap-5 mt-5">
            {[
              {
                icon: AwardIcon,
                text: `A Flexible Partnership Model - A Win for You, A Win for Your
            Clients: Instead of spending hundreds of thousands of dollars to
            build an in-house cybersecurity team, now you only need to connect -
            and Prosfinity will handle the rest.`,
                color: "text-amber-500",
                bgColor: "bg-amber-50",
                borderColor: "border-amber-200",
              },
              {
                icon: WaypointsIcon,
                text: `You Make the Connection: Introduce Prosfinity’s security solutions
            to businesses within your ecosystem - whether you're an agency, a
            software vendor, or an independent IT consultant.`,
                color: "text-red-500",
                bgColor: "bg-red-50",
                borderColor: "border-red-200",
              },
              {
                icon: CircleArrowRightIcon,
                text: `No Deep Technical Knowledge Needed: Simply say: "Let me connect you
            with a trusted cybersecurity expert."`,
                color: "text-primary-500",
                bgColor: "bg-primary-50",
                borderColor: "border-primary-200",
              },
              {
                icon: CogIcon,
                text: `We Handle the Delivery: Our cybersecurity experts take care of the
            entire lifecycle: deployment - monitoring - reporting - technical
            support. No need to worry about delivery, SLAs, or post-sales
            operations.`,
                color: "text-green-500",
                bgColor: "bg-green-50",
                borderColor: "border-green-200",
              },
              {
                icon: ShuffleIcon,
                text: `The Prosfinity Brand - Your Trustworthy Badge at the Negotiation
            Table: We don't just offer solutions – we bring a trusted
            cybersecurity brand backed by SMEs across Singapore and Asia. This
            empowers you to:
            `,
                children: [
                  {
                    icon: CheckIcon,
                    text: "Strengthen your credibility with clients",
                  },
                  {
                    icon: CheckIcon,
                    text: "Easily upsell your existing solutions",
                  },
                  {
                    icon: CheckIcon,
                    text: "Skip the cost of building systems, hiring technical teams, or managing after-sales support",
                  },
                ],
                color: "text-indigo-500",
                bgColor: "bg-indigo-50",
                borderColor: "border-indigo-200",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 p-2 rounded-xl border-2 ${item.borderColor} ${item.bgColor} hover:shadow-lg transition-all duration-300 hover:scale-[1.02]`}
              >
                <div
                  className={`flex-shrink-0 w-7 h-7 ${item.bgColor} rounded-full flex items-center justify-center border-2 ${item.borderColor}`}
                >
                  <item.icon className={`size-4 ${item.color}`} />
                </div>
                <div>
                  <p className="text-base font-medium text-slate-700 leading-relaxed pt-0.5">
                    {item.text}
                  </p>
                  {item.children && (
                    <div className="mt-3">
                      {item.children.map((child, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <p className="text-base font-medium text-slate-700 leading-relaxed pt-0.5">
                            {child.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;

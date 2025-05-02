import { useInViewport } from "ahooks";
import React, { useEffect, useRef, useState } from "react";

const ComparisonQAndA = () => {
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
      className="w-full xl:w-container mx-auto px-5 md:px-20 mt-16 xl:mt-28"
    >
      <p
        className={`${
          loaded || inViewport
            ? "animate__animated animate__slideInUp animate__fast"
            : ""
        } text-2xl md:text-3xl font-semibold leading-normal md:leading-relaxed`}
      >
        Frequently Asked Questions
      </p>
      <div
        id="accordion-flush"
        className="mt-5"
        data-accordion="collapse"
        data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
        data-inactive-classes="text-gray-500 dark:text-gray-400"
      >
        <h2 id="accordion-flush-heading-1">
          <button
            type="button"
            class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
            data-accordion-target="#accordion-flush-body-1"
            aria-expanded="true"
            aria-controls="accordion-flush-body-1"
          >
            <span>
              How does AIShieldNet ZDR protect against zero-day attacks?{" "}
            </span>
            <svg
              data-accordion-icon
              class="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-flush-body-1"
          class="hidden"
          aria-labelledby="accordion-flush-heading-1"
        >
          <div class="py-5 border-b border-gray-200 dark:border-gray-700">
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              AIShieldNet ZDR utilizes advanced machine learning algorithms to
              analyze files and network activities in real-time. By offloading
              processing and scanning to the cloud, it can detect and neutralize
              unknown threats, such as new viruses and malware variants, within
              seconds. This proactive approach ensures that even previously
              unidentified vulnerabilities are addressed promptly.
            </p>
          </div>
        </div>
        <h2 id="accordion-flush-heading-2">
          <button
            type="button"
            class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
            data-accordion-target="#accordion-flush-body-2"
            aria-expanded="false"
            aria-controls="accordion-flush-body-2"
          >
            <span>
              Is AIShieldNet ZDR easy to integrate with existing systems?
            </span>
            <svg
              data-accordion-icon
              class="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-flush-body-2"
          class="hidden"
          aria-labelledby="accordion-flush-heading-2"
        >
          <div class="py-5 border-b border-gray-200 dark:border-gray-700">
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              Yes, AIShieldNet ZDR is designed for seamless integration. It
              employs a lightweight, intelligent endpoint agent that
              continuously monitors for zero-day threats without imposing
              significant load on your existing infrastructure. This design
              ensures that businesses can enhance their security posture without
              overhauling their current systems.
            </p>
          </div>
        </div>
        <h2 id="accordion-flush-heading-3">
          <button
            type="button"
            class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
            data-accordion-target="#accordion-flush-body-3"
            aria-expanded="false"
            aria-controls="accordion-flush-body-3"
          >
            <span>What is the pricing for AIShieldNet ZDR?</span>
            <svg
              data-accordion-icon
              class="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-flush-body-3"
          class="hidden"
          aria-labelledby="accordion-flush-heading-3"
        >
          <div class="py-5 border-b border-gray-200 dark:border-gray-700">
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              For detailed pricing information, it’s recommended to contact
              AIShieldNet directly. You can request a quote or schedule a demo
              through their official website to receive a customized pricing
              plan tailored to your organization’s specific needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonQAndA;

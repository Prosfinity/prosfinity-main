import { useInViewport } from "ahooks";
import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";
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
      <Accordion className="mt-5 border-none">
        <AccordionPanel>
          <AccordionTitle>
            How does AIShieldNet ZDR protect against zero-day attacks?
          </AccordionTitle>
          <AccordionContent>
            AIShieldNet ZDR utilizes advanced machine learning algorithms to
            analyze files and network activities in real-time. By offloading
            processing and scanning to the cloud, it can detect and neutralize
            unknown threats, such as new viruses and malware variants, within
            seconds. This proactive approach ensures that even previously
            unidentified vulnerabilities are addressed promptly.
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel>
          <AccordionTitle>
            Is AIShieldNet ZDR easy to integrate with existing systems?
          </AccordionTitle>
          <AccordionContent>
            Yes, AIShieldNet ZDR is designed for seamless integration. It
            employs a lightweight, intelligent endpoint agent that continuously
            monitors for zero-day threats without imposing significant load on
            your existing infrastructure. This design ensures that businesses
            can enhance their security posture without overhauling their current
            systems.
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel>
          <AccordionTitle>
            What is the pricing for AIShieldNet ZDR?
          </AccordionTitle>
          <AccordionContent>
            For detailed pricing information, it’s recommended to contact
            AIShieldNet directly. You can request a quote or schedule a demo
            through their official website to receive a customized pricing plan
            tailored to your organization’s specific needs.
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </div>
  );
};

export default ComparisonQAndA;

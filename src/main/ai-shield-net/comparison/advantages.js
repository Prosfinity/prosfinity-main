import { useInViewport } from "ahooks";
import React, { useEffect, useRef, useState } from "react";
import CombineItem from "../combine/combine-item";
import { BrainIcon, ChartBarIcon, CloudIcon, EllipsisIcon, ReplyIcon } from "lucide-react";

const ComparisonAdvantages = () => {
  const ref = useRef(null);

  const [loaded, setLoaded] = useState(false);
  const [inViewport] = useInViewport(ref);

  useEffect(() => {
    if (!loaded && inViewport) {
      setLoaded(true);
    }
  }, [inViewport, loaded]);

  return (
    <div ref={ref} className="w-full xl:w-container mx-auto px-5 mt-16 xl:mt-28">
      <p
        className={`${
          loaded || inViewport
            ? "animate__animated animate__slideInUp animate__fast"
            : ""
        } text-center text-2xl md:text-3xl font-semibold leading-normal md:leading-relaxed`}
      >
        Key Advantages of AIShieldNet ZDR
      </p>
      <div className="flex flex-wrap justify-center gap-5 mt-16">
        <div className="w-full md:w-5/12 xl:w-5/12 flex flex-col gap-5">
          <CombineItem
            icon={<BrainIcon color="white" />}
            title="Proactive - AI-Powered Security"
            description="Traditional antivirus and EDR rely on reactive methods, leaving your systems vulnerable until threats are detected. AIShieldNet ZDR is always on the lookout, leveraging real-time AI analytics to identify suspicious activity before it escalates."
            position="left"
          />
          <CombineItem
            icon={<ChartBarIcon color="white" />}
            title="Unmatched Zero-Day Threat Protection"
            description="Unmatched Zero-Day Threat Protection Zero-day attacks, which exploit unknown vulnerabilities, are invisible to traditional security tools. AIShieldNet ZDR anticipates these risks with predictive AI models, ensuring you're protected before the attack can even start."
            position="left"
          />
          <CombineItem
            icon={<CloudIcon color="white" />}
            title="Cloud-Native Security"
            description="Say goodbye to frequent manual updates. AIShieldNet ZDR integrates with the cloud for real-time global updates, ensuring you’re always protected against the latest threats - automatically."
            position="left"
          />
        </div>
        <div className="w-full md:w-5/12 xl:w-5/12 flex flex-col gap-5 mt-0 xl:mt-20">
          <CombineItem
            icon={<ReplyIcon color="white" />}
            title="Instant - Automated Response"
            description="No more waiting for manual intervention. AIShieldNet ZDR automatically responds to threats in real-time, preventing breaches and minimizing damage instantly."
            position="right"
          />
          <CombineItem
            icon={<EllipsisIcon color="white" />}
            title="Continuous Learning and Adaptation"
            description="The cybersecurity landscape is constantly changing. AIShieldNet ZDR adapts to new attack patterns and continuously improves its detection capabilities, providing ongoing protection without requiring frequent updates."
            position="right"
          />
        </div>
      </div>
    </div>
  );
};

export default ComparisonAdvantages;

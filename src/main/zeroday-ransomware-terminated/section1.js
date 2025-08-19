/* eslint-disable @next/next/no-img-element */
import { useInViewport } from "ahooks";
import {
  AwardIcon,
  BellIcon,
  BrainIcon,
  FileCheckIcon,
  FileSearchIcon,
  ShieldCheckIcon,
  ShieldIcon,
  ZapIcon,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    title: "Validated, Proven Effectiveness",
    children: [
      {
        icon: AwardIcon,
        title:
          "100 Zero-Day Ransomware & Variant Samples. 100% Detection Rate.",
        description:
          "We subjected our AI to 100 different real-world ransomware samples, including multiple sophisticated variants, polymorphic techniques, and mutation tactics. Every single one was detected, blocked, and neutralized - before execution could occur.",
        badge: "100% Detection",
      },
      {
        icon: FileCheckIcon,
        title: "Robust Real-World Testing.",
        description:
          "Our system was tested in simulated enterprise environments with typical user behavior and operating workloads, ensuring accurate, actionable results.",
        badge: "Real-World Testing",
      },
    ],
  },
  {
    title: "Pre-Execution AI Analysis",
    children: [
      {
        icon: BrainIcon,
        title: "Advanced Machine Learning & Behavioral Analysis.",
        description:
          "Each file, script, or executable is analyzed by our AI engine before it is allowed to run. The system draws on multi-layered models trained on millions of benign and malicious samples, enabling detection of even highly obfuscated threats.",
        badge: "AI-Powered",
      },
      {
        icon: ShieldIcon,
        title: "Default Deny Principle Enhanced.",
        description:
          "Unlike products that react after malware starts to execute, our solution makes no exceptions - no file may run unless explicitly cleared by AI analysis.",
        badge: "Default Deny",
      },
    ],
  },
  {
    title: "Total Coverage for All Variants",
    children: [
      {
        icon: ShieldCheckIcon,
        title: "Blocks Even Unseen and Mutated Ransomware.",
        description:
          "Covers both known and unknown families, including zero-days and rapidly morphing code.",
        badge: "AI-Powered",
      },
      {
        icon: FileSearchIcon,
        title: "Polymorphic & Fileless Threat Protection.",
        description:
          "Capable of dissecting complex ransomware that uses advanced evasion techniques or memory-only attacks.",
        badge: "Fileless Protection",
      },
    ],
  },
  {
    title: "Lightning-Fast and Accurate",
    children: [
      {
        icon: ZapIcon,
        title: "Rapid Analysis - Seconds per File.",
        description:
          "Intelligent optimizations enable quick scanning, maintaining real-world usability.",
        badge: "Real-Time Detection",
      },
      {
        icon: AwardIcon,
        title: "Industry-Leading Low False Positive Rate.",
        description:
          "Trusted by businesses for accuracy; minimizes disruption and maximizes productivity.",
        badge: "High Accuracy",
      },
    ],
  },
  {
    title: "Built for Enterprise Security and Compliance",
    children: [
      {
        icon: ShieldIcon,
        title: "Meets Industry and Legal Standards.",
        description:
          "Ideal for highly regulated sectors (finance, healthcare, government, SaaS).",
        badge: "Compliance Ready",
      },
      {
        icon: BellIcon,
        title: "Audit Trail & Immediate Alerts.",
        description:
          "All activity is logged for compliance and forensic ongoing review.",
        badge: "Audit & Alerts",
      },
    ],
  },
];

const Section1 = () => {
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
            Why We Are the ‘Terminator’ of Zero-Day Ransomware?
          </h2>
          <h3
            className={`${
              loaded || inViewport
                ? "animate__animated animate__slideInUp animate__fast"
                : ""
            } text-xl md:text-2xl font-semibold leading-normal md:leading-relaxed mt-5 text-center`}
          >
            When Old Technology Fails Against New Threats?
          </h3>
          <div
            className={`${
              loaded || inViewport
                ? "animate__animated animate__slideInUp animate__fast"
                : ""
            } mt-5`}
          >
            <p className="text-lg text-center">
              Ransomware today keeps evolving, exploiting previously unknown
              vulnerabilities and deploying sophisticated variants that
              traditional antivirus cannot detect. SMEs, finance, healthcare,
              SaaS - all become prime targets.
            </p>
          </div>
          {features.map((feature, index) => (
            <div className="mt-16">
              <p
                className={`${
                  loaded || inViewport
                    ? "animate__animated animate__slideInUp animate__fast"
                    : ""
                } text-lg md:text-xl font-semibold leading-normal md:leading-relaxed`}
              >
                {index + 1}. {feature.title}
              </p>
              <div
                className={`${
                  loaded || inViewport
                    ? "animate__animated animate__slideInUp animate__fast"
                    : ""
                } grid grid-cols-1 md:grid-cols-2 gap-8 mt-2`}
              >
                {feature.children.map((child, index) => (
                  <div
                    key={index}
                    className="shadow-md rounded-xl relative group hover:shadow-lg transition-all duration-300 border-border/50 p-4"
                  >
                    <div className="pb-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="p-3 rounded-lg bg-green-500/10 text-green-500 group-hover:bg-green-500 group-hover:text-white transition-colors">
                          <child.icon className="h-6 w-6" />
                        </div>
                        <div className="text-xs border border-green-500 rounded-lg px-2 py-1">
                          {child.badge}
                        </div>
                      </div>
                      <div className="text-xl font-semibold text-foreground group-hover:text-green-500 transition-colors cursor-pointer">
                        {child.title}
                      </div>
                      <div className="text-muted-foreground mt-2">
                        {child.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section1;

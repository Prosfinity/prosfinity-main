import {
  BrainCircuitIcon,
  BrainIcon,
  CloudIcon,
  FileCodeIcon,
  MonitorCogIcon,
  ShieldAlertIcon,
  ShieldCheckIcon,
  SignatureIcon,
} from "lucide-react";
import React from "react";
import CombineItem from "./combine-item";

const Combine = () => {
  return (
    <div className="flex justify-center gap-5 mt-16">
      <div className="w-4/12 flex flex-col gap-5">
        <CombineItem
          icon={<BrainIcon color="white" />}
          title="AI-Powered Advanced Protection"
          description="Our AI-powered protection analyzes files in real-time. When users execute high-risk files, our cloud analytics engine springs into action, analyzing and neutralizing threats within 5 seconds."
          position="left"
        />
        <CombineItem
          icon={<ShieldCheckIcon color="white" />}
          title="Zero-Day Protection (Malware, Virus, Ransomware)"
          description="AIShieldNet are engineered to detect and mitigate emerging threats. Our advanced analytics deliver surgical precision to guard against the unknown, from new viruses to malware variants."
          position="left"
        />
        <CombineItem
          icon={<CloudIcon color="white" />}
          title="Cloud-Based Analysis"
          description="We offload all processing and scanning to the cloud, eliminating burden on your endpoints. Send suspicious files our way, and let our powerful cloud infrastructure handle the heavy lifting."
          position="left"
        />
        <CombineItem
          icon={<MonitorCogIcon color="white" />}
          title="SaaS Reporting and Control"
          description="Monitor threat trends, review blocking activities, and leverage granular insights to fine-tune your defenses - all from a single, user-friendly dashboard."
          position="left"
        />
      </div>
      <div className="w-4/12 flex flex-col gap-5 mt-20">
        <CombineItem
          icon={<BrainCircuitIcon color="white" />}
          title="AI-Zero Day Phishing Detection and Response"
          description="Leverages machine learning models to detect suspicious activity in real-time, providing proactive threat response and automated mitigation to safeguard users and organizations from emerging phishing threats."
          position="right"
        />
        <CombineItem
          icon={<SignatureIcon color="white" />}
          title="Signature-based Antivirus Protection"
          description="Signature-based engine scans and blocks threats. Backed by 800,000+ malware samples. Strengthens your systems against dangers."
          position="right"
        />
        <CombineItem
          icon={<ShieldAlertIcon color="white" />}
          title="Signature-based Phishing Protection"
          description="Signature-based engine scans and blocks Phishing threat. Backed by 220,000+ Phishing Site. Strengthens your systems against dangers."
          position="right"
        />
        <CombineItem
          icon={<FileCodeIcon color="white" />}
          title="Advanced Endpoint Protection with AI-Powered File Analysis (Excel Doc PDF)"
          description="The AIShieldnet not only protects endpoints but also analyzes files, including Excel, Word documents, and PDFs, for hidden zero-day threats. Using advanced AI and machine learning,"
          position="right"
        />
      </div>
    </div>
  );
};

export default Combine;

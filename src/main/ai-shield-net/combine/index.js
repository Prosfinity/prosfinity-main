import {
  BrainCircuitIcon,
  BrainIcon,
  CloudIcon,
  ShieldAlertIcon,
  ShieldCheckIcon,
  SignatureIcon
} from "lucide-react";
import Link from "next/link";
import CombineItem from "./combine-item";

const Combine = () => {
  return (
    <div className="mt-10 sm:mt-20 xl:mt-32 px-10">
      <h3 className="text-3xl md:text-4xl font-bold leading-tight md:leading-tight text-center">
        What Makes AIShieldNet LLM-Powered Approach Truly Unique?
      </h3>
      <div className="flex flex-wrap justify-center gap-5 mt-16">
        <div className="w-full md:w-5/12 xl:w-4/12 flex flex-col gap-5">
          <CombineItem
            icon={<BrainIcon color="white" />}
            title="LLM-first Detection Engine"
            description="Not just a helper – the LLM itself flags threats."
            position="left"
          />
          <CombineItem
            icon={<ShieldCheckIcon color="white" />}
            title="No Process Left Behind"
            description="Analyzes 100% of Windows process creation events."
            position="left"
          />
          <CombineItem
            icon={<CloudIcon color="white" />}
            title="Always Learning in the Cloud"
            description="No need for manual updates."
            position="left"
          />
        </div>
        <div className="w-full md:w-5/12 xl:w-4/12 flex flex-col gap-5 mt-0 xl:mt-20">
          <CombineItem
            icon={<BrainCircuitIcon color="white" />}
            title="Detects Zero-Day & Fileless Attacks in Real Time"
            description="No signature needed. No delay."
            position="right"
          />
          <CombineItem
            icon={<SignatureIcon color="white" />}
            title="Dramatically Fewer False Positives"
            description="LLM uses natural language reasoning to filter noise."
            position="right"
          />
          <CombineItem
            icon={<ShieldAlertIcon color="white" />}
            title="Clear Explanations for Every Alert"
            description='"This process is flagged because it performed X, linked to Y in MITRE ATT&CK."'
            position="right"
          />
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <Link href="https://www.youtube.com/watch?v=jDOWVF6bpxw" target="_blank">
          <button className="bg-btnBlue text-white font-medium rounded-lg hover:shadow-xl transition-all text-base px-4 py-2 md:px-8 md:py-4 uppercase">
            SEE A LIVE DEMO
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Combine;

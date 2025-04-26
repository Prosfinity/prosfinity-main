import { BellIcon, GaugeIcon, TriangleAlertIcon } from "lucide-react";
import React from "react";
import SolutionItem from "./solution-item";

const Solution2 = () => {
  return (
    <div className="mx-auto mt-20 px-5 xl:px-0">
      <div className="w-full xl:w-7/12 flex flex-wrap justify-between items-center mx-auto gap-10">
        <div className="w-full xl:w-6/12 flex gap-10">
          <div className="w-full xl:w-6/12 flex flex-col gap-10">
            <SolutionItem
              icon={<BellIcon size={30} className="text-sky-500" />}
              title="Warning alert page"
              description="Whenever you encounter a suspected phishing site, our alert page delivers a clear, authoritative warning."
            />
            <SolutionItem
              icon={<TriangleAlertIcon size={30} className="text-sky-500" />}
              title="Alert mode for maximum security"
              description="When the stakes are highest, our Alert Mode delivers the tightest defense against phishing."
            />
          </div>
          <div className="w-full xl:w-6/12 flex flex-col items-center justify-center">
            <SolutionItem
              icon={<GaugeIcon size={30} className="text-sky-500" />}
              title="Intensive mode for deeper analysis"
              description="For sensitive applications or high-risk industries, our Intensive Mode provides a deep-dive URL analysis to maximize protection."
            />
          </div>
        </div>
        <div className="w-full xl:w-6/12 mx-auto">
          <p className="text-2xl md:text-2xl font-bold leading-tight md:leading-tight">
            Solutions
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight md:leading-tight mt-5">
            Customizable Defense Modes
          </h2>
          <p className="text-lg md:text-lg leading-tight md:leading-normal mt-5">
            AI ShieldNet gives you the power to fine-tune your phishing defenses
            to match your unique needs. Our flexible settings let you choose the
            level of security that’s right for your business. Whether you need a
            clear, no-nonsense warning, a deep-dive analysis for high-stakes
            applications, or an extra-vigilant mode to catch every potential
            threat, we’ve got you covered.
          </p>
          <div className="mt-5">
            <button className="bg-btnDark text-white font-medium rounded-lg hover:shadow-xl transition-all text-base md:text-2xl px-4 py-2 md:px-8 md:py-4">
              Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution2;

import AboutSectionSeven from "@/components/About/AboutSectionSeven";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "What is SRAA | Security Risk Assessment And Audit",
  description: "Security Risk Assessment And Audit",
  // other metadata
};

const WhatIsSRAAPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="What is SRAA"
        description="Protect your business with our expert Security Risk Assessment and Audit Services! Identify vulnerabilities, mitigate risks, and strengthen your defenses with our comprehensive solutions. Plus, as a special bonus, receive FREE Zero-Day Endpoint Protection and Response to safeguard your systems against the latest threats. Stay secure, stay ahead—partner with us today!"
      />
      <AboutSectionSeven />
    </>
  );
};

export default WhatIsSRAAPage;

import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Security Risk Assessment And Audit",
  description: "Security Risk Assessment And Audit",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact"
        description="Have questions or need assistance? We're here to help! Reach out to us through any of the following channels."
      />

      <Contact />
    </>
  );
};

export default ContactPage;

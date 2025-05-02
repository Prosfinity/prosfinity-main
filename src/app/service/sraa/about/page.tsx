import AboutSectionFive from "@/components/About/AboutSectionFive";
import AboutSectionFour from "@/components/About/AboutSectionFour";
import AboutSectionSix from "@/components/About/AboutSectionSix";
import AboutSectionThree from "@/components/About/AboutSectionThree";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Security Risk Assessment And Audit",
  description: "Security Risk Assessment And Audit",
  // other metadata
};

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutPage = () => {
  const List = ({ text }) => (
    <p className="mb-4 flex items-center text-base font-medium text-body-color">
      <div>
        <span className="mr-4 flex h-[25px] w-[25px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          {checkIcon}
        </span>
      </div>
      {text}
    </p>
  );
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="Prosfinity is a leading cybersecurity company dedicated to safeguarding organizations against evolving digital threats. With our comprehensive suite of security services and cutting-edge AI-powered products, we empower businesses to protect their assets, data, and reputation in an increasingly complex cyber landscape."
      />
      <div className="container">
        <List text={<p>Wechat: <a href="weixin://" target="_blank" className="hover:text-primary text-body-color">+852 9831 9379</a></p>} />
        <List text={ <p>Whatsapp: <a href="https://wa.me/85298319379" target="_blank" className="hover:text-primary text-body-color">+852 9831 9379</a></p>} />
      </div>
      <AboutSectionThree />
      <AboutSectionFour />
      <AboutSectionFive />
      <AboutSectionSix />
    </>
  );
};

export default AboutPage;

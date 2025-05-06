const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionFour = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about-four" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16  md:pb-20 lg:pb-28">
          <h2 className="mb-4 text-3xl font-bold !leading-tight text-black  sm:text-4xl md:text-[45px]">
            Our Expertise
          </h2>
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
              <p className="mb-[44px] w-full text-base !leading-relaxed text-body-color md:text-lg lg:w-1/2">
                Security Services Our team of highly skilled security
                professionals offers a wide range of assessment and consulting
                services, including:
              </p>

              <div className="mb-12 lg:mb-0" data-wow-delay=".15s">
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Vulnerability Scanning" />
                    <List text="Web Application Penetration Testing" />
                    <List text="Phishing Attack Simulation" />
                    <List text="Mobile App Assessment" />
                  </div>
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Windows and Mac App Assessment" />
                    <List text="Red Team Services" />
                    <List text="Incident Response" />
                    <List text="Cloud Security Review" />
                  </div>
                </div>
              </div>

              <p className="mb-[44px] mt-10 w-full text-base !leading-relaxed text-body-color md:text-lg lg:w-1/2">
                AI-Powered Security Product Prosfinity has developed a
                state-of-the-art AI-driven security solution designed to enhance
                your organization&apos;s defense capabilities:
              </p>

              <div className="mb-12 lg:mb-0" data-wow-delay=".15s">
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <h2 className="text-xl font-bold !leading-tight text-black  sm:text-xl md:text-[30px]">
                      AIShieldNet
                    </h2>
                    <p className="mb-[22px] mt-5 text-base !leading-relaxed text-body-color md:text-lg">
                      Our advanced AI-powered cybersecurity platform focuses on
                      protecting organizations against zero-day ransomware and
                      phishing attacks. Key features include:
                    </p>
                    <List text="Zero-day Threat Detection using AI to identify new, previously unknown threats" />
                    <List text="Customizable Defense with flexible settings to tailor security levels" />
                    <List text="Scalable Protection designed for organizations of all sizes" />
                    <List text="Adaptive Security that continuously evolves to address the dynamic threat landscape" />
                  </div>
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <h2 className="text-xl font-bold !leading-tight text-black  sm:text-xl md:text-[30px]">
                      AIPhishNet
                    </h2>
                    <p className="mb-[22px] mt-5 text-base !leading-relaxed text-body-color md:text-lg">
                      A component of AIShieldNet that provides customizable
                      phishing defenses:
                    </p>
                    <List text="Clear warning systems for straightforward threat alerts" />
                    <List text="In-depth analysis capabilities for high-stakes applications" />
                    <List text="Extra-vigilant mode to capture all potential threats" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionFour;

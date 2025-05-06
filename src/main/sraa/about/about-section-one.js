import Image from "next/image";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span>
        <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          {checkIcon}
        </span>
      </span>
      {text}
    </p>
  );

  return (
    <section id="about-one" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container mx-auto">
        <div className="border-b border-body-color/[.15] pb-16  md:pb-20 lg:pb-28">
          <h2 className="mb-4 text-3xl font-bold !leading-tight text-black  sm:text-4xl md:text-[45px]">
            Our Process
          </h2>
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div
                className="relative mx-auto mb-12 aspect-[25/24] max-w-[600px] text-center lg:m-0"
                data-wow-delay=".15s"
              >
                <Image
                  src="/images/about/about-2.jpeg"
                  alt="about image"
                  width={600}
                  height={281}
                  className="drop-shadow-three"
                />
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 lg:mb-0" data-wow-delay=".15s">
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3">
                    <List text="Initial Consultation: We begin by understanding your organization's goals, infrastructure, and compliance requirements." />
                    <List text="Assessment Planning: We develop a tailored assessment plan based on your specific needs and risk profile." />
                    <List text="Technical Assessment: Our team conducts thorough evaluations across the chosen assessment areas." />
                    <List text="Analysis and Reporting: We analyze the findings and provide a comprehensive report detailing risks, their potential impact, and recommended mitigation strategies." />
                    <List text="Follow-up and Support: We offer ongoing support to help you implement our recommendations and continuously improve your security posture." />
                    <List text="Secure your organization's future with Prosfinity. Contact us today to schedule your Security Risk Assessment and Audit, and take the first step towards a more resilient security framework." />
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

export default AboutSectionOne;

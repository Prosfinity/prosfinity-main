import { useInViewport } from "ahooks";
import { Button } from "flowbite-react";
import { ArrowDownIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Banner = ({ setContact }) => {
  const ref = useRef(null);

  const [loaded, setLoaded] = useState(false);
  const [inViewport] = useInViewport(ref);

  useEffect(() => {
    if (!loaded && inViewport) {
      setLoaded(true);
    }
  }, [inViewport, loaded]);

  return (
    <div
      ref={ref}
      className="w-full flex flex-col xl:flex-row xl:w-container px-8 lg:px-20 xl:px-0 mx-auto text-white py-20 space-y-10 md:space-y-0 gap-10"
    >
      <div className="w-full md:w-5/6 mx-auto">
        <h2
          className={`${
            loaded || inViewport
              ? "animate__animated animate__slideInUp animate__fast"
              : ""
          } text-2xl md:text-4xl font-bold leading-tight`}
        >
          Partner with Prosfinity.
          <br />
          Enhance the value of your IT services.
          <br />
          Earn unlimited commissions.
        </h2>
        <h4
          className={`${
            loaded || inViewport
              ? "animate__animated animate__slideInUp animate__fast"
              : ""
          } text-base md:text-xl mt-4`}
        >
          Partner with Prosfinity - seamlessly integrate world-class
          cybersecurity services into your portfolio, expand value, retain
          clients, and build a sustainable revenue stream.
        </h4>
        <Button
          className={`${
            loaded || inViewport
              ? "animate__animated animate__slideInUp animate__fast"
              : ""
          } text-sm md:text-base mt-5`}
          onClick={() => setContact(true)}
        >
          Become a Partner <ArrowDownIcon className="size-5 ml-2" />
        </Button>
      </div>
      <div className="w-full md:w-5/6 mx-auto">
        <Image
          className={`${
            loaded || inViewport
              ? "animate__animated animate__slideInUp animate__fast"
              : ""
          }`}
          src="/images/partner/banner.png"
          alt="PartnerStack Certified Partner"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default Banner;

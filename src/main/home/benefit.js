import { useInViewport } from "ahooks";
import { ShieldAlertIcon, ShieldCheckIcon, ShoppingBagIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Benefit = () => {
  const ref = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [inViewport] = useInViewport(ref);

  useEffect(() => {
    if (!loaded && inViewport) {
      setLoaded(true);
    }
  }, [inViewport, loaded]);

  let data = [
    {
      id: 1,
      icon: (
        <ShieldAlertIcon className="w-16 bg-gradient rounded-lg p-4" />
      ),
      title: "Free Adoption of Prosfinity Self-Train AI",
      href: "/product/AIShieldNet",
      description:
        "Adopt Prosfinity's self-training AI to automatically detect zero-day phishing attacks and ransomware at no extra cost",
    },
    {
      id: 2,
      icon: <ShoppingBagIcon className="w-16 bg-gradient rounded-lg p-4" />,
      title: "50% Discount with SRAA (Security Risk Assessment and Audit)",
      href: "/service/sraa",
      description:
        "Get a 50% discount on our comprehensive Security Risk Assessment and Audit (SRAA) services",
    },
    {
      id: 3,
      icon: <ShieldCheckIcon className="w-16 bg-gradient rounded-lg p-4" />,
      title: "Free 1-Month Trial of AIShieldNet",
      href: "/product/AIShieldNet/free-trial",
      description:
        "Enjoy a free 1-month trial of AIShieldNet, the ultimate AI-powered security solution",
    },
  ];

  return (
    <div ref={ref} className="xl:w-container mx-auto my-24 md:my-40 text-white">
      <div
        className={`${
          loaded || inViewport
            ? "animate__animated animate__slideInUp animate__fast"
            : ""
        } x-full md:w-7/12 mx-auto text-center`}
      >
        <h2 className="text-3xl md:text-4xl font-semibold leading-relaxed">
          The benefit you get
        </h2>
        <p className="mt-2 w-3/4 mx-auto text-slate-400 text-base">
          Experience AI-powered solutions from one powerful platform
        </p>
      </div>
      <div className="card-list mt-16 text-center md:text-left flex flex-wrap justify-center gap-10">
        {data.map((content, index) => {
          return (
            <div
              key={index}
              className={`${
                loaded || inViewport
                  ? "animate__animated animate__slideInUp animate__fast"
                  : ""
              } group hover:bg-midBlue rounded-2xl hover:rounded-2xl transition duration-200 ease-out p-8 w-[360px]`}
            >
              <span className="flex justify-center md:justify-start">
                {content.icon}
              </span>
              <h3 className="mt-8 text-2xl font-medium">{content.title}</h3>
              <p className="content  my-4 text-sm leading-loose text-slate-400 group-hover:text-white">
                {content.description}
              </p>
              <a className="font-medium underline" href={content.href}>
                Read More
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Benefit;

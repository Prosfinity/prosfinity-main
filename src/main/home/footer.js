import {} from "@heroicons/react/outline";

const Footer = () => {
  let dataFooter = [
    {
      title: "Company",
      content: ["About Us", "Contact Us", "Prosfinity VPN", "AiShieldNet"],
    },
    {
      title: "AIShieldNet",
      content: ["Features", "Solutions", "Download", "VPN For China"],
    },
    {
      title: "Support",
      content: [
        "Contact Us",
        "FAQ",
        "Terms of Service",
        {
          title: "Privacy Policy",
          href: "/privacy",
        },
      ],
    },
  ];

  return (
    <div className="bg-btnDark w-full py-14">
      <div className="w-full xl:w-container mx-auto px-8 text-gray-400 lg:grid grid-cols-2 text-sm">
        <div className="mr-0 lg:mr-40">
          <img className="w-logo" src="/images/logo-dark.png" alt="logo" />
          <p className="my-8 leading-relaxed">
            AIShieldNet: Protect your digital assets with advanced AI detection.
          </p>
          <div className="flex items-center">
            <a
              href="https://www.facebook.com/ProsfinityVPN"
              className="bg-blue w-10 h-10 p-3 rounded-full items-center flex justify-center mr-3 hover:bg-white transition-all"
            >
              <img src="/images/logos/facebook-logo.png" alt="facebook" />
            </a>
            <a
              href="https://www.instagram.com/prosfinity/"
              className="bg-blue w-10 h-10 p-3 rounded-full items-center flex justify-center mr-3 hover:bg-white transition-all"
            >
              <img src="/images/logos/instagram-logo.png" alt="instagram" />
            </a>
            <a
              href="https://x.com/prosfinity"
              className="bg-blue w-10 h-10 p-3 rounded-full items-center flex justify-center mr-3 hover:bg-white transition-all"
            >
              <img src="/images/logos/twitter-logo.png" alt="twitter" />
            </a>
            <a
              href="https://www.linkedin.com/company/prosfinity"
              className="bg-blue w-10 h-10 p-3 rounded-full items-center flex justify-center mr-3 hover:bg-white transition-all"
            >
              <img src="/images/logos/linkedin-logo.png" alt="linkedin" />
            </a>
          </div>
        </div>
        <div className="hidden lg:flex justify-between">
          {dataFooter.map((footer, index) => {
            return (
              <div key={index} className="">
                <h4 className="font-medium text-white text-base">
                  {footer.title}
                </h4>
                {footer.content.map((content, index) => {
                  if (typeof content === "object") {
                    return (
                      <a href={content.href} key={index}>
                        <p className="mt-3">{content.title}</p>
                      </a>
                    );
                  }
                  return (
                    <p key={index} className="mt-3">
                      {content}
                    </p>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;

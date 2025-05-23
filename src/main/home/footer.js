import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
const Footer = () => {
  let dataFooter = [
    {
      title: "Company",
      content: [
        "About Us",
        {
          title: "Contact Us",
          href: "/contact",
        },
        "Prosfinity VPN",
        "AiShieldNet",
      ],
    },
    {
      title: "AIShieldNet",
      content: ["Features", "Solutions", "Download", "VPN For China"],
    },
    {
      title: "Support",
      content: [
        {
          title: "Contact Us",
          href: "/contact",
        },
        "FAQ",
        "Terms of Service",
        {
          title: "Privacy Policy",
          href: "/product/AIShieldNet/privacy",
        },
      ],
    },
  ];

  return (
    <div className="bg-btnDark w-full py-14">
      <div className="xl:w-container mx-auto w-full grid-cols-2 px-8 text-sm text-gray-400 lg:grid">
        <div className="mr-0 lg:mr-40">
          <img className="w-logo" src="/images/logo-dark.png" alt="logo" />
          <p className="my-8 leading-relaxed">
            AIShieldNet: Protect your digital assets with advanced AI detection.
          </p>
          <div className="flex items-center">
            <a
              href="https://www.facebook.com/ProsfinityVPN"
              className="bg-blue mr-3 flex h-10 w-10 items-center justify-center rounded-full p-3 transition-all hover:bg-white"
            >
              <img src="/images/logos/facebook-logo.png" alt="facebook" />
            </a>
            <a
              href="https://www.instagram.com/prosfinity/"
              className="bg-blue mr-3 flex h-10 w-10 items-center justify-center rounded-full p-3 transition-all hover:bg-white"
            >
              <img src="/images/logos/instagram-logo.png" alt="instagram" />
            </a>
            <a
              href="https://x.com/prosfinity"
              className="bg-blue mr-3 flex h-10 w-10 items-center justify-center rounded-full p-3 transition-all hover:bg-white"
            >
              <img src="/images/logos/twitter-logo.png" alt="twitter" />
            </a>
            <a
              href="https://www.linkedin.com/company/prosfinity"
              className="bg-blue mr-3 flex h-10 w-10 items-center justify-center rounded-full p-3 transition-all hover:bg-white"
            >
              <img src="/images/logos/linkedin-logo.png" alt="linkedin" />
            </a>
          </div>
        </div>
        <div className="hidden justify-between lg:flex">
          {dataFooter.map((footer, index) => {
            return (
              <div key={index} className="">
                <h4 className="text-base font-medium text-white">
                  {footer.title}
                </h4>
                {footer.content.map((content, index) => {
                  if (typeof content === "object") {
                    return (
                      <Link href={content.href} key={index}>
                        <p className="mt-3">{content.title}</p>
                      </Link>
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

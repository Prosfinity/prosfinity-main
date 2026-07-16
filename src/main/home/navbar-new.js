import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import {
  BarChart3,
  ChevronDown,
  Download,
  Globe,
  MailWarning,
  Monitor,
  Search,
  Shield,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

const endpointItems = [
  {
    title: "LLM Protection",
    description:
      "Real-time endpoint analysis powered by Large Language Models.",
    icon: Shield,
    href: "/product/AIShieldNet/llm",
  },
  {
    title: "Why AIShieldNet",
    description:
      "Why it is built for unknown and zero-day endpoint threats.",
    icon: Users,
    href: "/product/AIShieldNet/why-us",
  },
  {
    title: "Features",
    description: "Explore detection, monitoring, policy, and response capabilities.",
    icon: Search,
    href: "/product/AIShieldNet/features",
  },
  {
    title: "Comparison",
    description: "Compare AIShieldNet with EDR and traditional antivirus.",
    icon: BarChart3,
    href: "/product/AIShieldNet/comparison",
  },
  {
    title: "Downloads & Pricing",
    description: "Download the agent and review available plans.",
    icon: Download,
    href: "/product/AIShieldNet/download-and-price",
  },
  {
    title: "Free Trial",
    description: "Evaluate AIShieldNet endpoint protection in your environment.",
    icon: Globe,
    href: "/product/AIShieldNet/free-trial",
  },
  {
    title: "Phishing Defense Review",
    description: "Book a focused review of your endpoint phishing defenses.",
    icon: MailWarning,
    href: "/product/AIShieldNet/phishing-defense-review",
  },
];

const NavbarNew = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (menu) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const handleDropdownMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handleDropdownMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white backdrop-blur hidden md:block">
      <div className="container mx-auto flex h-16 items-center px-4">
        <div className="mr-8">
          <Link href="/">
            <img
              src="/images/logo-light.png"
              className="h-20"
              alt="Prosfinity Logo"
            />
          </Link>
        </div>

        <nav className="flex flex-wrap items-center gap-y-1 space-x-8">
          {/* Platform Mega Menu */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("platform")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center space-x-1 text-sm font-medium hover:text-red-600 transition-colors py-2">
              <span>Products</span>
              <ChevronDown className="h-4 w-4" />
            </button>

            {activeDropdown === "platform" && (
              <div
                className="absolute top-full left-0 w-[900px] bg-white border border-gray-200 rounded-xl shadow-xl p-6 mt-1"
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <div className="grid grid-cols-[1fr_280px] gap-6">
                  <div>
                    <Link
                      href="/product/AIShieldNet"
                      className="group mb-4 flex items-center justify-between rounded-xl bg-red-50 p-4"
                    >
                      <div className="flex items-center gap-3">
                        <span className="rounded-lg bg-white p-2 text-red-600">
                          <Shield className="h-5 w-5" />
                        </span>
                        <div>
                          <h3 className="font-semibold text-gray-900 group-hover:text-red-600">
                            AIShieldNet
                          </h3>
                          <p className="text-sm text-gray-600">
                            Zero Day Endpoint Protection
                          </p>
                        </div>
                      </div>
                      <span className="text-sm font-semibold text-red-600">
                        Product overview →
                      </span>
                    </Link>
                    <div className="grid grid-cols-2 gap-2">
                      {endpointItems.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="group rounded-lg p-3 hover:bg-gray-50"
                        >
                          <div className="flex items-center gap-2">
                            <item.icon className="h-4 w-4 text-red-600" />
                            <h4 className="text-sm font-semibold group-hover:text-red-600">
                            {item.title}
                            </h4>
                          </div>
                          <p className="mt-1.5 text-xs leading-relaxed text-gray-600">
                            {item.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="border-l border-gray-200 pl-6">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                      Browser Security
                    </p>
                    <Link
                      href="/product/browser-detection-response"
                      className="group block rounded-xl border border-cyan-100 bg-cyan-50/60 p-5 hover:border-cyan-300 hover:shadow-md"
                    >
                      <span className="inline-flex rounded-lg bg-white p-2 text-cyan-600">
                        <Monitor className="h-5 w-5" />
                      </span>
                      <h3 className="mt-4 font-semibold group-hover:text-cyan-600">
                        Prosfinity BDR
                      </h3>
                      <p className="mt-1 text-xs font-medium text-gray-500">
                        Browser Detection & Response
                      </p>
                      <p className="mt-4 text-sm leading-relaxed text-gray-600">
                        Control browser data movement, secure GenAI use, and
                        investigate risky activity.
                      </p>
                      <p className="mt-4 text-sm font-semibold text-cyan-600">
                        Explore product →
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/partner"
            className="text-sm font-medium hover:text-red-600 transition-colors"
          >
            Partner
          </Link>
        </nav>

        <div className="ml-auto flex items-center space-x-4">
          <Link href="/contact" target="_blank">
            <button className="px-4 py-2 text-sm font-medium bg-red-600 text-white hover:bg-red-700 rounded-md transition-colors">
              Request a Demo →
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavbarNew;

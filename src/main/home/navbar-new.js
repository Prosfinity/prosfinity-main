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
  DollarSign,
  Download,
  Globe,
  Info,
  MailWarning,
  Phone,
  Search,
  Shield,
  ShieldCheck,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

const productsItems = [
  {
    title: "LLM",
    description:
      "AI-powered security layer that analyzes threats in real time using Large Language Models.",
    icon: Shield,
    href: "/product/AIShieldNet/llm",
  },
  {
    title: "Why Us",
    description:
      "Discover why AIShieldNet is the trusted choice for zero-day endpoint protection.",
    icon: Users,
    href: "/product/AIShieldNet/why-us",
  },
  {
    title: "Features",
    description:
      "Advanced defense capabilities, continuous monitoring, and automated response.",
    icon: Search,
    href: "/product/AIShieldNet/features",
  },
  {
    title: "Comparison",
    description:
      "See how AIShieldNet stacks up against other security solutions.",
    icon: BarChart3,
    href: "/product/AIShieldNet/comparison",
  },
  {
    title: "Downloads & Price",
    description:
      "Get the software and explore pricing plans that fit your needs.",
    icon: Download,
    href: "/product/AIShieldNet/download-and-price",
  },
  {
    title: "Free Trial",
    description: "Try AIShieldNet with a no-risk free trial before you commit.",
    icon: Globe,
    href: "/product/AIShieldNet/free-trial",
  },
  {
    title: "Phishing Defense Review",
    description: "Evaluate our phishing detection and prevention performance.",
    icon: MailWarning,
    href: "/product/AIShieldNet/phishing-defense-review",
  },
];

const servicesItems = [
  {
    title: "What is SRAA",
    description:
      "Learn about Security Risk Assessment & Audit and why it matters for your organization.",
    icon: ShieldCheck,
    href: "/service/sraa/what-is-sraa",
  },
  {
    title: "Pricing",
    description:
      "Transparent pricing plans tailored to your business security needs.",
    icon: DollarSign,
    href: "/service/sraa/pricing",
  },
  {
    title: "About Us",
    description:
      "Get to know our mission, expertise, and commitment to cybersecurity.",
    icon: Info,
    href: "/service/sraa/about",
  },
  {
    title: "Contact",
    description: "Reach out to our team for consultation or support anytime.",
    icon: Phone,
    href: "/service/sraa/contact",
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
                className="absolute top-full left-0 w-[800px] bg-white border border-gray-200 rounded-lg shadow-lg p-6 mt-1"
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2 text-red-600">
                    Products →{" "}
                    <a
                      href="/product/AIShieldNet"
                      className="text-red-600 hover:text-red-700 hover:underline"
                    >
                      Zero Day Endpoint Protection
                    </a>
                  </h3>
                </div>
                <div className="grid grid-cols-3 gap-6">
                  {productsItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="group block space-y-2 rounded-lg p-3 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center space-x-2">
                        <item.icon className="h-5 w-5 text-red-600" />
                        <h4 className="font-medium text-sm group-hover:text-red-600 transition-colors">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Services Mega Menu */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center space-x-1 text-sm font-medium hover:text-red-600 transition-colors py-2">
              <span>Services</span>
              <ChevronDown className="h-4 w-4" />
            </button>

            {activeDropdown === "services" && (
              <div
                className="absolute top-full left-0 w-[800px] bg-white border border-gray-200 rounded-lg shadow-lg p-6 mt-1"
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2 text-red-600">
                    Services →{" "}
                    <a
                      href="/service/sraa"
                      className="text-red-600 hover:text-red-700 hover:underline"
                    >
                      Security Risk Assessment & Audit
                    </a>
                  </h3>
                </div>
                <div className="grid grid-cols-3 gap-6">
                  {servicesItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="group block space-y-2 rounded-lg p-3 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center space-x-2">
                        <item.icon className="h-5 w-5 text-red-600" />
                        <h4 className="font-medium text-sm group-hover:text-red-600 transition-colors">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Simple Link */}
          <Link
            href="/zeroday-ransomware-terminated"
            className="text-sm font-medium hover:text-red-600 transition-colors"
          >
            Zeroday Ransomware Terminated
          </Link>

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
              Start Free Trial →
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavbarNew;

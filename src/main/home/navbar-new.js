import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { ChevronDown, Monitor, Shield } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

const productsItems = [
  {
    title: "AIShieldNet",
    subtitle: "Zero Day Endpoint Protection",
    description:
      "Stop zero-day threats, ransomware, and malicious processes at the endpoint.",
    icon: Shield,
    href: "/product/AIShieldNet",
    accent: "red",
  },
  {
    title: "Prosfinity BDR",
    subtitle: "Browser Detection & Response",
    description:
      "Control browser data movement, secure GenAI use, and investigate risky activity.",
    icon: Monitor,
    href: "/product/browser-detection-response",
    accent: "cyan",
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
                className="absolute top-full left-0 w-[680px] bg-white border border-gray-200 rounded-xl shadow-xl p-6 mt-1"
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                  Products
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {productsItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="group block rounded-xl border border-gray-200 p-5 hover:border-gray-300 hover:shadow-md transition-all"
                    >
                      <div className="flex items-start space-x-3">
                        <span
                          className={`rounded-lg p-2 ${item.accent === "cyan" ? "bg-cyan-50 text-cyan-600" : "bg-red-50 text-red-600"}`}
                        >
                          <item.icon className="h-5 w-5" />
                        </span>
                        <div>
                          <h4
                            className={`font-semibold text-base ${item.accent === "cyan" ? "group-hover:text-cyan-600" : "group-hover:text-red-600"} transition-colors`}
                          >
                            {item.title}
                          </h4>
                          <p className="mt-0.5 text-xs font-medium text-gray-500">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>
                      <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                      <p
                        className={`mt-4 text-sm font-semibold ${item.accent === "cyan" ? "text-cyan-600" : "text-red-600"}`}
                      >
                        Explore product →
                      </p>
                    </Link>
                  ))}
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

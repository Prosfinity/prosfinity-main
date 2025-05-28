import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Drawer,
  DrawerHeader,
  DrawerItems,
} from "flowbite-react";
import Link from "next/link";
import { useState } from "react";

const theme = {
  root: {
    base: "fixed start-0 top-0 z-20 w-full border-b border-gray-200 bg-white",
    rounded: {
      on: "rounded",
      off: "",
    },
    bordered: {
      on: "border",
      off: "",
    },
    inner: {
      base: "mx-auto max-w-screen-xl flex flex-wrap items-center justify-between",
      fluid: {
        on: "",
        off: "container",
      },
    },
  },
  brand: {
    base: "flex items-center relative h-12 grow",
  },
  collapse: {
    base: "w-full md:block md:w-auto",
    list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
    hidden: {
      on: "hidden",
      off: "",
    },
  },
  link: {
    base: "block py-2 pl-3 pr-4 md:p-0 text-base",
    active: {
      on: "bg-primary-700 text-white md:bg-transparent md:text-primary-700 dark:text-white",
      off: "border-b border-gray-100 text-gray-700 hover:bg-gray-50 md:border-0 md:hover:bg-transparent md:hover:text-primary-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-white",
    },
    disabled: {
      on: "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
      off: "",
    },
  },
  toggle: {
    base: "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
    icon: "h-6 w-6 shrink-0",
    title: "sr-only",
  },
};

const NavbarHome = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar fluid rounded className="rounded-none lg:pb-0 pb-2" theme={theme}>
      <NavbarBrand as={Link} href="/">
        <img
          src="/images/logo-light.png"
          className="h-20"
          alt="Prosfinity Logo"
        />
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink as={Link} href="/product/AIShieldNet">
          Endpoint Phishing Protection
        </NavbarLink>
        <NavbarLink as={Link} href="/service/sraa">
          Security Risk Assessment & Audit
        </NavbarLink>
        <div className="md:hidden">
          <NavbarLink as={Link} href="/product/AIShieldNet/why-us">
            Why Us
          </NavbarLink>
          <NavbarLink as={Link} href="/product/AIShieldNet/features">
            Features
          </NavbarLink>
          <NavbarLink as={Link} href="/product/AIShieldNet/comparison">
            Comparison
          </NavbarLink>
          <NavbarLink as={Link} href="/product/AIShieldNet/download-and-price">
            Downloads & Price
          </NavbarLink>
          <NavbarLink as={Link} href="/product/AIShieldNet/free-trial">
            Free Trial
          </NavbarLink>
          <NavbarLink
            as={Link}
            href="/product/AIShieldNet/phishing-defense-review"
          >
            Phishing Defense Review
          </NavbarLink>
        </div>
      </NavbarCollapse>
      <div className="flex-wrap items-center justify-between ml-auto p-2 hidden md:flex border-t border-gray-200">
        <div></div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white  md: ">
            <li>
              <Link
                href="/product/AIShieldNet/why-us"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:    md: "
              >
                Why Us
              </Link>
            </li>
            <li>
              <Link
                href="/product/AIShieldNet/features"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:    md: "
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="/product/AIShieldNet/comparison"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:    md: "
              >
                Comparison
              </Link>
            </li>
            <li>
              <Link
                href="/product/AIShieldNet/download-and-price"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:    md: "
              >
                Downloads & Price
              </Link>
            </li>
            <li>
              <Link
                href="/product/AIShieldNet/free-trial"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:    md: "
              >
                Free Trial
              </Link>
            </li>
            <li>
              <Link
                href="/product/AIShieldNet/phishing-defense-review"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:    md: "
              >
                Phishing Defense Review
              </Link>
            </li>
          </ul>
          <div className="ml-10">
            <button
              type="button"
              className="bg-btnDark text-white font-medium rounded-lg hover:shadow-xl transition-all text-base px-4 py-2 md:px-8 md:py-2"
              onClick={() => setIsOpen(true)}
            >
              Get Quote
            </button>
            <Drawer
              open={isOpen}
              onClose={() => setIsOpen(false)}
              position="right"
            >
              <DrawerHeader title="Book a Call" />
              <DrawerItems>
                <div className="mx-5">
                  <form
                    action="https://formspree.io/f/mnnpnbrk"
                    method="POST"
                    className="max-w-sm mx-auto"
                  >
                    <div className="mb-5">
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-black "
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5      "
                        required
                      />
                    </div>
                    <div className="mb-5">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-black "
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5      "
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div className="mb-5">
                      <label
                        htmlFor="subject"
                        className="block mb-2 text-sm font-medium text-black "
                      >
                        Choose your subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5      "
                      >
                        <option value="General Inquiry" defaultValue>
                          General Inquiry
                        </option>
                        <option value="Free Consultation">
                          Free Consultation
                        </option>
                        <option value="Feedback/Suggestions">
                          Feedback/Suggestions
                        </option>
                        <option value="Partnership/Reseller Opportunities">
                          Partnership/Reseller Opportunities
                        </option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="text-white bg-yellow-500 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center   "
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </DrawerItems>
            </Drawer>
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default NavbarHome;

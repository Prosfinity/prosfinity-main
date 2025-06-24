import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
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
          Zero Day Endpoint Protection
        </NavbarLink>
        <NavbarLink as={Link} href="/service/sraa">
          Security Risk Assessment & Audit
        </NavbarLink>
        <div className="md:hidden">
          <NavbarLink as={Link} href="/service/sraa/what-is-sraa">
            What is SRAA
          </NavbarLink>
          <NavbarLink as={Link} href="/service/sraa/price">
            Price
          </NavbarLink>
          <NavbarLink as={Link} href="/service/sraa/about">
            About Us
          </NavbarLink>
          <NavbarLink as={Link} href="/service/sraa/contact">
            Contact
          </NavbarLink>
          <NavbarLink as={Link} href="/product/AIShieldNet">
            Zero Day EndPoint Protection
          </NavbarLink>
        </div>
      </NavbarCollapse>
      <div className="flex-wrap items-center justify-between ml-auto p-4 hidden md:flex border-t border-gray-200">
        <div></div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white  md: ">
            <li>
              <Link
                href="/service/sraa/what-is-sraa"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:    md: "
              >
                What is SRAA
              </Link>
            </li>
            <li>
              <Link
                href="/service/sraa/price"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:    md: "
              >
                Price
              </Link>
            </li>
            <li>
              <Link
                href="/service/sraa/about"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:    md: "
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/service/sraa/contact"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:    md: "
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/product/AIShieldNet"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:    md: "
              >
                Zero Day EndPoint Protection
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Navbar>
  );
};

export default NavbarHome;

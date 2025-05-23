/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white  fixed w-full z-20 top-0 start-0 border-b border-gray-200 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="grow h-10 relative">
          <Link
            href="/"
            className="absolute left-0 -top-5 flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/images/logo-light.png"
              className="h-20"
              alt="Prosfinity Logo"
            />
          </Link>
        </div>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse md:hidden">
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200   "
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white  md: ">
            <li>
              <Link
                href="/product/AIShieldNet"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:    md: "
              >
                Endpoint Phishing Protection
              </Link>
            </li>
            <li>
              <Link
                href="/service/sraa"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:    md: "
              >
                Security Risk Assessment & Audit
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-screen-xl flex-wrap items-center justify-between mx-auto p-4 hidden xl:flex border-t border-gray-200">
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
    </nav>
  );
};

export default Navbar;

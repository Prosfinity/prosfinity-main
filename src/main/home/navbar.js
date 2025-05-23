/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed start-0 top-0 z-20 w-full border-b border-gray-200 bg-white  ">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <div className="relative h-10 grow">
          <a
            href="/"
            className="absolute -top-5 left-0 flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/images/logo-light.png"
              className="h-20"
              alt="Prosfinity Logo"
            />
          </a>
        </div>
        <div className="flex space-x-3 md:order-2 md:hidden md:space-x-0 rtl:space-x-reverse">
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200    md:hidden"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
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
          className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
          id="navbar-sticky"
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium   md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md: rtl:space-x-reverse">
            <li>
              <a
                href="/product/AIShieldNet"
                className="block rounded-sm px-3 py-2 text-gray-900 hover:bg-gray-100     md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md: md:"
              >
                Endpoint Phishing Protection
              </a>
            </li>
            <li>
              <a
                href="/service/sraa"
                className="block rounded-sm px-3 py-2 text-gray-900 hover:bg-gray-100     md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md: md:"
              >
                Security Risk Assessment & Audit
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

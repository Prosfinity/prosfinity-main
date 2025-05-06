/* eslint-disable @next/next/no-img-element */
import { Drawer, DrawerHeader, DrawerItems } from "flowbite-react";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
            <Drawer open={isOpen} onClose={() => setIsOpen(false)} position="right">
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
    </nav>
  );
};

export default Navbar;

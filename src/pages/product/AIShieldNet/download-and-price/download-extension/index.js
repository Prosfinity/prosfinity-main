/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import React from "react";
import Navbar from "../../../../../main/ai-shield-net/navbar";
import Footer from "../../../../../main/home/footer";

const AIShieldNetDownloadAndPriceAgentDownloadPage = () => {
  return (
    <div className="font-Poppins bg-white">
      <Head>
        <title>
          Download Link &#8211; Browser Extension &#8211; AI ShieldNet
        </title>
        <link rel="icon" href="/images/favicon.png" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Prosfinity &#8211; AI ShieldNet Browser Extension"
        />
        <meta
          property="og:description"
          content="Prosfinity is a cybersecurity company that provides AI-driven cybersecurity solutions to businesses."
        />
        <meta
          property="og:image"
          content="https://prosfinity.com/images/logo-light.png"
        />
        <meta property="og:url" content="https://prosfinity.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Prosfinity" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Prosfinity &#8211; AI ShieldNet Browser Extension"
        />
        <meta
          name="twitter:description"
          content="Prosfinity is a cybersecurity company that provides AI-driven cybersecurity solutions to businesses."
        />
        <meta
          name="twitter:image"
          content="https://prosfinity.com/images/logo-light.png"
        />
        <meta name="twitter:site" content="@prosfinity" />
      </Head>

      <header>
        <Navbar />
      </header>

      <article>
        <div className="xl:w-container mx-auto mt-16 w-full px-8 pt-20 lg:px-20 xl:mt-16 xl:px-0">
          <div className="w-full">
            <p className="text-2xl font-semibold leading-normal md:text-3xl md:leading-relaxed">
              AI ShieldNet Agent Sensor
            </p>
            <p className="text-base font-light leading-6 md:text-lg lg:leading-10">
              Choose Your Installation Package
            </p>
            <div className="mt-5 flex gap-4">
              <div className="flex items-center gap-2">
                <img
                  src="/images/download-and-price/chrome.png"
                  alt="chrome"
                  className="h-5 w-5"
                />
                <p>Chrome</p>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="/images/download-and-price/firefox.png"
                  alt="firefox"
                  className="h-5 w-5"
                />
                <p>Firefox</p>
              </div>
            </div>
            <div className="relative mt-5 overflow-x-auto">
              <table className="w-full text-left text-sm text-gray-500  rtl:text-right">
                <thead className="bg-gray-50 text-xs uppercase text-gray-700  ">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Type
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Version
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Download
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 bg-white  ">
                    <td className="px-6 py-4 text-gray-900">
                      Browser Extension
                    </td>
                    <td className="px-6 py-4 text-gray-900">Add-On</td>
                    <th
                      scope="row"
                      className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 "
                    >
                      Version 0.0.19
                    </th>
                    <td className="flex gap-4 px-6 py-4">
                      <a href="https://chromewebstore.google.com/detail/ai-phishnet/bgpnaianfdfllfbagjenbocnodkfpnfa">
                        <button className="bg-btnBlue flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white transition-all hover:shadow-xl md:px-8 md:py-2 md:text-sm">
                          <img
                            src="/images/download-and-price/chrome-light.png"
                            alt="chrome"
                            className="h-5 w-5"
                          />
                          Download For Chrome
                        </button>
                      </a>
                      <a href="https://addons.mozilla.org/zh-TW/firefox/addon/ai-phishnet">
                        <button className="bg-btnBlue flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white transition-all hover:shadow-xl md:px-8 md:py-2 md:text-sm">
                          <img
                            src="/images/download-and-price/firefox-light.png"
                            alt="firefox"
                            className="h-5 w-5"
                          />
                          Download For Firefox
                        </button>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </article>

      <footer className="mt-16 xl:mt-28">
        <Footer />
      </footer>
    </div>
  );
};

export default AIShieldNetDownloadAndPriceAgentDownloadPage;

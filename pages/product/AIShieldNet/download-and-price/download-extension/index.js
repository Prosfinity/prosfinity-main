import Head from "next/head";
import React from "react";
import Navbar from "../../../../../src/main/ai-shield-net/navbar";
import Footer from "../../../../../src/main/home/footer";

const AIShieldNetDownloadAndPriceAgentDownloadPage = () => {
  return (
    <div className="font-Poppins bg-white">
      <Head>
        <title>
          Download Link &#8211; Browser Extension &#8211; AI ShieldNet
        </title>
        <link rel="icon" href="/images/favicon.png" />
      </Head>

      <header>
        <Navbar />
      </header>

      <article>
        <div className="w-full xl:w-container px-8 lg:px-20 xl:px-0 mx-auto mt-16 xl:mt-16 pt-20">
          <div className="w-full">
            <p className="text-2xl md:text-3xl font-semibold leading-normal md:leading-relaxed">
              AI ShieldNet Agent Sensor
            </p>
            <p className="text-base md:text-lg font-light leading-6 lg:leading-10">
              Choose Your Installation Package
            </p>
            <div className="flex gap-4 mt-5">
              <div className="flex items-center gap-2">
                <img src="/images/download-and-price/chrome.png" alt="chrome" className="w-5 h-5" />
                <p>Chrome</p>
              </div>
              <div className="flex items-center gap-2">
                <img src="/images/download-and-price/firefox.png" alt="firefox" className="w-5 h-5" />
                <p>Firefox</p>
              </div>
            </div>
            <div className="relative overflow-x-auto mt-5">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                    <td className="px-6 py-4 text-gray-900">Browser Extension</td>
                    <td className="px-6 py-4 text-gray-900">Add-On</td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Version 0.0.19
                    </th>
                    <td className="px-6 py-4 flex gap-4">
                      <a href="https://chromewebstore.google.com/detail/ai-phishnet/bgpnaianfdfllfbagjenbocnodkfpnfa">
                        <button className="bg-btnDark text-white font-medium rounded-lg hover:shadow-xl transition-all text-sm md:text-sm px-4 py-2 md:px-8 md:py-2 flex items-center gap-2">
                          <img src="/images/download-and-price/chrome-light.png" alt="chrome" className="w-5 h-5" />
                          Download For Chrome
                        </button>
                      </a>
                      <a href="https://addons.mozilla.org/zh-TW/firefox/addon/ai-phishnet">  
                        <button className="bg-btnDark text-white font-medium rounded-lg hover:shadow-xl transition-all text-sm md:text-sm px-4 py-2 md:px-8 md:py-2 flex items-center gap-2">
                          <img src="/images/download-and-price/firefox-light.png" alt="firefox" className="w-5 h-5" />
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

      <script src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"></script>
    </div>
  );
};

export default AIShieldNetDownloadAndPriceAgentDownloadPage;

import Head from "next/head";
import React from "react";
import DownloadAndPriceBanner from "../../../../src/main/ai-shield-net/download-and-price/banner";
import Navbar from "../../../../src/main/ai-shield-net/navbar";
import WhyUsTopFooter from "../../../../src/main/ai-shield-net/why-us/top-footer";
import Footer from "../../../../src/main/home/footer";
import DownloadAndPriceDownload from "../../../../src/main/ai-shield-net/download-and-price/download";
import DownloadAndPricePricing from "../../../../src/main/ai-shield-net/download-and-price/pricing";

const AIShieldNetDownloadAndPricePage = () => {
  return (
    <div className="font-Poppins bg-white">
      <Head>
        <title>
          Download | AIShieldNet &#8211; Your Trusted AI Endpoint Protection
          &#8211; AI ShieldNet
        </title>
        <link rel="icon" href="/images/favicon.png" />
      </Head>

      <header className="w-full h-[400px] bg-gradient">
        <Navbar />
        <DownloadAndPriceBanner />
      </header>

      <article>
        <DownloadAndPriceDownload />
        <DownloadAndPricePricing />
      </article>

      <footer>
        <WhyUsTopFooter />
        <Footer />
      </footer>

      <script src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"></script>
    </div>
  );
};

export default AIShieldNetDownloadAndPricePage;

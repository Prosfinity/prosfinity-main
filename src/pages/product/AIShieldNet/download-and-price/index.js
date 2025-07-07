/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import React from "react";
import DownloadAndPriceBanner from "../../../../main/ai-shield-net/download-and-price/banner";
import Navbar from "../../../../main/ai-shield-net/navbar";
import WhyUsTopFooter from "../../../../main/ai-shield-net/why-us/top-footer";
import Footer from "../../../../main/home/footer";
import DownloadAndPriceDownload from "../../../../main/ai-shield-net/download-and-price/download";
import DownloadAndPricePricing from "../../../../main/ai-shield-net/download-and-price/pricing";

const AIShieldNetDownloadAndPricePage = () => {
  return (
    <div className="font-Poppins bg-white">
      <Head>
        <title>
          Download | AIShieldNet &#8211; Your Trusted AI Endpoint Protection
          &#8211; AI ShieldNet
        </title>
        <link rel="icon" href="/images/favicon.ico" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Prosfinity &#8211; AI ShieldNet Downloads & Price"
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
          content="Prosfinity &#8211; AI ShieldNet Downloads & Price"
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

      <header className="w-full h-[700px] md:h-[400px] bg-gradient">
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
    </div>
  );
};

export default AIShieldNetDownloadAndPricePage;

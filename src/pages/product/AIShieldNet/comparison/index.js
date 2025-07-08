/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import React from "react";
import ComparisonAdvantages from "../../../../main/ai-shield-net/comparison/advantages";
import ComparisonBanner from "../../../../main/ai-shield-net/comparison/banner";
import ComparisonCompare from "../../../../main/ai-shield-net/comparison/compare";
import ComparisonQAndA from "../../../../main/ai-shield-net/comparison/q&a";
import ComparisonWhyChoose from "../../../../main/ai-shield-net/comparison/why-choose";
import ComparisonWhyUs from "../../../../main/ai-shield-net/comparison/why-us";
import Navbar from "../../../../main/ai-shield-net/navbar";
import WhyUsTopFooter from "../../../../main/ai-shield-net/why-us/top-footer";
import Footer from "../../../../main/home/footer";

const AIShieldNetComparisonPage = () => {
  return (
    <div className="font-Poppins bg-white">
      <Head>
        <title>Comparison &#8211; AI ShieldNet</title>
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Prosfinity &#8211; AI ShieldNet"
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
          content="Prosfinity &#8211; AI ShieldNet"
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

      <header className="w-full h-[400px] bg-gradient">
        <Navbar />
        <ComparisonBanner />
      </header>

      <article>
        <ComparisonWhyUs />
        <ComparisonCompare />
        <ComparisonAdvantages />
        <ComparisonWhyChoose />
        <ComparisonQAndA />
      </article>

      <footer>
        <WhyUsTopFooter />
        <Footer />
      </footer>
    </div>
  );
};

export default AIShieldNetComparisonPage;

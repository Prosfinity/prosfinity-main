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
        <link rel="icon" href="/images/favicon.png" />
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

      <script src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"></script>
    </div>
  );
};

export default AIShieldNetComparisonPage;

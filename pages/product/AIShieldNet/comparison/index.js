import Head from "next/head";
import React from "react";
import ComparisonAdvantages from "../../../../src/main/ai-shield-net/comparison/advantages";
import ComparisonBanner from "../../../../src/main/ai-shield-net/comparison/banner";
import ComparisonCompare from "../../../../src/main/ai-shield-net/comparison/compare";
import ComparisonQAndA from "../../../../src/main/ai-shield-net/comparison/q&a";
import ComparisonWhyChoose from "../../../../src/main/ai-shield-net/comparison/why-choose";
import ComparisonWhyUs from "../../../../src/main/ai-shield-net/comparison/why-us";
import Navbar from "../../../../src/main/ai-shield-net/navbar";
import WhyUsTopFooter from "../../../../src/main/ai-shield-net/why-us/top-footer";
import Footer from "../../../../src/main/home/footer";

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

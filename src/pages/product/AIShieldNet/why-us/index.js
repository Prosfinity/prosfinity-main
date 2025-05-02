/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import React from "react";
import Navbar from "../../../../main/ai-shield-net/navbar";
import WhyUsBanner from "../../../../main/ai-shield-net/why-us/banner";
import WhyUsComingSoon from "../../../../main/ai-shield-net/why-us/coming-soon";
import WhyUsSolution1 from "../../../../main/ai-shield-net/why-us/solutions/solution1";
import WhyUsSolution2 from "../../../../main/ai-shield-net/why-us/solutions/solution2";
import WhyUsSolution3 from "../../../../main/ai-shield-net/why-us/solutions/solution3";
import WhyUsSolution4 from "../../../../main/ai-shield-net/why-us/solutions/solution4";
import WhyUsSolution5 from "../../../../main/ai-shield-net/why-us/solutions/solution5";
import WhyUsSolution6 from "../../../../main/ai-shield-net/why-us/solutions/solution6";
import WhyUsMain from "../../../../main/ai-shield-net/why-us/why-us";
import Footer from "../../../../main/home/footer";
import WhyUsTopFooter from "../../../../main/ai-shield-net/why-us/top-footer";

const AIShieldNetWhyUsPage = () => {
  return (
    <div className="font-Poppins bg-white">
      <Head>
        <title>
          Why Us &#8211; Explore Power AI Endpoint Protection &#8211; AI
          ShieldNet
        </title>
        <link rel="icon" href="/images/favicon.png" />
      </Head>

      <header className="w-full h-[400px] bg-gradient">
        <Navbar />
        <WhyUsBanner />
      </header>

      <article>
        <WhyUsSolution1 />
        <WhyUsSolution2 />
        <WhyUsSolution3 />
        <WhyUsSolution4 />
        <WhyUsSolution5 />
        <WhyUsSolution6 />
        <WhyUsComingSoon />
        <WhyUsMain />
      </article>

      <footer>
        <WhyUsTopFooter />
        <Footer />
      </footer>

      <script src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"></script>
    </div>
  );
};

export default AIShieldNetWhyUsPage;

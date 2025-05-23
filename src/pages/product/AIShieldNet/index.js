/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import React from "react";
import Banner from "../../../main/ai-shield-net/banner";
import Combine from "../../../main/ai-shield-net/combine";
import Navbar from "../../../main/ai-shield-net/navbar";
import OurValues from "../../../main/ai-shield-net/our-values";
import Solution1 from "../../../main/ai-shield-net/solutions/solution1";
import Solution2 from "../../../main/ai-shield-net/solutions/solution2";
import TopFooter from "../../../main/ai-shield-net/top-footer";
import Footer from "../../../main/home/footer";

const AIShieldNetPage = () => {
  return (
    <div className="font-Poppins bg-white">
      <Head>
        <title>
          AI ShieldNet &#8211; Unified Phishing Defense for the Modern
          Organization
        </title>
        <link rel="icon" href="/images/favicon.png" />
      </Head>

      <header className="w-full h-[700px] md:h-[1000px] xl:h-[1200px] bg-gradient">
        <Navbar />
        <Banner />
        <OurValues />
      </header>

      <article>
        <Combine />
        <Solution1 />
        <Solution2 />
      </article>

      <footer>
        <TopFooter />
        <Footer />
      </footer>
    </div>
  );
};

export default AIShieldNetPage;

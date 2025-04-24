import Head from "next/head";
import React from "react";
import Navbar from "../../src/main/ai-shield-net/navbar";
import Banner from "../../src/main/ai-shield-net/banner";
import OurValues from "../../src/main/ai-shield-net/our-values";
import Combine from "../../src/main/ai-shield-net/combine";

const AIShieldNetPage = () => {
  return (
    <div className="font-Poppins">
      <Head>
        <title>
          AI ShieldNet &#8211; Unified Phishing Defense for the Modern
          Organization
        </title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <header className="w-full h-[700px] md:h-[1000px] xl:h-[1200px] bg-gradient">
        <Navbar />
        <Banner />
        <OurValues />
      </header>

      <article className="pb-60">
        <h3 className="mt-10 text-4xl md:text-4xl font-bold leading-tight md:leading-tight text-center">
          Combine AI x Anti-Phishing x EDR x Anti-Virus
        </h3>
        <Combine />
      </article>

      <script src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"></script>
    </div>
  );
};

export default AIShieldNetPage;

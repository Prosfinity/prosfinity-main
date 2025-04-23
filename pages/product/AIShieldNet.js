import Head from "next/head";
import React from "react";
import Navbar from "../../src/main/ai-shield-net/navbar";

const AIShieldNetPage = () => {
  return (
    <div className="font-Poppins">
      <Head>
        <title>AI ShieldNet &#8211; Unified Phishing Defense for the Modern Organization</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <header className="w-full h-[700px] md:h-[1000px] xl:h-[1200px] bg-gradient">
        <Navbar />
      </header>

      <article>
      </article>

      <script src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"></script>
    </div>
  );
};

export default AIShieldNetPage;

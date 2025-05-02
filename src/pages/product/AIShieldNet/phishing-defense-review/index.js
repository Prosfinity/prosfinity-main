/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import React from "react";
import Navbar from "../../../../main/ai-shield-net/navbar";
import PhishingDefenseReviewMain from "../../../../main/ai-shield-net/phishing-defense-review/main";
import Footer from "../../../../main/home/footer";

const AIShieldNetPhishingDefenseReviewPage = () => {
  return (
    <div className="font-Poppins bg-white">
      <Head>
        <title>Phishing Defense Review &#8211; AI ShieldNet</title>
        <link rel="icon" href="/images/favicon.png" />
      </Head>

      <header>
        <Navbar />
      </header>

      <article>
        <PhishingDefenseReviewMain />
      </article>

      <footer className="mt-16 xl:mt-28">
        <Footer />
      </footer>

      <script src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"></script>
    </div>
  );
};

export default AIShieldNetPhishingDefenseReviewPage;

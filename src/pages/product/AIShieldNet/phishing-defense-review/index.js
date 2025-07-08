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
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}
        <meta property="og:title" content="Prosfinity &#8211; AI ShieldNet Phishing Defense Review" />
        <meta
          property="og:description"
          content="Prosfinity is a cybersecurity company that provides AI-driven cybersecurity solutions to businesses."
        />
        <meta property="og:image" content="https://prosfinity.com/images/logo-light.png" />
        <meta property="og:url" content="https://prosfinity.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Prosfinity" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Prosfinity &#8211; AI ShieldNet Phishing Defense Review" />
        <meta
          name="twitter:description"
          content="Prosfinity is a cybersecurity company that provides AI-driven cybersecurity solutions to businesses."
        />
        <meta name="twitter:image" content="https://prosfinity.com/images/logo-light.png" />
        <meta name="twitter:site" content="@prosfinity" />
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
    </div>
  );
};

export default AIShieldNetPhishingDefenseReviewPage;

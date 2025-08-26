/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import React from "react";
import FreeTrialBanner from "../../../../main/ai-shield-net/free-trial/banner";
import FreeTrialFreeTrial from "../../../../main/ai-shield-net/free-trial/what-is";
import Navbar from "../../../../main/ai-shield-net/navbar";
import Footer from "../../../../main/home/footer";

const AIShieldNetFreeTrialPage = () => {
  return (
    <div className="font-Poppins bg-white">
      <Head>
        <title>
          Free Trial &#8211; Explore Power AI Endpoint Protection &#8211; AI
          ShieldNet
        </title>
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Prosfinity &#8211; AI ShieldNet Free Trial"
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
          content="Prosfinity &#8211; AI ShieldNet Free Trial"
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

      <header className="w-full h-[500px] bg-gradient">
        <Navbar />
        <FreeTrialBanner />
      </header>

      <article>
        <FreeTrialFreeTrial />
      </article>

      <footer className="mt-16 xl:mt-28">
        <Footer />
      </footer>
    </div>
  );
};

export default AIShieldNetFreeTrialPage;

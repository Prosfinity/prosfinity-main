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
        <title>Free Trial &#8211; Explore Power AI Endpoint Protection &#8211; AI ShieldNet</title>
        <link rel="icon" href="/images/favicon.png" />
      </Head>

      <header className="w-full h-[400px] bg-gradient">
        <Navbar />
        <FreeTrialBanner />
      </header>

      <article>
        <FreeTrialFreeTrial />
      </article>

      <footer className="mt-16 xl:mt-28">
        <Footer />
      </footer>

      <script src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"></script>
    </div>
  );
};

export default AIShieldNetFreeTrialPage;

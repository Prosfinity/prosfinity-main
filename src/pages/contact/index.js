/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import React from "react";
import Navbar from "../../main/home/navbar";
import Footer from "../../main/home/footer";
import Banner from "../../main/contact/banner";

const ContactPage = () => {
  return (
    <div className="font-Poppins bg-white">
      <Head>
        <title>
          Contact | AIShieldNet &#8211; Your Trusted Cybersecurity Partner
          &#8211; AI ShieldNet
        </title>
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Prosfinity &#8211; AI Driven Cybersecurity Partner"
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
          content="Prosfinity &#8211; AI Driven Cybersecurity Partner"
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

      <header className="w-full h-[800px] md:h-[600px] bg-gradient">
        <Navbar />
        <Banner />
      </header>

      <article></article>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default ContactPage;

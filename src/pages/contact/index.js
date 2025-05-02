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
        <link rel="icon" href="/images/favicon.png" />
      </Head>

      <header className="w-full h-[450px] bg-gradient">
        <Navbar />
        <Banner />
      </header>

      <article></article>

      <footer>
        <Footer />
      </footer>

      <script src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"></script>
    </div>
  );
};

export default ContactPage;

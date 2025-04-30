import Head from "next/head";
import React from "react";
import Navbar from "../../../src/main/ai-shield-net/navbar";
import Footer from "../../../src/main/home/footer";

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

      <header className="w-full h-[700px] md:h-[1000px] xl:h-[1200px] bg-gradient">
        <Navbar />
      </header>

      <article>
      </article>

      <footer>
        <Footer />
      </footer>

      <script src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"></script>
    </div>
  );
};

export default ContactPage;

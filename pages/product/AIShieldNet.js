import Head from "next/head";
import React from "react";
import Banner from "../../src/main/ai-shield-net/banner";
import Combine from "../../src/main/ai-shield-net/combine";
import Navbar from "../../src/main/ai-shield-net/navbar";
import OurValues from "../../src/main/ai-shield-net/our-values";
import Solution1 from "../../src/main/ai-shield-net/solutions/solution1";
import Solution2 from "../../src/main/ai-shield-net/solutions/solution2";
import TopFooter from "../../src/main/ai-shield-net/top-footer";
import Footer from "../../src/main/home/footer";

const AIShieldNetPage = () => {
  return (
    <div className="font-Poppins bg-white">
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

      <article>
        <Combine />
        <Solution1 />
        <Solution2 />
      </article>

      <footer>
        <TopFooter />
        <Footer />
      </footer>

      <script src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"></script>
    </div>
  );
};

export default AIShieldNetPage;

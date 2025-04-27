import Head from "next/head";
import React from "react";
import Navbar from "../../../../src/main/ai-shield-net/navbar";
import WhyUsBanner from "../../../../src/main/ai-shield-net/why-us/banner";
import WhyUsComingSoon from "../../../../src/main/ai-shield-net/why-us/coming-soon";
import WhyUsSolution1 from "../../../../src/main/ai-shield-net/why-us/solutions/solution1";
import WhyUsSolution2 from "../../../../src/main/ai-shield-net/why-us/solutions/solution2";
import WhyUsSolution3 from "../../../../src/main/ai-shield-net/why-us/solutions/solution3";
import WhyUsSolution4 from "../../../../src/main/ai-shield-net/why-us/solutions/solution4";
import WhyUsSolution5 from "../../../../src/main/ai-shield-net/why-us/solutions/solution5";
import WhyUsSolution6 from "../../../../src/main/ai-shield-net/why-us/solutions/solution6";
import WhyUsMain from "../../../../src/main/ai-shield-net/why-us/why-us";
import Footer from "../../../../src/main/home/footer";
import WhyUsTopFooter from "../../../../src/main/ai-shield-net/why-us/top-footer";

const AIShieldNetWhyUsPage = () => {
  return (
    <div className="font-Poppins bg-white">
      <Head>
        <title>
          Why Us &#8211; Explore Power AI Endpoint Protection &#8211; AI
          ShieldNet
        </title>
        <link rel="icon" href="/images/favicon.png" />
      </Head>

      <header className="w-full h-[400px] bg-gradient">
        <Navbar />
        <WhyUsBanner />
      </header>

      <article>
        <WhyUsSolution1 />
        <WhyUsSolution2 />
        <WhyUsSolution3 />
        <WhyUsSolution4 />
        <WhyUsSolution5 />
        <WhyUsSolution6 />
        <WhyUsComingSoon />
        <WhyUsMain />
      </article>

      <footer>
        <WhyUsTopFooter />
        <Footer />
      </footer>

      <script src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"></script>
    </div>
  );
};

export default AIShieldNetWhyUsPage;

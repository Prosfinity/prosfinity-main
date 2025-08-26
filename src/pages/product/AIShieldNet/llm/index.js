/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import Section1 from "../../../../main/ai-shield-net/llm/section/section1";
import Section2 from "../../../../main/ai-shield-net/llm/section/section2";
import Section3 from "../../../../main/ai-shield-net/llm/section/section3";
import Section4 from "../../../../main/ai-shield-net/llm/section/section4";
import Navbar from "../../../../main/ai-shield-net/navbar";
import Footer from "../../../../main/home/footer";

const LLMPage = () => {
  return (
    <div className="font-Poppins bg-white">
      <Head>
        <title>
          AIShieldNet - Real-Time LLM Intelligence - New Security Standard
        </title>
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}
        <meta property="og:title" content="Prosfinity &#8211; AI ShieldNet" />
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
        <meta name="twitter:title" content="Prosfinity &#8211; AI ShieldNet" />
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

      <header className="w-full bg-gradient">
        <Navbar />
      </header>

      <article className="pt-20 md:pt-10">
        <Section1 />
        <Section4 />
        <Section2 />
        <Section3 />
      </article>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default LLMPage;

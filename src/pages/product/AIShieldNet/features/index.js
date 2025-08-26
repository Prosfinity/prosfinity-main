/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import React from "react";
import FeaturesBanner from "../../../../main/ai-shield-net/features/banner";
import FeaturesSolution1 from "../../../../main/ai-shield-net/features/solutions/solution1";
import FeaturesSolution10 from "../../../../main/ai-shield-net/features/solutions/solution10";
import FeaturesSolution11 from "../../../../main/ai-shield-net/features/solutions/solution11";
import FeaturesSolution12 from "../../../../main/ai-shield-net/features/solutions/solution12";
import FeaturesSolution13 from "../../../../main/ai-shield-net/features/solutions/solution13";
import FeaturesSolution14 from "../../../../main/ai-shield-net/features/solutions/solution14";
import FeaturesSolution15 from "../../../../main/ai-shield-net/features/solutions/solution15";
import FeaturesSolution16 from "../../../../main/ai-shield-net/features/solutions/solution16";
import FeaturesSolution17 from "../../../../main/ai-shield-net/features/solutions/solution17";
import FeaturesSolution2 from "../../../../main/ai-shield-net/features/solutions/solution2";
import FeaturesSolution3 from "../../../../main/ai-shield-net/features/solutions/solution3";
import FeaturesSolution4 from "../../../../main/ai-shield-net/features/solutions/solution4";
import FeaturesSolution5 from "../../../../main/ai-shield-net/features/solutions/solution5";
import FeaturesSolution6 from "../../../../main/ai-shield-net/features/solutions/solution6";
import FeaturesSolution7 from "../../../../main/ai-shield-net/features/solutions/solution7";
import FeaturesSolution8 from "../../../../main/ai-shield-net/features/solutions/solution8";
import FeaturesSolution9 from "../../../../main/ai-shield-net/features/solutions/solution9";
import FeaturesTitle from "../../../../main/ai-shield-net/features/title";
import Navbar from "../../../../main/ai-shield-net/navbar";
import WhyUsTopFooter from "../../../../main/ai-shield-net/why-us/top-footer";
import Footer from "../../../../main/home/footer";

const AIShieldNetFeaturesPage = () => {
  return (
    <div className="font-Poppins bg-white">
      <Head>
        <title>
          Features &#8211; Explore Power AI Endpoint Protection &#8211; AI
          ShieldNet
        </title>
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Prosfinity &#8211; AI ShieldNet Features"
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
          content="Prosfinity &#8211; AI ShieldNet Features"
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
        <FeaturesBanner />
      </header>

      <article>
        <FeaturesTitle title="Dashboard" />
        <FeaturesSolution1 />
        <FeaturesTitle
          title="Explore The Platform"
          subtitle="Endpoint (Phishing)"
        />
        <FeaturesSolution2 />
        <FeaturesSolution3 />
        <FeaturesSolution4 />
        <FeaturesTitle subtitle="Execute File" />
        <FeaturesSolution5 />
        <FeaturesSolution6 />
        <FeaturesSolution7 />
        <FeaturesTitle subtitle="Anti-Virus" />
        <FeaturesSolution8 />
        <FeaturesSolution9 />
        <FeaturesSolution10 />
        <FeaturesTitle title="Global Settings" subtitle="Users Management" />
        <FeaturesSolution11 />
        <FeaturesTitle subtitle="Agents Status" />
        <FeaturesSolution12 />
        <FeaturesTitle subtitle="Policy" />
        <FeaturesSolution13 />
        <FeaturesSolution14 />
        <FeaturesSolution15 />
        <FeaturesTitle subtitle="Settings" />
        <FeaturesSolution16 />
        <FeaturesSolution17 />
      </article>

      <footer>
        <WhyUsTopFooter />
        <Footer />
      </footer>
    </div>
  );
};

export default AIShieldNetFeaturesPage;

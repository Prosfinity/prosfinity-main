import Head from "next/head";
import React from "react";
import FeaturesBanner from "../../../../src/main/ai-shield-net/features/banner";
import FeaturesSolution1 from "../../../../src/main/ai-shield-net/features/solutions/solution1";
import FeaturesSolution10 from "../../../../src/main/ai-shield-net/features/solutions/solution10";
import FeaturesSolution11 from "../../../../src/main/ai-shield-net/features/solutions/solution11";
import FeaturesSolution12 from "../../../../src/main/ai-shield-net/features/solutions/solution12";
import FeaturesSolution13 from "../../../../src/main/ai-shield-net/features/solutions/solution13";
import FeaturesSolution14 from "../../../../src/main/ai-shield-net/features/solutions/solution14";
import FeaturesSolution15 from "../../../../src/main/ai-shield-net/features/solutions/solution15";
import FeaturesSolution16 from "../../../../src/main/ai-shield-net/features/solutions/solution16";
import FeaturesSolution17 from "../../../../src/main/ai-shield-net/features/solutions/solution17";
import FeaturesSolution2 from "../../../../src/main/ai-shield-net/features/solutions/solution2";
import FeaturesSolution3 from "../../../../src/main/ai-shield-net/features/solutions/solution3";
import FeaturesSolution4 from "../../../../src/main/ai-shield-net/features/solutions/solution4";
import FeaturesSolution5 from "../../../../src/main/ai-shield-net/features/solutions/solution5";
import FeaturesSolution6 from "../../../../src/main/ai-shield-net/features/solutions/solution6";
import FeaturesSolution7 from "../../../../src/main/ai-shield-net/features/solutions/solution7";
import FeaturesSolution8 from "../../../../src/main/ai-shield-net/features/solutions/solution8";
import FeaturesSolution9 from "../../../../src/main/ai-shield-net/features/solutions/solution9";
import FeaturesTitle from "../../../../src/main/ai-shield-net/features/title";
import Navbar from "../../../../src/main/ai-shield-net/navbar";
import WhyUsTopFooter from "../../../../src/main/ai-shield-net/why-us/top-footer";
import Footer from "../../../../src/main/home/footer";

const AIShieldNetFeaturesPage = () => {
  return (
    <div className="font-Poppins bg-white">
      <Head>
        <title>
          Features &#8211; Explore Power AI Endpoint Protection &#8211; AI
          ShieldNet
        </title>
        <link rel="icon" href="/images/favicon.png" />
      </Head>

      <header className="w-full h-[300px] md:h-[400px] bg-gradient">
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

      <script src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"></script>
    </div>
  );
};

export default AIShieldNetFeaturesPage;

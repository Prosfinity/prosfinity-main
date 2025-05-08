/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import Image from "next/image";
import Footer from "../../../../main/home/footer";
import AboutSectionSeven from "../../../../main/sraa/about/about-section-seven";
import Breadcrumb from "../../../../main/sraa/breadcrumb";
import Navbar from "../../../../main/sraa/navbar";
import SRAAPricing from "../../../../main/sraa/pricing";

const SRAAWhatIsPage = () => {
  return (
    <div className="font-Poppins bg-white">
      <Head>
        <title>What is SRAA | Security Risk Assessment And Audit</title>
        <link rel="icon" href="/images/favicon.png" />
      </Head>

      <header className="w-full bg-gradient">
        <Navbar />
      </header>

      <article className="mt-16 container mx-auto">
        <Breadcrumb
          pageName="Price"
          description="We offer practical security services, transparent pricing, and expert to protect your business."
        />
        <SRAAPricing />
      </article>

      <footer className="mt-16">
        <Footer />
      </footer>
    </div>
  );
};

export default SRAAWhatIsPage;

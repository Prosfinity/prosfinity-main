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
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Prosfinity &#8211; Security Risk Assessment And Audit"
        />
        <meta
          property="og:description"
          content="Prosfinity is a cybersecurity company that provides Security Risk Assessment And Audit services to businesses."
        />
        <meta
          property="og:image"
          content="https://prosfinity.com/images/background/2.svg"
        />
        <meta property="og:url" content="https://prosfinity.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Prosfinity" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Prosfinity &#8211; Security Risk Assessment And Audit"
        />
        <meta
          name="twitter:description"
          content="Prosfinity is a cybersecurity company that provides Security Risk Assessment And Audit services to businesses."
        />
        <meta
          name="twitter:image"
          content="https://prosfinity.com/images/background/2.svg"
        />
        <meta name="twitter:site" content="@prosfinity" />
      </Head>

      <header className="w-full bg-gradient">
        <Navbar />
      </header>

      <article className="mt-16 container mx-auto px-5 md:px-0">
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

/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import Footer from "../main/home/footer";
import Navbar from "../main/home/navbar";
import ProductSplit from "../main/home/product-split";
import HomeValue from "../main/home/home-value";

const HomePage = () => {
  return (
    <div className="font-Poppins">
      <Head>
        <title>Prosfinity &#8211; AI Driven Cybersecurity Partner</title>
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

      <header>
        <Navbar />
      </header>
      <ProductSplit />
      <HomeValue />

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomePage;

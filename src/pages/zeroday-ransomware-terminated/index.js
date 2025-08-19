/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import Footer from "../../main/home/footer";
import Navbar from "../../main/home/navbar";
import Banner from "../../main/zeroday-ransomware-terminated/banner";
import Section1 from "../../main/zeroday-ransomware-terminated/section1";
import Section2 from "../../main/zeroday-ransomware-terminated/section2";
import Section3 from "../../main/zeroday-ransomware-terminated/section3";
import Section4 from "../../main/zeroday-ransomware-terminated/section4";

const ZerodayRansomwareTerminatedPage = () => {
  return (
    <div className="font-Poppins bg-white">
      <Head>
        <title>Prosfinity | Zeroday Ransomware Terminated</title>
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Prosfinity &#8211; Zeroday Ransomware Terminated"
        />
        <meta
          property="og:description"
          content="Prosfinity is a cybersecurity company that provides Zeroday Ransomware Terminated services to businesses."
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
          content="Prosfinity &#8211; Zeroday Ransomware Terminated"
        />
        <meta
          name="twitter:description"
          content="Prosfinity is a cybersecurity company that provides Zeroday Ransomware Terminated services to businesses."
        />
        <meta
          name="twitter:image"
          content="https://prosfinity.com/images/logo-light.png"
        />
        <meta name="twitter:site" content="@prosfinity" />
      </Head>

      <header className="w-full bg-gradient">
        <Navbar />
        <Banner />
      </header>

      <article>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </article>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default ZerodayRansomwareTerminatedPage;

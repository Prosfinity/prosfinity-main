/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import Footer from "../../../main/home/footer";
import AboutSectionOne from "../../../main/sraa/about/about-section-one";
import AboutSectionTwo from "../../../main/sraa/about/about-section-two";
import Brands from "../../../main/sraa/brands";
import Contact from "../../../main/sraa/contact";
import Features from "../../../main/sraa/features";
import Hero from "../../../main/sraa/hero";
import Navbar from "../../../main/sraa/navbar";
import Video from "../../../main/sraa/video";

const SRAAPage = () => {
  return (
    <div className="font-Poppins bg-white">
      <Head>
        <title>Prosfinity | Security Risk Assessment And Audit</title>
        <link rel="icon" href="/images/favicon.png" />

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

      <article className="mt-16">
        <div>
          <div
            style={{
              backgroundSize: "contain",
              backgroundAttachment: "fixed",
              backgroundImage: "url(/images/background/1.svg)",
              height: "100vh",
            }}
            className="w-full bg-center bg-no-repeat hidden "
          />
          <div
            style={{
              backgroundSize: "contain",
              backgroundAttachment: "fixed",
              backgroundImage: "url(/images/background/2.svg)",
              height: "100vh",
            }}
            className="w-full bg-center bg-no-repeat block "
          />
        </div>
        <Hero />
        <Features />
        <Video />
        <Brands />
        <AboutSectionTwo />
        <AboutSectionOne />
      </article>

      <footer>
        <Contact />
        <Footer />
      </footer>
    </div>
  );
};

export default SRAAPage;

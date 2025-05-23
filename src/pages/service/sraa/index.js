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
import Image from "next/image";

const SRAAPage = () => {
  return (
    <div className="font-Poppins bg-white">
      <Head>
        <title>Prosfinity | Security Risk Assessment And Audit</title>
        <link rel="icon" href="/images/favicon.png" />
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

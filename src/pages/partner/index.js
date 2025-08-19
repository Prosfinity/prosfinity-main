/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Footer from "../../main/home/footer";
import Navbar from "../../main/home/navbar";
import Banner from "../../main/partner/banner";
import Particles from "../../main/partner/particles";
import Section1 from "../../main/partner/section1";
import Section2 from "../../main/partner/section2";
import Section3 from "../../main/partner/section3";
import Section4 from "../../main/partner/section4";

const PartnerPage = () => {
  const [contact, setContact] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("contact") === "true") {
      setContact(true);
    }
  }, []);

  return (
    <div className="font-Poppins bg-white">
      <Head>
        <title>Partner | AIShieldNet &#8211; Partner with Prosfinity</title>
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Prosfinity &#8211; Partner with Prosfinity"
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
          content="Prosfinity &#8211; Partner with Prosfinity"
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

      <header className="z-10 w-full bg-gradient">
        <Navbar />
        <Banner setContact={setContact} />
      </header>

      <article className="z-10">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 contact={contact} />
      </article>

      <div className="z-0fixed top-0 left-0 w-full h-full">
        <Particles />
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default PartnerPage;

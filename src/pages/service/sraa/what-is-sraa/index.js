/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import Image from "next/image";
import Footer from "../../../../main/home/footer";
import AboutSectionSeven from "../../../../main/sraa/about/about-section-seven";
import Breadcrumb from "../../../../main/sraa/breadcrumb";
import Navbar from "../../../../main/sraa/navbar";

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
          pageName="What is SRAA"
          description="Protect your business with our expert Security Risk Assessment and Audit Services! Identify vulnerabilities, mitigate risks, and strengthen your defenses with our comprehensive solutions. Plus, as a special bonus, receive FREE Zero-Day Endpoint Protection and Response to safeguard your systems against the latest threats. Stay secure, stay ahead—partner with us today!"
        />
        <AboutSectionSeven />
      </article>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default SRAAWhatIsPage;

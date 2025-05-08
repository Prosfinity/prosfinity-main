/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import Image from "next/image";
import Footer from "../../../../main/home/footer";
import Breadcrumb from "../../../../main/sraa/breadcrumb";
import Contact from "../../../../main/sraa/contact";
import Navbar from "../../../../main/sraa/navbar";

const SRAAContactPage = () => {
  return (
    <div className="font-Poppins bg-white">
      <Head>
        <title>Contact Us | Security Risk Assessment And Audit</title>
        <link rel="icon" href="/images/favicon.png" />
      </Head>

      <header className="w-full bg-gradient">
        <Navbar />
      </header>

      <article className="mt-16 container mx-auto">
        <Breadcrumb
          pageName="Contact"
          description="Have questions or need assistance? We're here to help! Reach out to us through any of the following channels."
        />
        <Contact />
      </article>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default SRAAContactPage;

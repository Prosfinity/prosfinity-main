/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import Banner from "../main/home/banner";
import Benefit from "../main/home/benefit";
import Company from "../main/home/company";
import Footer from "../main/home/footer";
import Navbar from "../main/home/navbar";
import Transaction from "../main/home/transaction";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="font-Poppins">
      <Head>
        <title>Prosfinity &#8211; AI Driven Cybersecurity Partner</title>
        <link rel="icon" href="/images/favicon.png" />
      </Head>

      <header className="w-full h-[700px] md:h-[1000px] xl:h-[1200px] bg-gradient">
        <Navbar />
        <Banner />
      </header>

      <article>
        <Company />
        <Benefit />
        <Transaction />
      </article>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomePage;

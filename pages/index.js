import Head from "next/head";
import Banner from "../src/main/home/banner";
import Benefit from "../src/main/home/benefit";
import Company from "../src/main/home/company";
import Footer from "../src/main/home/footer";
import Navbar from "../src/main/home/navbar";
import Transaction from "../src/main/home/transaction";

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

      <script src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"></script>
    </div>
  );
};

export default HomePage;

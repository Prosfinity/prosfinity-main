import Head from 'next/head'
import Banner from '../components/banner'
import Benefit from '../components/benefit'
import Company from '../components/company'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Newsletter from '../components/newsletter'
import Transaction from '../components/transaction'

export default function Home() {
  return (
    <div className="font-Poppins">
      <Head>
        <title>Prosfinity – AI Driven Cybersecurity Partner</title>
        <link rel="icon" href="/favicon-new.png" />
      </Head>

      <header className='w-full h-[700px] md:h-[1100px] xl:h-header bg-gradient'>
        <Navbar />
        <Banner />
      </header>

      <article>
        <Company />
        <Benefit />
        <Transaction />
        {/* <Pricing /> */}
        {/* <Review /> */}
        {/* <Newsletter /> */}
      </article>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

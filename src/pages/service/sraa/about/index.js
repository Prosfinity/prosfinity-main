/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import Image from "next/image";
import Footer from "../../../../main/home/footer";
import AboutSectionFive from "../../../../main/sraa/about/about-section-five";
import AboutSectionFour from "../../../../main/sraa/about/about-section-four";
import AboutSectionSix from "../../../../main/sraa/about/about-section-six";
import AboutSectionThree from "../../../../main/sraa/about/about-section-three";
import Breadcrumb from "../../../../main/sraa/breadcrumb";
import Navbar from "../../../../main/sraa/navbar";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const SRAAAboutPage = () => {
  const List = ({ text }) => (
    <p className="mb-4 flex items-center text-base font-medium text-body-color">
      <span>
        <span className="mr-4 flex h-[25px] w-[25px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          {checkIcon}
        </span>
      </span>
      {text}
    </p>
  );

  return (
    <div className="font-Poppins bg-white">
      <Head>
        <title>About Us | Security Risk Assessment And Audit</title>
        <link rel="icon" href="/favicon.ico" />

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
          content="https://prosfinity.com/images/background.png"
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
          content="https://prosfinity.com/images/background.png"
        />
        <meta name="twitter:site" content="@prosfinity" />
      </Head>

      <header className="w-full bg-gradient">
        <Navbar />
      </header>

      <article className="container mx-auto px-5 md:px-0">
        <Breadcrumb
          pageName="About Us"
          description="Prosfinity is a leading cybersecurity company dedicated to safeguarding organizations against evolving digital threats. With our comprehensive suite of security services and cutting-edge AI-powered products, we empower businesses to protect their assets, data, and reputation in an increasingly complex cyber landscape."
        />
        <div className="container">
          <List
            text={
              <span>
                Wechat:{" "}
                <a
                  href="weixin://"
                  target="_blank"
                  className="hover:text-primary text-body-color"
                >
                  +852 9831 9379
                </a>
              </span>
            }
          />
          <List
            text={
              <span>
                Whatsapp:{" "}
                <a
                  href="https://wa.me/85298319379"
                  target="_blank"
                  className="hover:text-primary text-body-color"
                >
                  +852 9831 9379
                </a>
              </span>
            }
          />
        </div>
        <AboutSectionThree />
        <AboutSectionFour />
        <AboutSectionFive />
        <AboutSectionSix />
      </article>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default SRAAAboutPage;

/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import Footer from "../main/home/footer";
import Navbar from "../main/home/navbar";

const HomePage = () => {
  return (
    <div className="font-Poppins bg-white">
      <Head>
        <title>Privacy Policy &#8211; AI Driven Cybersecurity Partner</title>
        <link rel="icon" href="/images/favicon.png" />
      </Head>

      <header>
        <Navbar />
      </header>

      <article>
        <div className="w-full xl:w-container px-8 lg:px-20 xl:px-0 mx-auto mt-16 xl:mt-16">
          <div className="w-full">
            <h1 className="text-2xl md:text-3xl font-semibold leading-normal md:leading-relaxed pt-10">
              Privacy Policy
            </h1>
            <p className="text-sm md:text-base font-semibold leading-normal md:leading-relaxed pt-10">
              Date: 2025-May
            </p>
            <p className="mt-5 text-sm md:text-base font-light leading-5">
              At Prosfinity, we are committed to protecting the privacy and
              security of our users. This Privacy Policy explains how we
              collect, use, disclose, and safeguard personal data when you use
              our Endpoint Detection and Response (EDR) and Virtual Private
              Network (VPN) services. By accessing or using our services, you
              agree to the practices described in this policy.
            </p>
            <h3 className="text-base md:text-lg font-semibold leading-normal md:leading-relaxed pt-10">
              Information Collection
            </h3>
            <p className="mt-5 text-sm md:text-base font-light leading-5">
              When you use Prosfinity’s EDR service, we collect specific
              device-level and behavioral data necessary for detecting threats
              and ensuring endpoint security. This includes metadata such as
              operating system version, device type, and technical
              configurations. Additionally, the EDR agent may collect telemetry
              data related to process behavior, file access patterns, registry
              changes, and other indicators relevant to potential security
              incidents. For example, if a suspicious file attempts to execute
              on your system, our service may log its hash, origin, and behavior
              for threat analysis.
            </p>
            <p className="mt-5 text-sm md:text-base font-light leading-5">
              With our VPN service, we strive to offer the highest level of
              anonymity. We do not monitor or store your browsing activity, DNS
              queries, or the content of your network traffic. However, to
              maintain the stability and security of our infrastructure, we may
              collect minimal connection metadata such as connection timestamps,
              bandwidth consumption, and the originating IP address at the
              moment of login. For example, if a user connects to the VPN server
              from New York at 3:00 PM, we may store this timestamp for a
              limited period to detect abuse or troubleshoot performance issues.
              All such data is stored temporarily and deleted routinely.
            </p>
            <h3 className="text-base md:text-lg font-semibold leading-normal md:leading-relaxed pt-10">
              Use of Information
            </h3>
            <p className="mt-5 text-sm md:text-base font-light leading-5">
              Prosfinity uses the collected data to deliver core security
              functions, improve the effectiveness of threat detection, and
              maintain network performance. In the case of EDR, the data allows
              us to correlate behavioral patterns, respond to threats in real
              time, and update detection logic. For VPN users, aggregate usage
              patterns help us allocate server resources and optimize speeds
              across regions. We may also use your email address and billing
              information to manage your account, process payments, and provide
              customer support.
            </p>
            <h3 className="text-base md:text-lg font-semibold leading-normal md:leading-relaxed pt-10">
              Legal Grounds for Processing
            </h3>
            <p className="mt-5 text-sm md:text-base font-light leading-5">
              Depending on your jurisdiction, we process personal data based on
              one or more of the following grounds: your explicit consent, the
              necessity to perform a contract (such as when providing our
              services), our legitimate interests in improving security and
              preventing fraud, and compliance with legal obligations. For
              instance, if we detect unusual login attempts, we may process
              related IP address information to ensure account integrity under
              our legitimate interest in cybersecurity.
            </p>
            <h3 className="text-base md:text-lg font-semibold leading-normal md:leading-relaxed pt-10">
              Data Sharing
            </h3>
            <p className="mt-5 text-sm md:text-base font-light leading-5">
              We do not sell, rent, or trade your personal data. In certain
              cases, we may share limited information with third-party service
              providers who support our operations, such as cloud infrastructure
              partners, billing processors, or analytics services. All such
              providers are contractually bound to maintain the confidentiality
              and security of your data. Additionally, we may disclose
              information if required to comply with a lawful request from
              authorities, such as a subpoena or court order.
            </p>
            <h3 className="text-base md:text-lg font-semibold leading-normal md:leading-relaxed pt-10">
              Data Retention
            </h3>
            <p className="mt-5 text-sm md:text-base font-light leading-5">
              Prosfinity retains EDR logs for a default period of 90 days,
              unless otherwise specified by enterprise clients. These logs are
              stored securely and automatically purged after expiration. VPN
              metadata, where collected, is retained for no longer than 30 days
              and is encrypted at rest. After this period, all temporary records
              are securely deleted in accordance with our data retention policy.
            </p>
            <h3 className="text-base md:text-lg font-semibold leading-normal md:leading-relaxed pt-10">
              Security Measures
            </h3>
            <p className="mt-5 text-sm md:text-base font-light leading-5">
              We implement industry-standard measures to protect your data
              against unauthorized access, disclosure, or loss. Our VPN service
              uses strong encryption protocols (such as AES-256 and WireGuard),
              while our EDR platform employs secure communication channels and
              stores telemetry in hardened environments. Access to sensitive
              information is strictly limited to authorized personnel, and our
              systems are regularly tested for vulnerabilities.
            </p>
            <h3 className="text-base md:text-lg font-semibold leading-normal md:leading-relaxed pt-10">
              Your Rights
            </h3>
            <p className="mt-5 text-sm md:text-base font-light leading-5">
              Depending on where you reside, you may have certain rights under
              data protection laws, including the right to access, correct,
              delete, or restrict the processing of your personal data. For
              example, if you are an EU resident, you have the right to request
              a copy of the data we hold about you and ask us to delete your
              account data. To exercise your rights, you can contact us using
              the information provided at the end of this policy.
            </p>
            <h3 className="text-base md:text-lg font-semibold leading-normal md:leading-relaxed pt-10">
              Third-Party Services
            </h3>
            <p className="mt-5 text-sm md:text-base font-light leading-5">
              Our services may integrate with or link to external platforms.
              While we take care to work with trusted vendors, their handling of
              your data is governed by their own privacy policies. We encourage
              users to review those documents before interacting with
              third-party services through our platform.
            </p>
            <h3 className="text-base md:text-lg font-semibold leading-normal md:leading-relaxed pt-10">
              Changes to This Policy
            </h3>
            <p className="mt-5 text-sm md:text-base font-light leading-5">
              We may update this Privacy Policy from time to time to reflect
              changes in our practices, technology, or legal requirements. When
              we do, we will revise the "Effective Date" at the top of this page
              and, where appropriate, notify users via email or on our website.
            </p>
            <h3 className="text-base md:text-lg font-semibold leading-normal md:leading-relaxed pt-10">
              Contact Us
            </h3>
            <p className="mt-5 text-sm md:text-base font-light leading-5">
              If you have any questions or concerns about this Privacy Policy or
              your personal data, please contact us at:
            </p>
            <h3 className="text-base md:text-lg font-semibold leading-normal md:leading-relaxed pt-10">
              Prosfinity
            </h3>
            <p className="mt-1 text-sm md:text-base font-light leading-5">
              Email:{" "}
              <a href="mailto:info@prosfinity.com">info@prosfinity.com</a>
            </p>
          </div>
        </div>
      </article>

      <footer className="mt-16 xl:mt-28">
        <Footer />
      </footer>
    </div>
  );
};

export default HomePage;

import Head from "next/head";
import React from "react";
import Navbar from "../../../../src/main/ai-shield-net/navbar";
import Footer from "../../../../src/main/home/footer";

const PrivacyPage = () => {
  return (
    <div className="font-Poppins bg-white">
      <Head>
        <title>
          Privacy Policy | Your Trusted Cybersecurity Partner &#8211; AI
          ShieldNet
        </title>
        <link rel="icon" href="/images/favicon.png" />
      </Head>

      <header>
        <Navbar />
      </header>

      <article>
        <div className="w-full xl:w-container px-8 lg:px-20 xl:px-0 mx-auto mt-16 xl:mt-16 pt-10">
          <div className="w-full">
            <p className="text-2xl md:text-3xl font-semibold leading-normal md:leading-relaxed">
              General Information
            </p>
            <p className="mt-5 text-sm md:text-base font-light leading-3 lg:leading-5">
              License Agreement for AI ShieldNet Zero-Day Endpoint Protection
              and Antivirus IMPORTANT – READ CAREFULLY This License Agreement
              (“Agreement”) is a legal agreement between you (“Customer” or
              “Licensee”) and [Your Company Name] (“Licensor”) governing the use
              of AI ShieldNet Zero-Day Endpoint Protection and Antivirus
              Software (“Software”). By installing, copying, or otherwise using
              the Software, you agree to be bound by the terms of this
              Agreement. If you do not agree to the terms of this Agreement, do
              not install or use the Software.
            </p>
            <p className="mt-5 text-sm md:text-base font-light leading-3 lg:leading-5">
              1. Grant of License Subject to the terms of this Agreement,
              Licensor grants to the Licensee a non-exclusive, non-transferable,
              limited license to install and use the Software solely for
              internal business purposes. This Software includes, but is not
              limited to, protection against viruses, malware, known threats,
              unknown threats, and zero-day attacks.
            </p>
            <p className="mt-5 text-sm md:text-base font-light leading-3 lg:leading-5">
              2. License Restrictions Licensee shall not: Copy, modify, or
              create derivative works of the Software. Reverse engineer,
              decompile, or disassemble the Software. Rent, lease, sell,
              sublicense, or transfer the Software to any third party. Use the
              Software to provide services to third parties without express
              permission from Licensor.
            </p>
            <p className="mt-5 text-sm md:text-base font-light leading-3 lg:leading-5">
              3. Installation and Authentication To install the Software, the
              Licensee must provide a valid company username and password,
              ensuring that the installation is authorized for use within the
              Licensee’s organization. This authentication step is mandatory and
              ensures compliance with security protocols and proper license
              registration.
            </p>
            <p className="mt-5 text-sm md:text-base font-light leading-3 lg:leading-5">
              4. Term and Termination This Agreement is effective upon the
              installation of the Software and shall continue unless terminated
              by either party. Licensor may terminate this Agreement if the
              Licensee fails to comply with any term of this Agreement. Upon
              termination, the Licensee must cease all use of the Software and
              uninstall it from all devices.
            </p>
            <p className="mt-5 text-sm md:text-base font-light leading-3 lg:leading-5">
              5. Updates and Support Licensor may provide updates to the
              Software from time to time, including virus definitions, security
              patches, and feature enhancements. Such updates are provided in
              accordance with Licensor’s update policies and are subject to the
              terms of this Agreement.
            </p>
            <p className="mt-5 text-sm md:text-base font-light leading-3 lg:leading-5">
              6. Limited Warranty Licensor warrants that the Software will
              perform substantially in accordance with its documentation for a
              period of contract days from the date of installation. If the
              Software does not meet this warranty, Licensee’s exclusive remedy
              will be, at Licensor’s discretion, either repair or replacement of
              the Software or a refund of the license fee.
            </p>
            <p className="mt-5 text-sm md:text-base font-light leading-3 lg:leading-5">
              7. Disclaimer of Warranties EXCEPT AS EXPRESSLY PROVIDED IN THIS
              AGREEMENT, THE SOFTWARE IS PROVIDED “AS IS” WITHOUT WARRANTY OF
              ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
              IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
              PURPOSE, OR NON-INFRINGEMENT.
            </p>
            <p className="mt-5 text-sm md:text-base font-light leading-3 lg:leading-5">
              8. Limitation of Liability To the maximum extent permitted by law,
              in no event shall Licensor be liable for any special, incidental,
              indirect, or consequential damages whatsoever (including, but not
              limited to, damages for loss of profits, business interruption,
              loss of information, or any other pecuniary loss) arising out of
              the use or inability to use the Software, even if Licensor has
              been advised of the possibility of such damages.
            </p>
            <p className="mt-5 text-sm md:text-base font-light leading-3 lg:leading-5">
              9. Data Privacy Licensee acknowledges that the Software may
              collect and process certain data in connection with its
              functionality, including virus and malware information. Licensee
              agrees to Licensor’s collection, processing, and storage of such
              data in accordance with applicable data privacy laws and
              Licensor’s privacy policy.
            </p>
            <p className="mt-5 text-sm md:text-base font-light leading-3 lg:leading-5">
              10. Governing Law This Agreement shall be governed by and
              construed in accordance with the laws of [Jurisdiction], without
              regard to its conflict of law principles.
            </p>
            <p className="mt-5 text-sm md:text-base font-light leading-3 lg:leading-5">
              11. Entire Agreement This Agreement constitutes the entire
              agreement between the parties with respect to the use of the
              Software and supersedes all prior or contemporaneous agreements,
              whether written or oral, relating to the subject matter of this
              Agreement. By proceeding with the installation, you acknowledge
              that you have read and agree to the terms of this License
              Agreement.
            </p>
          </div>
        </div>
      </article>

      <footer className="mt-16 xl:mt-28">
        <Footer />
      </footer>

      <script src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"></script>
    </div>
  );
};

export default PrivacyPage;

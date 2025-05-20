import { Html, Head, Main, NextScript } from "next/document";
import { Analytics } from "@vercel/analytics/react";
import Image from "next/image";
import GTM from "../main/GTM";
import GTMNoScript from "../main/GTMNoScript";
import HotJarTracking from "../main/HotJarTracking";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <GTM />
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16987160496"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'AW-16987160496');
            `,
          }}
        />
        {/* Event snippet for SRAA contact conversion page */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              gtag('event', 'conversion', {
                  'send_to': 'AW-16987160496/FPVsCPnUo8YaELD_jaQ_',
                  'value': 1.0,
                  'currency': 'HKD'
              });
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function gtag_report_conversion(url) {
                var callback = function () {
                  if (typeof(url) != 'undefined') {
                    window.location = url;
                  }
                };
                gtag('event', 'conversion', {
                    'send_to': 'AW-16987160496/FPVsCPnUo8YaELD_jaQ_',
                    'value': 1.0,
                    'currency': 'HKD',
                    'event_callback': callback
                });
                return false;
              }
            `,
          }}
        />
        {/* Hotjar Tracking Code for https://prosfinity.com */}
        <HotJarTracking />
      </Head>
      <body>
        <Main />
        <Analytics />
        <NextScript />
        <div className="fixed bottom-8 right-8 z-[99]">
          <a aria-label="Chat on WhatsApp" href="https://wa.me/85298319379">
            <Image
              alt="Chat on WhatsApp"
              src="/images/contact/WhatsAppButtonGreenMedium.svg"
              width={189}
              height={40}
            />
          </a>
        </div>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-QQE488VPHG"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-QQE488VPHG');
            `,
          }}
        />
        <GTMNoScript />
      </body>
    </Html>
  );
}

import { Html, Head, Main, NextScript } from "next/document";
import { Analytics } from "@vercel/analytics/react";
import Image from "next/image";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
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
      </body>
    </Html>
  );
}

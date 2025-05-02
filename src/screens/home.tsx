"use client";

import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Video from "@/components/Video";

export default function HomeScreen() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <ScrollUp />
      <div className="pt-10">
        <div
          style={{
            backgroundSize: "contain",
            backgroundAttachment: "fixed",
            backgroundImage: "url(/images/background/1.svg)",
            height: "100vh",
          }}
          className="w-full bg-center bg-no-repeat hidden dark:block"
        />
        <div
          style={{
            backgroundSize: "contain",
            backgroundAttachment: "fixed",
            backgroundImage: "url(/images/background/2.svg)",
            height: "100vh",
          }}
          className="w-full bg-center bg-no-repeat block dark:hidden"
        />
      </div>
      <Hero onClickContactUs={scrollToContact} />
      <Features />
      <Video />
      <Brands />
      <AboutSectionTwo />
      <AboutSectionOne />
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      {/* <Blog /> */}
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}

/* eslint-disable @next/next/no-img-element */
import { useInViewport } from "ahooks";
import { Button } from "flowbite-react";
import { ArrowRightIcon, HandshakeIcon, UsersIcon } from "lucide-react";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const Section3 = () => {
  const ref = useRef(null);
  const router = useRouter();

  const [loaded, setLoaded] = useState(false);
  const [inViewport] = useInViewport(ref);

  useEffect(() => {
    if (!loaded && inViewport) {
      setLoaded(true);
    }
  }, [inViewport, loaded]);

  return (
    <div ref={ref} className="mx-auto px-5 xl:px-0 py-10">
      <div className="w-full xl:w-8/12 flex flex-wrap lg:flex-nowrap justify-between items-start mx-auto gap-10">
        <div className="w-full">
          <h2
            className={`${
              loaded || inViewport
                ? "animate__animated animate__slideInUp animate__fast"
                : ""
            } text-2xl md:text-3xl font-semibold leading-normal md:leading-relaxed mt-5 text-center`}
          >
            Get Started
          </h2>
          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 mt-5 ${
              loaded || inViewport
                ? "animate__animated animate__slideInUp animate__fast"
                : ""
            }`}
          >
            {/* Contact Our Experts Section */}
            <div className="relative overflow-hidden bg-gradient-to-br from-green-500/30 via-blue-500/10 to-background border-green-500 rounded-xl">
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-green-500/10 rounded-full flex items-center justify-center">
                      <UsersIcon className="w-7 h-7 text-green-500" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-4">
                    <h4 className="font-heading text-xl md:text-2xl font-bold text-foreground">
                      Contact Our Experts
                    </h4>
                    <div className="space-y-3 font-body text-muted-foreground">
                      <p className="flex items-start gap-2">
                        Request the full technical report, demonstration videos,
                        or arrange for a free trial in your environment.
                      </p>
                      <p className="flex items-start gap-2">
                        Discover tailored solutions for your industry and
                        deployment scenario.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end mt-5">
                  <Button
                    size="lg"
                    className="bg-green-500 hover:bg-green-500/90 text-white font-body font-semibold group"
                    onClick={() => router.push("/contact")}
                  >
                    Get in Touch
                    <ArrowRightIcon className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Partner With Us Section */}
            <div className="bg-card border border-black/10 rounded-xl bg-gradient-to-br from-yellow-500/30 via-yellow-500/10 to-background border-green-500">
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-yellow-500/10 rounded-full flex items-center justify-center">
                      <HandshakeIcon className="w-7 h-7 text-yellow-500" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-4">
                    <h4 className="font-heading text-xl md:text-2xl font-bold text-foreground">
                      Partner With Us
                    </h4>
                    <div className="space-y-3 font-body text-muted-foreground">
                      <p className="flex items-start gap-2">
                        Integrate our technology into your managed security
                        stack
                      </p>
                      <p className="flex items-start gap-2">
                        Offer advanced protection to your customers
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end mt-5">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-yellow-500 hover:bg-yellow-500/90 text-white border-yellow-500 font-body font-semibold group"
                    onClick={() => router.push("/partner?contact=true")}
                  >
                    Learn More
                    <ArrowRightIcon className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;

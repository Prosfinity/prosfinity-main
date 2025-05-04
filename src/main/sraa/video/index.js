import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ModalVideo from "react-modal-video";
import { useInViewport } from "ahooks";

const Video = () => {
  const ref = useRef(null);

  const [loaded, setLoaded] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [inViewport] = useInViewport(ref);

  useEffect(() => {
    if (!loaded && inViewport) {
      setLoaded(true);
    }
  }, [inViewport, loaded]);

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28 flex flex-col items-center justify-center">
      <div className="container">
        <div className="text-center">
          <h2
            className={`${
              loaded || inViewport
                ? "animate__animated animate__slideInUp animate__fast"
                : ""
            } text-3xl md:text-4xl font-semibold leading-normal md:leading-relaxed mt-5 text-center`}
          >
            We are ready to help
          </h2>
          <p
            className={`${
              loaded || inViewport
                ? "animate__animated animate__slideInUp animate__fast"
                : ""
            } w-1/2 mt-5 text-lg md:text-xl font-light leading-6 lg:leading-10 text-center mx-auto`}
          >
            Our team is ready to provide expert guidance and assistance every
            step of the way.
          </p>
        </div>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[77/40] items-center justify-center">
                <Image
                  src="/images/video/technology.jpg"
                  alt="video image"
                  fill
                  objectFit="cover"
                />
                <div className="absolute right-0 top-0 flex h-full w-full items-center justify-center">
                  <button
                    aria-label="video play button"
                    onClick={() => setOpen(true)}
                    className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-75 text-primary transition hover:bg-opacity-100"
                  >
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      className="fill-current"
                    >
                      <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalVideo
        channel="youtube"
        autoplay={true}
        start={true}
        isOpen={isOpen}
        videoId="Mj1KU_hkuFI"
        onClose={() => setOpen(false)}
      />
    </section>
  );
};

export default Video;

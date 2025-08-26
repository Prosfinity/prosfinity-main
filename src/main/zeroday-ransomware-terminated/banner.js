import { useInViewport } from "ahooks";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ModalVideo from "react-modal-video";

const Banner = () => {
  const ref = useRef(null);

  const [isOpen, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [inViewport] = useInViewport(ref);

  useEffect(() => {
    if (!loaded && inViewport) {
      setLoaded(true);
    }
  }, [inViewport, loaded]);

  return (
    <div
      ref={ref}
      className="w-full flex flex-col xl:flex-row xl:w-container px-8 lg:px-20 xl:px-0 mx-auto text-white py-20 space-y-10 md:space-y-0 gap-10"
    >
      <div className="w-full md:w-5/6 mx-auto">
        <h2
          className={`${
            loaded || inViewport
              ? "animate__animated animate__slideInUp animate__fast"
              : ""
          } text-2xl md:text-4xl font-bold leading-tight`}
        >
          Zero-Day Ransomware Terminator - Stopping It Before It Even Starts
        </h2>
        <h4
          className={`${
            loaded || inViewport
              ? "animate__animated animate__slideInUp animate__fast"
              : ""
          } text-base md:text-xl mt-4`}
        >
          Proven in real-world environments: 100 zero-day ransomware samples and
          variants completely eliminated - 100% prevention before execution.
        </h4>
      </div>
      <div className="w-full md:w-5/6 mx-auto">
        <div className="w-full px-4">
          <div
            className="mx-auto max-w-[770px] overflow-hidden rounded-md"
            data-wow-delay=".15s"
          >
            <div className="relative aspect-[77/40] items-center justify-center">
              <Image
                src="/images/video/maxresdefault.jpg?v=1"
                alt="video image"
                fill
                objectFit="cover"
              />
              <div className="absolute right-0 top-0 flex h-full w-full items-center justify-center">
                <button
                  aria-label="video play button"
                  onClick={() => setOpen(true)}
                  className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white text-black bg-opacity-75 text-primary transition hover:bg-neutral-200 hover:text-neutral-800"
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
        <ModalVideo
          channel="youtube"
          autoplay={true}
          start={true}
          isOpen={isOpen}
          videoId="ZeScAYRHBPE"
          onClose={() => setOpen(false)}
        />
      </div>
    </div>
  );
};

export default Banner;

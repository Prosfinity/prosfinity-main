/* eslint-disable @next/next/no-img-element */
import { useInViewport } from "ahooks";
import { TriangleAlertIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Facts = () => {
  const ref = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [inViewport] = useInViewport(ref);

  useEffect(() => {
    if (!loaded && inViewport) {
      setLoaded(true);
    }
  }, [inViewport, loaded]);

  return (
    <div ref={ref}>
      <div
        className={`${
          loaded || inViewport
            ? "animate__animated animate__slideInUp animate__fast"
            : ""
        } mt-64 sm:mt-72 md:mt-52 lg:mt-72 xl:mt-52 px-8 md:px-24 xl:px-0 w-full xl:w-container mx-auto text-white`}
      >
        <div className="mx-auto flex justify-center">
          <div className="text-center md:text-2xl inline-flex items-center px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-8">
            <TriangleAlertIcon className="mr-5" />
            Think Your Systems Are Safe? These 10 Facts Will Change Your Mind.
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          <div className="rounded-lg p-4 flex gap-2 transition-all duration-300 cursor-pointer hover:bg-white/10 border-2 border-white/10">
            <span className="mt-1">❌</span>
            <p className="text-lg">
              Traditional antivirus can’t detect zero-day ransomware, fileless
              malware, or insider threats.
            </p>
          </div>
          <div className="rounded-lg p-4 flex gap-2 transition-all duration-300 cursor-pointer hover:bg-white/10 border-2 border-white/10">
            <span className="mt-1">🤯</span>
            <p className="text-lg">
              AIShieldNet is the <b>first-ever solution</b> using a Large
              Language Model (LLM) to analyze every single Windows process in
              real time.
            </p>
          </div>
          <div className="rounded-lg p-4 flex gap-2 transition-all duration-300 cursor-pointer hover:bg-white/10 border-2 border-white/10">
            <span className="mt-1">🧠</span>
            <p className="text-lg">
              Our AI doesn’t rely on signatures - it <b>understands behavior</b>{" "}
              like a real cybersecurity expert.
            </p>
          </div>
          <div className="rounded-lg p-4 flex gap-2 transition-all duration-300 cursor-pointer hover:bg-white/10 border-2 border-white/10">
            <span className="mt-1">💥</span>
            <p className="text-lg">
              Word launches PowerShell? LLM instantly flags it as a malicious
              macro attack – and <b>stops it in seconds</b>.
            </p>
          </div>
          <div className="rounded-lg p-4 flex gap-2 transition-all duration-300 cursor-pointer hover:bg-white/10 border-2 border-white/10">
            <span className="mt-1">🕵️‍</span>
            <p className="text-lg">
              Suspicious process at 2 AM? AIShieldNet intercepts it{" "}
              <i>before damage even begins</i>.
            </p>
          </div>
          <div className="rounded-lg p-4 flex gap-2 transition-all duration-300 cursor-pointer hover:bg-white/10 border-2 border-white/10">
            <span className="mt-1">♂‍</span>
            <p className="text-lg">
              Never-seen-before attack? AIShieldNet <b>still catches it</b>,
              because it understands what the attacker is <i>trying</i> to do.
            </p>
          </div>
          <div className="rounded-lg p-4 flex gap-2 transition-all duration-300 cursor-pointer hover:bg-white/10 border-2 border-white/10">
            <span className="mt-1">🔄</span>
            <p className="text-lg">
              Always learning – it adapts to your environment and gets smarter
              over time.
            </p>
          </div>
          <div className="rounded-lg p-4 flex gap-2 transition-all duration-300 cursor-pointer hover:bg-white/10 border-2 border-white/10">
            <span className="mt-1">📉</span>
            <p className="text-lg">
              Cuts false positives by up to 80%. No more chasing ghosts.
            </p>
          </div>
          <div className="rounded-lg p-4 flex gap-2 transition-all duration-300 cursor-pointer hover:bg-white/10 border-2 border-white/10">
            <span className="mt-1">⚡</span>
            <p className="text-lg">Time to response? Often under a second.</p>
          </div>
          <div className="rounded-lg p-4 flex gap-2 transition-all duration-300 cursor-pointer hover:bg-white/10 border-2 border-white/10">
            <span className="mt-1">🔐</span>
            <p className="text-lg">
              No waiting for updates. No guesswork.{" "}
              <b>Real-time AI protection that reacts before it’s too late.</b>
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <Link
            href="/files/AIShieldNet LLM-Powered ZDR Technical Review.pdf"
            target="_blank"
          >
            <button className="bg-btnBlue text-white font-medium rounded-lg hover:shadow-xl transition-all text-base px-4 py-2 md:px-8 md:py-4 uppercase">
              🔥 Click to see how our AI caught a real-world attack your
              antivirus would’ve completely missed
            </button>
          </Link>
        </div>
        <div className="mt-10">
          <p className="text-lg">
            🧠 Want to know how this works - and why security teams are
            switching to AIShieldNet?
          </p>
          <p className="text-lg">📄 Download the full technical breakdown</p>
          <p className="text-lg">
            🔒 Try the world's first LLM-powered EDR platform - before your next
            breach finds you first
          </p>
        </div>
      </div>
    </div>
  );
};

export default Facts;

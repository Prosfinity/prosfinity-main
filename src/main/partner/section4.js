/* eslint-disable @next/next/no-img-element */
import { useInViewport } from "ahooks";
import { LockIcon, SparkleIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Section4 = ({ contact }) => {
  const ref = useRef(null);

  const contactRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [inViewport] = useInViewport(ref);

  useEffect(() => {
    if (!loaded && inViewport) {
      setLoaded(true);
    }
  }, [inViewport, loaded]);

  useEffect(() => {
    if (contact && contactRef.current) {
      const y =
        contactRef.current.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, [contact]);

  return (
    <div ref={ref} className="mx-auto px-5 xl:px-0 py-10">
      <div className="w-full xl:w-8/12 flex flex-wrap lg:flex-nowrap justify-between items-start mx-auto gap-10">
        <div>
          <h2
            className={`${
              loaded || inViewport
                ? "animate__animated animate__slideInUp animate__fast"
                : ""
            } text-2xl md:text-3xl font-semibold leading-normal md:leading-relaxed mt-5 text-center text-nowrap`}
          >
            What Do Your Company Gain from This Partnership Model?
          </h2>
          <ul
            className={`${
              loaded || inViewport
                ? "animate__animated animate__slideInUp animate__fast"
                : ""
            } flex flex-col gap-2 ml-5 text-lg mt-5`}
          >
            <li className="flex gap-2">
              <span className="mt-1">
                <SparkleIcon className="size-4" />
              </span>
              <span className="text-justify">
                <b>Attractive Commission from the Very First Deal</b>: Earn
                high-margin commissions as soon as the client signs the contract
                - no need to wait for implementation to finish.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1">
                <SparkleIcon className="size-4" />
              </span>
              <span className="text-justify">
                <b>Stable, Recurring Revenue</b>: With ongoing services like
                regular security assessments, 24/7 system monitoring, and
                quarterly audits, you build a sustainable stream of recurring
                income.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1">
                <SparkleIcon className="size-4" />
              </span>
              <span className="text-justify">
                <b>Stronger Client Retention</b>: By offering high-value
                services, you create stickiness - making it harder for clients
                to leave. This opens up opportunities to upsell other solutions
                (even beyond cybersecurity).
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1">
                <SparkleIcon className="size-4" />
              </span>
              <span className="text-justify">
                <b>Zero Operational Costs</b>: No need to invest in technical
                staff, backend systems, or post-sale support. We handle
                everything.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1">
                <SparkleIcon className="size-4" />
              </span>
              <span className="text-justify">
                <b>Ready-to-Use Sales & Support Materials</b>: You'll receive a
                complete sales toolkit - pitch decks, demos, pricing sheets,
                technical documents - all ready for you to start connecting and
                consulting.
              </span>
            </li>
          </ul>
          <h3
            ref={contactRef}
            className={`${
              loaded || inViewport
                ? "animate__animated animate__slideInUp animate__fast"
                : ""
            } text-xl md:text-2xl font-semibold leading-normal md:leading-relaxed text-center mt-10`}
          >
            Let Us Send You the Full Partnership Pack
            <br />
            Just Fill Out the Short Form Below
          </h3>
          <p className="text-lg mt-5 w-full md:w-4/6 mx-auto">
            Within 1 minute, you’ll have a fully packaged cybersecurity offering
            ready to sell - with a clear, transparent revenue-sharing model.
          </p>
          <form
            action="https://formspree.io/f/mnnpnbrk"
            method="POST"
            className="max-w-lg mx-auto shadow rounded-lg p-5 hover:shadow-lg transition-all duration-300 mt-10"
          >
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block mb-2 text-base font-medium "
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="phone"
                className="block mb-2 text-base font-medium "
              >
                Phone Number/Whatsapp Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-base font-medium "
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="additionalNotes"
                className="block mb-2 text-base font-medium "
              >
                Additional Notes
              </label>
              <textarea
                id="additionalNotes"
                name="additionalNotes"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Write here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-white bg-yellow-500 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Become a Partner
            </button>
          </form>
          <div className="flex justify-center mt-10">
            <Link href="/product/AIShieldNet">
              <button className="bg-red-500 text-white font-medium rounded-lg hover:shadow-xl transition-all text-base px-4 py-2 md:px-8 md:py-4 uppercase flex items-center gap-2">
                <LockIcon className="size-4" /> Unlock AI-Powered Security Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;

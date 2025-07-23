/* eslint-disable @next/next/no-img-element */
import { useInViewport } from "ahooks";
import { CheckIcon, Globe2Icon, RocketIcon, ShieldIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Blog = () => {
  const ref = useRef(null);

  const [loaded, setLoaded] = useState(false);
  const [inViewport] = useInViewport(ref);

  useEffect(() => {
    if (!loaded && inViewport) {
      setLoaded(true);
    }
  }, [inViewport, loaded]);

  return (
    <div ref={ref} className="mx-auto px-5 xl:px-0 py-10">
      <div className="w-full xl:w-7/12 flex flex-wrap lg:flex-nowrap justify-between items-start mx-auto gap-10">
        <div>
          <h2
            className={`${
              loaded || inViewport
                ? "animate__animated animate__slideInUp animate__fast"
                : ""
            } text-3xl md:text-4xl font-semibold leading-normal md:leading-relaxed mt-5`}
          >
            Protect Your Business Before It's Too Late: Why SMEs Need Security
            Risk Assessment & Audit (SRAA)
          </h2>
          <p
            className={`${
              loaded || inViewport
                ? "animate__animated animate__slideInUp animate__fast"
                : ""
            } mt-5 text-lg md:text-xl font-light leading-6 lg:leading-10`}
          >
            Cybersecurity threats are evolving faster than ever - and they're no
            longer just targeting big corporations. In fact, small and
            medium-sized enterprises (SMEs) are now the top targets for
            cybercriminals due to weaker defenses and limited resources. If your
            business is not regularly evaluating its security posture, you're
            operating with unseen risks every day. That's where{" "}
            <Link href="/service/sraa" className="text-sky-700 hover:underline">
              Security Risk Assessment and Audit (SRAA)
            </Link>{" "}
            comes in. This is more than a technical check - it's your business
            resilience plan.
          </p>
          <h3
            className={`${
              loaded || inViewport
                ? "animate__animated animate__slideInUp animate__fast"
                : ""
            } text-2xl md:text-3xl font-semibold leading-normal md:leading-relaxed mt-5`}
          >
            1. The Rising Cybersecurity Threat for SMEs in Asia
          </h3>
          <p
            className={`${
              loaded || inViewport
                ? "animate__animated animate__slideInUp animate__fast"
                : ""
            } mt-5 text-lg md:text-xl font-light leading-6 lg:leading-10`}
          >
            Across Asia, SMEs are facing unprecedented cyber threats.
          </p>
          <ul className="text-base xl:text-lg font-light leading-6 lg:leading-10 ml-5">
            <li className="flex items-center gap-2">
              <CheckIcon />A 2023 Chubb report shows that 63% of Asian SMEs
              experienced at least one cyber incident in the past year.
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon />
              In Hong Kong, over 60% of SMEs have no structured risk assessment
              or audit process, according to PwC.
            </li>
          </ul>
          <p
            className={`${
              loaded || inViewport
                ? "animate__animated animate__slideInUp animate__fast"
                : ""
            } mt-5 text-lg md:text-xl font-light leading-6 lg:leading-10`}
          >
            This lack of preparedness leads to:
          </p>
          <ul className="text-base xl:text-lg font-light leading-6 lg:leading-10 ml-5">
            <li className="flex items-center gap-2">
              <CheckIcon />
              Costly data breaches
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon />
              Legal compliance issues
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon />
              Damaged customer trust
            </li>
          </ul>
          <p
            className={`${
              loaded || inViewport
                ? "animate__animated animate__slideInUp animate__fast"
                : ""
            } mt-5 text-lg md:text-xl font-light leading-6 lg:leading-10`}
          >
            The consequences are not just technical, they're existential.
          </p>
          <Image
            src="/images/global_avg_cyber_attacks.png"
            alt="global avg cyber attacks"
            width={1000}
            height={1000}
            className="w-full mt-5"
          />
          <h3
            className={`${
              loaded || inViewport
                ? "animate__animated animate__slideInUp animate__fast"
                : ""
            } text-2xl md:text-3xl font-semibold leading-normal md:leading-relaxed mt-5`}
          >
            2. What Is SRAA - Security Risk Assessment and Audit?
          </h3>
          <p
            className={`${
              loaded || inViewport
                ? "animate__animated animate__slideInUp animate__fast"
                : ""
            } mt-5 text-lg md:text-xl font-light leading-6 lg:leading-10`}
          >
            SRAA is a comprehensive cybersecurity evaluation service designed
            for SMEs. It helps businesses:
          </p>
          <ul className="text-base xl:text-lg font-light leading-6 lg:leading-10 ml-5">
            <li className="flex items-center gap-2">
              <CheckIcon />
              Understand their current security risks
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon />
              Identify vulnerabilities
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon />
              Align with international compliance standards
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon />
              Prepare for cyber incidents before they happen
            </li>
          </ul>
          <p
            className={`${
              loaded || inViewport
                ? "animate__animated animate__slideInUp animate__fast"
                : ""
            } mt-5 text-lg md:text-xl font-light leading-6 lg:leading-10`}
          >
            <Link
              href="/service/sraa/what-is-sraa"
              className="text-sky-700 hover:underline"
            >
              Key components of SRAA:{" "}
            </Link>
          </p>
          <ul className="text-base xl:text-lg font-light leading-6 lg:leading-10 ml-5">
            <li className="flex items-center gap-2">
              <CheckIcon />
              Security Risk Assessment: Assess threats to your networks,
              systems, and data.
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon />
              Security Audit: Check your compliance with regulations like GDPR,
              ISO 27001, etc.
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon />
              Penetration Testing: Simulated attacks to test your system
              defenses.
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon />
              Incident Response Readiness Review: Assess how prepared your team
              is when an attack happens.
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon />
              Red Team Assessment: Simulate advanced, real-world attacks from an
              outsider's perspective.
            </li>
          </ul>
          <h3
            className={`${
              loaded || inViewport
                ? "animate__animated animate__slideInUp animate__fast"
                : ""
            } text-2xl md:text-3xl font-semibold leading-normal md:leading-relaxed mt-5`}
          >
            3. Why Choose SRAA by Prosfinity?
          </h3>
          <p
            className={`${
              loaded || inViewport
                ? "animate__animated animate__slideInUp animate__fast"
                : ""
            } mt-5 text-lg md:text-xl font-light leading-6 lg:leading-10`}
          >
            At{" "}
            <Link href="/" className="text-sky-700 hover:underline">
              Prosfinity
            </Link>
            , we don't just deliver technical audits, we provide{" "}
            <b className="font-semibold">strategic cybersecurity insight</b>{" "}
            tailored for SMEs.
          </p>
          <Image
            src="/images/sraa_by_prosfinity.png"
            alt="sraa by prosfinity"
            width={1000}
            height={1000}
            className="w-full mt-5"
          />
          <p
            className={`${
              loaded || inViewport
                ? "animate__animated animate__slideInUp animate__fast"
                : ""
            } mt-5 text-lg md:text-xl font-light leading-6 lg:leading-10 flex gap-2`}
          >
            <span className="mt-2">
              <Globe2Icon />
            </span>
            <span>
              <b className="font-semibold">Global Mindset, Asian Context</b>:
              With headquarters in Hong Kong and international experience, our
              experts understand both{" "}
              <b className="font-semibold">
                regional challenges and global compliance requirements
              </b>
              , allowing us to deliver localized, yet globally relevant
              services.
            </span>
          </p>
          <p
            className={`${
              loaded || inViewport
                ? "animate__animated animate__slideInUp animate__fast"
                : ""
            } mt-2 text-lg md:text-xl font-light leading-6 lg:leading-10 flex gap-2`}
          >
            <span className="mt-2">
              <ShieldIcon />
            </span>
            <span>
              <b className="font-semibold">Tailored for Size & Sector</b>:
              Unlike one-size-fits-all solutions, SRAA is adapted to your
              <b className="font-semibold">
                budget, IT maturity, and industry needs
              </b>
              , whether you're a fintech startup or a logistics SME.
            </span>
          </p>
          <p
            className={`${
              loaded || inViewport
                ? "animate__animated animate__slideInUp animate__fast"
                : ""
            } mt-2 text-lg md:text-xl font-light leading-6 lg:leading-10 flex gap-2`}
          >
            <span className="mt-2">
              <RocketIcon />
            </span>
            <span>
              <b className="font-semibold">Action-Oriented Reporting</b>: You
              won't receive a bulky report filled with jargon. Instead, we
              deliver{" "}
              <b className="font-semibold">
                a practical, prioritized action plan
              </b>{" "}
              you can implement right away.
            </span>
          </p>
          <p
            className={`${
              loaded || inViewport
                ? "animate__animated animate__slideInUp animate__fast"
                : ""
            } mt-2 text-lg md:text-xl font-light leading-6 lg:leading-10 flex gap-2`}
          >
            <span className="mt-2">
              <CheckIcon />
            </span>
            <span>
              <b className="font-semibold">All-in-one service</b>: From risk
              assessment to red team simulation, you don't have to coordinate
              multiple vendors.
            </span>
          </p>
          <h3
            className={`${
              loaded || inViewport
                ? "animate__animated animate__slideInUp animate__fast"
                : ""
            } text-2xl md:text-3xl font-semibold leading-normal md:leading-relaxed mt-5`}
          >
            4. Secure Your Advantage
          </h3>
          <p
            className={`${
              loaded || inViewport
                ? "animate__animated animate__slideInUp animate__fast"
                : ""
            } mt-5 text-lg md:text-xl font-light leading-6 lg:leading-10`}
          >
            Cybersecurity is no longer optional - it's a{" "}
            <b className="font-semibold">business enabler</b>. Customers,
            partners, and regulators now expect security maturity, even from
            SMEs. A single vulnerability can ruin years of hard work.
          </p>
          <p
            className={`${
              loaded || inViewport
                ? "animate__animated animate__slideInUp animate__fast"
                : ""
            } mt-5 text-lg md:text-xl font-light leading-6 lg:leading-10`}
          >
            SMEs that take action now will gain:
          </p>
          <ul className="text-base xl:text-lg font-light leading-6 lg:leading-10 ml-5">
            <li className="flex items-center gap-2">
              <CheckIcon />
              Competitive trust in B2B markets
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon />
              Operational resilience
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon />
              Long-term cost savings by preventing breaches
            </li>
          </ul>
          <h3
            className={`${
              loaded || inViewport
                ? "animate__animated animate__slideInUp animate__fast"
                : ""
            } text-2xl md:text-3xl font-semibold leading-normal md:leading-relaxed mt-5`}
          >
            Don't Wait for a Breach - Assess Now, Stay Resilient
          </h3>
          <p
            className={`${
              loaded || inViewport
                ? "animate__animated animate__slideInUp animate__fast"
                : ""
            } mt-5 text-lg md:text-xl font-light leading-6 lg:leading-10`}
          >
            <u>Cybersecurity</u> is not a future problem. It's{" "}
            <b className="font-semibold">a present business priority</b>.
            Investing in a professional{" "}
            <Link href="/service/sraa" className="text-sky-700 hover:underline">
              security risk assessment and audit
            </Link>{" "}
            not only{" "}
            <b className="font-semibold">protects your data and reputation</b>{" "}
            but also gives you a
            <b className="font-semibold">competitive edge</b> when partnering
            with global clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;

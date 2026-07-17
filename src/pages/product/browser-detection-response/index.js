import Head from "next/head";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Bot,
  CheckCircle2,
  Clipboard,
  Download,
  Eye,
  FileUp,
  Globe2,
  ListChecks,
  Monitor,
  PackageCheck,
  RadioTower,
  Search,
  Settings2,
  Shield,
  ShieldAlert,
  UserRoundSearch,
} from "lucide-react";
import Navbar from "../../../main/home/navbar";
import Footer from "../../../main/home/footer";
import BdrNavigation from "../../../main/bdr/navigation";

const capabilities = [
  {
    icon: FileUp,
    title: "Upload Control",
    text: "Detect and control sensitive files moving to web apps, personal cloud storage, and external services.",
  },
  {
    icon: Download,
    title: "Download Control",
    text: "Monitor risky downloads and cancel policy-matched activity before it reaches the endpoint.",
  },
  {
    icon: Clipboard,
    title: "Clipboard Protection",
    text: "Apply monitor, warn, or block policies to sensitive copy and paste actions in the browser.",
  },
  {
    icon: Bot,
    title: "GenAI Governance",
    text: "Protect sensitive data submitted to GenAI tools while keeping approved AI workflows productive.",
  },
  {
    icon: Settings2,
    title: "Central Policy Management",
    text: "Manage browser controls centrally with policy modes designed for gradual, low-friction rollout.",
  },
  {
    icon: Search,
    title: "Detection & Investigation",
    text: "Correlate browser events, policy decisions, and response actions in one investigation timeline.",
  },
];

const protectionCoverage = [
  [Bot, "AI & SaaS data egress", "Sensitive prompts, pasted text, form submissions and file attachments going to external AI or SaaS services.", "Allow approved workflows; warn the user or stop high-confidence data leakage before submission."],
  [Clipboard, "Copy & paste protection", "Sensitive content copied from or pasted into browser pages, with destination and action context.", "Block only the risky copy or paste action instead of disabling the clipboard across the endpoint."],
  [FileUp, "Upload & drag-drop control", "File-input and drag-drop uploads, including local inspection of supported text-like files for sensitive indicators.", "Clear a blocked upload before transfer and record the policy decision for analyst review."],
  [Download, "Download cancellation", "Download URL, filename, MIME type and file-extension context when available.", "Cancel policy-matched downloads and retain a completed response record—not just an alert."],
  [Globe2, "Domain & navigation policy", "Navigation to configured blocked AI, SaaS or other restricted domains.", "Prevent access, redirect the tab to a clear block page and record the navigation response."],
];

const platformCapabilities = [
  [Settings2, "Central policy control", "Enable rules centrally and assign monitor, warn or block mode; extension policy sync applies the same decision at the browser endpoint."],
  [RadioTower, "Reliable event delivery", "The extension queues and retries browser events, exposes runtime health and supports a manual queue flush from its endpoint console."],
  [PackageCheck, "Extension inventory", "Collect browser extension inventory snapshots and review endpoint, user and profile coverage from the management console."],
  [UserRoundSearch, "Analyst investigation", "Search and filter alerts, assign an owner, manage case status and add investigation comments."],
  [ListChecks, "Response Chain", "Connect the original detection, matched policy, browser response event and completed response action in one timeline."],
];

const risks = [
  "Sensitive file uploads",
  "Data pasted into public AI",
  "Uncontrolled downloads",
  "Browser actions without context",
];

function ProductVisual() {
  return (
    <div className="relative mx-auto max-w-2xl">
      <div className="absolute -inset-10 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b1628] shadow-2xl shadow-cyan-950/50">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-white">
            <Monitor className="h-5 w-5 text-cyan-400" /> Prosfinity BDR
          </div>
          <div className="flex gap-1.5">
            <i className="h-2 w-2 rounded-full bg-cyan-400" />
            <i className="h-2 w-2 rounded-full bg-white/20" />
            <i className="h-2 w-2 rounded-full bg-white/20" />
          </div>
        </div>
        <div className="grid gap-4 p-5 sm:grid-cols-3">
          {[
            ["Open alerts", "12"],
            ["Policy hit rate", "94%"],
            ["Protected browsers", "248"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-xl border border-white/10 bg-white/[0.04] p-4"
            >
              <p className="text-xs text-slate-400">{label}</p>
              <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
            </div>
          ))}
        </div>
        <div className="px-5 pb-5">
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-semibold text-white">
                Live response chain
              </p>
              <span className="rounded-full bg-cyan-400/10 px-2.5 py-1 text-[10px] font-semibold text-cyan-300">
                POLICY ACTIVE
              </span>
            </div>
            {[
              [
                "Sensitive data detected",
                "AI prompt · crm-export.csv",
                ShieldAlert,
              ],
              ["Block policy applied", "GenAI data egress", Settings2],
              ["Upload prevented", "Response recorded", CheckCircle2],
            ].map(([title, text, Icon], index) => (
              <div key={title} className="flex gap-3 pb-4 last:pb-0">
                <div className="flex flex-col items-center">
                  <span className="rounded-lg bg-cyan-400/10 p-2 text-cyan-300">
                    <Icon className="h-4 w-4" />
                  </span>
                  {index < 2 && (
                    <span className="mt-1 h-full w-px bg-cyan-400/20" />
                  )}
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{title}</p>
                  <p className="mt-1 text-xs text-slate-400">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BrowserDetectionResponse() {
  return (
    <div className="font-Poppins bg-[#050b14] text-white">
      <Head>
        <title>Prosfinity BDR | Browser Detection & Response</title>
        <meta
          name="description"
          content="Control browser data movement, secure GenAI usage, and investigate risky activity with Prosfinity Browser Detection & Response."
        />
        <meta
          property="og:title"
          content="Prosfinity BDR | Browser Detection & Response"
        />
        <meta
          property="og:description"
          content="Protect data where work happens — inside the browser."
        />
        <meta
          property="og:url"
          content="https://prosfinity.com/product/browser-detection-response"
        />
      </Head>
      <Navbar />
      <BdrNavigation />

      <main>
        <section className="relative overflow-hidden border-b border-white/10 px-5 pb-24 pt-24 md:pb-32 md:pt-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(34,211,238,0.12),transparent_34%)]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
                <Monitor className="h-4 w-4" /> Powered by a lightweight browser extension
              </div>
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-400">
                Prosfinity BDR · Browser Detection & Response
              </p>
              <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
                Protect Data Where Work Happens —{" "}
                <span className="text-cyan-400">Inside the Browser</span>
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
                Deploy our managed extension into the browser to gain real-time
                visibility and policy control over file uploads, downloads,
                clipboard activity, and GenAI interactions—without replacing
                the user&apos;s familiar browser.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Request a Demo <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="#capabilities"
                  className="rounded-lg border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:border-cyan-400/70 hover:bg-white/5"
                >
                  Explore Capabilities
                </a>
              </div>
            </div>
            <ProductVisual />
          </div>
        </section>

        <section className="px-5 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">Protection coverage</p>
              <h2 className="mt-4 text-3xl font-semibold md:text-5xl">What BDR detects—and what it can stop</h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">Each browser signal is connected to an enforceable response. Start with visibility, warn users in context, then block tested high-confidence activity without shutting down the whole website or browser.</p>
            </div>
            <div className="mt-14 grid gap-5 lg:grid-cols-2">
              {protectionCoverage.map(([Icon, label, detects, effect]) => (
                <div key={label} className="overflow-hidden rounded-2xl border border-white/10 bg-[#091321]">
                  <div className="flex items-center gap-4 border-b border-white/10 p-6">
                    <span className="rounded-xl bg-cyan-400/10 p-3 text-cyan-400"><Icon className="h-6 w-6" /></span>
                    <h3 className="text-xl font-semibold">{label}</h3>
                  </div>
                  <div className="grid gap-5 p-6 sm:grid-cols-2">
                    <div><p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Detects</p><p className="mt-2 leading-7 text-slate-300">{detects}</p></div>
                    <div><p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">Protection effect</p><p className="mt-2 leading-7 text-slate-300">{effect}</p></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.025] px-5 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">From endpoint to investigation</p>
              <h2 className="mt-4 text-3xl font-semibold md:text-5xl">More than a browser blocker</h2>
              <p className="mt-5 text-lg leading-8 text-slate-400">The managed extension, policy engine and analyst console form one evidence-driven operating loop.</p>
            </div>
            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {platformCapabilities.map(([Icon, title, text]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-[#091321] p-7">
                  <Icon className="h-7 w-7 text-cyan-400" />
                  <h3 className="mt-6 text-xl font-semibold">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-400">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                The visibility gap
              </p>
              <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                Your endpoint is protected. But what happens inside the browser?
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-400">
                The browser is now where users move files, access SaaS
                applications, and interact with GenAI. Prosfinity BDR gives
                security teams the missing action-level context.
              </p>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {risks.map((risk, i) => (
                <div
                  key={risk}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <span className="text-sm font-semibold text-cyan-400">
                    0{i + 1}
                  </span>
                  <p className="mt-8 text-lg font-medium">{risk}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="capabilities"
          className="border-y border-white/10 bg-white/[0.025] px-5 py-24"
        >
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Capabilities
              </p>
              <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                See, control, and investigate browser data movement
              </h2>
            </div>
            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {capabilities.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-[#091321] p-7 transition hover:-translate-y-1 hover:border-cyan-400/40"
                >
                  <span className="inline-flex rounded-xl bg-cyan-400/10 p-3 text-cyan-400">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-400">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Extension-first architecture
              </p>
              <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                Browser-native protection in three clear steps
              </h2>
            </div>
            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {[
                [
                  Eye,
                  "Deploy the extension",
                  "Add the lightweight Chrome extension to gain browser-level visibility.",
                ],
                [
                  Settings2,
                  "Define policies",
                  "Choose monitor, warn, or block controls for each protected data channel.",
                ],
                [
                  Activity,
                  "Detect, block & investigate",
                  "Connect detection, policy outcome, and response in a correlated timeline.",
                ],
              ].map(([Icon, title, text], i) => (
                <div
                  key={title}
                  className="relative rounded-2xl border border-white/10 p-8"
                >
                  <span className="text-xs font-semibold text-cyan-400">
                    STEP 0{i + 1}
                  </span>
                  <Icon className="mt-10 h-8 w-8 text-cyan-400" />
                  <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-400">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.025] px-5 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                One security strategy
              </p>
              <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                Two layers. Distinct protection.
              </h2>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-red-500/20 bg-red-500/[0.04] p-8">
                <Shield className="h-8 w-8 text-red-400" />
                <p className="mt-8 text-sm font-semibold uppercase tracking-wider text-red-400">
                  AIShieldNet
                </p>
                <h3 className="mt-2 text-2xl font-semibold">
                  Zero Day Endpoint Protection
                </h3>
                <p className="mt-4 leading-7 text-slate-400">
                  Protects the endpoint and process layer against zero-day
                  threats, ransomware, and malicious processes.
                </p>
                <Link
                  href="/product/AIShieldNet"
                  className="mt-7 inline-flex items-center gap-2 font-semibold text-red-400"
                >
                  Explore AIShieldNet <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/[0.05] p-8">
                <Monitor className="h-8 w-8 text-cyan-400" />
                <p className="mt-8 text-sm font-semibold uppercase tracking-wider text-cyan-400">
                  Prosfinity BDR
                </p>
                <h3 className="mt-2 text-2xl font-semibold">
                  Browser Detection & Response
                </h3>
                <p className="mt-4 leading-7 text-slate-400">
                  Protects the browser interaction layer against data leakage,
                  GenAI misuse, and risky upload, download, or clipboard
                  activity.
                </p>
                <span className="mt-7 inline-flex font-semibold text-cyan-400">
                  You are viewing Prosfinity BDR
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-28 text-center">
          <div className="mx-auto max-w-3xl">
            <Monitor className="mx-auto h-12 w-12 text-cyan-400" />
            <h2 className="mt-7 text-4xl font-semibold md:text-6xl">
              See Prosfinity BDR in action
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              See how browser-level visibility and policy control can protect
              your organization&apos;s data without disrupting the way people
              work.
            </p>
            <Link
              href="/contact"
              className="mt-9 inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-7 py-4 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Request a Demo <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <div className="bg-white text-gray-900">
        <Footer />
      </div>
    </div>
  );
}

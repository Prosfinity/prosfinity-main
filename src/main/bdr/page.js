import Head from "next/head";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Bot,
  CheckCircle2,
  Clipboard,
  Cloud,
  Download,
  Eye,
  FileSearch,
  FileUp,
  Fingerprint,
  Gauge,
  Globe2,
  KeyRound,
  Layers3,
  LockKeyhole,
  Monitor,
  Network,
  Search,
  Settings2,
  Shield,
  ShieldAlert,
  SlidersHorizontal,
  TriangleAlert,
  UserCheck,
} from "lucide-react";
import Navbar from "../home/navbar";
import Footer from "../home/footer";
import BdrNavigation from "./navigation";

const pages = {
  "why-bdr": {
    eyebrow: "Why Browser Detection & Response",
    title: "Close the security gap where modern work actually happens",
    intro:
      "SaaS, cloud storage, webmail and GenAI have moved critical data workflows into the browser. Prosfinity BDR adds the action-level context and control that endpoint and network tools cannot see on their own.",
    stats: [
      ["Browser-native", "Visibility at the point of action"],
      ["Real time", "Policy decisions before data leaves"],
      ["One view", "Events, users and response evidence"],
    ],
    cards: [
      [
        Eye,
        "See the user action",
        "Understand the destination, file, channel, user and policy context behind uploads, downloads and clipboard activity.",
      ],
      [
        TriangleAlert,
        "Reduce blind spots",
        "Inspect browser actions that can bypass network controls through encrypted sessions, unmanaged SaaS and personal accounts.",
      ],
      [
        SlidersHorizontal,
        "Control without overblocking",
        "Start in monitor mode, introduce contextual warnings, then block only validated high-risk behavior.",
      ],
      [
        FileSearch,
        "Investigate with evidence",
        "Give analysts a clear timeline of what happened, which rule matched and which response was applied.",
      ],
      [
        Bot,
        "Adopt GenAI safely",
        "Allow approved AI workflows while preventing sensitive prompts, pasted content and file attachments from reaching unapproved tools.",
      ],
      [
        UserCheck,
        "Keep work productive",
        "Apply controls by user, group, website, data channel and risk so normal browser work can continue.",
      ],
    ],
    detailTitle: "Why endpoint and network controls are not enough",
    details: [
      "TLS encryption can hide the content and intent of browser activity from network inspection.",
      "Endpoint tools can see files and processes, but often miss the web destination and in-page user action.",
      "Legacy web filtering can allow or deny a site, but cannot govern individual uploads, prompts or paste actions.",
      "BDR connects browser context with policy and response at the exact moment data moves.",
    ],
  },
  features: {
    eyebrow: "BDR Capabilities",
    title: "Granular browser security controls from one platform",
    intro:
      "Discover the visibility, policy, response and investigation capabilities designed to protect data across everyday browser workflows.",
    stats: [
      ["4 channels", "Upload, download, clipboard and GenAI"],
      ["3 modes", "Monitor, warn and block"],
      ["Centralized", "Policy and investigation console"],
    ],
    cards: [
      [
        FileUp,
        "Upload protection",
        "Detect sensitive files moving into web apps, webmail, cloud drives, transfer services and unapproved destinations.",
      ],
      [
        Download,
        "Download governance",
        "Monitor or stop risky downloads by destination, file context, user group and policy outcome.",
      ],
      [
        Clipboard,
        "Clipboard control",
        "Govern sensitive copy and paste actions without disabling the clipboard across the entire endpoint.",
      ],
      [
        Bot,
        "GenAI data protection",
        "Control prompts, pasted text and file attachments submitted to public or unapproved AI services.",
      ],
      [
        Settings2,
        "Contextual policy engine",
        "Create targeted policies using action, destination, user, group, channel and risk context.",
      ],
      [
        ShieldAlert,
        "Inline response",
        "Monitor silently, explain risk with a user warning, or block the action before data is transferred.",
      ],
      [
        Search,
        "Investigation timeline",
        "Correlate the triggering action, matched policy, response and related activity for faster triage.",
      ],
      [
        Gauge,
        "Operational dashboards",
        "Track policy hits, protected browsers, high-risk destinations and response trends across the organization.",
      ],
      [
        Fingerprint,
        "Audit evidence",
        "Retain consistent policy-decision evidence to support reviews, incident handling and compliance workflows.",
      ],
    ],
    detailTitle: "Policy that matches the way your organization works",
    details: [
      "Create different controls for departments, roles, contractors and high-risk users.",
      "Allow trusted business applications while applying stricter controls to personal and unknown services.",
      "Use warning mode to educate users and measure impact before enforcement.",
      "Review policy outcomes centrally and refine rules using real activity evidence.",
    ],
  },
  "use-cases": {
    eyebrow: "Use Cases",
    title: "Protect high-risk browser workflows without stopping the business",
    intro:
      "Apply BDR to the browser activities that create the greatest data exposure—from public AI tools and personal cloud storage to webmail and file-transfer sites.",
    stats: [
      ["GenAI", "Safe adoption with prompt controls"],
      ["SaaS", "Data movement visibility"],
      ["Insiders", "Context for risky actions"],
    ],
    cards: [
      [
        Bot,
        "Secure GenAI adoption",
        "Prevent confidential text, source code and files from being submitted to unapproved AI services while permitting sanctioned tools.",
      ],
      [
        Cloud,
        "Control shadow SaaS",
        "Identify and govern file movement to personal cloud drives, collaboration tools and unsanctioned web applications.",
      ],
      [
        Clipboard,
        "Protect copied data",
        "Stop sensitive CRM, finance, customer or source-code content from being pasted into risky destinations.",
      ],
      [
        FileUp,
        "Prevent web data exfiltration",
        "Detect and block uploads to personal webmail, transfer sites, forms and external portals.",
      ],
      [
        Download,
        "Govern browser downloads",
        "Reduce exposure from suspicious or policy-restricted downloads and preserve the action context for review.",
      ],
      [
        UserCheck,
        "Investigate insider risk",
        "Bring together user, action, destination and policy evidence to distinguish mistakes from repeated risky behavior.",
      ],
    ],
    detailTitle: "Built for security and compliance teams",
    details: [
      "Protect intellectual property during cloud and GenAI adoption.",
      "Enforce acceptable-use and data-handling policy inside browser workflows.",
      "Provide incident responders with destination-aware browser evidence.",
      "Support phased rollouts with measurable monitor, warn and block outcomes.",
    ],
  },
  "how-it-works": {
    eyebrow: "Architecture & Workflow",
    title: "Detection and response at the point of browser action",
    intro:
      "A lightweight browser extension observes protected data channels, evaluates each action against centrally managed policy and records the decision for investigation.",
    stats: [
      ["1", "Lightweight browser extension"],
      ["3", "Monitor, warn or block response"],
      ["End-to-end", "Action-to-investigation workflow"],
    ],
    cards: [
      [
        Monitor,
        "1. Observe",
        "The extension identifies supported upload, download, clipboard and GenAI actions with browser-native context.",
      ],
      [
        FileSearch,
        "2. Enrich",
        "BDR associates the event with its user, destination, data channel and relevant file or action metadata.",
      ],
      [
        Settings2,
        "3. Evaluate",
        "The policy engine checks the action against centrally defined controls for the user, group and destination.",
      ],
      [
        ShieldAlert,
        "4. Respond",
        "The action is monitored, interrupted with a contextual warning, or blocked before completion.",
      ],
      [
        Activity,
        "5. Record",
        "The platform preserves the policy match and response evidence in a consistent event timeline.",
      ],
      [
        Search,
        "6. Investigate",
        "Analysts filter, correlate and review events to validate incidents and refine policy.",
      ],
    ],
    detailTitle: "Designed for controlled rollout",
    details: [
      "Deploy to a pilot group and establish a baseline in monitor mode.",
      "Validate legitimate workflows and tune trusted destinations or user groups.",
      "Add contextual warnings to guide users at the moment of risk.",
      "Enforce blocking for tested, high-confidence data movement scenarios.",
    ],
  },
  comparison: {
    eyebrow: "Security Coverage Comparison",
    title: "BDR complements endpoint, network and browser management controls",
    intro:
      "Prosfinity BDR is purpose-built for browser action visibility and inline data response. It adds context to your existing stack rather than trying to replace every security layer.",
    stats: [
      ["Browser action", "Destination-aware context"],
      ["Inline", "Response before transfer"],
      ["Complementary", "Works with endpoint security"],
    ],
    cards: [
      [
        Monitor,
        "Prosfinity BDR",
        "Sees browser data actions and applies granular monitor, warn or block responses with investigation evidence.",
      ],
      [
        Shield,
        "Endpoint protection",
        "Protects processes, files and devices from malware and endpoint threats; browser business context may be limited.",
      ],
      [
        Network,
        "Secure web gateway",
        "Filters traffic and site access at the network layer; encrypted and in-page actions can reduce context.",
      ],
      [
        Globe2,
        "Browser management",
        "Configures browser settings and extensions, but does not by itself deliver a detection and investigation workflow.",
      ],
      [
        LockKeyhole,
        "Traditional DLP",
        "Provides broad data controls, often with heavier endpoint or network deployment and less browser-native interaction context.",
      ],
      [
        Layers3,
        "BDR + AIShieldNet",
        "Combines browser data-movement controls with zero-day endpoint process protection for two distinct layers of defense.",
      ],
    ],
    detailTitle: "Choose the right layer for each risk",
    details: [
      "Use BDR for uploads, downloads, clipboard actions, GenAI prompts and browser investigation.",
      "Use AIShieldNet for malicious process behavior, ransomware and unknown endpoint threats.",
      "Keep network controls for access, traffic and perimeter policy.",
      "Combine evidence across layers to improve detection confidence and incident response.",
    ],
  },
  deployment: {
    eyebrow: "Deployment & Operations",
    title: "Roll out browser protection with measurable, low-friction controls",
    intro:
      "Deploy the browser extension through your existing management process, assign policies centrally and move from visibility to enforcement at a pace that fits your organization.",
    stats: [
      ["Pilot first", "Baseline before enforcement"],
      ["Policy-led", "Controls by group and use case"],
      ["Continuous", "Review, tune and expand"],
    ],
    cards: [
      [
        Download,
        "Extension deployment",
        "Distribute the supported browser extension through the deployment and browser-management tools your organization already uses.",
      ],
      [
        KeyRound,
        "Tenant configuration",
        "Establish administrator access, protected groups, destinations and initial browser data channels.",
      ],
      [
        Eye,
        "Monitor-mode baseline",
        "Measure real activity without disruption to understand workflows, destinations and likely policy impact.",
      ],
      [
        SlidersHorizontal,
        "Policy tuning",
        "Create allow rules, group-level controls and exceptions based on validated business requirements.",
      ],
      [
        ShieldAlert,
        "Progressive enforcement",
        "Introduce warnings first, then block tested high-risk scenarios with clear user feedback.",
      ],
      [
        Gauge,
        "Operational review",
        "Track coverage, alerts and policy outcomes; refine controls as applications and work patterns change.",
      ],
    ],
    detailTitle: "A practical path to production",
    details: [
      "Define scope, owners, data channels and success measures before the pilot.",
      "Select representative users across security-sensitive and everyday workflows.",
      "Review monitor-mode findings with business and security stakeholders.",
      "Document exceptions, activate enforcement and expand coverage in controlled stages.",
    ],
  },
};

function ConsoleVisual({ pageKey }) {
  const rows = {
    "why-bdr": [
      ["Unapproved GenAI", "Prompt paste", "Warned"],
      ["Personal Drive", "File upload", "Blocked"],
      ["Webmail", "Attachment", "Monitored"],
    ],
    features: [
      ["finance-export.csv", "Upload", "Blocked"],
      ["Customer records", "Clipboard", "Warned"],
      ["AI assistant", "Prompt", "Monitored"],
    ],
    "use-cases": [
      ["Public AI", "Source code paste", "Blocked"],
      ["Transfer site", "Upload", "Blocked"],
      ["Approved SaaS", "Upload", "Allowed"],
    ],
    "how-it-works": [
      ["Browser action", "Context enriched", "Detected"],
      ["Policy engine", "Rule BDR-104", "Matched"],
      ["Inline response", "Data transfer", "Prevented"],
    ],
    comparison: [
      ["Browser action", "BDR", "Full context"],
      ["Endpoint process", "AIShieldNet", "Protected"],
      ["Web access", "Gateway", "Filtered"],
    ],
    deployment: [
      ["Pilot group", "124 browsers", "Healthy"],
      ["Warn policy", "18 events", "Review"],
      ["Block policy", "7 events", "Enforced"],
    ],
  }[pageKey];
  return (
    <div className="overflow-hidden rounded-2xl border border-cyan-400/20 bg-[#0b1628] shadow-2xl shadow-cyan-950/40">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <span className="flex items-center gap-2 text-sm font-semibold">
          <Monitor className="h-4 w-4 text-cyan-400" /> Prosfinity BDR Console
        </span>
        <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
          Live policy
        </span>
      </div>
      <div className="grid grid-cols-3 gap-3 p-5">
        {["Visibility", "Policy", "Response"].map((item, i) => (
          <div key={item} className="rounded-lg bg-white/[0.04] p-3">
            <p className="text-[11px] text-slate-500">{item}</p>
            <p className="mt-2 text-sm font-semibold text-white">
              {["Active", "Enforced", "Recorded"][i]}
            </p>
          </div>
        ))}
      </div>
      <div className="mx-5 mb-5 overflow-hidden rounded-xl border border-white/10">
        {rows.map(([a, b, c], i) => (
          <div
            key={a}
            className={`grid grid-cols-[1.3fr_1fr_auto] items-center gap-3 px-4 py-4 text-xs ${i ? "border-t border-white/10" : ""}`}
          >
            <span className="font-medium text-white">{a}</span>
            <span className="text-slate-400">{b}</span>
            <span className="rounded-full bg-cyan-400/10 px-2 py-1 text-cyan-300">
              {c}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ExtensionCore() {
  return (
    <section className="border-b border-cyan-400/20 bg-cyan-400/[0.045] px-5 py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[.85fr_1.15fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
            <Globe2 className="h-4 w-4" /> Browser extension powered
          </span>
          <h2 className="mt-5 text-3xl font-semibold md:text-5xl">Protection lives inside the browser—not behind the traffic</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">Prosfinity BDR uses a lightweight managed browser extension to see the destination and user action at the moment it happens. That gives security teams context which endpoint agents and network-only tools can miss.</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            ["01", "Deploy", "Push the extension through your existing browser or endpoint management workflow."],
            ["02", "Protect inline", "Evaluate uploads, downloads, clipboard and GenAI interactions before completion."],
            ["03", "Manage centrally", "Publish policy and review response evidence from the BDR console."],
          ].map(([n, title, text]) => (
            <div key={n} className="rounded-2xl border border-white/10 bg-[#091321] p-6">
              <p className="text-xs font-semibold text-cyan-400">{n}</p>
              <h3 className="mt-7 text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PageSpecificContent({ pageKey, page }) {
  if (pageKey === "comparison") {
    const rows = [
      ["In-page upload / paste context", "Strong", "Limited", "Limited"],
      ["Warn before data transfer", "Yes", "Rare", "Site-level"],
      ["GenAI prompt governance", "Native", "Limited", "Limited"],
      ["Malware / process protection", "Complementary", "Strong", "No"],
      ["Browser event investigation", "Action-level", "Process-level", "Traffic-level"],
    ];
    return (
      <section className="px-5 py-24"><div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[.2em] text-cyan-400">Side-by-side coverage</p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold md:text-5xl">The missing control point in a layered security stack</h2>
        <div className="mt-12 overflow-x-auto rounded-2xl border border-white/10">
          <div className="min-w-[760px]">
            <div className="grid grid-cols-[1.5fr_repeat(3,1fr)] bg-white/[.06] p-5 text-sm font-semibold"><span>Capability</span><span className="text-cyan-300">Prosfinity BDR</span><span>Endpoint / EDR</span><span>SWG</span></div>
            {rows.map(row => <div key={row[0]} className="grid grid-cols-[1.5fr_repeat(3,1fr)] border-t border-white/10 p-5 text-sm text-slate-300">{row.map((cell, i) => <span key={cell} className={i === 1 ? "font-semibold text-cyan-300" : ""}>{cell}</span>)}</div>)}
          </div>
        </div>
      </div></section>
    );
  }

  const styles = {
    features: "md:grid-cols-2 lg:grid-cols-4 [&>*:first-child]:lg:col-span-2 [&>*:nth-child(6)]:lg:col-span-2",
    "use-cases": "md:grid-cols-2 [&>*:nth-child(3n+1)]:md:col-span-2",
    "how-it-works": "md:grid-cols-2 lg:grid-cols-3",
    deployment: "md:grid-cols-2 lg:grid-cols-3",
    "why-bdr": "md:grid-cols-2",
  }[pageKey];
  const headings = {
    features: ["Extension controls", "Control every critical browser data channel"],
    "use-cases": ["Real-world workflows", "Different risks need different browser decisions"],
    "how-it-works": ["Extension-to-console workflow", "One decision path from browser action to evidence"],
    deployment: ["Rollout blueprint", "From extension pilot to controlled enforcement"],
    "why-bdr": ["Why now", "The browser has become the new data perimeter"],
  }[pageKey];
  return (
    <section className="px-5 py-24"><div className="mx-auto max-w-7xl">
      <p className="text-sm font-semibold uppercase tracking-[.2em] text-cyan-400">{headings[0]}</p>
      <h2 className="mt-4 max-w-4xl text-3xl font-semibold md:text-5xl">{headings[1]}</h2>
      <div className={`mt-14 grid gap-5 ${styles}`}>
        {page.cards.map(([Icon, title, text], i) => (
          <div key={title} className={`rounded-2xl border p-7 ${pageKey === "how-it-works" ? "border-cyan-400/25 bg-gradient-to-br from-cyan-400/[.08] to-transparent" : pageKey === "use-cases" ? "border-white/10 bg-white/[.035]" : "border-white/10 bg-[#091321]"}`}>
            <div className="flex items-start justify-between"><span className="inline-flex rounded-xl bg-cyan-400/10 p-3 text-cyan-400"><Icon className="h-6 w-6" /></span><span className="text-xs font-semibold text-slate-600">{String(i + 1).padStart(2, "0")}</span></div>
            <h3 className="mt-7 text-xl font-semibold">{title}</h3><p className="mt-3 leading-7 text-slate-400">{text}</p>
          </div>
        ))}
      </div>
    </div></section>
  );
}

export default function BdrPage({ pageKey }) {
  const page = pages[pageKey];
  return (
    <div className="font-Poppins min-h-screen bg-[#050b14] text-white">
      <Head>
        <title>{page.eyebrow} | Prosfinity BDR</title>
        <meta name="description" content={page.intro} />
      </Head>
      <Navbar />
      <BdrNavigation />
      <main>
        <section className="relative overflow-hidden border-b border-white/10 px-5 py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(34,211,238,0.13),transparent_35%)]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-400">
                {page.eyebrow}
              </p>
              <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-6xl">
                {page.title}
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                {page.intro}
              </p>
              <div className="mt-9 flex gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-6 py-3.5 font-semibold text-slate-950 hover:bg-cyan-300"
                >
                  Request a Demo <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/product/browser-detection-response/features"
                  className="rounded-lg border border-white/20 px-6 py-3.5 font-semibold hover:bg-white/5"
                >
                  Explore Features
                </Link>
              </div>
            </div>
            <ConsoleVisual pageKey={pageKey} />
          </div>
        </section>
        <ExtensionCore />
        <section className="border-b border-white/10 px-5 py-10">
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
            {page.stats.map(([value, label]) => (
              <div
                key={value}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-5"
              >
                <p className="text-2xl font-semibold text-cyan-400">{value}</p>
                <p className="mt-1 text-sm text-slate-400">{label}</p>
              </div>
            ))}
          </div>
        </section>
        <PageSpecificContent pageKey={pageKey} page={page} />
        <section className="border-y border-white/10 bg-white/[0.025] px-5 py-24">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Operational value
              </p>
              <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                {page.detailTitle}
              </h2>
            </div>
            <div className="space-y-4">
              {page.details.map((item, i) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-xl border border-white/10 bg-[#091321] p-5"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
                  <div>
                    <p className="text-xs font-semibold text-cyan-400">
                      0{i + 1}
                    </p>
                    <p className="mt-1 leading-7 text-slate-300">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="px-5 py-24 text-center">
          <Monitor className="mx-auto h-10 w-10 text-cyan-400" />
          <h2 className="mt-6 text-3xl font-semibold md:text-5xl">
            See Prosfinity BDR in your environment
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            Walk through your browser data risks, policy requirements and
            deployment approach with our team.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-7 py-4 font-semibold text-slate-950 hover:bg-cyan-300"
          >
            Request a Demo <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </main>
      <div className="bg-white text-gray-900">
        <Footer />
      </div>
    </div>
  );
}
